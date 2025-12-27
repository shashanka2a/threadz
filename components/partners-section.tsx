"use client";

import Image from "next/image";

export function PartnersSection() {
  const partners = [
    {
      name: "Flexible Services",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      description: "Adaptable solutions for every need",
    },
    {
      name: "Startup Friendly",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      description: "Built for growing businesses",
    },
    {
      name: "Enterprise Ready",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      description: "Scale with confidence",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#1a1a1a] text-[#f9f7f2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-4 tracking-tighter text-white">
            Our Partners
          </h2>
          <p className="text-stone-500 text-xs md:text-sm font-light whitespace-nowrap overflow-hidden text-ellipsis">
            End-to-end fashion design, production, and brand support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="scroll-reveal group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-stone-800 bg-[#121212]">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-serif italic text-white mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-stone-400 text-sm">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

