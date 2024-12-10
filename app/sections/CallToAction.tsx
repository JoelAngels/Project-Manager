"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      id="sign-up"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container mx-auto">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Ready to elevate your productivity? Sign up now and join countless
            others who are transforming the way they work and celebrate success!
          </p>
          <motion.img
            style={{
              translateY: translateY,
            }}
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            style={{
              translateY: translateY,
            }}
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <SignInButton>
            <Button className="btn btn-text gap-1">
              <span>Sign In</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </SignInButton>
        </div>
      </div>
    </section>
  );
};
