"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function ProductList(){


const [products,setProducts]=useState<any[]>([]);



async function getProducts(){


const {data,error}=await supabase

.from("products")

.select("*")

.order("id");



if(error){

console.log(error);

return;

}


setProducts(data || []);


}





async function toggleActive(
id:number,
current:boolean
){


const {error}=await supabase

.from("products")

.update({

active:!current

})

.eq(
"id",
id
);



if(error){

console.log(error);

return;

}



getProducts();


}







useEffect(()=>{

getProducts();

},[]);







return(


<div className="
rounded-[32px]
border
border-[#e8dfd2]
bg-white
p-8
">


<h2 className="
mb-6
text-2xl
font-medium
">

Products

</h2>





<div className="space-y-4">


{

products.map((product)=>(



<div

key={product.id}

className="
flex
items-center
justify-between
rounded-2xl
border
border-[#e8dfd2]
p-4
"

>



<div>


<h3 className="font-medium">

{product.name}

</h3>



<p>

₹{product.discount_price || product.price}

</p>



<p className="text-sm text-black/50">

ID: {product.id}

</p>



</div>






<button

onClick={()=>toggleActive(
product.id,
product.active
)}

className={`
rounded-full
px-5
py-2
text-sm
${
product.active
?
"bg-green-100 text-green-700"
:
"bg-red-100 text-red-700"
}
`}

>


{

product.active

?

"Active"

:

"Inactive"

}



</button>





</div>



))

}


</div>




</div>


)

}