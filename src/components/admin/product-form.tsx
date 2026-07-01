"use client";

import { useState } from "react";
import { createSlug } from "@/lib/slug";
import { supabase } from "@/lib/supabase";


const categories = [
"Photo Frames",
"LED Frames",
"Couple Gifts",
"Birthday Gifts",
"Gift Hampers",
"Custom Gifts",
];



export default function ProductForm(){



const [form,setForm]=useState({

name:"",
price:"",
discount:"",
category:"",
image:"",
description:""

});




function handleChange(
e:React.ChangeEvent<
HTMLInputElement |
HTMLTextAreaElement |
HTMLSelectElement
>
){

setForm({

...form,

[e.target.name]:e.target.value

});

}







async function uploadImage(file:File){

try{


const formData = new FormData();


formData.append(
"file",
file
);



formData.append(

"upload_preset",

process.env.NEXT_PUBLIC_CLOUDINARY_PRESET as string

);





const response = await fetch(

`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,

{

method:"POST",

body:formData

}

);




const data = await response.json();



console.log("CLOUDINARY RESPONSE",data);



if(!data.secure_url){

throw new Error(
"Cloudinary upload failed"
);

}



return data.secure_url;



}

catch(error){

console.log(
"UPLOAD ERROR",
error
);


alert(
"Image upload failed"
);


return "";

}


}







async function handleImage(
e:React.ChangeEvent<HTMLInputElement>
){


const file =
e.target.files?.[0];


if(!file) return;



const url =
await uploadImage(file);



if(url){


setForm({

...form,

image:url

});


}


}








async function handleSubmit(
e:React.FormEvent
){

e.preventDefault();



if(!form.image){

alert(
"Please upload image"
);

return;

}





const product={


slug:createSlug(form.name),


name:form.name,


price:Number(form.price),


discount_price:

Number(form.discount || 0),



category:form.category,


image:form.image,


description:form.description,


active:true


};






const {error}=await supabase

.from("products")

.insert(product);







if(error){

console.log(error);

alert(
"Failed adding product"
);

return;

}






alert(
"Product Added 🎉"
);





setForm({

name:"",
price:"",
discount:"",
category:"",
image:"",
description:""

});


}







return (

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

Add Product

</h2>






<form

onSubmit={handleSubmit}

className="space-y-4"

>





<input

required

name="name"

value={form.name}

onChange={handleChange}

placeholder="Product Name"

className="w-full rounded-2xl border p-4"

/>





<input

required

type="number"

name="price"

value={form.price}

onChange={handleChange}

placeholder="Price"

className="w-full rounded-2xl border p-4"

/>





<input

type="number"

name="discount"

value={form.discount}

onChange={handleChange}

placeholder="Discounted Price"

className="w-full rounded-2xl border p-4"

/>








<select

required

name="category"

value={form.category}

onChange={handleChange}

className="w-full rounded-2xl border p-4"

>


<option value="">

Select Category

</option>



{categories.map(cat=>(

<option

key={cat}

value={cat}

>

{cat}

</option>

))}


</select>








<label className="
block
cursor-pointer
rounded-2xl
border-2
border-dashed
p-6
text-center
">


{

form.image

?

"Image Uploaded ✅"

:

"Upload Product Image"

}



<input

type="file"

accept="image/*"

onChange={handleImage}

className="hidden"

/>


</label>







<textarea

required

name="description"

value={form.description}

onChange={handleChange}

rows={5}

placeholder="Description"

className="w-full rounded-2xl border p-4"

/>







<button

className="
w-full
rounded-full
bg-[#2a1a12]
py-4
text-white
"

>

Add Product

</button>




</form>


</div>


)


}