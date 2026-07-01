import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function ProductPage({
  params,
}: Props) {


  const { slug } = await params;


  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();



  if (!product) {
    notFound();
  }



  return (

<main>


<section className="px-6 py-16">

<div className="
mx-auto
grid
max-w-7xl
gap-12
lg:grid-cols-2
">


<div className="
overflow-hidden
rounded-[32px]
bg-white
border
border-[#e8dfd2]
">


<div className="
relative
aspect-square
">


<Image

src={product.image}

alt={product.name}

fill

priority

className="object-cover"

/>


</div>


</div>




<div className="
flex
flex-col
justify-center
">


<p className="
mb-4
text-sm
uppercase
tracking-[0.3em]
text-[#b88a44]
">

{product.category}

</p>



<h1 className="
text-5xl
font-light
">

{product.name}

</h1>



<div className="mt-5">


{
product.discount_price ? (

<div className="flex gap-4 items-center">

<span className="
text-3xl
font-semibold
">

₹{product.discount_price}

</span>


<span className="
text-xl
line-through
text-black/40
">

₹{product.price}

</span>


</div>


)

:

(

<p className="
text-3xl
font-semibold
">

₹{product.price}

</p>

)

}



</div>





<p className="
mt-6
leading-8
text-black/60
">

{product.description}

</p>





<Link

href={`/checkout?product=${product.slug}`}

className="
mt-8
inline-block
rounded-full
bg-[#2a1a12]
px-8
py-4
text-white
"

>

Customize & Order

</Link>




</div>



</div>


</section>


</main>

  );

}