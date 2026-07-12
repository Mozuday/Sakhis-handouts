"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "@/components/shop/product-card";

export default function FeaturedContent({
  products,
}: {
  products: any[];
}) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
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
        </motion.div>

        {/* Featured Products */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.25,
                ease: "easeOut",
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            href="/shop"
            className="inline-flex items-center rounded-full bg-[#2a1a12] px-8 py-4 text-white transition hover:bg-[#3a261a]"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
