import CompanyCarousel from "@/components/CompanyCarousel";
import React from "react";

const Carousel = () => {
  return (
    <section id="features" className="bg-gray-900 py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Trusted By Industry Leaders
        </h2>
        <CompanyCarousel />
      </div>
    </section>
  );
};

export default Carousel;
