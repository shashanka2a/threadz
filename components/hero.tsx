"use client";

import { ArrowRight } from "lucide-react";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { MagneticButton } from "@/components/magnetic-button";

export function Hero() {
  const typedWords = [
    "Cyberpunk x Botanical",
    "High-Grit Minimalism",
    "Tokyo Neon Nights",
    "Oversized Structural",
  ];
  const typedText = useTypingEffect(typedWords);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.01)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center max-w-4xl">
        <header className="mb-6">
          <h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.05] tracking-tighter">
            You Design. <br />
            <span className="italic font-light text-stone-700 dark:text-stone-300">
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




