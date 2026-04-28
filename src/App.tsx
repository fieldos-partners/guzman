import { Nav } from "@/components/nav";
import { GuzmanScrollHero } from "@/components/scroll-expand-hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { BeforeAfter } from "@/components/before-after";
import { ScrollShowcase } from "@/components/scroll-showcase";
import { Gallery } from "@/components/gallery";
import { Reviews } from "@/components/reviews";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-sand-50 text-moss-900">
      <Nav />
      <main>
        <GuzmanScrollHero />
        <Stats />
        <Services />
        <BeforeAfter />
        <ScrollShowcase />
        <Gallery />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
