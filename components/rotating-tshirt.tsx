"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export function RotatingTshirt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;

    const container = containerRef.current;
    const inner = innerRef.current;

    // Slow continuous rotation
    const rotationTL = gsap.timeline({ repeat: -1 });
    rotationTL.to(inner, {
      rotationY: 360,
      duration: 20,
      ease: "none",
      transformOrigin: "center center",
    });

    // Subtle floating/breathing effect
    const breathingTL = gsap.timeline({ repeat: -1 });
    breathingTL.to(container, {
      y: -8,
      scale: 1.02,
      duration: 3,
      ease: "sine.inOut",
    }).to(container, {
      y: 0,
      scale: 1,
      duration: 3,
      ease: "sine.inOut",
    });

    // Hover interaction - speed up rotation
    const handleMouseEnter = () => {
      rotationTL.timeScale(2);
      gsap.to(container, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      rotationTL.timeScale(1);
      gsap.to(container, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      rotationTL.kill();
      breathingTL.kill();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 transform-gpu perspective-1000 flex items-center justify-center"
    >
      <div className="relative w-[70%] h-[70%] preserve-3d">
        <div
          ref={innerRef}
          className="relative w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800"
            alt="Rotating T-Shirt"
            fill
            className="object-contain rounded-2xl"
            priority
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

