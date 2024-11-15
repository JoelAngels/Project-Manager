import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/constants/Essentials";
import React from "react";

const EssentialFeatures = () => {
  return (
    <section id="features" className="bg-gray-900 py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800">
              <CardContent className="pt-6">
                <feature.icon className="w-12 h-12 text-blue-500" />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-center text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialFeatures;
