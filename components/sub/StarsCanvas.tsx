"use client";

import { useEffect, useRef } from "react";

/**
 * Aurora mesh background — animated gradient orbs + subtle particle field
 * No Three.js dependency needed; pure Canvas 2D for performance
 */

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  alpha: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

const ORB_COLORS = [
  "rgba(124,58,237,",   // violet
  "rgba(219,39,119,",   // fuchsia/pink
  "rgba(6,182,212,",    // cyan
  "rgba(16,185,129,",   // emerald
  "rgba(139,92,246,",   // purple
];

const PARTICLE_COLORS = ["#ffffff", "#c084fc", "#67e8f9", "#f0abfc"];

export default function StarsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // ── Orbs ────────────────────────────────────────────────
    const orbCount = 6;
    const orbs: Orb[] = Array.from({ length: orbCount }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 200 + Math.random() * 250,
      color: ORB_COLORS[i % ORB_COLORS.length],
      alpha: 0.12 + Math.random() * 0.1,
    }));

    // ── Particles ────────────────────────────────────────────
    const particleCount = 120;
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: 0.5 + Math.random() * 1.5,
      alpha: 0.2 + Math.random() * 0.5,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }));

    let animId: number;
    let mouseX = W / 2;
    let mouseY = H / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      // Clear with deep space color
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, W, H);

      // ── Draw orbs ──────────────────────────────────────────
      for (const orb of orbs) {
        // Slight mouse attraction
        orb.vx += (mouseX - orb.x) * 0.000008;
        orb.vy += (mouseY - orb.y) * 0.000008;

        // Drift
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Soft bounce
        if (orb.x < -orb.r) orb.x = W + orb.r;
        if (orb.x > W + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = H + orb.r;
        if (orb.y > H + orb.r) orb.y = -orb.r;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, orb.color + orb.alpha + ")");
        grad.addColorStop(1, orb.color + "0)");
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // ── Draw particles ──────────────────────────────────────
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
