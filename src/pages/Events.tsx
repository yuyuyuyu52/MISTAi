import { motion } from "motion/react";
import { Calendar, ArrowRight, MapPin } from "@phosphor-icons/react";
import { useI18n } from "../i18n";
import { FloatingOrb } from "../components";

export default function Events() {
  const { t } = useI18n();

  const upcoming = [
    { titleKey: "events.event1.title" as const, dateKey: "events.event1.date" as const, descKey: "events.event1.desc" as const },
    { titleKey: "events.event2.title" as const, dateKey: "events.event2.date" as const, descKey: "events.event2.desc" as const },
  ];

  const past = [
    { titleKey: "events.event3.title" as const, dateKey: "events.event3.date" as const, descKey: "events.event3.desc" as const },
  ];

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="fresh-bg" />
        <FloatingOrb color="#0070f3" size="35vw" top="-10%" left="60%" delay={0} />
        <FloatingOrb color="#7928ca" size="30vw" top="50%" left="-5%" delay={3} />
        <FloatingOrb color="#00d98b" size="25vw" top="60%" left="30%" delay={6} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-black/5 text-slate-600 text-[10px] font-bold tracking-[0.2em] mb-10 uppercase shadow-sm">
            <Calendar className="w-3 h-3 text-mist-blue" />
            {t("events.badge")}
          </div>
          <h1 className="heading-xl mb-10 text-slate-900">
            {t("events.heading1")} <br />
            <span className="cool-gradient-text">{t("events.heading2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {t("events.desc")}
          </p>
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <span className="text-mist-green font-bold tracking-[0.2em] uppercase text-[10px] mb-8 block">{t("events.upcoming")}</span>
          <div className="flex flex-col gap-6">
            {upcoming.map((event, i) => (
              <motion.div
                key={event.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group relative p-10 rounded-[2.5rem] hover:scale-[1.01] transition-all duration-500 overflow-hidden"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
                  transition={{ duration: 12, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-mist-green rounded-full blur-[80px] pointer-events-none"
                />
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-mist-blue text-[10px] font-bold tracking-widest uppercase mb-4">
                      <MapPin className="w-3 h-3" />
                      {t(event.dateKey)}
                    </div>
                    <h3 className="font-display text-3xl font-bold mb-4 text-slate-900">{t(event.titleKey)}</h3>
                    <p className="text-slate-500 leading-relaxed text-base font-medium">{t(event.descKey)}</p>
                  </div>
                  <button className="group/btn flex items-center gap-3 text-slate-900 font-bold tracking-widest uppercase text-[10px] cursor-pointer shrink-0">
                    {t("events.register")}
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-mist-green group-hover/btn:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-mist-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-8 block">{t("events.past")}</span>
          <div className="flex flex-col gap-6">
            {past.map((event, i) => (
              <motion.div
                key={event.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group relative p-10 rounded-[2.5rem] transition-all duration-500 opacity-70 hover:opacity-100"
              >
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold tracking-widest uppercase mb-4">
                      <MapPin className="w-3 h-3" />
                      {t(event.dateKey)}
                    </div>
                    <h3 className="font-display text-3xl font-bold mb-4 text-slate-900">{t(event.titleKey)}</h3>
                    <p className="text-slate-500 leading-relaxed text-base font-medium">{t(event.descKey)}</p>
                  </div>
                  <button className="group/btn flex items-center gap-3 text-slate-400 font-bold tracking-widest uppercase text-[10px] cursor-pointer shrink-0">
                    {t("events.review")}
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-mist-accent group-hover/btn:text-white transition-all">
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
