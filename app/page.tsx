import Faq from "./sections/Faq";
import HeroSection from "./sections/HeroSection";
import { LogoTicker } from "./sections/LogoTicker";
import { ProductShowcase } from "./sections/ProductShowcase";
import { Testimonials } from "./sections/Testimonials";
import { CallToAction } from "./sections/CallToAction";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <LogoTicker />
      <ProductShowcase />
      <Testimonials />
      <CallToAction />
      <Faq />
    </div>
  );
}
