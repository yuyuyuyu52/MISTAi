# CI/CD GitHub Actions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fully automated CI/CD pipeline that deploys the MIST Ai Vite site to Alibaba Cloud ECS on merge, provides per-PR preview deployments, and supports one-click rollback.

**Architecture:** GitHub Actions builds the Vite app, then deploys via SSH/rsync to an ECS server running nginx. Production uses a symlink-based release strategy (5 versions retained). PR previews are served on dynamic ports (9000+PR#) with auto-generated nginx configs.

**Tech Stack:** GitHub Actions, nginx, rsync, sshpass, Bash

---

## File Structure

```
.github/
└── workflows/
    ├── ci.yml              # lint + build on every push/PR
    ├── deploy.yml          # production deploy on push to main
    ├── preview.yml         # PR preview deploy/cleanup
    └── rollback.yml        # manual rollback via workflow_dispatch
```

No application code changes required. All work is workflow files + server configuration via SSH.

---

### Task 1: Fix Local Git and Push to GitHub

The local `.git` is broken (missing `refs/` directory — AI Studio artifact). We need a clean repo pushed to the existing remote.

**Files:**
- Modify: `.git/` (reinitialize)
- No application files changed

- [ ] **Step 1: Reinitialize git repo**

Back up the broken `.git`, reinit, and create an initial commit with all tracked files:

```bash
cd /Users/Zhuanz/Downloads/mist-ai-_-ai-产业化全周期增长与资本服务平台
mv .git .git-broken
git init
git add -A
git commit -m "chore: initial commit — Vite + React MIST Ai site"
```

- [ ] **Step 2: Add remote and force-push to main**

The remote has a stale Copilot-generated Next.js version. Force-push to replace it:

```bash
git remote add origin https://github.com/yuyuyuyu52/MISTAi.git
git branch -M main
git push --force origin main
```

- [ ] **Step 3: Verify remote matches local**

```bash
gh api repos/yuyuyuyu52/MISTAi/commits?per_page=1 --jq '.[0].commit.message'
```

Expected: `chore: initial commit — Vite + React MIST Ai site`

- [ ] **Step 4: Clean up broken git backup**

```bash
rm -rf .git-broken
```

---

### Task 2: Bootstrap ECS Server

Install nginx, create the directory structure, and configure nginx for production serving.

**Files:**
- Remote: `/etc/nginx/conf.d/mistai.conf` (create)
- Remote: `/var/www/mistai/` directory tree (create)

All commands run over SSH to `root@8.136.148.127`.

- [ ] **Step 1: Install nginx and rsync**

```bash
sshpass -p 'Mistai-01' ssh -o StrictHostKeyChecking=no root@8.136.148.127 \
  "apt-get update && apt-get install -y nginx rsync"
```

Expected: packages install successfully, nginx starts automatically.

- [ ] **Step 2: Create directory structure**

```bash
sshpass -p 'Mistai-01' ssh root@8.136.148.127 \
  "mkdir -p /var/www/mistai/{releases,previews} && ls -la /var/www/mistai/"
```

Expected: `releases/` and `previews/` directories exist.

- [ ] **Step 3: Create placeholder index for production**

So nginx doesn't 404 before the first real deploy:

```bash
sshpass -p 'Mistai-01' ssh root@8.136.148.127 'bash -s' << 'SCRIPT'
mkdir -p /var/www/mistai/releases/initial
echo '<!DOCTYPE html><html><body><h1>MIST Ai — deploying soon</h1></body></html>' > /var/www/mistai/releases/initial/index.html
ln -sfn /var/www/mistai/releases/initial /var/www/mistai/production
ls -la /var/www/mistai/production
SCRIPT
```

Expected: `production -> /var/www/mistai/releases/initial`

- [ ] **Step 4: Write nginx production config**

```bash
sshpass -p 'Mistai-01' ssh root@8.136.148.127 'bash -s' << 'CONF'
cat > /etc/nginx/conf.d/mistai.conf << 'EOF'
server {
    listen 80;
    server_name _;
    root /var/www/mistai/production;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF
CONF
```

- [ ] **Step 5: Remove default nginx site and reload**

```bash
sshpass -p 'Mistai-01' ssh root@8.136.148.127 \
  "rm -f /etc/nginx/sites-enabled/default && nginx -t && systemctl reload nginx"
```

Expected: `nginx: configuration file /etc/nginx/nginx.conf test is successful`

- [ ] **Step 6: Verify nginx is serving on port 80**

```bash
sshpass -p 'Mistai-01' ssh root@8.136.148.127 "curl -s http://localhost | head -1"
```

Expected: `<!DOCTYPE html><html><body><h1>MIST Ai — deploying soon</h1></body></html>`

---

### Task 3: Set GitHub Secrets

Store server credentials as repository secrets for use in workflows.

- [ ] **Step 1: Set all three secrets**

```bash
gh secret set SERVER_HOST -R yuyuyuyu52/MISTAi --body "8.136.148.127"
gh secret set SERVER_USER -R yuyuyuyu52/MISTAi --body "root"
gh secret set SERVER_PASSWORD -R yuyuyuyu52/MISTAi --body "Mistai-01"
```

- [ ] **Step 2: Verify secrets exist**

```bash
gh secret list -R yuyuyuyu52/MISTAi
```

Expected: `SERVER_HOST`, `SERVER_USER`, `SERVER_PASSWORD` all listed.

---

### Task 4: Create CI Workflow

**Files:**
- Create: `.github/workflows/ci.yml`

- [ ] **Step 1: Create the CI workflow file**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run lint
      - run: npm run build

      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
          retention-days: 3
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: add CI workflow — lint and build on push/PR"
```

---

### Task 5: Create Production Deploy Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create the deploy workflow file**

```yaml
name: Deploy Production

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run lint
      - run: npm run build

      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist/

      - name: Deploy to server
        env:
          SERVER_HOST: ${{ secrets.SERVER_HOST }}
          SERVER_USER: ${{ secrets.SERVER_USER }}
          SERVER_PASSWORD: ${{ secrets.SERVER_PASSWORD }}
        run: |
          sudo apt-get update && sudo apt-get install -y sshpass

          RELEASE_DIR="$(date +%Y-%m-%d)-${GITHUB_SHA::7}"

          sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" \
            "mkdir -p /var/www/mistai/releases/$RELEASE_DIR"

          sshpass -p "$SERVER_PASSWORD" rsync -avz --delete \
            -e "ssh -o StrictHostKeyChecking=no" \
            dist/ "$SERVER_USER@$SERVER_HOST:/var/www/mistai/releases/$RELEASE_DIR/"

          sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" bash -s << REMOTE
            ln -sfn /var/www/mistai/releases/$RELEASE_DIR /var/www/mistai/production
            cd /var/www/mistai/releases
            ls -1dt */ | tail -n +6 | xargs -r rm -rf
            nginx -t && systemctl reload nginx
          REMOTE
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add production deploy workflow — rsync + symlink on merge to main"
```

---

### Task 6: Create PR Preview Workflow

**Files:**
- Create: `.github/workflows/preview.yml`

- [ ] **Step 1: Create the preview workflow file**

```yaml
name: PR Preview

on:
  pull_request:
    types: [opened, synchronize, reopened, closed]

jobs:
  deploy-preview:
    if: github.event.action != 'closed'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run build

      - name: Deploy preview
        env:
          SERVER_HOST: ${{ secrets.SERVER_HOST }}
          SERVER_USER: ${{ secrets.SERVER_USER }}
          SERVER_PASSWORD: ${{ secrets.SERVER_PASSWORD }}
          PR_NUMBER: ${{ github.event.pull_request.number }}
        run: |
          sudo apt-get update && sudo apt-get install -y sshpass
          PORT=$((9000 + PR_NUMBER))

          sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" \
            "mkdir -p /var/www/mistai/previews/pr-$PR_NUMBER"

          sshpass -p "$SERVER_PASSWORD" rsync -avz --delete \
            -e "ssh -o StrictHostKeyChecking=no" \
            dist/ "$SERVER_USER@$SERVER_HOST:/var/www/mistai/previews/pr-$PR_NUMBER/"

          sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" bash -s << REMOTE
            cat > /etc/nginx/conf.d/pr-$PR_NUMBER.conf << NGINX
          server {
              listen $PORT;
              server_name _;
              root /var/www/mistai/previews/pr-$PR_NUMBER;
              index index.html;
              location / {
                  try_files \\\$uri \\\$uri/ /index.html;
              }
          }
          NGINX
            nginx -t && systemctl reload nginx
          REMOTE

      - name: Comment preview URL
        uses: actions/github-script@v7
        with:
          script: |
            const port = 9000 + context.issue.number;
            const url = `http://${{ secrets.SERVER_HOST }}:${port}`;
            const body = `🔍 **Preview deployed!**\n\n${url}\n\n_Updated at ${new Date().toISOString()}_`;

            const { data: comments } = await github.rest.issues.listComments({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
            });
            const existing = comments.find(c => c.body.includes('Preview deployed!'));

            if (existing) {
              await github.rest.issues.updateComment({
                owner: context.repo.owner,
                repo: context.repo.repo,
                comment_id: existing.id,
                body,
              });
            } else {
              await github.rest.issues.createComment({
                owner: context.repo.owner,
                repo: context.repo.repo,
                issue_number: context.issue.number,
                body,
              });
            }

  cleanup-preview:
    if: github.event.action == 'closed'
    runs-on: ubuntu-latest
    steps:
      - name: Remove preview
        env:
          SERVER_HOST: ${{ secrets.SERVER_HOST }}
          SERVER_USER: ${{ secrets.SERVER_USER }}
          SERVER_PASSWORD: ${{ secrets.SERVER_PASSWORD }}
          PR_NUMBER: ${{ github.event.pull_request.number }}
        run: |
          sudo apt-get install -y sshpass

          sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" bash -s << REMOTE
            rm -rf /var/www/mistai/previews/pr-$PR_NUMBER
            rm -f /etc/nginx/conf.d/pr-$PR_NUMBER.conf
            nginx -t && systemctl reload nginx
          REMOTE
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/preview.yml
git commit -m "ci: add PR preview workflow — deploy to port 9000+PR#, cleanup on close"
```

---

### Task 7: Create Rollback Workflow

**Files:**
- Create: `.github/workflows/rollback.yml`

- [ ] **Step 1: Create the rollback workflow file**

```yaml
name: Rollback

on:
  workflow_dispatch:
    inputs:
      release:
        description: 'Release directory name (e.g. "2026-04-27-abc1234") or "previous" for the last version'
        required: true
        default: previous

jobs:
  rollback:
    runs-on: ubuntu-latest
    steps:
      - name: Rollback production
        env:
          SERVER_HOST: ${{ secrets.SERVER_HOST }}
          SERVER_USER: ${{ secrets.SERVER_USER }}
          SERVER_PASSWORD: ${{ secrets.SERVER_PASSWORD }}
          RELEASE: ${{ github.event.inputs.release }}
        run: |
          sudo apt-get update && sudo apt-get install -y sshpass

          sshpass -p "$SERVER_PASSWORD" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" bash -s "$RELEASE" << 'REMOTE'
            set -e
            RELEASE_INPUT="$1"

            if [ "$RELEASE_INPUT" = "previous" ]; then
              CURRENT=$(readlink /var/www/mistai/production | xargs basename)
              TARGET=$(ls -1dt /var/www/mistai/releases/*/ | grep -v "$CURRENT" | head -1)
              if [ -z "$TARGET" ]; then
                echo "ERROR: No previous release found to roll back to"
                exit 1
              fi
            else
              TARGET="/var/www/mistai/releases/$RELEASE_INPUT"
              if [ ! -d "$TARGET" ]; then
                echo "ERROR: Release directory $TARGET does not exist"
                echo "Available releases:"
                ls -1dt /var/www/mistai/releases/*/
                exit 1
              fi
            fi

            ln -sfn "$TARGET" /var/www/mistai/production
            nginx -t && systemctl reload nginx
            echo "Rolled back to: $(readlink /var/www/mistai/production)"
          REMOTE

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/rollback.yml
git commit -m "ci: add manual rollback workflow — switch symlink via workflow_dispatch"
```

---

### Task 8: Push All Workflows and Verify Pipeline

- [ ] **Step 1: Push to main**

```bash
git push origin main
```

- [ ] **Step 2: Verify CI workflow ran**

```bash
gh run list -R yuyuyuyu52/MISTAi --limit 3
```

Expected: A `CI` run and a `Deploy Production` run both triggered by the push.

- [ ] **Step 3: Wait for deploy to complete and verify site is live**

```bash
gh run watch -R yuyuyuyu52/MISTAi  # watch the deploy run
curl -s http://8.136.148.127 | head -5
```

Expected: The Vite-built site HTML is served on port 80.

- [ ] **Step 4: Verify release directory was created on server**

```bash
sshpass -p 'Mistai-01' ssh root@8.136.148.127 \
  "ls -la /var/www/mistai/releases/ && readlink /var/www/mistai/production"
```

Expected: A `2026-04-27-XXXXXXX/` directory exists, `production` symlink points to it.

---

### Task 9: Test PR Preview (End-to-End)

- [ ] **Step 1: Create a test branch and PR**

```bash
git checkout -b test/preview-check
echo "<!-- preview test -->" >> index.html
git add index.html
git commit -m "test: verify PR preview deployment"
git push -u origin test/preview-check
gh pr create --title "Test: PR preview" --body "Testing preview deployment pipeline"
```

- [ ] **Step 2: Wait for preview workflow and check the comment**

```bash
gh run list -R yuyuyuyu52/MISTAi --limit 3  # should show PR Preview run
# After it completes:
gh pr view --comments  # should have a preview URL comment
```

- [ ] **Step 3: Verify preview is accessible**

```bash
PR_NUM=$(gh pr view --json number --jq .number)
curl -s "http://8.136.148.127:$((9000 + PR_NUM))" | head -5
```

Expected: Site HTML served on the preview port.

- [ ] **Step 4: Close PR and verify cleanup**

```bash
gh pr close
# After cleanup workflow runs:
sshpass -p 'Mistai-01' ssh root@8.136.148.127 \
  "ls /var/www/mistai/previews/ && ls /etc/nginx/conf.d/"
```

Expected: `pr-{N}/` directory and `pr-{N}.conf` are gone.

- [ ] **Step 5: Clean up test branch**

```bash
git checkout main
git branch -d test/preview-check
git push origin --delete test/preview-check
```

---

## ECS Firewall Note

Alibaba Cloud ECS uses **Security Groups** for port access, not just `ufw`. After Task 2, verify that ports 80 and 9000-9099 are open in the Alibaba Cloud console Security Group rules. If they're not open, the deploy will succeed but the site won't be reachable externally. The SSH setup tasks can check this but cannot modify Security Groups via CLI — the user may need to open ports in the Alibaba Cloud console.
