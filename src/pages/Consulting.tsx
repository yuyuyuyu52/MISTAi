import { motion } from "motion/react";
import {
  Lightbulb, Flask, Rocket, Cpu, AppWindow, PencilLine,
  ChatCircle, FileText, Compass, CheckCircle, Code, Bug, Headset, ArrowRight,
} from "@phosphor-icons/react";
import { useI18n } from "../i18n";
import { FloatingOrb, ServiceCard } from "../components";

export default function Consulting() {
  const { t } = useI18n();

  const cards = [
    { title: t("consulting.card1.title"), desc: t("consulting.card1.desc"), icon: <Lightbulb className="w-7 h-7" /> },
    { title: t("consulting.card2.title"), desc: t("consulting.card2.desc"), icon: <Flask className="w-7 h-7" /> },
    { title: t("consulting.card3.title"), desc: t("consulting.card3.desc"), icon: <Rocket className="w-7 h-7" /> },
    { title: t("consulting.card4.title"), desc: t("consulting.card4.desc"), icon: <Cpu className="w-7 h-7" /> },
    { title: t("consulting.card5.title"), desc: t("consulting.card5.desc"), icon: <AppWindow className="w-7 h-7" /> },
    { title: t("consulting.card6.title"), desc: t("consulting.card6.desc"), icon: <PencilLine className="w-7 h-7" /> },
  ];

  const steps = [
    { icon: <ChatCircle className="w-5 h-5" />, title: t("consulting.step1.title"), desc: t("consulting.step1.desc") },
    { icon: <FileText className="w-5 h-5" />, title: t("consulting.step2.title"), desc: t("consulting.step2.desc") },
    { icon: <Compass className="w-5 h-5" />, title: t("consulting.step3.title"), desc: t("consulting.step3.desc") },
    { icon: <CheckCircle className="w-5 h-5" />, title: t("consulting.step4.title"), desc: t("consulting.step4.desc") },
    { icon: <Code className="w-5 h-5" />, title: t("consulting.step5.title"), desc: t("consulting.step5.desc") },
    { icon: <Bug className="w-5 h-5" />, title: t("consulting.step6.title"), desc: t("consulting.step6.desc") },
    { icon: <Headset className="w-5 h-5" />, title: t("consulting.step7.title"), desc: t("consulting.step7.desc") },
    { icon: <ArrowRight className="w-5 h-5" />, title: t("consulting.step8.title"), desc: t("consulting.step8.desc") },
  ];

  const techLayers = [
    { label: t("consulting.tech.app"), items: t("consulting.tech.app.items"), color: "mist-accent" },
    { label: t("consulting.tech.capability"), items: t("consulting.tech.capability.items"), color: "mist-blue" },
    { label: t("consulting.tech.apptech"), items: t("consulting.tech.apptech.items"), color: "mist-green" },
    { label: t("consulting.tech.model"), items: t("consulting.tech.model.items"), color: "mist-accent" },
    { label: t("consulting.tech.cloud"), items: t("consulting.tech.cloud.items"), color: "mist-blue" },
    { label: t("consulting.tech.infra"), items: t("consulting.tech.infra.items"), color: "mist-green" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="fresh-bg" />
      <FloatingOrb color="#7928ca" size="35vw" top="0%" left="-5%" delay={0} />
      <FloatingOrb color="#0070f3" size="28vw" top="8%" left="65%" delay={3} />
      <FloatingOrb color="#00d98b" size="22vw" top="30%" left="10%" delay={6} />
      <FloatingOrb color="#7928ca" size="18vw" top="50%" left="80%" delay={1} />
      <FloatingOrb color="#0070f3" size="16vw" top="70%" left="5%" delay={4} />
      <div className="relative z-10">

        {/* Hero */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl"
          >
            <h1 className="heading-xl mb-10 text-slate-900">
              {t("consulting.heading1")} <br />
              <span className="cool-gradient-text">{t("consulting.heading2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              {t("consulting.desc")}
            </p>
          </motion.div>
        </section>

        {/* Services */}
        <section className="py-32 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                {t("consulting.services.desc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card, i) => (
                <ServiceCard
                  key={card.title}
                  index={i}
                  title={card.title}
                  desc={card.desc}
                  icon={card.icon}
                  exploreLabel={t("services.explore")}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-32 px-6 bg-slate-50/50">
          <div className="max-w-5xl mx-auto">
            <div className="mb-20 text-center">
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                {t("consulting.process.desc")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl hover:shadow-black/5 transition-all group"
                >
                  <span className="font-display text-4xl font-bold text-slate-100 group-hover:text-mist-blue/10 transition-colors">0{i + 1}</span>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-mist-blue mt-4 mb-3 group-hover:bg-mist-blue/10 transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="heading-lg text-slate-900">{t("consulting.tech.badge")}</h2>
            </div>
            <div className="flex flex-col gap-4">
              {techLayers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <h3 className={`text-${layer.color} font-display text-xl font-bold mb-3`}>{layer.label}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{layer.items}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
