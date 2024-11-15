import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section id="call-to-action" className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Ready To Transform Your Workflow
        </h2>
        <p className="text-xl mb-12">
          Join Thousands of teams already using PROJECT-ALPHA to streamline
          their projects and boost productivity{" "}
        </p>
        <Link href="/onboarding">
          <Button size="lg" className="animate-bounce">
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
