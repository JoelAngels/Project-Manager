import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

const HeroSection = () => {
  return (
    <section className="container mx-auto py-20 text-center">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
        Streamline Your WorkFlow. <br />
        <span className="flex mx-auto gap-3 sm:gap4 items-center">
          with{""}
          <Image
            src={logo}
            alt="logo"
            width={400}
            height={80}
            className="h-14 sm:h-24 w-auto object-contain"
          />
        </span>
      </h1>
      <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
        Empower your team with our intuitive project management solution.
      </p>
      <Link href="/onboarding">
        <Button size="lg" className="mr-2">
          Get Started <ChevronRight size={18} />
        </Button>
      </Link>
      <Link href="#features">
        <Button size="lg" variant="outline" className="mr-4">
          Learn More
        </Button>
      </Link>
    </section>
  );
};

export default HeroSection;
