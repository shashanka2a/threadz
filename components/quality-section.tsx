"use client";

import {
  Fingerprint,
  Layers,
  Maximize2,
  PenTool,
} from "lucide-react";

const qualityItems = [
  {
    id: "01",
    title: "Premium Fiber",
    desc: "Sustainably sourced yarns with high tensile strength for elite skin feel.",
    icon: <Fingerprint />,
  },
  {
    id: "02",
    title: "Heavy Cotton",
    desc: "Dense, high-GSM weave that hangs perfectly with zero sag.",
    icon: <Layers />,
  },
  {
    id: "03",
    title: "Modern Fit",
    desc: "Oversized silhouettes designed with architectural body mapping.",
    icon: <Maximize2 />,
  },
  {
    id: "04",
    title: "Pro Printing",
    desc: "High-precision ink infusion ensuring art stays sharp through washes.",
    icon: <PenTool />,
  },
];

export function QualitySection() {
  return (
    <section id="quality" className="py-32 px-6 bg-[#fdfdfc] dark:bg-[#121212] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 sticky top-32 scroll-reveal">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-4 block">
              Physical Moat
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Quality You <br />
              <span className="italic font-light text-stone-600 dark:text-stone-400">
                Can Feel.
              </span>
            </h2>
            <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed mb-10">
              A digital masterpiece deserves a luxury canvas. We focus on
              heavyweight fabrics and structured drapes. Designed to last.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {qualityItems.map((item, idx) => (
              <div
                key={idx}
                className="scroll-reveal group bg-white dark:bg-[#1a1a1a] border border-stone-100 dark:border-stone-800 p-10 flex flex-col md:flex-row gap-8 items-center justify-between hover:border-black dark:hover:border-white transition-all cursor-default rounded-[2rem] shadow-sm layer-shadow"
              >
                <div className="flex gap-8 items-center w-full">
                  <span className="text-3xl font-serif text-stone-200 dark:text-stone-800 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {item.id}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif italic text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-400 font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="ml-auto opacity-60 group-hover:opacity-100 transition-all text-stone-400 dark:text-stone-600 group-hover:text-black dark:group-hover:text-white hover:scale-110">
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

