"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 bg-white dark:bg-[#1a1a1a] border-t border-stone-100 dark:border-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-20">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="text-lg sm:text-xl md:text-2xl font-serif font-black tracking-tighter text-black dark:text-white">
              THREADZ
            </div>
            <p className="text-stone-400 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold leading-relaxed">
              Custom Clothing. <br />
              Powered by AI. <br />
              Made for India.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-stone-400">
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="#"
                className="hover:text-black dark:hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h5 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">
              Experience
            </h5>
            <ul className="space-y-2 sm:space-y-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400">
              <li>
                <Link
                  href="#studio"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  AI Studio
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Drops Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#quality"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Quality
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h5 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">
              Atelier
            </h5>
            <ul className="space-y-2 sm:space-y-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Fit Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h5 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">
              Newsletter
            </h5>
            <div className="flex border-b border-stone-200 dark:border-stone-800 pb-2 group">
              <input
                type="email"
                placeholder="JOIN@THREADZ.AI"
                className="bg-transparent border-none outline-none text-[9px] sm:text-[10px] font-bold w-full tracking-widest"
              />
              <button className="btn-secondary-gsap text-stone-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px] btn-icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-stone-50 dark:border-stone-900 pt-6 sm:pt-8 md:pt-12 pb-0 gap-3 sm:gap-4 md:gap-6 opacity-40">
          <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.4em] text-center sm:text-left">
            THREADZ™ Custom Clothing. Powered by AI. Made for India.
          </p>
          <div className="flex gap-4 sm:gap-6 md:gap-8 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.4em]">
            <Link
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Track Order
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}




