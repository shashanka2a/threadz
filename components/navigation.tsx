"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, User, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
        <div className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold">
          <Link href="#studio" className="hover:opacity-50 transition-all">
            AI Studio
          </Link>
          <Link href="#gallery" className="hover:opacity-50 transition-all">
            Gallery
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <Link href="/" className="text-2xl font-serif font-black tracking-tighter leading-none">
            THREADZ
          </Link>
          <div className="text-[7px] tracking-[0.4em] font-light uppercase opacity-50 mt-1 whitespace-nowrap">
            Generative House
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 md:space-x-6">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
          <button className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-50">
            <User size={14} /> Account
          </button>
          <button className="relative p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all hover:scale-110 active:scale-95">
            <ShoppingBag size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-black dark:bg-white rounded-full border border-[#f9f7f2] dark:border-[#121212]"></span>
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

