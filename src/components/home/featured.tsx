import { supabase } from "@/lib/supabase";
import FeaturedClient from "./featured-client";

export default async function Featured() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("active", true)
    .eq("starred", true)
    .order("id", { ascending: false })
    .limit(4);

  if (error) {
    console.error(error);
    return null;
  }

  if (!products?.length) {
    return null;
  }

  return <FeaturedClient products={products} />;
}
