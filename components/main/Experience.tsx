"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import type { Experience } from "@/constants";
import { cn } from "@/lib/utils";

interface ExperienceProps { experiences: Experience[] }

const typeMeta: Record<string, { color: string; bg: string; label: string }> = {
  work:       { color: "text-cyan-400",    bg: "bg-cyan-400",    label: "Work" },
  internship: { color: "text-fuchsia-400", bg: "bg-fuchsia-400", label: "Internship" },
  education:  { color: "text-emerald-400", bg: "bg-emerald-400", label: "Education" },
};

export default function ExperienceSection({ experiences }: ExperienceProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const sorted = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <section id="experience" className="section-padding relative z-10 px-4 sm:px-8 w-full flex flex-col items-center overflow-hidden" ref={ref}>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full">
        <motion.div variants={staggerContainer(0.1, 0)} initial="hidden" animate={inView ? "show" : "hidden"}>

          <motion.div variants={fadeIn("up", 0)} className="flex justify-center mb-4">
            <span className="section-label">My Journey</span>
          </motion.div>

          <motion.h2 variants={textVariant(0.1)} className="text-center text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            Experience &amp; <span className="gradient-text">Education</span>
          </motion.h2>

          <motion.p variants={fadeIn("up", 0.15)} className="text-center text-white/40 max-w-xl mx-auto mb-16 text-lg">
            The path that shaped who I am.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-fuchsia-500/20 to-transparent" />

            <div className="space-y-12">
              {sorted.map((item, idx) => {
                const meta = typeMeta[item.type] ?? { color: "text-white/60", bg: "bg-white/20", label: item.type };
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    variants={fadeIn(isLeft ? "right" : "left", idx * 0.08)}
                    className={cn("relative flex md:gap-0", isLeft ? "md:flex-row" : "md:flex-row-reverse")}
                  >
                    {/* Dot */}
                    <div className={cn("absolute left-4 md:left-1/2 -translate-x-1/2 z-10 mt-7 w-3 h-3 rounded-full ring-4 ring-[#030712]", meta.bg)} />

                    {/* Spacer */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card */}
                    <div className={cn("pl-10 md:pl-0 md:w-1/2", isLeft ? "md:pl-10" : "md:pr-10")}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="glass-card rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-300"
                      >
                        {/* Badge */}
                        <span className={cn("inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-3 border", meta.color, "bg-white/5 border-white/10")}>
                          {meta.label}
                        </span>

                        <h3 className="text-white font-black text-lg leading-snug">{item.title}</h3>
                        <p className={cn("font-semibold text-sm mt-1", meta.color)}>{item.company}</p>

                        <p className="text-white/30 text-xs mt-1 mb-4 font-mono">
                          {item.startDate} — {item.endDate ?? "Present"}
                          {item.location && ` · ${item.location}`}
                        </p>

                        <ul className="space-y-2">
                          {item.description.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/55 text-sm leading-relaxed">
                              <span className={cn("mt-1.5 w-1 h-1 rounded-full shrink-0", meta.bg)} />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
