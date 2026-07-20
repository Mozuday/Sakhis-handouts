"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Product } from "@/types/product";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const MAX_FEATURED = 4;

  async function getProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setProducts(data || []);
  }

  async function toggleActive(id: number, current: boolean) {
    const { error } = await supabase
      .from("products")
      .update({
        active: !current,
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    getProducts();
  }

  async function toggleStarred(id: number, current: boolean) {
    // Removing from featured
    if (current) {
      const { error } = await supabase
        .from("products")
        .update({
          starred: false,
        })
        .eq("id", id);

      if (error) {
        console.error(error);
        return;
      }

      getProducts();
      return;
    }

    // Count current featured products
    const { count, error: countError } = await supabase
      .from("products")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("starred", true);

    if (countError) {
      console.error(countError);
      return;
    }

    if ((count ?? 0) >= MAX_FEATURED) {
      alert(`Only ${MAX_FEATURED} featured products are allowed.`);
      return;
    }

    const { error } = await supabase
      .from("products")
      .update({
        starred: true,
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    getProducts();
  }

  useEffect(() => {
    getProducts();
  }, []);

  const featuredCount = products.filter(
    (product) => product.starred
  ).length;

  return (
    <div className="rounded-[32px] border border-[#e8dfd2] bg-white p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-medium">
          Products
        </h2>

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
          Featured {featuredCount}/{MAX_FEATURED}
        </span>
      </div>

      <div className="space-y-4">
        {products.map((product) => {
          const disableFeature =
            !product.starred &&
            featuredCount >= MAX_FEATURED;

          return (
            <div
              key={product.id}
              className="flex items-center justify-between rounded-2xl border border-[#e8dfd2] p-4"
            >
              <div>
                <h3 className="font-medium">
                  {product.name}
                </h3>

                <div className="mt-1 flex items-center gap-2">
                  {product.discount_price > 0 ? (
                    <>
                      <span className="font-semibold text-[#2a1a12]">
                        ₹{product.discount_price}
                      </span>

                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.price}
                      </span>
                    </>
                  ) : (
                    <span className="font-semibold text-[#2a1a12]">
                      ₹{product.price}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm text-black/50">
                  ID: {product.id}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  disabled={disableFeature}
                  onClick={() =>
                    toggleStarred(
                      product.id,
                      product.starred
                    )
                  }
                  className={`rounded-full px-5 py-2 text-sm transition ${
                    product.starred
                      ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                      : disableFeature
                      ? "cursor-not-allowed bg-gray-200 text-gray-400"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {product.starred
                    ? "⭐ Featured"
                    : "☆ Feature"}
                </button>

                <button
                  onClick={() =>
                    toggleActive(
                      product.id,
                      product.active
                    )
                  }
                  className={`rounded-full px-5 py-2 text-sm transition ${
                    product.active
                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                      : "bg-red-100 text-red-700 hover:bg-red-200"
                  }`}
                >
                  {product.active
                    ? "Active"
                    : "Inactive"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
