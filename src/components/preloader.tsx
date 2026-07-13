"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setProgress((value) => Math.min(value + (value < 70 ? 11 : 4), 100)), 75); const done = window.setTimeout(() => setShow(false), 820); return () => { clearInterval(timer); clearTimeout(done); }; }, []);
  return <AnimatePresence>{show && <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .35, delay: .15 } }} className="fixed inset-0 z-[100] grid place-items-center bg-[#080d17]"><div className="w-[min(70vw,280px)]"><div className="flex items-end justify-between"><span className="font-display text-3xl font-bold">AM<span className="text-cyan">.</span></span><span className="font-mono text-xs text-cyan">{String(progress).padStart(3, "0")}%</span></div><div className="mt-5 h-px overflow-hidden bg-white/15"><motion.div animate={{ width: `${progress}%` }} className="h-full bg-gradient-to-r from-cyan to-lime" /></div><p className="mt-4 font-mono text-[10px] uppercase tracking-[.2em] text-slate-500">Loading applied intelligence</p></div></motion.div>}</AnimatePresence>;
}
