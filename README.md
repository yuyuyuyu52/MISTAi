# MIST Ai

AI 产业化全周期增长与资本服务平台。

## 简介

MIST Ai 专注于 AI 产业化的全周期增长与资本服务。通过线上线下活动与社媒矩阵，链接技术创业者、产业资本与行业场景，构建从早期投资与孵化，到 GTM 增长（国内及出海），再到成长期融资对接，以及传统行业落地的从 0 到 N 闭环。

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [React](https://react.dev/) - UI 库
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 项目结构

```
src/
├── app/
│   ├── globals.css    # 全局样式
│   ├── layout.tsx     # 根布局
│   └── page.tsx       # 首页
└── components/
    ├── Header.tsx          # 导航栏
    ├── HeroSection.tsx     # 首屏
    ├── AboutSection.tsx    # 关于我们
    ├── ServicesSection.tsx  # 服务体系
    ├── EcosystemSection.tsx # 生态网络
    ├── ContactSection.tsx   # 联系我们
    └── Footer.tsx          # 页脚
```

## 部署

推荐使用 [Vercel](https://vercel.com/) 部署，详见 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。
