"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Hero() {


return (

<section className="
relative
min-h-[calc(100vh-80px)]
overflow-hidden
flex
items-center
">


{/* BACKGROUND IMAGE */}


<div className="
absolute
inset-0
">


<Image

src="/hero.jpeg"

alt="Sakhi's Handouts"

fill

priority

className="
object-cover
opacity-60
"

/>



<div className="
absolute
inset-0
bg-[#faf7f2]/70
"/>


</div>







{/* CONTENT */}


<div className="
relative
z-10
mx-auto
max-w-5xl
px-6
text-center
">





<motion.p

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.5
}}

className="
mb-6
text-sm
uppercase
tracking-[0.4em]
text-[#b88a44]
"

>

Personalized Frames & Gifts

</motion.p>








<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

className="
text-5xl
font-light
leading-tight
md:text-8xl
"

>


Turn Memories Into

<br/>


<span className="
font-serif
italic
">

Beautiful Keepsakes

</span>



</motion.h1>








<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.3
}}

className="
mx-auto
mt-8
max-w-2xl
text-lg
leading-8
text-black/60
"

>


Handcrafted personalized gifts,
photo frames and surprises made
specially for your loved ones.

</motion.p>







<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.5
}}

className="
mt-10
flex
justify-center
flex-wrap
gap-4
"

>



<Link

href="/shop"

className="
rounded-full
bg-[#2a1a12]
px-10
py-4
text-white
transition
hover:scale-105
"

>

Explore Gifts

</Link>




<Link

href="/shop"

className="
rounded-full
border
border-[#b88a44]
px-10
py-4
transition
hover:bg-[#b88a44]
hover:text-white
"

>

Create Custom Frame

</Link>



</motion.div>








<div className="
mt-12
flex
justify-center
gap-8
text-sm
text-black/50
">


<p>
✓ Handmade
</p>


<p>
✓ Custom Designs
</p>


<p>
✓ Premium Finish
</p>



</div>






</div>




</section>

)

}