import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight, RocketLaunch, TrendUp, Cpu, Target, Eye, Heart, MapPin,
} from "@phosphor-icons/react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "../i18n";
import { FloatingOrb } from "../components";

const useIsMobile = () => {
  const [m, setM] = useState(false);
  useEffect(() => {
    const c = () => setM(window.innerWidth < 768);
    c();
    window.addEventListener("resize", c);
    return () => window.removeEventListener("resize", c);
  }, []);
  return m;
};

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const itemFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const { t } = useI18n();
  const navigate = useNavigate();

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">

      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="heading-xl mb-10 text-slate-900">
            {t("hero.heading1")} <br />
            <span className="cool-gradient-text">{t("hero.heading2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            {t("hero.desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button onClick={() => navigate("/services")} className="btn-cool px-10 py-4.5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-mist-blue transition-all flex items-center gap-3 shadow-xl shadow-slate-900/20 cursor-pointer">
              {t("hero.startProject")} <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => navigate("/about")} className="px-10 py-4.5 bg-white text-slate-900 font-bold rounded-2xl border border-black/5 hover:bg-slate-50 transition-all shadow-sm cursor-pointer">
              {t("hero.ourPortfolio")}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const AboutPreview = () => {
  const { t } = useI18n();
  const navigate = useNavigate();

  const mvv = [
    { icon: <Target className="w-6 h-6" />, title: t("home.about.mission"), desc: t("home.about.mission.desc"), color: "mist-green" },
    { icon: <Eye className="w-6 h-6" />, title: t("home.about.vision"), desc: t("home.about.vision.desc"), color: "mist-blue" },
    { icon: <Heart className="w-6 h-6" />, title: t("home.about.values"), desc: t("home.about.values.desc"), color: "mist-accent" },
  ];

  return (
    <section className="py-32 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="flex flex-col lg:flex-row gap-20 mb-16">
          <div className="lg:w-1/2">
            <motion.h2 variants={itemUp} className="heading-lg text-slate-900 mb-4">{t("home.about.badge")}</motion.h2>
            <motion.p variants={itemUp} className="text-lg md:text-xl text-slate-500 font-medium">
              {t("about.heading1")} <span className="cool-gradient-text">{t("about.heading2")}</span>
            </motion.p>
          </div>
          <motion.div variants={itemUp} className="lg:w-1/2 flex flex-col justify-end">
            <p className="text-slate-500 leading-relaxed font-medium mb-8">
              {t("about.desc")}
            </p>
            <div>
              <button
                onClick={() => navigate("/about")}
                className="group flex items-center gap-3 text-slate-900 font-bold tracking-widest uppercase text-[10px] cursor-pointer"
              >
                {t("home.about.cta")}
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-mist-green group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {mvv.map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemUp}
              className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-black/5 transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-${item.color}/10 flex items-center justify-center mb-5 text-${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h4 className="font-display text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ServicesPreview = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const services = [
    {
      title: t("about.engine1.title"),
      desc: t("about.engine1.desc"),
      color: "mist-green",
      link: "/services/investment",
      icon: <RocketLaunch className="w-7 h-7" />,
    },
    {
      title: t("about.engine2.title"),
      desc: t("about.engine2.desc"),
      color: "mist-blue",
      link: "/services/agent-global",
      icon: <TrendUp className="w-7 h-7" />,
    },
    {
      title: t("about.engine3.title"),
      desc: t("about.engine3.desc"),
      color: "mist-accent",
      link: "/services/consulting",
      icon: <Cpu className="w-7 h-7" />,
    },
  ];

  return (
    <section className="py-32 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="text-center mb-20">
          <motion.h2 variants={itemUp} className="heading-lg text-slate-900">{t("home.services.heading")}</motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={itemUp}
              onClick={() => navigate(svc.link)}
              className="glass-card group relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {!isMobile && (
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
                  transition={{ duration: 12, repeat: Infinity }}
                  className={`absolute -top-20 -right-20 w-64 h-64 bg-${svc.color} rounded-full blur-[80px] pointer-events-none`}
                />
              )}
              <div className="relative z-10">
                <div className="relative w-12 h-12 md:w-16 md:h-16 mb-6 md:mb-8 flex items-center justify-center">
                  {!isMobile && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 border-2 border-dashed border-${svc.color}/20 rounded-full`}
                    />
                  )}
                  <div className="relative w-12 h-12 rounded-2xl bg-white shadow-xl shadow-black/5 flex items-center justify-center border border-black/5">
                    <div className={`text-${svc.color}`}>{svc.icon}</div>
                  </div>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900">{svc.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium mb-6 md:mb-8">{svc.desc}</p>
                <div className="flex items-center gap-3 text-slate-900 font-bold tracking-widest uppercase text-[10px] group-hover:gap-5 transition-all">
                  {t("home.viewDetails")}
                  <div className={`w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-${svc.color} group-hover:text-white transition-all`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const EventsPreview = () => {
  const { t } = useI18n();
  const navigate = useNavigate();

  const events = [
    { titleKey: "events.event1.title" as const, dateKey: "events.event1.date" as const, img: "/event-12.jpg" },
    { titleKey: "events.event2.title" as const, dateKey: "events.event2.date" as const, img: "/event-11.jpg" },
    { titleKey: "events.event3.title" as const, dateKey: "events.event3.date" as const, img: "/event-10.jpg" },
    { titleKey: "events.event4.title" as const, dateKey: "events.event4.date" as const, img: "/event-9.jpg" },
    { titleKey: "events.event5.title" as const, dateKey: "events.event5.date" as const, img: "/event-8.jpg" },
    { titleKey: "events.event6.title" as const, dateKey: "events.event6.date" as const, img: "/event-7.jpg" },
    { titleKey: "events.event7.title" as const, dateKey: "events.event7.date" as const, img: "/event-6.jpg" },
    { titleKey: "events.event8.title" as const, dateKey: "events.event8.date" as const, img: "/event-5.jpg" },
    { titleKey: "events.event9.title" as const, dateKey: "events.event9.date" as const, img: "/event-4.jpg" },
    { titleKey: "events.event10.title" as const, dateKey: "events.event10.date" as const, img: "/event-3.jpg" },
    { titleKey: "events.event11.title" as const, dateKey: "events.event11.date" as const, img: "/event-2.jpg" },
    { titleKey: "events.event12.title" as const, dateKey: "events.event12.date" as const, img: "/event-1.jpg" },
  ];

  return (
    <section className="py-32">
      <motion.div
        className="max-w-5xl mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 variants={itemUp} className="heading-lg text-slate-900">{t("events.heading1")}</motion.h2>
          </div>
          <motion.div variants={itemFade}>
            <button
              onClick={() => navigate("/events")}
              className="group flex items-center gap-3 text-slate-900 font-bold tracking-widest uppercase text-[10px] cursor-pointer shrink-0"
            >
              {t("home.about.cta")}
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-mist-accent group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        </div>

        <motion.p variants={itemUp} className="text-slate-500 leading-relaxed font-medium mb-10 max-w-3xl">
          {t("events.desc")}
        </motion.p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 overflow-hidden">
        <div
          className="flex gap-6 animate-scroll"
          style={{ width: "max-content" }}
        >
          {[...events, ...events].map((event, i) => (
            <div
              key={`${event.titleKey}-${i}`}
              onClick={() => navigate("/events")}
              className="w-[320px] shrink-0 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-black/5 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={event.img} alt={t(event.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="font-display text-base font-bold text-slate-900 mb-2 group-hover:text-mist-accent transition-colors">{t(event.titleKey)}</h4>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                  <MapPin className="w-3 h-3" />
                  {t(event.dateKey)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OfficesPreview = () => {
  const { t } = useI18n();

  const offices = [
    { city: t("global.hangzhou"), label: t("global.hangzhou.label"), color: "mist-green", img: "/hangzhou.jpg" },
    { city: t("global.paris"), label: t("global.paris.label"), color: "mist-blue", img: "/paris.jpg" },
    { city: t("global.singapore"), label: t("global.singapore.label"), color: "mist-accent", img: "/singapore.jpg" },
    { city: t("global.sv"), label: t("global.sv.label"), color: "mist-green", img: "/silicon-valley.jpg" },
  ];

  return (
    <section className="py-32 px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-14">
          <motion.h2 variants={itemUp} className="heading-lg text-slate-900">{t("global.heading1")}<span className="cool-gradient-text">{t("global.heading2")}</span></motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {offices.map((office) => (
            <motion.div
              key={office.city}
              variants={itemUp}
              className="relative rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-black/5 transition-all group overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={office.img} alt={office.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 text-center">
                <h4 className={`font-display text-lg font-bold text-slate-900 mb-1 group-hover:text-${office.color} transition-colors`}>{office.city}</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{office.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="fresh-bg" />
      <FloatingOrb color="#00d98b" size="35vw" top="0%" left="-5%" delay={0} />
      <FloatingOrb color="#0070f3" size="28vw" top="8%" left="65%" delay={3} />
      <FloatingOrb color="#7928ca" size="22vw" top="18%" left="10%" delay={6} />
      <FloatingOrb color="#00d98b" size="18vw" top="35%" left="80%" delay={1} />
      <FloatingOrb color="#0070f3" size="20vw" top="50%" left="-8%" delay={4} />
      <FloatingOrb color="#7928ca" size="16vw" top="65%" left="85%" delay={2} />
      <FloatingOrb color="#00d98b" size="14vw" top="80%" left="5%" delay={5} />
      <div className="relative z-10">
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <EventsPreview />
        <OfficesPreview />
      </div>
    </div>
  );
}
