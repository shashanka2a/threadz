"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function TshirtDoodle() {
  const svgRef = useRef<SVGSVGElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = [path1Ref.current, path2Ref.current, path3Ref.current].filter(Boolean);
    
    // Animate drawing the t-shirt
    paths.forEach((path, index) => {
      if (!path) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        delay: index * 0.3,
        ease: "power2.out",
      });
    });

    // Subtle floating animation
    gsap.to(svgRef.current, {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-40 dark:opacity-25">
      <svg
        ref={svgRef}
        viewBox="0 0 200 220"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Sleeve - wider and more realistic */}
        <path
          ref={path1Ref}
          d="M 20 70 Q 10 65, 8 60 Q 6 55, 8 50 Q 10 45, 15 45 Q 20 45, 25 50 Q 30 55, 35 60 L 40 65"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-500 dark:text-stone-500"
        />
        
        {/* Right Sleeve */}
        <path
          ref={path2Ref}
          d="M 180 70 Q 190 65, 192 60 Q 194 55, 192 50 Q 190 45, 185 45 Q 180 45, 175 50 Q 170 55, 165 60 L 160 65"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-500 dark:text-stone-500"
        />
        
        {/* Main T-Shirt Body - wider and boxier */}
        <path
          ref={path3Ref}
          d="M 40 65 L 40 75 L 40 85 L 42 95 L 45 105 L 50 115 L 55 125 L 65 135 L 75 140 L 100 145 L 125 140 L 135 135 L 145 125 L 150 115 L 155 105 L 158 95 L 160 85 L 160 75 L 160 65 M 40 65 Q 50 60, 60 58 Q 70 56, 80 55 Q 90 56, 100 57 Q 110 56, 120 55 Q 130 56, 140 58 Q 150 60, 160 65"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-600 dark:text-stone-400"
        />
        
        {/* Neckline - crew neck */}
        <path
          d="M 80 55 Q 85 52, 90 50 Q 95 52, 100 54 Q 105 52, 110 50 Q 115 52, 120 55"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-500 dark:text-stone-500"
        />
      </svg>
    </div>
  );
}

