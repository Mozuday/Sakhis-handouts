"use client";

import { motion } from "framer-motion";
import { PackageCheck, Upload, Palette } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose a Gift",
    description: "Browse our handcrafted collection.",
    icon: PackageCheck,
  },
  {
    number: "02",
    title: "Upload Photos",
    description: "Share your memories and message.",
    icon: Upload,
  },
  {
    number: "03",
    title: "Receive Your Gift",
    description: "We'll craft and deliver it with care.",
    icon: Palette,
  },
];

export default function WhyUs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b88a44]">
            Simple Process
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            From Memory To{" "}
            <span className="font-serif italic">
              Gift
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-black/60">
            Just three simple steps to create something truly personal.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connector */}
          <div className="absolute left-0 right-0 top-12 hidden border-t border-dashed border-[#d9c6a5] md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.25,
                    ease: "easeOut",
                  }}
                  className="relative"
                >
                  <div className="rounded-[30px] border border-[#eee3d3] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                    {/* Step Circle */}
                    <div className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#FCFAF7]">
                      <Icon
                        className="h-10 w-10 text-[#b88a44]"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Number */}
                    <p className="mb-3 text-sm font-medium tracking-[0.25em] text-[#b88a44]">
                      STEP {step.number}
                    </p>

                    <h3 className="text-2xl font-medium text-[#2A1A12]">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-black/60">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}