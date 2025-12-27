"use client";

import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Threadz transformed our brand identity. The AI-generated designs are nothing short of revolutionary.",
      author: "Sarah Chen",
      role: "Creative Director, Studio Flux",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
    {
      quote: "The quality is exceptional. Every piece feels like a custom luxury item, not mass production.",
      author: "Marcus Rivera",
      role: "Founder, Tech-Wear Ltd",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
      quote: "Flexible services and startup-friendly pricing. Perfect for emerging brands like ours.",
      author: "Priya Sharma",
      role: "CEO, Midnight Bloom",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    },
    {
      quote: "Best decision we made. The AI makes design so easy, and the fabric quality is top-notch.",
      author: "Alex Kumar",
      role: "Designer, Urban Threads",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    },
    {
      quote: "Made in India, but feels like international luxury. Love the oversized fit!",
      author: "Riya Patel",
      role: "Fashion Blogger",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#1a1a1a] text-[#f9f7f2] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4 tracking-tighter text-white">
            What Creators Say
          </h2>
          <p className="text-stone-500 text-base font-light">
            Trusted by designers and brands worldwide
          </p>
        </div>

        {/* Infinite Scroll Carousel */}
        <div className="relative">
          <div className="flex gap-8 animate-scroll-left">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-none w-[340px] md:w-[420px] bg-[#121212] border border-stone-800 p-10 rounded-2xl"
              >
                <p className="text-stone-300 mb-8 leading-relaxed font-light text-base">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-stone-700">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-stone-500 text-sm">
                      {testimonial.role}
                    </p>
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



