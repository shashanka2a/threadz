"use client";

import Image from "next/image";
import { EnhancedCTAButton } from "@/components/enhanced-cta-button";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    title: "Cyber-Grit 01",
    creator: "House of V",
  },
  {
    url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
    title: "Midnight Bloom",
    creator: "Arjun R.",
  },
  {
    url: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
    title: "Structural Drape",
    creator: "Studio Flux",
  },
  {
    url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
    title: "Linear Flow",
    creator: "Deepak S.",
  },
  {
    url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
    title: "High-Grit Mono",
    creator: "Tech-Wear Ltd",
  },
  {
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    title: "Abstract Bloom",
    creator: "Ria Mehta",
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 md:py-24 bg-[#1a1a1a] text-[#f9f7f2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 md:gap-6">
          <div className="scroll-reveal flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic mb-3 sm:mb-4 tracking-tighter text-white">
              What Others Are Making
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light max-w-md">
              Real designs from real creators. Ready to wear your imagination?
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <EnhancedCTAButton />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="animate-marquee gap-4 sm:gap-6 px-3">
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div
              key={i}
              className="flex-none w-[200px] xs:w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px] aspect-[4/5] relative group cursor-pointer overflow-hidden rounded-lg border-2 border-stone-700/50 layer-shadow"
            >
              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 z-10 pointer-events-none"></div>
              
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover brightness-100 contrast-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 sm:p-6 md:p-8 flex flex-col justify-end z-30">
                <p className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                  {img.creator}
                </p>
                <h4 className="text-base sm:text-lg md:text-xl font-serif italic text-white">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




