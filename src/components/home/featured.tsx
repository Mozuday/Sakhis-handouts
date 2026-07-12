import Link from "next/link";
import ProductCard from "@/components/shop/product-card";
import { supabase } from "@/lib/supabase";

export default async function Featured() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("active", true)
    .eq("starred", true)
    .limit(4);

  if (!products || products.length === 0) {
    return null;
  }

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

        {/* Featured Products */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center rounded-full bg-[#2a1a12] px-8 py-4 text-white transition hover:bg-[#3a261a]"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
