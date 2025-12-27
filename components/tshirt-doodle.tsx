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
      className="relative w-64 h-64 md:w-80 md:h-80 opacity-50 dark:opacity-40"
    >
      <Image
        src="https://static.vecteezy.com/system/resources/previews/019/478/028/non_2x/colorful-print-t-shirt-doodle-icon-hand-drawn-illustration-vector.jpg"
        alt="T-Shirt Doodle"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

