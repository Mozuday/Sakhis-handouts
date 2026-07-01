import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";


interface Props {
  product: Product;
}


export default function ProductCard({
  product
}: Props) {


return (

<Link

href={`/product/${product.slug}`}

className="
group
overflow-hidden
rounded-[32px]
border
border-[#e8dfd2]
bg-white
transition
hover:-translate-y-2
hover:shadow-xl
"


>



<div className="
relative
aspect-square
bg-[#f5f0e8]
">


<Image

src={product.image}

alt={product.name}

fill

sizes="(max-width: 768px) 100vw, 33vw"

className="
object-cover
transition
duration-500
group-hover:scale-105
"

/>


</div>





<div className="p-6">


<p className="
text-sm
text-[#b88a44]
mb-2
">

{product.category}

</p>



<h3 className="
text-xl
font-medium
">

{product.name}

</h3>




<p className="
mt-3
text-black/60
line-clamp-2
">

{product.description}

</p>




<div className="
mt-5
flex
justify-between
items-center
">


<span className="
text-lg
font-semibold
">

₹{product.price}

</span>



<span className="
rounded-full
bg-[#2a1a12]
px-4
py-2
text-sm
text-white
">

View

</span>


</div>


</div>



</Link>


)

}