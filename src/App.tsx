/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { MotionConfig } from "motion/react";
import { I18nProvider, useI18n } from "./i18n";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Investment from "./pages/Investment";
import AgentGlobal from "./pages/AgentGlobal";
import Consulting from "./pages/Consulting";
import Events from "./pages/Events";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/services/investment", label: t("nav.services.investment") },
    { to: "/services/agent-global", label: t("nav.services.agentGlobal") },
    { to: "/services/consulting", label: t("nav.services.consulting") },
    { to: "/events", label: t("nav.events") },
  ];

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 flex justify-between items-center ${scrolled || mobileOpen ? "bg-white/70 backdrop-blur-xl border-b border-black/5" : "bg-transparent"}`}>
      <Link to="/" className="flex items-center gap-2">
        <img src="/mist_logo.png" alt="MIST Ai" className="h-10 w-10 object-contain" />
        <span className="font-display text-2xl font-bold tracking-tighter cool-gradient-text">MIST Ai</span>
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        {navItems.map(item => (
          <Link
            key={item.to}
            to={item.to}
            className={`text-xs font-bold transition-colors tracking-widest uppercase ${
              (item.to === "/" ? location.pathname === "/" : isActive(item.to))
                ? "text-mist-blue" : "text-slate-500 hover:text-mist-blue"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          className="px-3 py-1.5 rounded-full border border-black/10 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all cursor-pointer tracking-wide"
        >
          {lang === "zh" ? "EN" : "中文"}
        </button>
        <Link to="/services" className="hidden sm:inline-flex px-6 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-mist-blue transition-all shadow-lg shadow-slate-900/10">
          {t("nav.getStarted")}
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
        >
          <span className={`block w-5 h-0.5 bg-slate-900 transition-all ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-900 transition-all ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>
    </nav>

    {mobileOpen && (
      <div className="fixed inset-0 top-[72px] z-[99] bg-white/95 backdrop-blur-xl md:hidden">
        <div className="flex flex-col items-center gap-6 pt-12">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`text-lg font-bold tracking-wide ${
                (item.to === "/" ? location.pathname === "/" : isActive(item.to))
                  ? "text-mist-blue" : "text-slate-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-bold shadow-lg"
          >
            {t("nav.getStarted")}
          </Link>
        </div>
      </div>
    )}
    </>
  );
};

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="relative px-6 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 mb-16 md:mb-24">
          <div>
            <h2 className="heading-lg text-slate-900 mb-6 md:mb-10">{t("footer.heading1")} <br /> <span className="cool-gradient-text">{t("footer.heading2")}</span></h2>
            <p className="text-base md:text-lg text-slate-400 max-w-md font-medium leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>
          <div className="flex flex-col justify-between items-start lg:items-end">
            <div className="lg:text-right">
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase mb-6 block">{t("footer.contactUs")}</span>
              <span className="font-display text-xl font-bold cool-gradient-text">
                WeChat: MISTAi001
              </span>
            </div>
            <div className="mt-10 flex gap-6">
              <div className="flex flex-col items-center gap-2">
                <img src="/redbook.png" alt="小红书" className="w-24 h-24 md:w-28 md:h-28 rounded-xl shadow-md" />
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">小红书</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="/wechat.jpg" alt="微信公众号" className="w-24 h-24 md:w-28 md:h-28 rounded-xl shadow-md" />
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">微信公众号</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[10px] text-slate-300 font-bold tracking-widest uppercase">{t("footer.copyright")}</span>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-slate-300 font-bold tracking-widest uppercase hover:text-slate-900 transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="text-[10px] text-slate-300 font-bold tracking-widest uppercase hover:text-slate-900 transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <BrowserRouter>
      <I18nProvider>
        <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
        <div className="relative bg-white text-slate-900 selection:bg-mist-blue selection:text-white">
          <div className="noise-overlay" />
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/investment" element={<Investment />} />
              <Route path="/services/agent-global" element={<AgentGlobal />} />
              <Route path="/services/consulting" element={<Consulting />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </main>
          <Footer />
        </div>
        </MotionConfig>
      </I18nProvider>
    </BrowserRouter>
  );
}
