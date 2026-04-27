import { motion } from "motion/react";

export const FloatingOrb = ({ color, size, top, left, delay }: any) => {
  const d = delay || 0;
  return (
    <div
      className="floating-orb"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        top,
        left,
        '--orb-duration': `${18 + d * 2}s`,
        '--orb-delay': `${d}s`,
      } as React.CSSProperties}
    />
  );
};

export const ServiceCard = ({ title, desc, icon, index, onClick }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: index * 0.08 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`glass-card group relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 overflow-hidden ${onClick ? "cursor-pointer" : ""}`}
    >
      <div className="relative z-10">
        <div className="relative w-14 h-14 md:w-20 md:h-20 mb-6 md:mb-10 flex items-center justify-center">
          <div className="hidden md:block absolute inset-0 border-2 border-dashed border-mist-blue/20 rounded-full spin-slow" />
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
