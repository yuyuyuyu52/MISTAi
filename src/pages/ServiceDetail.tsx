import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ServiceCard } from "../components";

interface ServiceDetailProps {
  badge: string;
  heading1: string;
  heading2: string;
  desc: string;
  badgeIcon: ReactNode;
  cards: { title: string; desc: string; icon: ReactNode }[];
  exploreLabel: string;
}

export default function ServiceDetail({
  badge, heading1, heading2, desc, badgeIcon, cards, exploreLabel,
}: ServiceDetailProps) {
  return (
    <>
      <section className="relative min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="heading-xl mb-5 md:mb-10 text-slate-900">
            {heading1} <br />
            <span className="cool-gradient-text">{heading2}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {desc}
          </p>
        </motion.div>
      </section>

      <section className="py-8 md:py-32 px-6 bg-slate-50/50">
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
