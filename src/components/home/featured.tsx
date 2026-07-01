"use client";

import Link from "next/link";
import { Gift, ImageIcon, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";


const categories = [
  {
    title: "Photo Frames",
    icon: ImageIcon,
    description:
      "Turn your favorite pictures into beautiful memories that last forever.",
    link: "/shop?category=frames",
  },
  {
    title: "Gift Hampers",
    icon: Gift,
    description:
      "Perfect surprises packed with love for birthdays and celebrations.",
    link: "/shop?category=gifts",
  },
  {
    title: "Couple Gifts",
    icon: Heart,
    description:
      "Personalized gifts made for your special someone.",
    link: "/shop?category=couple",
  },
  {
    title: "Custom Creations",
    icon: Sparkles,
    description:
      "Share your idea and we create something unique for you.",
    link: "/shop?category=custom",
  },
];


export default function Featured() {

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
Explore Collection
</p>


<h2 className="
text-4xl
font-light
md:text-5xl
">
Gifts Made For
<span className="font-serif italic">
 Every Moment
</span>
</h2>


<p className="mx-auto mt-5 max-w-xl text-black/60">
Choose a memory, occasion or feeling —
we turn it into a beautiful gift.
</p>


</div>



<div className="
grid
gap-6
md:grid-cols-2
xl:grid-cols-4
">


{categories.map((item,index)=>{


const Icon=item.icon;


return (


<motion.div

key={item.title}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}


>


<Link

href={item.link}

className="
group
block
rounded-[32px]
border
border-[#d9c6a5]
bg-[#faf7f2]
p-8
transition
hover:-translate-y-2
hover:shadow-xl
"


>


<div className="
mb-6
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-white
">


<Icon
className="
h-7
w-7
text-[#b88a44]
"
/>


</div>



<h3 className="
mb-3
text-xl
font-medium
group-hover:text-[#b88a44]
transition
">

{item.title}

</h3>



<p className="
leading-7
text-black/60
">

{item.description}

</p>



<p className="
mt-6
text-sm
text-[#b88a44]
">

Explore →

</p>



</Link>


</motion.div>


)

})}


</div>


</div>

</section>

)

}