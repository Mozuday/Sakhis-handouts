"use client";

import Link from "next/link";
import { Gift, Heart, ImageIcon, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Photo Frames",
    icon: ImageIcon,
    description: "Turn your favorite memories into timeless keepsakes.",
    link: "/shop?category=frames",
  },
  {
    title: "Gift Hampers",
    icon: Gift,
    description: "Curated gifts for birthdays, anniversaries and celebrations.",
    link: "/shop?category=gifts",
  },
  {
    title: "Couple Gifts",
    icon: Heart,
    description: "Personalized surprises for the people you love.",
    link: "/shop?category=couple",
  },
  {
    title: "Custom Creations",
    icon: Sparkles,
    description: "Bring your idea to life with handcrafted designs.",
    link: "/shop?category=custom",
  },
];

export default function Featured() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b88a44]">
            Explore Collection
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Gifts Made For{" "}
            <span className="font-serif italic">
              Every Moment
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-black/60">
            Discover handcrafted gifts designed to make every celebration
            unforgettable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={item.link}
                  className="
                    group
                    flex
                    h-full
                    flex-col
                    rounded-[28px]
                    border
                    border-[#E8D8BC]
                    bg-[#FCFAF7]
                    p-8
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-8
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white
                      shadow-sm
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <Icon
                      className="
                        h-7
                        w-7
                        text-[#b88a44]
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-xl
                      font-medium
                      text-[#2A1A12]
                      transition-colors
                      duration-500
                      group-hover:text-[#b88a44]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 flex-1 leading-7 text-black/60">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-8 inline-flex items-center gap-2 font-medium text-[#b88a44] transition-transform duration-500 group-hover:translate-x-1">
                    Explore Collections

                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}