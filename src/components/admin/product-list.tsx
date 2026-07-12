"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Product } from "@/types/product";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setProducts(data || []);
  }

  async function toggleActive(
    id: number,
    current: boolean
  ) {
    const { error } = await supabase
      .from("products")
      .update({
        active: !current,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    getProducts();
  }

  async function toggleStarred(
    id: number,
    current: boolean
  ) {
    const { error } = await supabase
      .from("products")
      .update({
        starred: !current,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    getProducts();
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="rounded-[32px] border border-[#e8dfd2] bg-white p-8">
      <h2 className="mb-6 text-2xl font-medium">
        Products
      </h2>

      <div className="space-y-4">
        {products.map((product) => (
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
                onClick={() =>
                  toggleStarred(
                    product.id,
                    product.starred
                  )
                }
                className={`rounded-full px-5 py-2 text-sm transition ${
                  product.starred
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-600"
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
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.active
                  ? "Active"
                  : "Inactive"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
