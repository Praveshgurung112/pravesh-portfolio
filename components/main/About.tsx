"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { siteConfig } from "@/config";
import { HiLocationMarker } from "react-icons/hi";
import { FaLanguage } from "react-icons/fa";

const highlights = [
  { icon: "🎓", label: "MCA Graduate", sub: "HP Technical University" },
  { icon: "🏛️", label: "Assistant Professor", sub: "RDJ Institutions" },
  { icon: "🗄️", label: "DBA Intern", sub: "PACFC Dharamshala" },
  { icon: "💻", label: "Full-Stack Dev", sub: "React · Node · SQL" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <section id="about" className="section-padding relative z-10 px-4 sm:px-8 w-full flex flex-col items-center overflow-hidden" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div variants={staggerContainer(0.1, 0)} initial="hidden" animate={inView ? "show" : "hidden"}>

          {/* Label */}
          <motion.div variants={fadeIn("up", 0)} className="flex justify-center mb-4">
            <span className="section-label">About Me</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={textVariant(0.1)} className="text-center text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            Who I <span className="gradient-text">Am</span>
          </motion.h2>

          <motion.p variants={fadeIn("up", 0.15)} className="text-center text-white/40 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
            A builder at the intersection of education and engineering.
          </motion.p>

          {/* 2-col layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT — Bio */}
            <motion.div variants={fadeIn("right", 0.2)} className="space-y-6">
              <div className="space-y-5 text-white/60 text-lg leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-semibold">Pravesh Gurung</span>, a Computer Science
                  educator and full-stack developer based in{" "}
                  <span className="text-violet-400 font-semibold">Dharamshala, HP, India</span>.
                  MCA from HP Technical University. I&apos;ve taught as an{" "}
                  <span className="text-fuchsia-400 font-semibold">Assistant Professor</span> — delivering
                  lectures in DBMS, Software Engineering, and Programming.
                </p>
                <p>
                  Outside the classroom, I build full-stack applications with{" "}
                  <span className="text-cyan-400 font-semibold">React, TypeScript, Node.js, and PostgreSQL</span> —
                  specialising in relational database design and SQL optimisation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <HiLocationMarker className="text-violet-400" size={16} />
                  {siteConfig.location}
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <FaLanguage className="text-cyan-400" size={16} />
                  English · Hindi
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["DBMS", "SQL", "React", "Next.js", "Teaching", "Curriculum Design", "REST APIs"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/60 hover:border-violet-500/40 hover:text-white transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Highlight cards */}
            <motion.div variants={fadeIn("left", 0.25)} className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="glass-card rounded-2xl p-5 border border-white/8 hover:border-violet-500/30 transition-all duration-300 cursor-default"
                >
                  <span className="text-3xl mb-3 block">{icon}</span>
                  <p className="text-white font-bold text-sm">{label}</p>
                  <p className="text-white/40 text-xs mt-1">{sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
