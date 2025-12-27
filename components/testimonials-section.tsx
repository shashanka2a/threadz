"use client";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Threadz transformed our brand identity. The AI-generated designs are nothing short of revolutionary.",
      author: "Sarah Chen",
      role: "Creative Director, Studio Flux",
    },
    {
      quote: "The quality is exceptional. Every piece feels like a custom luxury item, not mass production.",
      author: "Marcus Rivera",
      role: "Founder, Tech-Wear Ltd",
    },
    {
      quote: "Flexible services and startup-friendly pricing. Perfect for emerging brands like ours.",
      author: "Priya Sharma",
      role: "CEO, Midnight Bloom",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#1a1a1a] text-[#f9f7f2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4 tracking-tighter text-white">
            What Creators Say
          </h2>
          <p className="text-stone-500 text-sm font-light">
            Trusted by designers and brands worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="scroll-reveal bg-[#121212] border border-stone-800 p-8 rounded-2xl"
            >
              <p className="text-stone-300 mb-6 leading-relaxed font-light">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-white font-bold text-sm mb-1">
                  {testimonial.author}
                </p>
                <p className="text-stone-500 text-xs">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

