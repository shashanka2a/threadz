"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export function TshirtDoodle() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Fade in animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );

    // Subtle floating animation
    gsap.to(containerRef.current, {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-40 dark:opacity-30 sm:opacity-50 dark:sm:opacity-40"
    >
      <div className="relative w-full h-full">
        <Image
          src="/t-shirt.png"
          alt="T-Shirt Doodle"
          fill
          className="object-cover object-center remove-bg"
          priority
        />
      </div>
    </div>
  );
}

