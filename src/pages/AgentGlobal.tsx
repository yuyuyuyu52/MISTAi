import { motion } from "motion/react";
import {
  TrendUp, ArrowRight, Lightning, Target, VideoCamera, MagnifyingGlass,
  ChartBar, Users, ChatCircle, Megaphone, Warning,
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

  const cases = [
    { title: t("agentGlobal.case1.title"), name: t("agentGlobal.case1.name"), desc: t("agentGlobal.case1.desc"), color: "mist-green" },
    { title: t("agentGlobal.case2.title"), name: t("agentGlobal.case2.name"), desc: t("agentGlobal.case2.desc"), color: "mist-blue" },
    { title: t("agentGlobal.case3.title"), name: t("agentGlobal.case3.name"), desc: t("agentGlobal.case3.desc"), color: "mist-accent" },
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

  const steps = [
    { num: "一", title: t("agentGlobal.step1.title"), desc: t("agentGlobal.step1.desc") },
    { num: "二", title: t("agentGlobal.step2.title"), desc: t("agentGlobal.step2.desc") },
    { num: "三", title: t("agentGlobal.step3.title"), desc: t("agentGlobal.step3.desc") },
    { num: "四", title: t("agentGlobal.step4.title"), desc: t("agentGlobal.step4.desc") },
  ];

  const metrics = [
    { value: t("agentGlobal.metric1.value"), label: t("agentGlobal.metric1.label") },
    { value: t("agentGlobal.metric2.value"), label: t("agentGlobal.metric2.label") },
    { value: t("agentGlobal.metric3.value"), label: t("agentGlobal.metric3.label") },
    { value: t("agentGlobal.metric4.value"), label: t("agentGlobal.metric4.label") },
    { value: t("agentGlobal.metric5.value"), label: t("agentGlobal.metric5.label") },
    { value: t("agentGlobal.metric6.value"), label: t("agentGlobal.metric6.label") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="fresh-bg" />
        <FloatingOrb color="#0070f3" size="35vw" top="-10%" left="60%" delay={0} />
        <FloatingOrb color="#00d98b" size="30vw" top="50%" left="-5%" delay={3} />
        <FloatingOrb color="#7928ca" size="25vw" top="60%" left="30%" delay={6} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-black/5 text-slate-600 text-[10px] font-bold tracking-[0.2em] mb-10 uppercase shadow-sm">
            <TrendUp className="w-3 h-3 text-mist-blue" />
            {t("agentGlobal.badge")}
          </div>
          <h1 className="heading-xl mb-10 text-slate-900">
            {t("agentGlobal.heading1")} <br />
            <span className="cool-gradient-text">{t("agentGlobal.heading2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            {t("agentGlobal.desc")}
          </p>
          <button className="btn-cool px-10 py-4.5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-mist-blue transition-all flex items-center gap-3 shadow-xl shadow-slate-900/20 cursor-pointer mx-auto">
            {t("agentGlobal.consult")} <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>

      {/* Featured KOC Solution */}
      <section className="py-32 px-6 bg-slate-50/50">
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
              <span className="text-mist-green font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">
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
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="btn-cool px-8 py-3.5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-mist-green transition-all flex items-center gap-3 shadow-xl shadow-slate-900/20 cursor-pointer">
                  {t("agentGlobal.koc.cta")} <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-left">
                  <span className="font-display text-2xl font-bold text-slate-900">{t("agentGlobal.koc.price")}</span>
                  <p className="text-[11px] text-slate-400 font-medium mt-1">{t("agentGlobal.koc.priceDesc")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verified Results */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-mist-blue font-bold tracking-[0.2em] uppercase text-[10px] mb-12 block text-center">
            {t("agentGlobal.stats.title")}
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-3xl bg-slate-50/50 border border-slate-100"
              >
                <div className="font-display text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
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

      {/* Case Studies */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-mist-green font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">{t("agentGlobal.cases.title")}</span>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mt-6">
              {t("agentGlobal.cases.desc")}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {cases.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group relative p-10 md:p-12 rounded-[2.5rem] hover:scale-[1.01] transition-all duration-500 overflow-hidden"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
                  transition={{ duration: 12, repeat: Infinity }}
                  className={`absolute -top-20 -right-20 w-64 h-64 bg-${c.color} rounded-full blur-[80px] pointer-events-none`}
                />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-white shadow-xl shadow-black/5 flex items-center justify-center border border-black/5`}>
                      <span className="font-display text-2xl font-bold text-slate-300">0{i + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-${c.color} font-bold tracking-widest text-[10px] uppercase`}>{c.title}</span>
                      <span className="text-slate-300">·</span>
                      <span className="font-display text-lg font-bold text-slate-900">{c.name}</span>
                    </div>
                    <p className="text-slate-500 leading-relaxed font-medium">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Coverage */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-mist-blue font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">{t("agentGlobal.svc.title")}</span>
            <p className="text-slate-400 font-medium max-w-xl mx-auto mt-4">{t("agentGlobal.svc.desc")}</p>
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

      {/* Growth Engine */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-mist-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">{t("agentGlobal.engine.desc")}</span>
            <h2 className="heading-lg text-slate-900">{t("agentGlobal.engine.title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-[2rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all group"
              >
                <span className="font-display text-5xl font-bold text-slate-100 group-hover:text-mist-blue/10 transition-colors">{step.num}</span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-4 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-slate-900 text-center mb-16"
          >
            {t("agentGlobal.impact.title")}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-black/5 transition-all"
              >
                <div className="font-display text-3xl font-bold cool-gradient-text mb-2">{m.value}</div>
                <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden rounded-[4rem] mx-6 mb-12 bg-white border border-slate-100">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-mist-green/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-mist-blue/5 rounded-full blur-[100px]"
        />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t("agentGlobal.cta.title")}
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-12">
              {t("agentGlobal.cta.desc")}
            </p>
            <button className="btn-cool px-10 py-4.5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-mist-blue transition-all flex items-center gap-3 shadow-xl shadow-slate-900/20 cursor-pointer mx-auto">
              {t("agentGlobal.cta.button")} <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
