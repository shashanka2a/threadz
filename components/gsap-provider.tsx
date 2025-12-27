"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hero Entrance
    gsap.from(".hero-reveal", {
      y: 40,
      scale: 0.98,
      opacity: 0,
      duration: 1.4,
      stagger: 0.15,
      ease: "power4.out",
    });

    // Scroll Reveal Logic - simplified without fade
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      gsap.set(el, { y: 20 });
      observer.observe(el);
    });

    // Global Micro-interactions for Secondary CTAs
    const secondaryBtns = document.querySelectorAll(".btn-secondary-gsap");
    secondaryBtns.forEach((btn) => {
      const arrow = btn.querySelector(".btn-icon");
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { y: -2, duration: 0.3, ease: "power2.out" });
        if (arrow) {
          gsap.to(arrow, { x: 5, duration: 0.3, ease: "power2.out" });
        }
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { y: 0, duration: 0.3, ease: "power2.out" });
        if (arrow) {
          gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}




