import { motion } from "motion/react";
import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
};

export const FloatingOrb = ({ color, size, top, left, delay }: any) => {
  const isMobile = useIsMobile();
  const d = delay || 0;
  const dur1 = 18 + d * 2;
  const dur2 = 22 + d * 3;

  if (isMobile) {
    return (
      <div
        className="floating-orb"
        style={{ backgroundColor: color, width: size, height: size, top, left }}
      />
    );
  }

  return (
    <motion.div
      className="floating-orb"
      style={{ backgroundColor: color, width: size, height: size, top, left }}
      animate={{
        x: [0, 120, -100, 80, -120, 0],
        y: [0, -90, 110, -120, 60, 0],
        scale: [1, 1.35, 0.7, 1.3, 0.75, 1],
        opacity: [0.4, 0.6, 0.25, 0.55, 0.3, 0.4],
      }}
      transition={{ duration: dur1, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        style={{ width: "100%", height: "100%", borderRadius: "50%", background: "inherit" }}
        animate={{
          scaleX: [1, 1.45, 0.65, 1.3, 1],
          scaleY: [1, 0.65, 1.4, 0.75, 1],
        }}
        transition={{ duration: dur2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export const ServiceCard = ({ title, desc, icon, index, onClick }: any) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`glass-card group relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 overflow-hidden ${onClick ? "cursor-pointer" : ""}`}
    >
      {!isMobile && (
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-mist-blue rounded-full blur-[80px] pointer-events-none"
        />
      )}
      <div className="relative z-10">
        <div className="relative w-14 h-14 md:w-20 md:h-20 mb-6 md:mb-10 flex items-center justify-center">
          {!isMobile && (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-mist-blue/20 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-2 bg-mist-blue/5 rounded-full blur-md"
              />
            </>
          )}
          <div className="relative w-14 h-14 rounded-2xl bg-white shadow-xl shadow-black/5 flex items-center justify-center border border-black/5">
            <div className="text-mist-blue">{icon}</div>
          </div>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">{desc}</p>
      </div>
    </motion.div>
  );
};
