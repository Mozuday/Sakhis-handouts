import ProductCard from "@/components/shop/product-card";
import { supabase } from "@/lib/supabase";


export default async function ShopPage(){


const {data:products}=await supabase
.from("products")
.select("*")
.eq("active",true);



return(

<div className="
grid
gap-8
sm:grid-cols-2
lg:grid-cols-3
">


{
products?.map((product)=>(

<ProductCard

key={product.id}

product={product}

/>

))

}


</div>

)

}