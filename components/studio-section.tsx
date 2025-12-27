"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Palette,
  ChevronRight,
  Scan,
} from "lucide-react";
import { useTypingEffect } from "@/hooks/use-typing-effect";

export function StudioSection() {
  const [appStep, setAppStep] = useState(0);
  const [isIllustrationInView, setIsIllustrationInView] = useState(false);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const typedWords = [
    "Cyberpunk x Botanical",
    "High-Grit Minimalism",
    "Tokyo Neon Nights",
    "Oversized Structural",
  ];
  const typedText = useTypingEffect(typedWords);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIllustrationInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (illustrationRef.current) {
      observer.observe(illustrationRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isIllustrationInView) {
      timer = setInterval(() => {
        setAppStep((prev) => (prev + 1) % 3);
      }, 1500);
    } else {
      setAppStep(0);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isIllustrationInView]);

  return (
    <section
      ref={illustrationRef}
      id="studio"
      className="py-24 px-6 bg-white dark:bg-[#1a1a1a] border-y border-stone-100 dark:border-stone-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="scroll-reveal relative order-2 lg:order-1">
            <div className="aspect-square bg-[#f9f7f2] dark:bg-[#121212] rounded-3xl overflow-hidden relative border border-stone-200 dark:border-stone-800 shadow-xl group layer-shadow">
              {/* Step 0: Typing Animation */}
              <div
                className={`absolute inset-0 transition-all duration-700 flex flex-col items-center justify-center p-12 ${
                  appStep === 0
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <div className="w-full max-w-xs space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-widest font-black opacity-30">
                      Aesthetic Brief
                    </span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-black dark:bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-14 w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl flex items-center px-5 shadow-inner">
                      <Palette size={14} className="mr-3 opacity-30" />
                      <div className="text-[11px] font-bold tracking-widest text-black dark:text-white overflow-hidden whitespace-nowrap">
                        {typedText}
                        <span className="cursor-blink ml-1 border-r border-black dark:border-white"></span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 opacity-40">
                      <div className="h-6 bg-stone-200 dark:bg-stone-800 rounded-md"></div>
                      <div className="h-6 bg-stone-900 dark:bg-stone-500 rounded-md"></div>
                      <div className="h-6 bg-stone-200 dark:bg-stone-800 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 1: Generating Animation */}
              <div
                className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
                  appStep === 1 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-stone-200 dark:border-stone-800 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-black dark:border-t-white rounded-full animate-spin"></div>
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                    Generating...
                  </p>
                </div>
              </div>

              {/* Step 2: Final Result */}
              <div
                className={`absolute inset-0 transition-all duration-1000 flex items-center justify-center p-12 ${
                  appStep === 2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-stone-100 dark:border-stone-800">
                  <Image
                    src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800"
                    alt="Studio Crafted Tee"
                    fill
                    className="object-cover brightness-[0.95] dark:brightness-75 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/5"></div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-stone-200 dark:border-stone-700">
                      <span className="text-[8px] font-black uppercase tracking-widest flex items-center gap-1 text-black dark:text-white">
                        <Scan size={8} /> Artisan Finish
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-white text-left drop-shadow-md">
                    <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-70 mb-1">
                      Generated Sample 001
                    </p>
                    <h4 className="text-2xl font-serif italic leading-none">
                      Boxy Heavyweight
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-4">
              <span className="text-[10px] font-black tracking-widest text-stone-300 dark:text-stone-700 italic">
                CREATIVE PROCESS
              </span>
              <div className="h-px w-10 bg-stone-200 dark:bg-stone-800" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
              Design Studio. <br />
              <span className="italic font-light text-stone-700 dark:text-stone-300">
                Generative Logic.
              </span>
            </h2>
            <div className="space-y-6 text-stone-500 dark:text-stone-400 font-light leading-relaxed">
              <p>
                Threadz uses high-end AI that acts as your personal senior
                creative director. It understands the nuances of modern
                aesthetics. From Cyberpunk grit to Botanical minimalism.
              </p>
              <p>
                Simply set your mood and watch as our engine builds an original
                garment for you. No technical skills required. Just your unique
                vision and our machine precision.
              </p>
            </div>
            <button className="btn-secondary-gsap flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] pb-1 border-b border-stone-200 dark:border-stone-800 hover:border-black dark:hover:border-white transition-colors">
              Start Project{" "}
              <ChevronRight
                size={14}
                className="btn-icon opacity-40 group-hover:opacity-100"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

