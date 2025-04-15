import Card from "@/components/card";
import React from "react";

function OurCapabilities() {
  return (
    <section
      id="our-capabilities"
      className="mx-auto container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Our Capabilities</h2>
        <p className="max-w-[85%] text-muted-foreground sm:text-lg">
          Unlock powerful capabilities for your project.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        <Card
          title="CI/CD"
          description="We specialize in building fast, secure, and scalable websites tailored to your business goals. From concept to launch, we deliver end-to-end web development solutions that drive results."
        />
        <Card
          title="Kubernetes"
          description="We provide end-to-end software testing solutions to ensure your product is secure, bug-free, and ready for launch. From manual to automated testing, we guarantee quality at every stage."
        />
        <Card
          title="PF Sense"
          description="We deliver smart, scalable ERP solutions that streamline operations, improve efficiency, and drive growth across your entire organization."
        />
        <Card
          title="BDD"
          description="We deliver smart, scalable ERP solutions that streamline operations, improve efficiency, and drive growth across your entire organization."
        />
        <Card
          title="Next.js"
          description="We deliver smart, scalable ERP solutions that streamline operations, improve efficiency, and drive growth across your entire organization."
        />
        <Card
          title="AI"
          description="We deliver smart, scalable ERP solutions that streamline operations, improve efficiency, and drive growth across your entire organization."
        />
      </div>
    </section>
  );
}

export default OurCapabilities;
