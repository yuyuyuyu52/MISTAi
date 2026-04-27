import { motion } from "motion/react";
import {
  Lightning, Target, VideoCamera, MagnifyingGlass,
  Users, ChatCircle, Megaphone, Warning,
} from "@phosphor-icons/react";
import { useI18n } from "../i18n";
import { FloatingOrb } from "../components";

export default function AgentGlobal() {
  const { t } = useI18n();

  const stats = [
    { value: "$800K", label: t("agentGlobal.stats.arr") },
    { value: "25%", label: t("agentGlobal.stats.growth") },
    { value: "1,000+", label: t("agentGlobal.stats.koc") },
    { value: "10天", label: t("agentGlobal.stats.delivery") },
  ];

  const problems = [
    { num: "01", text: t("agentGlobal.problem1") },
    { num: "02", text: t("agentGlobal.problem2") },
    { num: "03", text: t("agentGlobal.problem3") },
  ];

  const services = [
    { icon: <Users className="w-6 h-6" />, label: t("agentGlobal.svc1") },
    { icon: <Lightning className="w-6 h-6" />, label: t("agentGlobal.svc2") },
    { icon: <VideoCamera className="w-6 h-6" />, label: t("agentGlobal.svc3") },
    { icon: <Target className="w-6 h-6" />, label: t("agentGlobal.svc4") },
    { icon: <MagnifyingGlass className="w-6 h-6" />, label: t("agentGlobal.svc5") },
    { icon: <Megaphone className="w-6 h-6" />, label: t("agentGlobal.svc6") },
    { icon: <ChatCircle className="w-6 h-6" />, label: t("agentGlobal.svc7") },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="fresh-bg" />
      <FloatingOrb color="#0070f3" size="35vw" top="0%" left="-5%" delay={0} />
      <FloatingOrb color="#00d98b" size="28vw" top="8%" left="65%" delay={3} />
      <FloatingOrb color="#7928ca" size="22vw" top="30%" left="10%" delay={6} />
      <FloatingOrb color="#0070f3" size="18vw" top="50%" left="80%" delay={1} />
      <FloatingOrb color="#00d98b" size="16vw" top="70%" left="5%" delay={4} />
      <div className="relative z-10">

      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="heading-xl mb-5 md:mb-10 text-slate-900 !leading-[1.15]">
            {t("agentGlobal.heading1")} <br />
            <span className="cool-gradient-text">{t("agentGlobal.heading2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {t("agentGlobal.desc")}
          </p>
        </motion.div>
      </section>

      {/* 1. Problem Statement */}
      <section className="py-8 md:py-24 px-6 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              {t("agentGlobal.problem.title")}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-[2rem] group hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Warning className="w-5 h-5 text-mist-accent" />
                  <span className="text-mist-accent font-bold text-[10px] tracking-widest">{p.num}</span>
                </div>
                <p className="text-slate-900 font-bold text-lg">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Services Coverage */}
      <section className="py-8 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto">{t("agentGlobal.svc.desc")}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((svc, i) => (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl text-center hover:scale-[1.03] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-lg shadow-black/5 flex items-center justify-center border border-black/5 mx-auto mb-4 group-hover:shadow-mist-blue/10 transition-all">
                  <div className="text-mist-blue">{svc.icon}</div>
                </div>
                <span className="text-sm font-bold text-slate-900">{svc.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured KOC Solution + Stats */}
      <section className="py-8 md:py-32 px-6 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card relative p-12 md:p-16 rounded-[2.5rem] overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute -top-32 -right-32 w-96 h-96 bg-mist-green rounded-full blur-[100px] pointer-events-none"
            />
            <div className="relative z-10">
              <span className="text-mist-green font-bold tracking-[0.15em] uppercase text-sm mb-6 block">
                {t("agentGlobal.koc.badge")}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t("agentGlobal.koc.title")}
              </h2>
              <p className="text-slate-500 leading-relaxed text-base font-medium mb-10 max-w-2xl">
                {t("agentGlobal.koc.desc")}
              </p>
              <div className="flex flex-col gap-4 mb-10">
                {[t("agentGlobal.koc.point1"), t("agentGlobal.koc.point2"), t("agentGlobal.koc.point3")].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-mist-green mt-2 shrink-0" />
                    <span className="text-slate-600 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* Stats merged here */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 pt-8 border-t border-black/5">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="font-display text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </section>


      </div>
    </div>
  );
}
