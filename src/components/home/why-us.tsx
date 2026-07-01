"use client";

import { motion } from "framer-motion";
import { Upload, Palette, PackageCheck } from "lucide-react";


const steps = [
  {
    number: "01",
    title: "Choose Your Gift",
    description:
      "Select your favorite frame or personalized gift from our collection.",
    icon: PackageCheck,
  },
  {
    number: "02",
    title: "Add Your Memories",
    description:
      "Upload photos and share your special message during checkout.",
    icon: Upload,
  },
  {
    number: "03",
    title: "We Create Magic",
    description:
      "We customize your gift and deliver it ready to make someone smile.",
    icon: Palette,
  },
];


export default function WhyUs() {


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

Simple Process

</p>


<h2 className="
text-4xl
font-light
md:text-5xl
">

From Memory To
<span className="font-serif italic">
 Gift
</span>

</h2>


<p className="
mx-auto
mt-5
max-w-xl
text-black/60
">

Create your personalized gift in just a few easy steps.

</p>


</div>





<div className="
grid
gap-8
md:grid-cols-3
">


{
steps.map((step,index)=>{


const Icon = step.icon;


return (


<motion.div

key={step.title}

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
mb-6
flex
items-center
justify-between
">


<span className="
text-5xl
text-[#b88a44]
font-light
">

{step.number}

</span>



<Icon
className="
h-9
w-9
text-[#b88a44]
"
/>


</div>




<h3 className="
text-xl
font-medium
mb-3
">

{step.title}

</h3>




<p className="
leading-7
text-black/60
">

{step.description}

</p>



</motion.div>


)


})

}



</div>



</div>


</section>

)

}