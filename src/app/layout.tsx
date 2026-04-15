import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIST Ai - AI 产业化全周期增长与资本服务平台",
  description:
    "MIST Ai 专注于 AI 产业化的全周期增长与资本服务平台。链接技术创业者、产业资本与行业场景，构建从 0 到 N 闭环。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
