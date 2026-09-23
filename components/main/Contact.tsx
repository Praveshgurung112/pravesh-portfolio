"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { siteConfig } from "@/config";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section id="contact" className="section-padding relative z-10 px-4 sm:px-8 w-full flex flex-col items-center overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div variants={staggerContainer(0.1, 0)} initial="hidden" animate={inView ? "show" : "hidden"}>

          <motion.div variants={fadeIn("up", 0)} className="flex justify-center mb-4">
            <span className="section-label">Get In Touch</span>
          </motion.div>

          <motion.h2 variants={textVariant(0.1)} className="text-center text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            Say <span className="gradient-text">Hello</span>
          </motion.h2>

          <motion.p variants={fadeIn("up", 0.15)} className="text-center text-white/40 max-w-xl mx-auto mb-16 text-lg leading-relaxed">
            Have a project, opportunity, or just want to connect? My inbox is always open.
          </motion.p>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact info — 2 cols */}
            <motion.div variants={fadeIn("right", 0.2)} className="lg:col-span-2 space-y-5">

              {/* Info card */}
              <div className="glass-card rounded-2xl p-6 border border-white/8 space-y-5">
                {[
                  { icon: HiMail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: HiPhone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                  { icon: HiLocationMarker, label: "Location", value: siteConfig.location, href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="text-violet-400" size={17} />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-mono mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm hover:text-violet-400 transition-colors font-semibold">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-semibold">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social buttons */}
              <div className="flex gap-3">
                {[
                  { href: siteConfig.github, icon: FiGithub, label: "GitHub" },
                  { href: siteConfig.linkedin, icon: FiLinkedin, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass-card border border-white/8 hover:border-violet-500/30 text-white/50 hover:text-white text-sm font-semibold transition-all"
                  >
                    <Icon size={16} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Form — 3 cols */}
            <motion.div variants={fadeIn("left", 0.25)} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 border border-white/8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white/40 text-xs font-mono mb-2">Your Name</label>
                    <input id="name" name="name" type="text" required value={form.name}
                      onChange={handleChange} placeholder="Pravesh Gurung"
                      className="w-full bg-white/5 border border-white/8 focus:border-violet-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/15 outline-none transition-colors font-medium"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/40 text-xs font-mono mb-2">Email Address</label>
                    <input id="email" name="email" type="email" required value={form.email}
                      onChange={handleChange} placeholder="you@email.com"
                      className="w-full bg-white/5 border border-white/8 focus:border-violet-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/15 outline-none transition-colors font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/40 text-xs font-mono mb-2">Message</label>
                  <textarea id="message" name="message" required rows={6} value={form.message}
                    onChange={handleChange} placeholder="What's on your mind?"
                    className="w-full bg-white/5 border border-white/8 focus:border-violet-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/15 outline-none transition-colors resize-none font-medium"
                  />
                </div>

                {status === "success" && (
                  <p className="text-emerald-400 text-sm font-semibold">✓ Message sent! I&apos;ll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-rose-400 text-sm font-semibold">✗ {errorMsg}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl font-black text-sm text-white relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 group-hover:opacity-90 transition-opacity" />
                  <span className="relative">{status === "loading" ? "Sending..." : "Send Message →"}</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
