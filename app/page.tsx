// import { Button } from "@/components/ui/button";
// import Image from "next/image";

import Carousel from "./sections/Carousel";
import EssentialFeatures from "./sections/EssentialFeatures";
import Faq from "./sections/Faq";
import HeroSection from "./sections/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EssentialFeatures />
      <Carousel />
      <Faq />
    </div>
  );
}
