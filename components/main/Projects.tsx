"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import type { Project } from "@/constants";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectsProps { projects: Project[] }

const gradients = [
  "from-violet-600/20 to-fuchsia-600/20 border-violet-500/30",
  "from-cyan-600/20 to-teal-600/20 border-cyan-500/30",
  "from-fuchsia-600/20 to-pink-600/20 border-fuchsia-500/30",
  "from-emerald-600/20 to-cyan-600/20 border-emerald-500/30",
];

export default function Projects({ projects }: ProjectsProps) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: false });
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const featured = sorted.filter((p) => p.featured);
  const rest = sorted.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative z-10 px-4 sm:px-8 w-full flex flex-col items-center overflow-hidden" ref={ref}>
      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div variants={staggerContainer(0.08, 0)} initial="hidden" animate={inView ? "show" : "hidden"}>

          <motion.div variants={fadeIn("up", 0)} className="flex justify-center mb-4">
            <span className="section-label">Projects</span>
          </motion.div>

          <motion.h2 variants={textVariant(0.1)} className="text-center text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            What I&apos;ve <span className="gradient-text">Built</span>
          </motion.h2>

          <motion.p variants={fadeIn("up", 0.15)} className="text-center text-white/40 max-w-xl mx-auto mb-16 text-lg">
            A selection of projects across web development, databases, and tooling.
          </motion.p>

          {/* Featured — larger cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {featured.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", idx * 0.1)}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`rounded-2xl p-7 border bg-gradient-to-br transition-all duration-300 group flex flex-col ${
                  gradients[idx % gradients.length]
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white font-black text-lg">
                    {project.title.charAt(0)}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        className="text-white/30 hover:text-white transition-colors hover:scale-110">
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live"
                        className="text-white/30 hover:text-white transition-colors hover:scale-110">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <span className="inline-block mb-3 text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10 w-fit">
                  Featured
                </span>

                <h3 className="text-white font-black text-xl mb-3 group-hover:gradient-text transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/8 border border-white/10 text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rest — smaller grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", (featured.length + idx) * 0.07)}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-5 border border-white/8 hover:border-white/15 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">
                    {project.title.charAt(0)}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        className="text-white/25 hover:text-white transition-colors">
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live"
                        className="text-white/25 hover:text-white transition-colors">
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-white/80 transition-colors">{project.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.techStack.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs font-semibold bg-white/5 border border-white/8 text-white/40">
                      {t}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-white/5 border border-white/8 text-white/30">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
