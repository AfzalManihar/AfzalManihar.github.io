"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const links = ["About", "Skills", "Work", "Experience", "Contact"];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? "border-b border-white/[.07] bg-ink/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="section-wrap flex h-[72px] items-center justify-between">
        <a href="#top" className="group font-display text-lg font-bold tracking-tight text-white">
          Afzal Manihar<span className="inline-block text-cyan transition-transform duration-300 group-hover:translate-x-1">.</span>
        </a>

        <nav className="hidden items-center rounded-full border border-white/[.07] bg-white/[.035] px-2 py-1.5 backdrop-blur-md md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-full px-3 py-1.5 text-sm text-slate-400 transition hover:bg-white/[.07] hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="outline" className="border-white/[.13] bg-white/[.03] py-2">
            <a
              href="https://drive.google.com/file/d/1jRNCgKEr-Jlr-EdbfobuGrOM4nyf7DTn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload /> Resume
            </a>
          </Button>
        </div> 

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/[.1] bg-white/[.03] text-xl md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-wrap flex flex-col gap-2 border-t border-white/[.08] bg-ink/95 py-5 backdrop-blur-xl md:hidden"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-lg text-slate-200 hover:bg-white/[.06]"
            >
              {link}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}