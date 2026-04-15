const stats = [
  { value: "100+", label: "合作伙伴" },
  { value: "50+", label: "成功案例" },
  { value: "10亿+", label: "促成融资" },
  { value: "20+", label: "覆盖行业" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div>
            <p className="text-sm font-semibold text-accent-light">
              关于我们
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI 产业化的全周期增长与资本服务平台
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground/60">
              MIST Ai
              致力于成为连接AI技术与产业应用的核心枢纽。我们深耕AI赛道，通过线上线下活动与社媒矩阵，
              链接技术创业者、产业资本与行业场景。
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground/60">
              我们构建从早期投资与孵化，到GTM增长（国内及出海），再到成长期融资对接，
              以及传统行业落地的完整闭环，助力AI企业实现从0到N的飞跃。
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-surface p-8 text-center transition-colors hover:border-accent/30"
              >
                <p className="text-3xl font-bold text-accent-light sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
