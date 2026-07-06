"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#FCFAF7]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex rounded-full bg-[#FFF5E6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B88A44]">
              Handmade • Personalized
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#2A1A12] sm:text-5xl lg:text-7xl">
              Gifts That
              <span className="block text-[#B88A44]">
                Tell Stories.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-black/60 sm:text-lg">
              Beautiful handcrafted frames, hampers and keepsakes made to
              celebrate every special moment.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2A1A12] px-8 py-4 text-white transition hover:scale-105"
              >
                Shop Collection
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/shop?category=custom"
                className="inline-flex items-center justify-center rounded-full border border-[#2A1A12] px-8 py-4 transition hover:bg-[#2A1A12] hover:text-white"
              >
                Customize Gift
              </Link>
            </div>

            {/* Mobile Stats */}
            <div className="mt-10 flex justify-between rounded-3xl bg-white p-6 shadow-lg lg:hidden">
              <div>
                <p className="text-2xl font-bold">1200+</p>
                <p className="text-sm text-black/50">
                  Orders
                </p>
              </div>

              <div>
                <p className="flex items-center gap-1 text-2xl font-bold">
                  4.9
                  <Star
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />
                </p>

                <p className="text-sm text-black/50">
                  Rating
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  ₹499
                </p>

                <p className="text-sm text-black/50">
                  Starting
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 flex justify-center lg:order-2"
          >
            {/* Background Circle */}
            <div className="absolute h-[340px] w-[340px] rounded-full bg-[#FFE6BF] blur-3xl md:h-[500px] md:w-[500px]" />

            {/* Product Card */}
            <div className="relative overflow-hidden rounded-[35px] bg-white p-4 shadow-2xl">
              <div className="relative h-[380px] w-[300px] overflow-hidden rounded-[28px] sm:h-[500px] sm:w-[400px]">
                <Image
                  src="/hero.png"
                  alt="Gift"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Desktop Floating Cards */}
            <div className="absolute -left-6 top-10 hidden rounded-3xl bg-white p-5 shadow-xl lg:block">
              <p className="text-xs text-black/40">
                Bestseller
              </p>

              <h3 className="mt-1 font-semibold">
                Photo Frames
              </h3>
            </div>

            <div className="absolute -right-8 bottom-12 hidden rounded-3xl bg-[#2A1A12] p-6 text-white shadow-xl lg:block">
              <p className="text-xs opacity-70">
                Starting From
              </p>

              <p className="mt-1 text-2xl font-bold">
                ₹499
              </p>
            </div>

            <div className="absolute bottom-8 left-10 hidden rounded-3xl bg-white p-5 shadow-xl lg:block">
              <div className="flex items-center gap-2">
                <Star
                  className="fill-yellow-400 text-yellow-400"
                  size={18}
                />

                <span className="font-semibold">
                  4.5/5
                </span>
              </div>

              <p className="mt-1 text-sm text-black/50">
                Loved by 50+ customers
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
