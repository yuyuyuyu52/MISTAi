import { motion } from "motion/react";
import { BookOpen, Users, FileText, ArrowRight } from "@phosphor-icons/react";
import { useI18n } from "../i18n";
import { FloatingOrb } from "../components";

export default function Knowledge() {
  const { t } = useI18n();

  const features = [
    { icon: <FileText className="w-7 h-7" />, titleKey: "knowledge.feature1.title" as const, descKey: "knowledge.feature1.desc" as const },
    { icon: <Users className="w-7 h-7" />, titleKey: "knowledge.feature2.title" as const, descKey: "knowledge.feature2.desc" as const },
    { icon: <BookOpen className="w-7 h-7" />, titleKey: "knowledge.feature3.title" as const, descKey: "knowledge.feature3.desc" as const },
  ];

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="fresh-bg" />
        <FloatingOrb color="#7928ca" size="35vw" top="-10%" left="60%" delay={0} />
        <FloatingOrb color="#00d98b" size="30vw" top="50%" left="-5%" delay={3} />
        <FloatingOrb color="#0070f3" size="25vw" top="60%" left="30%" delay={6} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-black/5 text-slate-600 text-[10px] font-bold tracking-[0.2em] mb-10 uppercase shadow-sm">
            <BookOpen className="w-3 h-3 text-mist-accent" />
            {t("knowledge.badge")}
          </div>
          <h1 className="heading-xl mb-10 text-slate-900">
            {t("knowledge.heading1")} <br />
            <span className="cool-gradient-text">{t("knowledge.heading2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {t("knowledge.desc")}
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feat, i) => (
              <motion.div
                key={feat.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass-card group relative p-10 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500"
              >
                <div className="relative w-14 h-14 rounded-2xl bg-white shadow-xl shadow-black/5 flex items-center justify-center border border-black/5 mb-8">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-mist-accent"
                  >
                    {feat.icon}
                  </motion.div>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-slate-900">{t(feat.titleKey)}</h3>
                <p className="text-slate-500 leading-relaxed text-base font-medium">{t(feat.descKey)}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="btn-cool px-10 py-4.5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-mist-accent transition-all flex items-center gap-3 shadow-xl shadow-slate-900/20 cursor-pointer">
              {t("knowledge.join")} <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
