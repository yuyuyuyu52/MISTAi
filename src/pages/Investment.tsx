import { motion } from "motion/react";
import { RocketLaunch, Cpu, Users, Lightning, ArrowRight } from "@phosphor-icons/react";
import { useI18n } from "../i18n";
import { FloatingOrb } from "../components";
import ServiceDetail from "./ServiceDetail";

export default function Investment() {
  const { t } = useI18n();

  const portfolioItems = [
    { name: "SpatialWalk", category: t("portfolio.spatialwalk.category"), desc: t("portfolio.spatialwalk.desc"), video: "/spatialwalk.mp4", link: "https://spatialwalk.net/" },
    { name: "瞰影科技", category: t("portfolio.kanying.category"), desc: t("portfolio.kanying.desc"), image: "/kanying.jpg", link: "https://www.ky3d.net/" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="fresh-bg" />
      <FloatingOrb color="#00d98b" size="35vw" top="0%" left="-5%" delay={0} />
      <FloatingOrb color="#7928ca" size="28vw" top="8%" left="65%" delay={3} />
      <FloatingOrb color="#0070f3" size="22vw" top="30%" left="10%" delay={6} />
      <FloatingOrb color="#00d98b" size="18vw" top="50%" left="80%" delay={1} />
      <FloatingOrb color="#7928ca" size="16vw" top="70%" left="5%" delay={4} />
      <div className="relative z-10">
      <ServiceDetail
        badge={t("investment.badge")}
        heading1={t("investment.heading1")}
        heading2={t("investment.heading2")}
        desc={t("investment.desc")}
        badgeIcon={<RocketLaunch className="w-3 h-3 text-mist-green" />}
        exploreLabel={t("services.explore")}
        cards={[
          { title: t("investment.card1.title"), desc: t("investment.card1.desc"), icon: <RocketLaunch className="w-7 h-7" /> },
          { title: t("investment.card2.title"), desc: t("investment.card2.desc"), icon: <Cpu className="w-7 h-7" /> },
          { title: t("investment.card3.title"), desc: t("investment.card3.desc"), icon: <Lightning className="w-7 h-7" /> },
          { title: t("investment.card4.title"), desc: t("investment.card4.desc"), icon: <Users className="w-7 h-7" /> },
        ]}
      />

      {/* Portfolio / Incubation Cases */}
      <section className="relative py-8 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-20">
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
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-6 md:gap-16 py-6 md:py-20 border-b border-black/5 last:border-0`}
              >
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-mist-green/10 to-mist-blue/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5">
                    {item.video ? (
                      <video src={item.video} autoPlay loop muted playsInline className="w-full aspect-[16/10] object-cover scale-[1.02]" />
                    ) : (
                      <img src={item.image} alt={item.name} className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105" />
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="text-mist-blue font-bold tracking-widest text-[10px] mb-4 block uppercase">{item.category}</span>
                  <h3 className="font-display text-4xl font-bold mb-6 text-slate-900">{item.name}</h3>
                  <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">{item.desc}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 text-slate-900 font-bold tracking-widest uppercase text-[10px]"
                  >
                    {t("portfolio.viewCase")}
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-mist-blue group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
