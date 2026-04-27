import { motion } from "motion/react";
import { MapPin, ArrowSquareOut } from "@phosphor-icons/react";
import { useI18n } from "../i18n";
import { FloatingOrb } from "../components";

export default function Events() {
  const { t } = useI18n();

  const events = [
    { titleKey: "events.event1.title" as const, dateKey: "events.event1.date" as const, topicKey: "events.event1.topic" as const, img: "/event-12.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247484624&idx=1&sn=4eabeea7ac676755ecf1e7323206d965" },
    { titleKey: "events.event2.title" as const, dateKey: "events.event2.date" as const, topicKey: "events.event2.topic" as const, img: "/event-11.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247484552&idx=1&sn=f6650a2a6d1ae9f2ef320c7528f2888d" },
    { titleKey: "events.event3.title" as const, dateKey: "events.event3.date" as const, topicKey: "events.event3.topic" as const, img: "/event-10.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247484481&idx=1&sn=cf8d3733cf3aa8a285a3bdd4fd01d09d" },
    { titleKey: "events.event4.title" as const, dateKey: "events.event4.date" as const, topicKey: "events.event4.topic" as const, img: "/event-9.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247484433&idx=1&sn=003b5ff6c3c55102dd15208eef0d6364" },
    { titleKey: "events.event5.title" as const, dateKey: "events.event5.date" as const, topicKey: "events.event5.topic" as const, img: "/event-8.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247484220&idx=1&sn=8207dd27ea2da3271ac837ff655344e4" },
    { titleKey: "events.event6.title" as const, dateKey: "events.event6.date" as const, topicKey: "events.event6.topic" as const, img: "/event-7.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247484125&idx=1&sn=bb9669aa10990abff2a3dfeea0c35d4c" },
    { titleKey: "events.event7.title" as const, dateKey: "events.event7.date" as const, topicKey: "events.event7.topic" as const, img: "/event-6.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247484008&idx=1&sn=6f29c194aec6a40a1523c0b132735a55" },
    { titleKey: "events.event8.title" as const, dateKey: "events.event8.date" as const, topicKey: "events.event8.topic" as const, img: "/event-5.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247483938&idx=1&sn=5a24b33bdbbe4fa38165c152b60cb1c0" },
    { titleKey: "events.event9.title" as const, dateKey: "events.event9.date" as const, topicKey: "events.event9.topic" as const, img: "/event-4.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247483895&idx=1&sn=12d99509a9fe7fea364295dd4c08b73d" },
    { titleKey: "events.event10.title" as const, dateKey: "events.event10.date" as const, topicKey: "events.event10.topic" as const, img: "/event-3.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247483761&idx=1&sn=22957b19a9feb2bd204098fd51326d00" },
    { titleKey: "events.event11.title" as const, dateKey: "events.event11.date" as const, topicKey: "events.event11.topic" as const, img: "/event-2.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247483696&idx=1&sn=071f299f838e830929498e5d315962b1" },
    { titleKey: "events.event12.title" as const, dateKey: "events.event12.date" as const, topicKey: "events.event12.topic" as const, img: "/event-1.jpg", link: "https://mp.weixin.qq.com/s?__biz=MzYzMTIxMzUwMQ==&mid=2247483659&idx=1&sn=e863a3b9c547a8ebbb8baf130bd2bf74" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="fresh-bg" />
      <FloatingOrb color="#0070f3" size="35vw" top="0%" left="-5%" delay={0} />
      <FloatingOrb color="#7928ca" size="28vw" top="8%" left="65%" delay={3} />
      <FloatingOrb color="#00d98b" size="22vw" top="30%" left="10%" delay={6} />
      <FloatingOrb color="#0070f3" size="18vw" top="50%" left="80%" delay={1} />
      <FloatingOrb color="#7928ca" size="16vw" top="70%" left="5%" delay={4} />
      <div className="relative z-10">
      <section className="relative min-h-[75vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="heading-xl mb-10 text-slate-900">
            {t("events.heading1")} <br />
            <span className="cool-gradient-text">{t("events.heading2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {t("events.desc")}
          </p>
        </motion.div>
      </section>

      <section className="py-16 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-0 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-black/5 transition-all overflow-hidden group"
              >
                <div className="md:w-80 shrink-0 overflow-hidden">
                  <img src={event.img} alt={t(event.titleKey)} className="w-full h-full object-cover aspect-[4/3] md:aspect-auto group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between p-5 md:p-7 flex-1 gap-4 md:gap-6">
                  <div>
                    <h4 className="font-display text-lg md:text-xl font-bold text-slate-900 mb-2">{t(event.titleKey)}</h4>
                    <p className="text-xs md:text-sm text-slate-500 font-medium mb-3 line-clamp-3 md:line-clamp-none">{t(event.topicKey)}</p>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                      <MapPin className="w-3 h-3" />
                      {t(event.dateKey)}
                    </div>
                  </div>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 text-mist-blue text-xs font-bold tracking-wider uppercase hover:gap-2.5 transition-all"
                  >
                    {t("events.readMore")}
                    <ArrowSquareOut className="w-3.5 h-3.5" />
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
