import Header from "@/app/sections/Header";
import CallToAction from "./sections/CallToAction";
import Carousel from "./sections/Carousel";
import EssentialFeatures from "./sections/EssentialFeatures";
import Faq from "./sections/Faq";
import HeroSection from "./sections/HeroSection";
import { LogoTicker } from "./sections/LogoTicker";
import { ProductShowcase } from "./sections/ProductShowcase";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoTicker />
      <ProductShowcase />
      <EssentialFeatures />
      <Carousel />
      <Faq />
      <CallToAction />
    </div>
  );
}
