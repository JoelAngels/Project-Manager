"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to trace
              your progress, motivate your efforts, and celebrate your success
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
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
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
              src={cogImage.src}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-[150px]"
            />
            <motion.img
              style={{
                translateY: translateY,
              }}
              src={cylinderImage.src}
              alt="Cylinder Image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute lg:left-[80px] lg:-top-[100px]"
            />
            <motion.img
              style={{
                rotate: 30,
                translateY: translateY,
              }}
              src={noodleImage.src}
              alt="Noodle Image"
              width={220}
              className="hidden lg:block md:left-[700px] top-[472px] left-[448px] md:absolute rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

/*
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
*/
