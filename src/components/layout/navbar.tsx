"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];


export default function Navbar() {

const [open,setOpen] = useState(false);


return (

<header className="
sticky
top-0
z-50
border-b
border-[#e8dfd2]
bg-[#faf7f2]/90
backdrop-blur-md
">


<div className="
mx-auto
flex
h-20
max-w-7xl
items-center
justify-between
px-6
">



<Link
href="/"
className="flex items-center gap-3"
>


<Image

src="/logo.png"

alt="Sakhi's Handouts"

width={45}

height={45}

priority

/>


<div>

<h2 className="
text-base
font-semibold
md:text-lg
">

Sakhi's Handouts

</h2>


<p className="
text-xs
text-black/50
">

Personalized Gifts

</p>


</div>


</Link>





<nav className="
hidden
items-center
gap-10
md:flex
">


{
links.map((link)=>(

<Link

key={link.href}

href={link.href}

className="
text-sm
transition
hover:text-[#b88a44]
"

>

{link.label}

</Link>


))

}


</nav>






<div className="flex items-center gap-3">



<Link

href="/shop"

className="
hidden
rounded-full
bg-[#2a1a12]
px-6
py-3
text-sm
text-white
transition
hover:scale-105
md:block
"

>

Shop Now

</Link>




<button

onClick={()=>setOpen(!open)}

className="
md:hidden
"

>

{
open
?
<X />
:
<Menu />
}

</button>




</div>




</div>






{
open && (

<div className="
border-t
border-[#e8dfd2]
bg-[#faf7f2]
md:hidden
">


<div className="
flex
flex-col
p-6
">


{
links.map((link)=>(


<Link

key={link.href}

href={link.href}

className="
border-b
border-[#e8dfd2]
py-4
text-lg
"

onClick={()=>setOpen(false)}

>

{link.label}

</Link>


))

}



<Link

href="/shop"

className="
mt-5
rounded-full
bg-[#2a1a12]
py-3
text-center
text-white
"

onClick={()=>setOpen(false)}

>

Start Shopping

</Link>



</div>


</div>


)

}



</header>

)

}