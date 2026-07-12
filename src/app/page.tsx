import Hero from "@/components/home/hero";
import Featured from "@/components/home/featured";
import Gallery from "@/components/home/gallery";
import Testimonials from "@/components/home/testimonials";
import HowItWorks from "@/components/home/why-us";
import CTA from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Shop immediately */}
      <Featured />

      {/* Show real products & customers */}
      <Gallery />

      {/* Explain customization */}
      <HowItWorks />

      {/* Build trust */}
      <Testimonials />

      {/* Final CTA */}
      <CTA />
    </>
  );
}
