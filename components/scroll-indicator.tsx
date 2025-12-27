"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Hide immediately on any scroll (threshold of 50px for smooth transition)
      if (scrollY > 50) {
        setOpacity(0);
        setIsVisible(false);
      } else {
        // Fade out smoothly as user starts scrolling
        const fadeThreshold = 50;
        const newOpacity = Math.max(0, 1 - (scrollY / fadeThreshold));
        setOpacity(newOpacity);
        setIsVisible(newOpacity > 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 transition-opacity duration-300 ease-out"
      style={{ opacity }}
    >
      <div className="w-px h-16 bg-stone-300 dark:bg-stone-700 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-accent transition-all duration-300"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
      <ChevronDown
        size={20}
        className="text-stone-400 dark:text-stone-600 animate-bounce"
      />
    </div>
  );
}

