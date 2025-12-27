"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function TshirtDoodle() {
  const svgRef = useRef<SVGSVGElement>(null);
  const outlineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!svgRef.current || !outlineRef.current) return;

    // Animate drawing the outline
    const outline = outlineRef.current;
    const length = outline.getTotalLength();
    outline.style.strokeDasharray = `${length}`;
    outline.style.strokeDashoffset = `${length}`;
    
    gsap.to(outline, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.out",
    });

    // Fade in the fill and texture
    gsap.fromTo(
      svgRef.current.querySelectorAll(".tshirt-fill, .tshirt-texture"),
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 1, ease: "power2.out" }
    );

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
    <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-50 dark:opacity-40">
      <svg
        ref={svgRef}
        viewBox="0 0 200 240"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* T-Shirt Fill - Periwinkle/Cornflower Blue */}
        <path
          className="tshirt-fill"
          d="M 35 70 Q 25 65, 18 60 Q 12 55, 15 50 Q 18 45, 25 48 Q 30 50, 38 58 Q 40 60, 42 65 Q 45 70, 50 75 L 50 85 L 50 100 L 52 115 L 55 130 L 58 145 L 62 160 L 68 175 L 75 185 L 85 192 L 100 198 L 115 192 L 125 185 L 132 175 L 138 160 L 142 145 L 145 130 L 148 115 L 150 100 L 150 85 L 150 75 Q 155 70, 158 65 Q 160 60, 162 58 Q 170 50, 175 48 Q 182 45, 185 50 Q 188 55, 182 60 Q 175 65, 165 70 Q 160 75, 155 80 Q 150 85, 145 88 Q 140 90, 135 92 Q 130 90, 125 88 Q 120 85, 115 82 Q 110 80, 105 78 Q 100 80, 95 78 Q 90 80, 85 82 Q 80 85, 75 88 Q 70 90, 65 92 Q 60 90, 55 88 Q 50 85, 45 80 Q 40 75, 35 70 Z"
          fill="#8B9DC3"
          opacity="0.9"
        />
        
        {/* Wavy Hand-Drawn Outline */}
        <path
          ref={outlineRef}
          d="M 35 70 Q 25 65, 18 60 Q 12 55, 15 50 Q 18 45, 25 48 Q 30 50, 38 58 Q 40 60, 42 65 Q 45 70, 50 75 L 50 85 L 50 100 L 52 115 L 55 130 L 58 145 L 62 160 L 68 175 L 75 185 L 85 192 L 100 198 L 115 192 L 125 185 L 132 175 L 138 160 L 142 145 L 145 130 L 148 115 L 150 100 L 150 85 L 150 75 Q 155 70, 158 65 Q 160 60, 162 58 Q 170 50, 175 48 Q 182 45, 185 50 Q 188 55, 182 60 Q 175 65, 165 70 Q 160 75, 155 80 Q 150 85, 145 88 Q 140 90, 135 92 Q 130 90, 125 88 Q 120 85, 115 82 Q 110 80, 105 78 Q 100 80, 95 78 Q 90 80, 85 82 Q 80 85, 75 88 Q 70 90, 65 92 Q 60 90, 55 88 Q 50 85, 45 80 Q 40 75, 35 70 Z"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Rounded Neckline */}
        <path
          d="M 75 88 Q 80 85, 85 82 Q 90 80, 95 78 Q 100 80, 105 78 Q 110 80, 115 82 Q 120 85, 125 88"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Lighter Blue Scribbled Texture Lines - Horizontal/Digital */}
        <path
          className="tshirt-texture"
          d="M 55 110 Q 70 108, 85 110 Q 100 112, 115 110 Q 130 108, 145 110"
          fill="none"
          stroke="#B8C5E0"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        
        <path
          className="tshirt-texture"
          d="M 60 130 Q 75 128, 90 130 Q 105 132, 120 130 Q 135 128, 140 130"
          fill="none"
          stroke="#B8C5E0"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        
        <path
          className="tshirt-texture"
          d="M 65 90 Q 80 88, 95 90 Q 110 92, 125 90 Q 135 88, 140 90"
          fill="none"
          stroke="#B8C5E0"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Diagonal Scribbled Lines */}
        <path
          className="tshirt-texture"
          d="M 60 100 Q 75 105, 90 100 Q 105 95, 120 100"
          fill="none"
          stroke="#B8C5E0"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        <path
          className="tshirt-texture"
          d="M 70 120 Q 85 125, 100 120 Q 115 115, 130 120"
          fill="none"
          stroke="#B8C5E0"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Small Dots - Scattered Pattern */}
        <circle className="tshirt-texture" cx="70" cy="95" r="2.5" fill="#B8C5E0" opacity="0.8" />
        <circle className="tshirt-texture" cx="130" cy="90" r="2" fill="#B8C5E0" opacity="0.8" />
        <circle className="tshirt-texture" cx="85" cy="140" r="2.5" fill="#B8C5E0" opacity="0.8" />
        <circle className="tshirt-texture" cx="115" cy="135" r="2" fill="#B8C5E0" opacity="0.8" />
        <circle className="tshirt-texture" cx="100" cy="110" r="2" fill="#B8C5E0" opacity="0.8" />
      </svg>
    </div>
  );
}

