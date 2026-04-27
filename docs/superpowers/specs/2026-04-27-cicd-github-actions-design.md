# CI/CD with GitHub Actions — Design Spec

## Overview

Automated CI/CD pipeline for the MIST Ai marketing site (Vite + React + TypeScript) deploying to Alibaba Cloud ECS via SSH. Supports PR preview deployments, production auto-deploy on merge, and one-click rollback.

## Target Environment

- **Server:** Alibaba Cloud ECS, Debian 12, 1.7G RAM, 40G disk (clean — no nginx/node/docker installed)
- **Repo:** `github.com/yuyuyuyu52/MISTAi` (has existing content that will be force-pushed over)
- **Access:** IP only (`8.136.148.127`), no domain for now
- **Auth:** Password-based SSH (credentials stored in GitHub Secrets)

## Server Directory Layout

```
/var/www/mistai/
├── production → releases/<latest>/   (symlink)
├── releases/
│   ├── 2026-04-27-abc1234/           (date + commit short hash)
│   └── ...                            (keep 5, prune older)
└── previews/
    ├── pr-3/
    └── pr-12/
```

## Nginx Configuration

- **Port 80:** Production — serves `/var/www/mistai/production` with SPA fallback (`try_files $uri /index.html`)
- **Port 9000+N:** PR preview — each PR gets port `9000 + PR_number`. Config files generated dynamically at `/etc/nginx/conf.d/pr-{N}.conf`, removed on PR close.

## GitHub Actions Workflows

### 1. `ci.yml` — CI (every push & PR)

Triggers: `push` to any branch, `pull_request` to `main`.
Steps: checkout → setup node 20 → `npm ci` → `npm run lint` → `npm run build` → upload `dist/` as artifact.

### 2. `deploy.yml` — Production Deploy (merge to main)

Triggers: `push` to `main` (after merge).
Steps:
1. Run CI (build)
2. SSH to server: create `/var/www/mistai/releases/{date}-{sha}/`
3. rsync `dist/` contents to the new release directory
4. Update `production` symlink to point to new release
5. Prune releases older than the 5 most recent
6. Reload nginx

### 3. `preview.yml` — PR Preview (PR open/sync/close)

Triggers: `pull_request` types `[opened, synchronize, reopened, closed]`.

On open/sync/reopen:
1. Build the PR
2. rsync to `/var/www/mistai/previews/pr-{N}/`
3. Generate nginx conf at `/etc/nginx/conf.d/pr-{N}.conf` listening on port `9000+N`
4. Reload nginx
5. Comment on PR with preview URL `http://8.136.148.127:{port}`

On close:
1. Remove `/var/www/mistai/previews/pr-{N}/`
2. Remove `/etc/nginx/conf.d/pr-{N}.conf`
3. Reload nginx

### 4. `rollback.yml` — Manual Rollback

Triggers: `workflow_dispatch` with input `release` (release directory name or "previous").
Steps: SSH to server → update `production` symlink → reload nginx.

## GitHub Secrets Required

| Secret | Purpose |
|---|---|
| `SERVER_HOST` | `8.136.148.127` |
| `SERVER_USER` | `root` |
| `SERVER_PASSWORD` | SSH password |

## Server Bootstrap (One-Time)

Run via SSH before first deploy:
1. `apt update && apt install -y nginx rsync`
2. Create `/var/www/mistai/{releases,previews}` directories
3. Configure base nginx (remove default site, add production server block)
4. Open firewall ports: 80, 9000-9099 (via `ufw` or Alibaba Security Group)

## Rollback Mechanism

- Each deploy creates a timestamped release directory
- `production` is always a symlink — rollback = repoint symlink + nginx reload
- Manual trigger via GitHub Actions `workflow_dispatch` UI
- Keep 5 releases; auto-prune older ones

## What's NOT in Scope

- HTTPS/SSL (no domain yet)
- Docker
- Server monitoring/alerting
- CDN
