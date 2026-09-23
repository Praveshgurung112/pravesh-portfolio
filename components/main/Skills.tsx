"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import type { Skill } from "@/constants";
import { skillCategoryColors, skillCategoryIcons } from "@/constants";

interface SkillsProps { skills: Skill[] }

export default function Skills({ skills }: SkillsProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});
  const categories = Object.keys(grouped).sort();

  return (
    <section id="skills" className="section-padding relative z-10 px-4 sm:px-8 w-full flex flex-col items-center overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div variants={staggerContainer(0.1, 0)} initial="hidden" animate={inView ? "show" : "hidden"}>

          <motion.div variants={fadeIn("up", 0)} className="flex justify-center mb-4">
            <span className="section-label">Skillset</span>
          </motion.div>

          <motion.h2 variants={textVariant(0.1)} className="text-center text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            What I <span className="gradient-text">Know</span>
          </motion.h2>

          <motion.p variants={fadeIn("up", 0.15)} className="text-center text-white/40 max-w-xl mx-auto mb-16 text-lg">
            Tools and technologies I work with day to day.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat}
                variants={fadeIn("up", catIdx * 0.08)}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-6 border bg-gradient-to-br transition-all duration-300 ${
                  skillCategoryColors[cat] ?? "from-white/5 to-white/5 border-white/10"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{skillCategoryIcons[cat] ?? "⚡"}</span>
                  <h3 className="font-bold text-white text-sm">{cat}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {grouped[cat]
                    .sort((a, b) => a.order - b.order)
                    .map((skill, i) => (
                      <motion.span
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: catIdx * 0.08 + i * 0.04 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/10 hover:border-white/30 cursor-default transition-all"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
