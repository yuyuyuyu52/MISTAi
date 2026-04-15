import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-accent-light">MIST</span>{" "}
                <span className="text-foreground">Ai</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-foreground/60">
              AI 产业化全周期增长与资本服务平台
              <br />
              构建从 0 到 N 闭环
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">快速链接</h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "#about", label: "关于我们" },
                { href: "#services", label: "服务体系" },
                { href: "#ecosystem", label: "生态网络" },
                { href: "#contact", label: "联系我们" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">联系方式</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/60">
              <li>邮箱：contact@mistai.com</li>
              <li>微信公众号：MIST Ai</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} MIST Ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
