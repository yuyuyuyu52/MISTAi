const services = [
  {
    step: "01",
    title: "早期投资与孵化",
    description:
      "为AI初创企业提供种子轮到天使轮的资金支持，结合技术辅导、产品打磨与商业模式验证，帮助项目快速完成从0到1的突破。",
    features: ["种子/天使投资", "技术辅导", "产品打磨", "商业验证"],
  },
  {
    step: "02",
    title: "GTM 增长",
    description:
      "制定国内及出海的市场增长策略，通过社媒矩阵运营、行业活动链接与渠道建设，助力AI产品高效触达目标用户与客户。",
    features: ["国内市场拓展", "海外出海策略", "社媒矩阵运营", "渠道建设"],
  },
  {
    step: "03",
    title: "成长期融资对接",
    description:
      "整合产业资本与头部投资机构资源，为处于成长期的AI企业提供Pre-A到B轮的融资对接服务，加速企业规模化发展。",
    features: ["投资机构对接", "融资策略规划", "估值咨询", "资本路演"],
  },
  {
    step: "04",
    title: "传统行业落地",
    description:
      "深入了解传统行业痛点，将AI技术与产业场景深度融合，推动AI解决方案在制造、零售、医疗、金融等领域的规模化落地。",
    features: ["场景诊断", "方案定制", "落地实施", "效果追踪"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-accent-light">服务体系</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            从 0 到 N 的全链路服务
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground/60">
            我们提供覆盖AI企业全生命周期的系统化服务，从早期投资孵化到产业落地，
            每一步都有专业团队保驾护航。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.step}
              className="group relative rounded-2xl border border-border bg-surface-light p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 text-5xl font-bold text-accent/20">
                {service.step}
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent-light transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-foreground/60">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-foreground/60"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
