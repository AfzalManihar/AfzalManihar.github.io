"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function HeroOrb() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => { if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; const ctx = gsap.context(() => { gsap.to(".orb-a", { y: -18, x: 14, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut" }); gsap.to(".orb-b", { y: 20, x: -12, duration: 5.5, repeat: -1, yoyo: true, ease: "sine.inOut" }); }, ref); return () => ctx.revert(); }, []);
  return <div ref={ref} aria-hidden className="relative mx-auto aspect-square w-full max-w-[430px]"><div className="grid-pattern absolute inset-0 rounded-full border border-slate-700/60 [mask-image:radial-gradient(circle,black_35%,transparent_70%)]" /><div className="orb-a absolute left-[19%] top-[16%] h-48 w-48 rounded-full bg-cyan/25 blur-3xl" /><div className="orb-b absolute bottom-[13%] right-[15%] h-40 w-40 rounded-full bg-lime/20 blur-3xl" /><div className="absolute inset-[15%] rounded-full border border-cyan/30" /><div className="absolute inset-[27%] rounded-full border border-slate-600/80" /><div className="absolute left-[48%] top-[12%] h-3 w-3 rounded-full bg-cyan shadow-[0_0_25px_8px_rgba(34,211,238,.35)]" /><div className="absolute bottom-[22%] left-[19%] h-2 w-2 rounded-full bg-lime" /><div className="absolute inset-[38%] grid place-items-center rounded-full border border-cyan/40 bg-ink/70 font-mono text-xs text-cyan">AI</div></div>;
}
