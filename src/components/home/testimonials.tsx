"use client";

import { motion } from "framer-motion";


const reviews = [
  {
    name: "Priya Sharma",
    text: "The frame was beautifully crafted and exceeded expectations.",
  },
  {
    name: "Rahul Verma",
    text: "Amazing quality and the customization made it extra special.",
  },
  {
    name: "Neha Singh",
    text: "The perfect gift. Everyone loved the finishing and design.",
  },
];


export default function Testimonials() {


return (

<section className="bg-[#ede4d8]/40 py-24">


<div className="mx-auto max-w-7xl px-6">


<div className="mb-14 text-center">


<p className="
mb-4
text-sm
uppercase
tracking-[0.3em]
text-[#b88a44]
">

Customer Love

</p>



<h2 className="
text-4xl
font-light
md:text-5xl
">

Loved By People
<span className="font-serif italic">
 Who Gifted Memories
</span>

</h2>


</div>





<div className="
grid
gap-6
md:grid-cols-3
">


{
reviews.map((review,index)=>(


<motion.div


key={review.name}


initial={{
opacity:0,
y:30
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*0.15
}}


viewport={{
once:true
}}



className="
rounded-[32px]
bg-white
p-8
shadow-sm
"


>


<div className="
mb-5
text-[#b88a44]
tracking-widest
">

★★★★★

</div>



<p className="
mb-8
leading-7
text-black/70
">

"{review.text}"

</p>



<div className="
flex
items-center
gap-3
">


<div className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-[#ede4d8]
text-[#b88a44]
font-medium
">

{review.name.charAt(0)}

</div>



<div>

<h3 className="font-medium">

{review.name}

</h3>


<p className="text-sm text-black/50">

Verified Customer

</p>


</div>


</div>



</motion.div>


))

}



</div>



</div>


</section>

)

}