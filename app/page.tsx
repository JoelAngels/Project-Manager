// import { Button } from "@/components/ui/button";
// import Image from "next/image";

import EssentialFeatures from "./sections/EssentialFeatures";
import HeroSection from "./sections/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EssentialFeatures />
    </div>
  );
}
