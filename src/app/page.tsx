import Hero from "@/components/home/hero";
import Featured from "@/components/home/featured";
import HowItWorks from "@/components/home/why-us";
import Gallery from "@/components/home/gallery";
import Testimonials from "@/components/home/testimonials";
import CTA from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Featured />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  );
}