import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Award,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Sparkles,
  Layers,
  User,
  Palette,
  Scissors,
  Zap,
  Maximize2,
  Sun,
  Moon,
  ChevronRight,
  PenTool,
  Activity,
  Scan,
  Cpu,
  Fingerprint
} from 'lucide-react';

// --- UTILS ---

const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delayBetween);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return words[index].substring(0, subIndex);
};

const useGSAP = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    script.onload = () => {
      const gsap = window.gsap;
      if (!gsap) return;

      // Hero Entrance
      gsap.from('.hero-reveal', {
        y: 40,
        scale: 0.98,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: 'power4.out'
      });

      // Scroll Reveal Logic
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' });
          }
        });
      }, { threshold: 0.15 });

      document.querySelectorAll('.scroll-reveal').forEach(el => {
        gsap.set(el, { opacity: 0, y: 30 });
        observer.observe(el);
      });

      // Global Micro-interactions for Secondary CTAs
      const secondaryBtns = document.querySelectorAll('.btn-secondary-gsap');
      secondaryBtns.forEach(btn => {
        const arrow = btn.querySelector('.btn-icon');
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, { y: -2, duration: 0.3, ease: 'power2.out' });
          if (arrow) gsap.to(arrow, { x: 5, duration: 0.3, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { y: 0, duration: 0.3, ease: 'power2.out' });
          if (arrow) gsap.to(arrow, { x: 0, duration: 0.3, ease: 'power2.out' });
        });
      });
    };
    document.head.appendChild(script);
  }, []);
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [appStep, setAppStep] = useState(0); 
  const [isIllustrationInView, setIsIllustrationInView] = useState(false);
  
  const illustrationRef = useRef(null);
  const magneticBtnRef = useRef(null);
  const typedWords = ["Cyberpunk x Botanical", "High-Grit Minimalism", "Tokyo Neon Nights", "Oversized Structural"];
  const typedText = useTypingEffect(typedWords);

  useGSAP();

  // Magnetic Button Effect Logic
  useEffect(() => {
    const btn = magneticBtnRef.current;
    if (!btn) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x*x + y*y);
      if (distance < 150) {
        window.gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.4,
          ease: 'power2.out'
        });
        window.gsap.to(btn.querySelector('.btn-content'), {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.4,
          ease: 'power2.out'
        });
      } else {
        handleMouseLeave();
      }
    };

    const handleMouseLeave = () => {
      window.gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
      window.gsap.to(btn.querySelector('.btn-content'), { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsIllustrationInView(entry.isIntersecting);
    }, { threshold: 0.3 });

    if (illustrationRef.current) observer.observe(illustrationRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isIllustrationInView) {
      timer = setInterval(() => {
        setAppStep((prev) => (prev + 1) % 3);
      }, 4500);
    } else {
      setAppStep(0);
    }
    return () => clearInterval(timer);
  }, [isIllustrationInView]);

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800", title: "Cyber-Grit 01", creator: "House of V" },
    { url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800", title: "Midnight Bloom", creator: "Arjun R." },
    { url: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800", title: "Structural Drape", creator: "Studio Flux" },
    { url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800", title: "Linear Flow", creator: "Deepak S." },
    { url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800", title: "High-Grit Mono", creator: "Tech-Wear Ltd" },
    { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800", title: "Abstract Bloom", creator: "Ria Mehta" },
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-[#f9f7f2] dark:bg-[#121212] text-[#1a1a1a] dark:text-[#f9f7f2] font-sans transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black overflow-x-hidden">
        
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes loomX {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          @keyframes loomY {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-marquee { display: flex; width: 200%; animation: marquee 40s linear infinite; }
          .animate-marquee:hover { animation-play-state: paused; }
          .loom-x { animation: loomX 3s infinite linear; }
          .loom-y { animation: loomY 4s infinite linear; }
          .cursor-blink { animation: blink 0.8s infinite; }
          .layer-shadow { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 20px 25px -5px rgba(0,0,0,0.05); }
          .dark .layer-shadow { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3), 0 20px 25px -5px rgba(0,0,0,0.2); }
        `}</style>

        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
            
            <div className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold">
              <a href="#" className="hover:opacity-50 transition-all">AI Studio</a>
              <a href="#" className="hover:opacity-50 transition-all">Gallery</a>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-2xl font-serif font-black tracking-tighter leading-none">THREADZ</div>
              <div className="text-[7px] tracking-[0.4em] font-light uppercase opacity-50 mt-1 whitespace-nowrap">Generative House</div>
            </div>

            <div className="flex items-center justify-end space-x-3 md:space-x-6">
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-50">
                <User size={14} /> Account
              </button>
              <button className="relative p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all hover:scale-110 active:scale-95">
                <ShoppingBag size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-black dark:bg-white rounded-full border border-[#f9f7f2] dark:border-[#121212]"></span>
              </button>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-24 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.01)_0%,_transparent_70%)]" />
          
          <div className="relative z-10 text-center max-w-4xl">
            <header className="mb-6">
              <h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.05] tracking-tighter">
                Curate Your <br />
                <span className="italic font-light text-stone-700 dark:text-stone-300">Perfect Fit.</span>
              </h1>
            </header>
            
            <div className="hero-reveal max-w-lg mx-auto mb-10">
              <p className="text-base md:text-lg text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                Why wear mass-produced? Use our Generative AI Studio to build luxury-grade blanks that match your unique aesthetic.
              </p>
            </div>

            {/* GSAP PRIMARY CTA - Magnetic & Elegant */}
            <div className="hero-reveal flex items-center justify-center">
              <button 
                ref={magneticBtnRef}
                className="relative px-12 py-5 bg-[#1a1a1a] dark:bg-[#f9f7f2] text-white dark:text-[#1a1a1a] rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 layer-shadow border border-white/10 overflow-hidden group"
              >
                <div className="btn-content flex items-center gap-3 relative z-10">
                  Enter Studio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-white/5 dark:bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </section>

        {/* 1. THE STUDIO: APP FLOW ILLUSTRATION */}
        <section ref={illustrationRef} className="py-24 px-6 bg-white dark:bg-[#1a1a1a] border-y border-stone-100 dark:border-stone-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              <div className="scroll-reveal relative order-2 lg:order-1">
                <div className="aspect-square bg-[#f9f7f2] dark:bg-[#121212] rounded-3xl overflow-hidden relative border border-stone-200 dark:border-stone-800 shadow-xl group layer-shadow">
                  
                  {/* Step 0: Aesthetic Choice */}
                  <div className={`absolute inset-0 transition-all duration-700 flex flex-col items-center justify-center p-12 ${appStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="w-full max-w-xs space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-widest font-black opacity-30">Aesthetic Brief</span>
                        <div className="flex gap-1">
                           <div className="w-1 h-1 bg-black dark:bg-white rounded-full"></div>
                           <div className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-14 w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl flex items-center px-5 shadow-inner">
                          <Palette size={14} className="mr-3 opacity-30" />
                          <div className="text-[11px] font-bold tracking-widest text-black dark:text-white overflow-hidden whitespace-nowrap">
                            {typedText}
                            <span className="cursor-blink ml-1 border-r border-black dark:border-white"></span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 opacity-40">
                          <div className="h-6 bg-stone-200 dark:bg-stone-800 rounded-md"></div>
                          <div className="h-6 bg-stone-900 dark:bg-stone-500 rounded-md"></div>
                          <div className="h-6 bg-stone-200 dark:bg-stone-800 rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 1: Neural-Loom Synthesis */}
                  <div className={`absolute inset-0 transition-all duration-700 flex flex-col items-center justify-center ${appStep === 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="relative w-80 h-80 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 z-0">
                        {[...Array(8)].map((_, i) => (
                          <div key={`lx-${i}`} className="absolute w-full h-[1px] bg-black dark:bg-white opacity-10 loom-x" style={{ top: `${15 + i * 10}%`, animationDelay: `${i * 0.2}s` }} />
                        ))}
                        {[...Array(8)].map((_, i) => (
                          <div key={`ly-${i}`} className="absolute h-full w-[1px] bg-black dark:bg-white opacity-10 loom-y" style={{ left: `${15 + i * 10}%`, animationDelay: `${i * 0.3}s` }} />
                        ))}
                      </div>
                      <div className="relative z-10 w-48 h-64 border border-black/10 dark:border-white/10 rounded-2xl flex items-center justify-center">
                         <div className="absolute inset-0 bg-stone-100/30 dark:bg-stone-900/30 backdrop-blur-[2px]"></div>
                         <Cpu size={48} className="text-black dark:text-white animate-pulse opacity-40" />
                         <div className="absolute inset-0 p-8 grid grid-cols-4 grid-rows-6 gap-2">
                           {[...Array(24)].map((_, i) => (
                             <div key={i} className="bg-black dark:bg-white rounded-[1px] transition-all duration-1000" style={{ opacity: Math.random() * 0.3 }} />
                           ))}
                         </div>
                      </div>
                      <div className="absolute bottom-6 text-center w-full z-20">
                         <div className="flex justify-center gap-1 mb-3">
                           {[...Array(3)].map((_, i) => (
                             <div key={i} className="w-1 h-1 bg-black dark:bg-white rounded-full animate-bounce" style={{ animationDelay: `${i*0.2}s` }} />
                           ))}
                         </div>
                         <p className="text-[9px] font-bold uppercase tracking-[0.5em] opacity-60">Neural Fabric Synthesis...</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Master Piece */}
                  <div className={`absolute inset-0 transition-all duration-1000 flex items-center justify-center p-12 ${appStep === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-stone-100 dark:border-stone-800">
                      <img 
                        src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800" 
                        alt="Studio Crafted Tee" 
                        className="w-full h-full object-cover brightness-[0.95] dark:brightness-75 group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-black/5"></div>
                      <div className="absolute top-6 right-6 flex flex-col items-end gap-2 text-white">
                        <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-stone-200 dark:border-stone-700">
                           <span className="text-[8px] font-black uppercase tracking-widest flex items-center gap-1 text-black dark:text-white">
                             <Scan size={8} /> Artisan Finish
                           </span>
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-8 text-white text-left drop-shadow-md">
                        <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-70 mb-1">Generated Sample 001</p>
                        <h4 className="text-2xl font-serif italic leading-none">Boxy Heavyweight</h4>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="scroll-reveal space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center gap-4">
                  <span className="text-[10px] font-black tracking-widest text-stone-300 dark:text-stone-700 italic">CREATIVE PROCESS</span>
                  <div className="h-px w-10 bg-stone-200 dark:bg-stone-800" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Design Studio. <br />
                  <span className="italic font-light text-stone-700 dark:text-stone-300">Generative Logic.</span>
                </h2>
                <div className="space-y-6 text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                  <p>
                    Threadz uses high-end AI that acts as your personal senior creative director. It understands the nuances of modern aesthetics. From Cyberpunk grit to Botanical minimalism.
                  </p>
                  <p>
                    Simply set your mood and watch as our engine builds an original garment for you. No technical skills required. Just your unique vision and our machine precision.
                  </p>
                </div>
                {/* Secondary GSAP Button */}
                <button className="btn-secondary-gsap flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] pb-1 border-b border-stone-200 dark:border-stone-800 hover:border-black dark:hover:border-white transition-colors">
                  Start Project <ChevronRight size={14} className="btn-icon opacity-40 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. GALLERY: MARQUEE */}
        <section className="py-24 bg-[#1a1a1a] text-[#f9f7f2] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="scroll-reveal">
              <h2 className="text-5xl md:text-6xl font-serif italic mb-4 tracking-tighter text-white">The Gallery</h2>
              <p className="text-stone-500 text-sm font-light max-sm">Browse real-time community drops. Every design reward its creator.</p>
            </div>
            <button className="btn-secondary-gsap text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500 hover:text-white transition-colors border-b border-stone-800 pb-2 flex items-center gap-2">
              Explore Marketplace <ArrowRight size={12} className="btn-icon" />
            </button>
          </div>

          <div className="relative">
            <div className="animate-marquee gap-6 px-3">
              {[...galleryImages, ...galleryImages].map((img, i) => (
                <div key={i} className="flex-none w-[280px] md:w-[350px] aspect-[4/5] relative group cursor-pointer overflow-hidden rounded-md border border-white/5 layer-shadow">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-8 flex flex-col justify-end">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-1">{img.creator}</p>
                    <h4 className="text-xl font-serif italic text-white">{img.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. QUALITY: SPECS */}
        <section className="py-32 px-6 bg-[#fdfdfc] dark:bg-[#121212] relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              <div className="lg:col-span-4 sticky top-32 scroll-reveal">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-4 block">Physical Moat</span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">Quality You <br /><span className="italic font-light text-stone-600 dark:text-stone-400">Can Feel.</span></h2>
                <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed mb-10">
                  A digital masterpiece deserves a luxury canvas. We focus on heavyweight fabrics and structured drapes. Designed to last.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-6">
                {[
                  { id: '01', title: 'Premium Fiber', desc: 'Sustainably sourced yarns with high tensile strength for elite skin feel.', icon: <Fingerprint /> },
                  { id: '02', title: 'Heavy Cotton', desc: 'Dense, high-GSM weave that hangs perfectly with zero sag.', icon: <Layers /> },
                  { id: '03', title: 'Modern Fit', desc: 'Oversized silhouettes designed with architectural body mapping.', icon: <Maximize2 /> },
                  { id: '04', title: 'Pro Printing', desc: 'High-precision ink infusion ensuring art stays sharp through washes.', icon: <PenTool /> },
                ].map((item, idx) => (
                  <div key={idx} className="scroll-reveal group bg-white dark:bg-[#1a1a1a] border border-stone-100 dark:border-stone-800 p-10 flex flex-col md:flex-row gap-8 items-center justify-between hover:border-black dark:hover:border-white transition-all cursor-default rounded-[2rem] shadow-sm layer-shadow">
                    <div className="flex gap-8 items-center w-full">
                      <span className="text-3xl font-serif text-stone-200 dark:text-stone-800 group-hover:text-black dark:group-hover:text-white transition-colors">{item.id}</span>
                      <div className="space-y-1">
                        <h3 className="text-xl font-serif italic text-black dark:text-white">{item.title}</h3>
                        <p className="text-xs text-stone-400 font-light">{item.desc}</p>
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

        {/* Footer */}
        <footer className="py-24 px-6 bg-white dark:bg-[#1a1a1a] border-t border-stone-100 dark:border-stone-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="space-y-6">
                <div className="text-2xl font-serif font-black tracking-tighter text-black dark:text-white">THREADZ</div>
                <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold leading-loose">
                  Infinite Originals. <br />
                  Premium Production. <br />
                  Made in India.
                </p>
                <div className="flex space-x-6 text-stone-400">
                  <a href="#" className="hover:text-black dark:hover:text-white transition-all"><Instagram size={18}/></a>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-all"><Facebook size={18}/></a>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-all"><Twitter size={18}/></a>
                </div>
              </div>
              
              <div className="space-y-6">
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">Experience</h5>
                <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">AI Studio</a></li>
                  <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Drops Gallery</a></li>
                  <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Quality</a></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">Atelier</h5>
                <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Fit Guide</a></li>
                  <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Shipping</a></li>
                  <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Returns</a></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">Newsletter</h5>
                <div className="flex border-b border-stone-200 dark:border-stone-800 pb-2 group">
                  <input type="email" placeholder="JOIN@THREADZ.AI" className="bg-transparent border-none outline-none text-[10px] font-bold w-full tracking-widest" />
                  <button className="btn-secondary-gsap text-stone-300 group-hover:text-black dark:group-hover:text-white transition-colors"><ArrowRight size={14} className="btn-icon" /></button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-stone-50 dark:border-stone-900 pt-12 gap-6 opacity-40">
              <p className="text-[9px] font-bold uppercase tracking-[0.4em]">© 2024 Threadz Generative House.</p>
              <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.4em]">
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
