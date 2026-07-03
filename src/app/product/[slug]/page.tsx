import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!product) {
    notFound();
  }

  const finalPrice = product.discount_price || product.price;
  const hasDiscount = !!product.discount_price;
  const savings = hasDiscount ? product.price - product.discount_price : 0;

  return (
    <main className="bg-[#faf8f5]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Product Image */}
          <div className="overflow-hidden rounded-3xl border border-[#e8dfd2] bg-white shadow-sm">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex rounded-full bg-[#f5ede3] px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#b88a44]">
              {product.category}
            </span>

            <h1 className="mt-5 text-4xl font-light leading-tight text-[#2a1a12] md:text-5xl">
              {product.name}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-4xl font-semibold text-[#2a1a12]">
                ₹{finalPrice}
              </span>

              {hasDiscount && (
                <>
                  <span className="text-xl text-black/35 line-through">
                    ₹{product.price}
                  </span>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    Save ₹{savings}
                  </span>
                </>
              )}
            </div>

            <div className="mt-10 border-t border-[#e8dfd2] pt-8">
              <h2 className="text-2xl font-medium text-[#2a1a12]">
                Product Description
              </h2>

              <p className="mt-4 text-lg leading-8 text-black/65">
                {product.description}
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-[#e8dfd2] bg-white p-6">
              <h3 className="text-lg font-semibold text-[#2a1a12]">
                Why You'll Love It
              </h3>

              <div className="mt-5 space-y-4 text-black/70">
                <div className="flex gap-3">
                  <span>✓</span>
                  <span>Premium craftsmanship with attention to detail.</span>
                </div>

                <div className="flex gap-3">
                  <span>✓</span>
                  <span>Fully customizable to match your preferences.</span>
                </div>

                <div className="flex gap-3">
                  <span>✓</span>
                  <span>Carefully packed for safe delivery.</span>
                </div>

                <div className="flex gap-3">
                  <span>✓</span>
                  <span>Designed to be memorable and long-lasting.</span>
                </div>
              </div>
            </div>

            <Link
              href={`/checkout?product=${product.slug}`}
              className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[#2a1a12] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#3a261a]"
            >
              Customize & Order
            </Link>

            <p className="mt-4 text-center text-sm text-black/45">
              Customize your product before placing your order.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="border-t border-[#e8dfd2] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-light text-[#2a1a12]">
            Crafted With Care
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Every product is thoughtfully crafted with premium materials and
            personalized to your requirements. We focus on quality,
            craftsmanship, and attention to detail to ensure you receive a
            product you'll truly love.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-[#2a1a12]">
                Premium Quality
              </h3>
              <p className="mt-2 text-black/60">
                Carefully selected materials and exceptional finishing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2a1a12]">
                Personalized Design
              </h3>
              <p className="mt-2 text-black/60">
                Customize every detail to make it uniquely yours.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2a1a12]">
                Secure Delivery
              </h3>
              <p className="mt-2 text-black/60">
                Professionally packed and delivered safely to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}