"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const images = [
  {
    src: "/frame1.jpg",
    alt: "Personalized photo frame",
    size: "h-96",
  },
  {
    src: "/frame2.jpg",
    alt: "Couple gift frame",
    size: "h-[500px]",
  },
  {
    src: "/frame3.jpg",
    alt: "Custom handmade gift",
    size: "h-96",
  },
];


export default function Gallery() {


return (

<section className="py-24">


<div className="mx-auto max-w-7xl px-6">


<div className="mb-14 text-center">


<p className="
mb-4
text-sm
uppercase
tracking-[0.3em]
text-[#b88a44]
">

Our Creations

</p>



<h2 className="
text-4xl
font-light
md:text-5xl
">

Memories Turned Into
<span className="font-serif italic">
 Keepsakes
</span>

</h2>



<p className="
mx-auto
mt-5
max-w-xl
text-black/60
">

A glimpse of personalized gifts made with love.

</p>


</div>





<div className="
grid
gap-6
md:grid-cols-3
">


{
images.map((image,index)=>(


<motion.div

key={image.src}

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

className={`
relative
overflow-hidden
rounded-[32px]
${image.size}
`}

>


<Image

src={image.src}

alt={image.alt}

fill

className="
object-cover
transition
duration-500
hover:scale-110
"

/>


</motion.div>


))

}



</div>



</div>


</section>

)

}