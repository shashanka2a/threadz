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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md py-3 shadow-sm"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Left: Desktop Nav Links, Mobile: Empty */}
            <div className="hidden md:flex items-center space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold w-1/3">
              <Link
                href="#studio"
                className="hover:opacity-50 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Studio
              </Link>
              <Link
                href="#gallery"
                className="hover:opacity-50 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </div>

            {/* Center: Logo */}
            <div className="flex-1 md:flex-initial flex justify-center md:justify-center">
              <Link
                href="/"
                className="flex flex-col items-center justify-center text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-xl md:text-2xl font-serif font-black tracking-tighter leading-none">
                  THREADZ
                </div>
                <div className="text-[6px] md:text-[7px] tracking-[0.4em] font-light uppercase opacity-50 mt-0.5 md:mt-1 whitespace-nowrap">
                  Generative House
                </div>
              </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center justify-end space-x-2 md:space-x-6 w-1/3 md:w-auto">
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
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-[#121212] shadow-xl">
          <div className="flex flex-col h-full pt-20 px-6">
            <div className="flex flex-col space-y-6">
              <Link
                href="#studio"
                className="text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-all py-2 border-b border-stone-200 dark:border-stone-800"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Studio
              </Link>
              <Link
                href="#gallery"
                className="text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-all py-2 border-b border-stone-200 dark:border-stone-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-all py-2 border-b border-stone-200 dark:border-stone-800 text-left">
                <User size={16} /> Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

