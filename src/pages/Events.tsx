import { motion } from "motion/react";
import { Calendar, MapPin } from "@phosphor-icons/react";
import { useI18n } from "../i18n";
import { FloatingOrb } from "../components";

export default function Events() {
  const { t } = useI18n();

  const events = [
    { titleKey: "events.event1.title" as const, dateKey: "events.event1.date" as const },
    { titleKey: "events.event2.title" as const, dateKey: "events.event2.date" as const },
    { titleKey: "events.event3.title" as const, dateKey: "events.event3.date" as const },
    { titleKey: "events.event4.title" as const, dateKey: "events.event4.date" as const },
    { titleKey: "events.event5.title" as const, dateKey: "events.event5.date" as const },
    { titleKey: "events.event6.title" as const, dateKey: "events.event6.date" as const },
    { titleKey: "events.event7.title" as const, dateKey: "events.event7.date" as const },
    { titleKey: "events.event8.title" as const, dateKey: "events.event8.date" as const },
    { titleKey: "events.event9.title" as const, dateKey: "events.event9.date" as const },
    { titleKey: "events.event10.title" as const, dateKey: "events.event10.date" as const },
    { titleKey: "events.event11.title" as const, dateKey: "events.event11.date" as const },
    { titleKey: "events.event12.title" as const, dateKey: "events.event12.date" as const },
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

      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-5">
            {events.map((event, i) => (
              <motion.div
                key={event.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-7 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-black/5 transition-all"
              >
                <div>
                  <h4 className="font-display text-xl font-bold text-slate-900 mb-1.5">{t(event.titleKey)}</h4>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                    <MapPin className="w-3 h-3" />
                    {t(event.dateKey)}
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
