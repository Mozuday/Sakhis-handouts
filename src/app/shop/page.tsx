import Link from "next/link";
import ProductCard from "@/components/shop/product-card";
import { supabase } from "@/lib/supabase";

const categories = [
  "All",
  "Photo Frames",
  "Parents Gifts",
  "Couple Gifts",
  "Birthday Gifts",
  "Gift Hampers",
  "Mini Album",
  "Custom Gifts",
];

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
  }>;
}) {
  const { category } = await searchParams;

  let query = supabase
    .from("products")
    .select("*")
    .eq("active", true);

  if (category && category !== "All") {
    query = query.eq("category", category);
  }

  const { data: products } = await query;

  return (
    <main className="bg-[#FCFAF7] min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">

        {/* Header */}
        <section className="border-b border-black/10 pb-10">
          <span className="inline-flex rounded-full bg-[#FFF5E6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B88A44]">
            Handmade • Personalized
          </span>

          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <h1 className="text-4xl font-bold text-[#2A1A12] sm:text-5xl lg:text-6xl">
                Shop
              </h1>

              <p className="mt-4 max-w-xl text-black/60">
                Beautiful handcrafted gifts, premium photo frames and
                personalized keepsakes for every special occasion.
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-3xl font-bold text-[#2A1A12]">
                {products?.length ?? 0}
              </p>

              <p className="text-sm text-black/50">
                Products
              </p>
            </div>

          </div>
        </section>

        {/* Categories */}

        <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
          {categories.map((item) => {
            const active = (category ?? "All") === item;

            return (
              <Link
                key={item}
                href={
                  item === "All"
                    ? "/shop"
                    : `/shop?category=${encodeURIComponent(item)}`
                }
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#2A1A12] text-white"
                    : "border border-black/10 bg-white text-[#2A1A12] hover:bg-[#2A1A12] hover:text-white"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Products */}

        {products && products.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="text-2xl font-semibold text-[#2A1A12]">
              No products found
            </h2>

            <p className="mt-3 text-black/60">
              Try selecting another category.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}
