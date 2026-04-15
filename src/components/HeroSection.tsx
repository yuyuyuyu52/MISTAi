export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="animate-fade-in-up">
          <p className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-light">
            AI 产业化全周期服务
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            从技术到产业
            <br />
            <span className="bg-gradient-to-r from-accent-light to-purple-400 bg-clip-text text-transparent animate-gradient">
              构建 AI 的 0 → N 闭环
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-foreground/60 sm:text-xl">
            MIST Ai
            专注于AI产业化的全周期增长与资本服务。通过线上线下活动与社媒矩阵，
            链接技术创业者、产业资本与行业场景，构建完整的产业化闭环。
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#services"
              className="rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-accent-light/25"
            >
              了解服务体系
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-8 py-3 text-base font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent-light"
            >
              联系我们
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
