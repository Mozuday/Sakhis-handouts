"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function CheckoutPage() {


const searchParams = useSearchParams();

const slug = searchParams.get("product");


const [product,setProduct] = useState<any>(null);


const [form,setForm] = useState({

name:"",
email:"",
phone:"",
address:"",
city:"",
state:"",
pincode:"",
message:""

});


const [photos,setPhotos] = useState<File[]>([]);





useEffect(()=>{


async function fetchProduct(){


if(!slug) return;


const {data,error}=await supabase

.from("products")

.select("*")

.eq("slug",slug)

.single();



if(error){

console.log(error);

return;

}



setProduct(data);



}


fetchProduct();


},[slug]);







function handleChange(
e:React.ChangeEvent<
HTMLInputElement | HTMLTextAreaElement
>
){


setForm({

...form,

[e.target.name]:e.target.value

});


}









async function uploadPhotos(){

const urls:string[]=[];


for(const photo of photos){


console.log("Uploading:", photo.name);



const data = new FormData();


data.append(
"file",
photo
);



data.append(
"upload_preset",
process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!
);



const res = await fetch(

`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,

{
method:"POST",
body:data
}

);



const result = await res.json();



console.log("CLOUDINARY RESPONSE", result);



if(result.secure_url){

urls.push(result.secure_url);

}

else{

console.log(
"UPLOAD FAILED",
result
);

}


}



console.log(
"FINAL URLS",
urls
);



return urls;


}









async function handleSubmit(){



try{



if(!product){

alert("Product missing");

return;

}





const amount =

product.discount_price ||

product.price;





// upload images first

const uploadedPhotos =

await uploadPhotos();





const orderResponse = await fetch(

"/api/create-order",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

amount

})

}

);





const order = await orderResponse.json();





const options:any={



key:

process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,



amount:

order.amount,



currency:"INR",



name:

"Sakhi's Handouts",



description:

product.name,



order_id:

order.id,




handler:async()=>{





await fetch(

"/api/send-telegram",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({


orderId: order.id,

product:product.name,


amount,


customer:form,


photos:uploadedPhotos


})

}

);

window.location.href=`/thank-you?order=${order.store_order_id}`;



}



};







const razorpay =

new (window as any).Razorpay(options);



razorpay.open();



}



catch(error){


console.log(error);

alert("Payment failed");


}



}








if(!product){


return (

<div className="p-20 text-center">

Loading Product...

</div>

)


}







return (

<section className="
min-h-screen
bg-[#faf7f2]
px-6
py-16
">


<div className="
mx-auto
max-w-6xl
">


<h1 className="
text-center
text-5xl
font-light
mb-12
">

Personalize Your Gift

</h1>





<div className="
grid
gap-10
lg:grid-cols-2
">







<div className="rounded-[32px] bg-white p-8 shadow-sm">

  <h2 className="text-3xl font-medium mb-8">
    Order Summary
  </h2>

  {/* Product Image */}
  {product.image && (
    <img
      src={product.image}
      alt={product.name}
      className="mb-6 h-64 w-full rounded-2xl object-cover"
    />
  )}

  {/* Product Name */}
  <h3 className="text-2xl font-medium">
    {product.name}
  </h3>

  <div className="mt-8 border-t border-b py-6 space-y-5">

    <div className="flex items-center justify-between">
      <span className="text-black/60">Product</span>
      <span className="font-medium text-right">
        {product.name}
      </span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-black/60">Quantity</span>
      <span>1</span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-black/60">Delivery</span>
      <span className="font-medium text-green-600">
        FREE
      </span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-black/60">Price</span>
      <span>
        ₹{product.discount_price || product.price}
      </span>
    </div>

  </div>

  <div className="mt-6 flex items-center justify-between">

    <span className="text-2xl font-semibold">
      Total
    </span>

    <span className="text-3xl font-bold">
      ₹{product.discount_price || product.price}
    </span>

  </div>

</div>




<div className="
rounded-[32px]
bg-white
p-8
">


<h2 className="text-2xl mb-6">

Delivery Details

</h2>




<input

name="name"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

className="w-full border rounded-xl p-4 mb-4"

/>




<input

name="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

className="w-full border rounded-xl p-4 mb-4"

/>





<input

name="phone"

placeholder="Phone"

value={form.phone}

onChange={handleChange}

className="w-full border rounded-xl p-4 mb-4"

/>





<textarea

name="address"

placeholder="Address"

value={form.address}

onChange={handleChange}

className="w-full border rounded-xl p-4 mb-4"

/>





<div className="grid grid-cols-3 gap-4">


<input

name="city"

placeholder="City"

value={form.city}

onChange={handleChange}

className="border rounded-xl p-4"

/>



<input

name="state"

placeholder="State"

value={form.state}

onChange={handleChange}

className="border rounded-xl p-4"

/>



<input

name="pincode"

placeholder="Pincode"

value={form.pincode}

onChange={handleChange}

className="border rounded-xl p-4"

/>


</div>








<label className="
block
mt-6
border-2
border-dashed
rounded-xl
p-6
text-center
cursor-pointer
">


{

photos.length

?

`${photos.length} Photos Selected ✅`

:

"Upload Photos"

}



<input

type="file"

multiple

accept="image/*"

hidden

onChange={(e)=>{


setPhotos(

Array.from(
e.target.files || []

)

)


}}


/>


</label>






<textarea

name="message"

placeholder="Custom Message"

value={form.message}

onChange={handleChange}

className="
mt-5
w-full
border
rounded-xl
p-4
"

/>







<button

onClick={handleSubmit}

className="
mt-6
w-full
rounded-full
bg-[#2a1a12]
py-4
text-white
"

>

Continue To Payment

</button>




</div>






</div>


</div>


</section>


)


}
