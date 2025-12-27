"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedIllustration } from "@/components/animated-illustration";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const designTextRef = useRef<HTMLSpanElement>(null);
  const makeTextRef = useRef<HTMLSpanElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center justify-center pt-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.01)_0%,_transparent_70%)]" />

      {/* Animated Illustration on Left */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 opacity-40 dark:opacity-30">
        <AnimatedIllustration />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <header className="mb-6">
          <h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.05] tracking-tighter">
            <span
              ref={designTextRef}
              className="inline-block morph-text-design"
            >
              You Design.
            </span>{" "}
            <br />
            <span
              ref={makeTextRef}
              className="italic font-light text-stone-700 dark:text-stone-300 inline-block morph-text-product"
            >
              We Make It.
            </span>
          </h1>
        </header>

        <div className="hero-reveal max-w-lg mx-auto mb-10">
          <p className="text-base md:text-lg text-stone-500 dark:text-stone-400 leading-relaxed font-light">
            Upload your design or create one with AI. <br />
            We'll print it on premium fabric and ship it to your door.
          </p>
        </div>

        <div className="hero-reveal flex items-center justify-center">
          <MagneticButton>
            <div className="flex items-center gap-3 relative z-10">
              Try the AI Studio{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}




