import { motion } from "motion/react";
import type { ReactNode } from "react";
import { FloatingOrb, ServiceCard } from "../components";

interface ServiceDetailProps {
  badge: string;
  heading1: string;
  heading2: string;
  desc: string;
  badgeIcon: ReactNode;
  cards: { title: string; desc: string; icon: ReactNode }[];
  exploreLabel: string;
  orbColor1?: string;
  orbColor2?: string;
}

export default function ServiceDetail({
  badge, heading1, heading2, desc, badgeIcon, cards, exploreLabel,
  orbColor1 = "#00d98b", orbColor2 = "#0070f3",
}: ServiceDetailProps) {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="fresh-bg" />
        <FloatingOrb color={orbColor1} size="35vw" top="-10%" left="60%" delay={0} />
        <FloatingOrb color={orbColor2} size="30vw" top="50%" left="-5%" delay={3} />
        <FloatingOrb color="#7928ca" size="25vw" top="60%" left="30%" delay={6} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-black/5 text-slate-600 text-[10px] font-bold tracking-[0.2em] mb-10 uppercase shadow-sm">
            {badgeIcon}
            {badge}
          </div>
          <h1 className="heading-xl mb-10 text-slate-900">
            {heading1} <br />
            <span className="cool-gradient-text">{heading2}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {desc}
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <ServiceCard
                key={card.title}
                index={i}
                title={card.title}
                desc={card.desc}
                icon={card.icon}
                exploreLabel={exploreLabel}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
