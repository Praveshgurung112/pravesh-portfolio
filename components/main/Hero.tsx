"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { HiDownload, HiArrowDown } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const floatingCode = [
  { text: "const teach = () => inspire();", x: "10%", y: "20%", delay: 0 },
  { text: "SELECT * FROM knowledge;", x: "70%", y: "15%", delay: 0.3 },
  { text: "git commit -m 'build future'", x: "80%", y: "70%", delay: 0.6 },
  { text: "npm run make-impact", x: "5%", y: "75%", delay: 0.9 },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-8 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/5 rounded-full blur-[140px]" />
      </div>

      {/* Floating code snippets */}
      {floatingCode.map(({ text, x, y, delay }) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ delay, duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden lg:block text-xs font-mono text-white/10 select-none pointer-events-none"
          style={{ left: x, top: y }}
        >
          {text}
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
        {/* LEFT — Text */}
        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Status badge */}
          <motion.div variants={fadeIn("down", 0)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeIn("up", 0.1)} className="space-y-2">
            <p className="text-white/50 font-medium tracking-widest text-sm uppercase">Hi, I&apos;m</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="text-white">Pravesh</span>
              <br />
              <span className="hero-gradient-text">Gurung</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-xl font-semibold text-white/70 max-w-md"
          >
            CS Educator · Full-Stack Developer · Database Architect
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-white/50 text-base leading-relaxed max-w-md"
          >
            Bridging academia and engineering — I build systems that teach, scale, and matter.
            MCA graduate. Faculty. Builder.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeIn("up", 0.4)} className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => scrollTo("projects")}
              className="group relative px-7 py-3.5 rounded-full font-bold text-sm text-white overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 group-hover:scale-105 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>

            <a
              href={siteConfig.resume}
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              <HiDownload size={15} />
              Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeIn("up", 0.5)} className="flex items-center gap-4 pt-2">
            {[
              { href: siteConfig.github, icon: FiGithub, label: "GitHub" },
              { href: siteConfig.linkedin, icon: FiLinkedin, label: "LinkedIn" },
              { href: `mailto:${siteConfig.email}`, icon: FiMail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Icon size={17} />
              </a>
            ))}
            <span className="w-px h-6 bg-white/10" />
            <span className="text-white/30 text-xs font-mono">{siteConfig.email}</span>
          </motion.div>
        </motion.div>

        {/* RIGHT — Visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 blur-2xl opacity-30 scale-105" />

            {/* Card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                  PG
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Pravesh Gurung</p>
                  <p className="text-white/40 text-sm">Dharamshala, HP · India</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: "2+", label: "Yrs Teaching" },
                  { val: "9+", label: "Projects" },
                  { val: "5+", label: "Certs" },
                ].map(({ val, label }) => (
                  <div key={label} className="rounded-2xl bg-white/5 border border-white/10 p-3 text-center">
                    <p className="text-2xl font-black hero-gradient-text">{val}</p>
                    <p className="text-white/40 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "SQL", "PostgreSQL", "Node.js"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Status bar */}
              <div className="flex items-center gap-3 pt-1 border-t border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-white/40 text-xs font-mono">available_for_hire = true</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <HiArrowDown size={18} />
      </motion.div>
    </section>
  );
}
