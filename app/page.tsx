import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { StudioSection } from "@/components/studio-section";
import { GallerySection } from "@/components/gallery-section";
import { QualitySection } from "@/components/quality-section";
import { Footer } from "@/components/footer";
import { GSAPProvider } from "@/components/gsap-provider";

export default function Home() {
  return (
    <GSAPProvider>
      <div className="min-h-screen bg-[#f9f7f2] dark:bg-[#121212] text-[#1a1a1a] dark:text-[#f9f7f2] font-sans transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black overflow-x-hidden">
        <Navigation />
        <Hero />
        <StudioSection />
        <GallerySection />
        <QualitySection />
        <Footer />
      </div>
    </GSAPProvider>
  );
}


