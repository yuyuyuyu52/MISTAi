import { motion } from "motion/react";
import { RocketLaunch, Cpu, Users, Lightning, ArrowRight } from "@phosphor-icons/react";
import { useI18n } from "../i18n";
import ServiceDetail from "./ServiceDetail";

export default function Investment() {
  const { t } = useI18n();

  const portfolioItems = [
    { name: "Spootialwolk", category: t("portfolio.spootialwolk.category"), desc: t("portfolio.spootialwolk.desc"), image: "https://picsum.photos/seed/fresh1/1200/800" },
    { name: "瞰影科技", category: t("portfolio.kanying.category"), desc: t("portfolio.kanying.desc"), image: "https://picsum.photos/seed/fresh2/1200/800" },
  ];

  return (
    <>
      <ServiceDetail
        badge={t("investment.badge")}
        heading1={t("investment.heading1")}
        heading2={t("investment.heading2")}
        desc={t("investment.desc")}
        badgeIcon={<RocketLaunch className="w-3 h-3 text-mist-green" />}
        exploreLabel={t("services.explore")}
        orbColor1="#00d98b"
        orbColor2="#7928ca"
        cards={[
          { title: t("investment.card1.title"), desc: t("investment.card1.desc"), icon: <RocketLaunch className="w-7 h-7" /> },
          { title: t("investment.card2.title"), desc: t("investment.card2.desc"), icon: <Cpu className="w-7 h-7" /> },
          { title: t("investment.card3.title"), desc: t("investment.card3.desc"), icon: <Lightning className="w-7 h-7" /> },
          { title: t("investment.card4.title"), desc: t("investment.card4.desc"), icon: <Users className="w-7 h-7" /> },
        ]}
      />

      {/* Portfolio / Incubation Cases */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-mist-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">{t("portfolio.eyebrow")}</span>
            <h2 className="heading-lg text-slate-900">{t("portfolio.heading")}</h2>
          </div>
          <div className="flex flex-col">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 py-20 border-b border-black/5 last:border-0`}
              >
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-mist-green/10 to-mist-blue/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5">
                    <img src={item.image} alt={item.name} className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="text-mist-blue font-bold tracking-widest text-[10px] mb-4 block uppercase">{item.category}</span>
                  <h3 className="font-display text-4xl font-bold mb-6 text-slate-900">{item.name}</h3>
                  <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">{item.desc}</p>
                  <button className="group flex items-center gap-4 text-slate-900 font-bold tracking-widest uppercase text-[10px] cursor-pointer">
                    {t("portfolio.viewCase")}
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-mist-blue group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
