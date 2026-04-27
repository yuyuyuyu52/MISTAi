import { motion } from "motion/react";
import { ArrowRight, RocketLaunch, TrendUp, Globe, Sparkle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "../i18n";
import { FloatingOrb } from "../components";

const serviceRoutes = [
  {
    path: "/services/investment",
    badgeKey: "nav.services.investment" as const,
    titleKey: "investment.heading2" as const,
    descKey: "investment.desc" as const,
    icon: <RocketLaunch className="w-8 h-8" />,
    color: "mist-green",
  },
  {
    path: "/services/agent-global",
    badgeKey: "nav.services.agentGlobal" as const,
    titleKey: "agentGlobal.heading2" as const,
    descKey: "agentGlobal.desc" as const,
    icon: <TrendUp className="w-8 h-8" />,
    color: "mist-blue",
  },
  {
    path: "/services/consulting",
    badgeKey: "nav.services.consulting" as const,
    titleKey: "consulting.heading2" as const,
    descKey: "consulting.desc" as const,
    icon: <Globe className="w-8 h-8" />,
    color: "mist-accent",
  },
];

export default function Services() {
  const { t } = useI18n();
  const navigate = useNavigate();

  return (
    <>
      <section className="relative min-h-[75vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="fresh-bg" />
        <FloatingOrb color="#00d98b" size="35vw" top="-10%" left="-5%" delay={0} />
        <FloatingOrb color="#0070f3" size="30vw" top="50%" left="70%" delay={3} />
        <FloatingOrb color="#7928ca" size="25vw" top="60%" left="10%" delay={6} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-black/5 text-slate-600 text-[10px] font-bold tracking-[0.2em] mb-10 uppercase shadow-sm">
            <Sparkle className="w-3 h-3 text-mist-green" />
            {t("services.eyebrow")}
          </div>
          <h1 className="heading-xl mb-10 text-slate-900">
            {t("services.heading")}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {t("services.desc")}
          </p>
        </motion.div>
      </section>

      <section className="py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceRoutes.map((svc, i) => (
              <motion.div
                key={svc.path}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                onClick={() => navigate(svc.path)}
                className="glass-card group relative p-12 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className={`absolute -top-20 -right-20 w-64 h-64 bg-${svc.color} rounded-full blur-[80px] pointer-events-none`}
                />
                <div className="relative z-10">
                  <div className="relative w-16 h-16 rounded-2xl bg-white shadow-xl shadow-black/5 flex items-center justify-center border border-black/5 mb-10">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className={`text-${svc.color}`}
                    >
                      {svc.icon}
                    </motion.div>
                  </div>

                  <span className={`text-${svc.color} font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block`}>
                    {t(svc.badgeKey)}
                  </span>
                  <h3 className="font-display text-3xl font-bold mb-6 text-slate-900">{t(svc.titleKey)}</h3>
                  <p className="text-slate-500 leading-relaxed mb-10 text-base font-medium">{t(svc.descKey)}</p>

                  <div className="flex items-center gap-3 text-slate-900 font-bold text-xs tracking-widest uppercase group-hover:gap-5 transition-all">
                    {t("services.learnMore")}
                    <div className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-${svc.color} group-hover:text-white transition-all`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
