"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
}

export function MagneticButton({ children }: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn || typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      if (distance < 150) {
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.4,
          ease: "power2.out",
        });
        const content = btn.querySelector(".btn-content");
        if (content) {
          gsap.to(content, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      } else {
        handleMouseLeave();
      }
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
      const content = btn.querySelector(".btn-content");
      if (content) {
        gsap.to(content, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className="relative px-8 py-4 bg-[#1a1a1a] dark:bg-[#f9f7f2] text-white dark:text-[#1a1a1a] rounded-lg text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 layer-shadow border border-white/10 overflow-hidden group hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
    >
      <div className="btn-content flex items-center gap-3 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5">
        {children}
      </div>
      <div className="absolute inset-0 bg-white/5 dark:bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </button>
  );
}




