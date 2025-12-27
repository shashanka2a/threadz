"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
      className="py-24 bg-[#1a1a1a] text-[#f9f7f2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-4 tracking-tighter text-white">
            What Others Are Making
          </h2>
          <p className="text-stone-500 text-sm font-light max-sm">
            Real designs from real creators. Ready to wear your imagination?
          </p>
        </div>
        <button className="btn-secondary-gsap text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500 hover:text-stone-300 dark:hover:text-stone-400 transition-colors border-b border-stone-800 hover:border-stone-600 dark:hover:border-stone-500 pb-2 flex items-center gap-2">
          Start Your Design{" "}
          <ArrowRight size={12} className="btn-icon" />
        </button>
      </div>

      <div className="relative">
        <div className="animate-marquee gap-6 px-3">
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div
              key={i}
              className="flex-none w-[280px] md:w-[350px] aspect-[4/5] relative group cursor-pointer overflow-hidden rounded-lg border-2 border-stone-700/50 group-hover:border-stone-600/70 dark:group-hover:border-stone-500/70 transition-all duration-500 layer-shadow"
            >
              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 z-10 pointer-events-none"></div>
              
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover grayscale brightness-70 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700"
              />
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-stone-500/0 group-hover:border-stone-500/20 dark:group-hover:border-stone-400/20 rounded-lg transition-all duration-500 pointer-events-none z-20"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all p-8 flex flex-col justify-end z-30">
                <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-1">
                  {img.creator}
                </p>
                <h4 className="text-xl font-serif italic text-white">
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




