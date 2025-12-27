"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { MagneticButton } from "@/components/magnetic-button";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isHoveringGarment, setIsHoveringGarment] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const fabricSwatchesRef = useRef<HTMLDivElement>(null);
  const garmentRef = useRef<HTMLDivElement>(null);
  const designTextRef = useRef<HTMLSpanElement>(null);
  const makeTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!fabricSwatchesRef.current) return;

    const swatches = fabricSwatchesRef.current.querySelectorAll(".fabric-swatch");
    swatches.forEach((swatch) => {
      const rect = swatch.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(mousePosition.x - centerX, 2) +
          Math.pow(mousePosition.y - centerY, 2)
      );

      if (distance < 150) {
        const angle = Math.atan2(
          mousePosition.y - centerY,
          mousePosition.x - centerX
        );
        const moveX = Math.cos(angle) * (150 - distance) * 0.1;
        const moveY = Math.sin(angle) * (150 - distance) * 0.1;
        (swatch as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
      } else {
        (swatch as HTMLElement).style.transform = "translate(0, 0) scale(1)";
      }
    });
  }, [mousePosition]);

  // 3D Garment Animation with Fabric Physics
  useEffect(() => {
    if (!garmentRef.current) return;

    const garment = garmentRef.current;
    const innerGarment = garment.querySelector(".garment-inner") as HTMLElement;
    if (!innerGarment) return;
    
    // Slow continuous rotation
    const rotationTL = gsap.timeline({ repeat: -1 });
    rotationTL.to(innerGarment, {
      rotationY: 360,
      duration: 25,
      ease: "none",
      transformOrigin: "center center",
    });

    // Breathing/fabric physics effect - subtle movement
    const breathingTL = gsap.timeline({ repeat: -1 });
    breathingTL.to(garment, {
      scale: 1.02,
      y: -5,
      duration: 3,
      ease: "sine.inOut",
    }).to(garment, {
      scale: 1,
      y: 0,
      duration: 3,
      ease: "sine.inOut",
    });

    // Hover interaction - speed up rotation and show texture
    const handleMouseEnter = () => {
      setIsHoveringGarment(true);
      rotationTL.timeScale(3); // Speed up rotation 3x
      gsap.to(garment, {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out",
      });
      gsap.to(innerGarment, {
        filter: "brightness(1.2) contrast(1.1)",
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      setIsHoveringGarment(false);
      rotationTL.timeScale(1); // Return to normal speed
      gsap.to(garment, {
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(innerGarment, {
        filter: "brightness(1) contrast(1)",
        duration: 0.5,
      });
    };

    garment.addEventListener("mouseenter", handleMouseEnter);
    garment.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      rotationTL.kill();
      breathingTL.kill();
      garment.removeEventListener("mouseenter", handleMouseEnter);
      garment.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Morphing Typography Animation
  useEffect(() => {
    if (!designTextRef.current || !makeTextRef.current) return;

    const designText = designTextRef.current;
    const makeText = makeTextRef.current;

    // Create morphing effect on scroll/intersection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // "You Design" morphs to line drawing style
            gsap.to(designText, {
              opacity: 0.7,
              letterSpacing: "0.1em",
              duration: 2,
              ease: "power2.out",
            });

            // "We Make It" morphs to 3D product style
            gsap.to(makeText, {
              scale: 1.05,
              textShadow: "0 4px 8px rgba(0,0,0,0.1)",
              duration: 2,
              ease: "power2.out",
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(designText);

    return () => observer.disconnect();
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center justify-center pt-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.01)_0%,_transparent_70%)]" />

      {/* 3D Floating Product Preview with Fabric Physics */}
      <div 
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-30 dark:opacity-20 pointer-events-auto cursor-pointer group/garment"
        ref={garmentRef}
      >
        <div className="relative w-full h-full transform-gpu perspective-1000">
          <div className="relative w-full h-full preserve-3d">
            <div className="garment-inner absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover/garment:shadow-3xl">
              <Image
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800"
                alt="Product Preview"
                fill
                className="object-cover rounded-2xl transition-all duration-500"
              />
              {/* Fabric texture overlay on hover */}
              <div className="absolute inset-0 fabric-texture opacity-0 group-hover/garment:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Fabric Swatches */}
      <div
        ref={fabricSwatchesRef}
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-4 pointer-events-none"
      >
        {[
          { color: "bg-stone-200 dark:bg-stone-800", delay: "0s" },
          { color: "bg-stone-300 dark:bg-stone-700", delay: "0.2s" },
          { color: "bg-stone-400 dark:bg-stone-600", delay: "0.4s" },
        ].map((swatch, idx) => (
          <div
            key={idx}
            className={`fabric-swatch w-16 h-16 md:w-20 md:h-20 ${swatch.color} rounded-lg shadow-lg border border-stone-300 dark:border-stone-600 transition-all duration-300 cursor-pointer`}
            style={{ transitionDelay: swatch.delay }}
          />
        ))}
      </div>

      <div
        className="relative z-10 text-center max-w-4xl"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <header className="mb-6">
          <h1
            className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.05] tracking-tighter"
            style={{
              transform: `translateY(${parallaxOffset * 0.5}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <span
              ref={designTextRef}
              className="inline-block morph-text-design"
              style={{
                transform: `translateY(${parallaxOffset * 0.3}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              You Design.
            </span>{" "}
            <br />
            <span
              ref={makeTextRef}
              className="italic font-light text-stone-700 dark:text-stone-300 inline-block morph-text-product"
              style={{
                transform: `translateY(${parallaxOffset * 0.3}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              We Make It.
            </span>
          </h1>
        </header>

        <div
          className="hero-reveal max-w-lg mx-auto mb-10"
          style={{
            transform: `translateY(${parallaxOffset * 0.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <p className="text-base md:text-lg text-stone-500 dark:text-stone-400 leading-relaxed font-light">
            Upload your design or create one with AI. <br />
            We'll print it on premium fabric and ship it to your door.
          </p>
        </div>

        <div
          className="hero-reveal flex items-center justify-center"
          style={{
            transform: `translateY(${parallaxOffset * 0.1}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <MagneticButton>
            <div className="flex items-center gap-3 relative z-10">
              Try the AI Studio{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}




