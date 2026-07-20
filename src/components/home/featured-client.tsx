"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "@/components/shop/product-card";
import { Product } from "@/types/product";

interface FeaturedClientProps {
  products: Product[];
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function FeaturedClient({
  products,
}: FeaturedClientProps) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b88a44]">
            Featured Collection
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Gifts Made For {" "}
            <span className="font-serif italic">
              Every Moment
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-black/60">
            Discover handcrafted gifts designed to make every celebration unforgettable.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="h-full"
            >
              <div className="h-full overflow-hidden rounded-[28px] bg-white shadow-sm transition-all duration-500 hover:shadow-2xl">
                <ProductCard product={product} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            href="/shop"
            className="inline-flex items-center rounded-full bg-[#2a1a12] px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#3a261a] hover:shadow-lg"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
