"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "/frame1.png",
    alt: "Personalized photo frame",
    title: "Couple Gifts",
    link: "/shop?category=frames",
  },
  {
    src: "/frame2.jpeg",
    alt: "Couple gift frame",
    title: "Personalized Frames",
    link: "/shop?category=couple",
  },
  {
    src: "/frame3.png",
    alt: "Custom handmade gift",
    title: "Custom Keepsakes",
    link: "/shop?category=custom",
  },
];

export default function Gallery() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b88a44]">
            Our Creations
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Memories Turned Into{" "}
            <span className="font-serif italic">
              Keepsakes
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-black/60">
            A glimpse of personalized gifts made with love.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {images.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.25,
                ease: "easeOut",
              }}
            >
              <Link
                href={item.link}
                className="group block overflow-hidden rounded-[28px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-lg font-medium text-[#2A1A12]">
                    {item.title}
                  </h3>

                  <span className="inline-flex items-center gap-2 rounded-full bg-[#2A1A12] px-4 py-2 text-sm text-white transition-all duration-300 group-hover:bg-[#b88a44]">
                    Shop
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
