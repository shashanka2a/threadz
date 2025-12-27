"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function AnimatedIllustration() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    // Animate drawing paths
    const paths = [path1Ref.current, path2Ref.current, path3Ref.current].filter(Boolean);
    
    paths.forEach((path, index) => {
      if (!path) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        delay: index * 0.5,
        ease: "power2.out",
      });
    });

    // Continuous animation for paths - subtle breathing effect
    const tl = gsap.timeline({ repeat: -1 });
    paths.forEach((path, index) => {
      if (!path) return;
      tl.to(path, {
        opacity: 0.8,
        duration: 1.5,
        ease: "sine.inOut",
      }, index * 0.3)
      .to(path, {
        opacity: 1,
        duration: 1.5,
        ease: "sine.inOut",
      }, index * 0.3 + 0.75);
    });

    // Pulsing circle
    const circleAnimation = circleRef.current ? gsap.to(circleRef.current, {
      scale: 1.2,
      opacity: 0.3,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    }) : null;

    // Floating animation for entire SVG
    const floatAnimation = gsap.to(svgRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // On hover: keep opacity at 1, pause opacity animations
    const container = containerRef.current;
    const handleMouseEnter = () => {
      paths.forEach((path) => {
        if (path) {
          gsap.to(path, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
      tl.pause();
    };

    const handleMouseLeave = () => {
      tl.resume();
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill();
      if (circleAnimation) circleAnimation.kill();
      floatAnimation.kill();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-64 h-64 md:w-80 md:h-80">
      <svg
        ref={svgRef}
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          ref={circleRef}
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-stone-200 dark:text-stone-800"
          opacity="0.2"
        />
        
        {/* Thread/Design paths */}
        <path
          ref={path1Ref}
          d="M 40 100 Q 100 40, 160 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-stone-400 dark:text-stone-600"
        />
        
        <path
          ref={path2Ref}
          d="M 60 100 Q 100 60, 140 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-stone-500 dark:text-stone-500"
        />
        
        <path
          ref={path3Ref}
          d="M 80 100 Q 100 80, 120 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-accent"
        />
        
        {/* Decorative dots */}
        <circle cx="100" cy="100" r="3" fill="currentColor" className="text-accent opacity-60">
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Stitching pattern */}
        <g className="text-stone-300 dark:text-stone-700">
          <line x1="50" y1="100" x2="55" y2="100" strokeWidth="1.5" />
          <line x1="145" y1="100" x2="150" y2="100" strokeWidth="1.5" />
          <line x1="100" y1="50" x2="100" y2="55" strokeWidth="1.5" />
          <line x1="100" y1="145" x2="100" y2="150" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

