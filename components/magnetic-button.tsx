"use client";

import { useEffect, useRef, ReactNode, useState } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
}

export function MagneticButton({ children }: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

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
    
    // Ripple effect on click
    const handleClick = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      
      setRipples((prev) => [...prev, { id, x, y }]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      }, 600);
    };
    
    btn.addEventListener("click", handleClick);
    
    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className="relative px-8 py-4 bg-[#1a1a1a] dark:bg-[#f9f7f2] text-white dark:text-[#1a1a1a] rounded-lg text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 overflow-hidden group active:scale-[0.98] transform-gpu"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateZ(20px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateZ(0px) scale(1)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Subtle Border on Hover */}
      <div className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
        <div className="absolute inset-0 rounded-lg border border-stone-300/30 dark:border-stone-600/30"></div>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 via-white/5 to-white/10 dark:from-white/5 dark:via-white/3 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-stone-400/20 dark:bg-stone-500/20 pointer-events-none animate-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      
      <div className="btn-content flex items-center gap-3 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5">
        {children}
      </div>
      <div className="absolute inset-0 bg-white/5 dark:bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </button>
  );
}




