"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import type { Certification } from "@/constants";
import { HiBadgeCheck } from "react-icons/hi";

interface CertificationsProps { certifications: Certification[] }

const issuerColors: Record<string, string> = {
  HackerRank: "from-emerald-600/20 to-teal-600/20 border-emerald-500/30",
  IBM: "from-blue-600/20 to-cyan-600/20 border-blue-500/30",
  "Great Learning": "from-orange-600/20 to-amber-600/20 border-orange-500/30",
  "EC-Council": "from-rose-600/20 to-pink-600/20 border-rose-500/30",
};

export default function Certifications({ certifications }: CertificationsProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const sorted = [...certifications].sort((a, b) => a.order - b.order);

  return (
    <section id="certifications" className="section-padding relative z-10 px-4 sm:px-8 w-full flex flex-col items-center overflow-hidden" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div variants={staggerContainer(0.1, 0)} initial="hidden" animate={inView ? "show" : "hidden"}>

          <motion.div variants={fadeIn("up", 0)} className="flex justify-center mb-4">
            <span className="section-label">Credentials</span>
          </motion.div>

          <motion.h2 variants={textVariant(0.1)} className="text-center text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            <span className="gradient-text">Certifications</span>
          </motion.h2>

          <motion.p variants={fadeIn("up", 0.15)} className="text-center text-white/40 max-w-xl mx-auto mb-16 text-lg">
            Professional credentials and verified expertise.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.map((cert, idx) => (
              <motion.div
                key={cert.id}
                variants={fadeIn("up", idx * 0.08)}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`rounded-2xl p-6 border bg-gradient-to-br transition-all duration-300 ${
                  issuerColors[cert.issuer] ?? "from-white/5 to-white/5 border-white/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <HiBadgeCheck className="text-violet-400" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-sm leading-snug">{cert.name}</h3>
                    <p className="text-white/40 text-xs mt-2 font-mono">{cert.issuer}</p>
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer"
                        className="text-violet-400 hover:text-violet-300 text-xs mt-3 inline-block font-semibold transition-colors">
                        View Credential →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
