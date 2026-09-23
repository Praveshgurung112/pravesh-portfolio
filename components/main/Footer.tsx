"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <div className="text-center sm:text-left">
            <p className="font-black text-2xl tracking-tight hero-gradient-text">PG.</p>
            <p className="text-white/30 text-xs mt-1 font-mono">CS Educator · Full-Stack Developer</p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: siteConfig.github, icon: FiGithub, label: "GitHub" },
              { href: siteConfig.linkedin, icon: FiLinkedin, label: "LinkedIn" },
              { href: `mailto:${siteConfig.email}`, icon: FiMail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>

          <p className="text-white/20 text-xs font-mono">
            © {year} Pravesh Gurung
          </p>
        </div>
      </div>
    </footer>
  );
}
