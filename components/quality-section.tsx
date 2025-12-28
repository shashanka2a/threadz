"use client";

import {
  Fingerprint,
  Layers,
  Maximize2,
  PenTool,
} from "lucide-react";
import { CustomCheckmark } from "@/components/custom-checkmark";

const qualityItems = [
  {
    id: "01",
    title: "No Design Skills Needed",
    desc: "If you can text, you can design. Our AI does the hard work.",
    icon: <Fingerprint />,
  },
  {
    id: "02",
    title: "Heavyweight Fabric",
    desc: "We use thick, high-quality cotton (High GSM). It feels expensive and lasts long.",
    icon: <Layers />,
  },
  {
    id: "03",
    title: "Perfect 'Oversized' Fit",
    desc: "No more tight, awkward shirts. We specialize in the baggy, modern look.",
    icon: <Maximize2 />,
  },
  {
    id: "04",
    title: "Made in India",
    desc: "Supporting local craft with world-class technology.",
    icon: <PenTool />,
  },
];

export function QualitySection() {
  return (
    <section id="quality" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#fdfdfc] dark:bg-[#121212] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 scroll-reveal">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-3 sm:mb-4 block">
              WHY THREADZ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6 sm:mb-8">
              Quality That <br />
              <span className="italic font-light text-stone-600 dark:text-stone-400">
                Speaks.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-stone-500 dark:text-stone-400 font-light leading-relaxed mb-4 sm:mb-6">
              No design skills needed. Heavyweight fabric. Perfect oversized fit. Made in India.
            </p>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                <CustomCheckmark className="text-stone-700 dark:text-stone-300 flex-shrink-0" />
                <span>Soft & Thick: 100% Premium Cotton</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                <CustomCheckmark className="text-stone-700 dark:text-stone-300 flex-shrink-0" />
                <span>Bold Prints: Colors that don't fade after a wash</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                <CustomCheckmark className="text-stone-700 dark:text-stone-300 flex-shrink-0" />
                <span>Sustainable: We only make what you order. No waste.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {qualityItems.map((item, idx) => (
              <div
                key={idx}
                className="scroll-reveal group bg-white dark:bg-[#1a1a1a] border border-stone-100 dark:border-stone-800 p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-start sm:items-center justify-between hover:border-black dark:hover:border-white transition-all cursor-default rounded-xl sm:rounded-2xl md:rounded-[2rem] shadow-sm layer-shadow"
              >
                <div className="flex gap-4 sm:gap-6 md:gap-8 items-start sm:items-center w-full">
                  <span className="text-2xl sm:text-3xl font-serif text-stone-200 dark:text-stone-800 group-hover:text-black dark:group-hover:text-white transition-colors flex-shrink-0">
                    {item.id}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h3 className="text-lg sm:text-xl font-serif italic text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-400 font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="sm:ml-auto opacity-60 group-hover:opacity-100 transition-all text-stone-400 dark:text-stone-600 group-hover:text-black dark:group-hover:text-white hover:scale-110 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

