"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface EnhancedCTAButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function EnhancedCTAButton({ 
  children = "Start Your Design",
  className = ""
}: EnhancedCTAButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const sparkleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!btnRef.current) return;

    const btn = btnRef.current;
    
    // Subtle pulse animation
    const pulseTL = gsap.timeline({ repeat: -1 });
    pulseTL.to(btn, {
      scale: 1.01,
      duration: 2.5,
      ease: "sine.inOut",
    }).to(btn, {
      scale: 1,
      duration: 2.5,
      ease: "sine.inOut",
    });

    // Sparkle animation on hover
    if (sparkleRef.current && isHovered) {
      const sparkles = sparkleRef.current.querySelectorAll(".sparkle");
      sparkles.forEach((sparkle, i) => {
        const angle = (i / sparkles.length) * Math.PI * 2;
        const distance = 40 + Math.random() * 20;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        gsap.fromTo(
          sparkle,
          {
            opacity: 0,
            scale: 0,
            x: 0,
            y: 0,
          },
          {
            opacity: 0.8,
            scale: 1,
            x: x,
            y: y,
            duration: 0.5,
            delay: i * 0.08,
            ease: "power2.out",
          }
        );
        gsap.to(sparkle, {
          opacity: 0,
          scale: 0,
          duration: 0.3,
          delay: 0.5 + i * 0.08,
        });
      });
    }

    return () => {
      pulseTL.kill();
    };
  }, [isHovered]);

  return (
    <button
      ref={btnRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 transform-gpu ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-white to-stone-50 dark:from-stone-900 dark:via-[#1a1a1a] dark:to-stone-900 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-stone-100 via-stone-50 to-stone-100 dark:from-stone-800 dark:via-[#1a1a1a] dark:to-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent"></div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-white/0 to-white/10 dark:from-white/0 dark:via-white/0 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Sparkles container */}
      <div ref={sparkleRef} className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Sparkles
            key={i}
            size={12}
            className="sparkle absolute top-1/2 left-1/2 text-stone-400 dark:text-stone-500"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        <span className="group-hover:tracking-[0.3em] transition-all duration-300">
          {children}
        </span>
        <ArrowRight
          size={14}
          className="sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
        />
      </span>

      {/* Border glow on hover */}
      <div className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
        <div className="absolute inset-0 rounded-xl border-2 border-stone-300/50 dark:border-stone-600/50"></div>
      </div>
    </button>
  );
}

