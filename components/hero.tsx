"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MagneticButton } from "@/components/magnetic-button";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const designTextRef = useRef<HTMLSpanElement>(null);
  const makeTextRef = useRef<HTMLSpanElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-20 sm:pt-24 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.01)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <header className="mb-4 sm:mb-6">
          <h1 className="hero-reveal text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif mb-4 sm:mb-6 leading-[1.05] tracking-tighter px-2">
            <span
              ref={designTextRef}
              className="inline-block morph-text-design"
            >
              You Design.
            </span>{" "}
            <br className="hidden sm:block" />
            <span
              ref={makeTextRef}
              className="italic font-light text-stone-700 dark:text-stone-300 inline-block morph-text-product"
            >
              We Make It.
            </span>
          </h1>
        </header>

        <div className="hero-reveal max-w-lg mx-auto mb-6 sm:mb-8 md:mb-10 px-4">
          <p className="text-sm sm:text-base md:text-lg text-stone-500 dark:text-stone-400 leading-relaxed font-light">
            Upload your design or create one with AI. <br className="hidden sm:block" />
            We'll print it on premium fabric and ship it to your door.
          </p>
        </div>

        <div className="hero-reveal flex items-center justify-center px-4">
          <MagneticButton>
            <div className="flex items-center gap-2 sm:gap-3 relative z-10 text-[9px] xs:text-[10px]">
              Try the AI Studio{" "}
              <ArrowRight
                size={12}
                className="sm:w-[14px] sm:h-[14px] group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}




