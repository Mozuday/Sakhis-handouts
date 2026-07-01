import Link from "next/link";


export default function CTA() {

return (

<section className="py-24">


<div className="mx-auto max-w-5xl px-6">


<div className="
rounded-[40px]
border
border-[#d9c6a5]
bg-[#faf7f2]
p-10
text-center
md:p-16
">


<p className="
mb-4
uppercase
tracking-[0.3em]
text-sm
text-[#b88a44]
">

Create Something Special

</p>



<h2 className="
mx-auto
max-w-3xl
text-4xl
font-light
leading-tight
md:text-5xl
">


A Beautiful Gift
For Someone You Love


</h2>



<p className="
mx-auto
mt-6
max-w-xl
leading-7
text-black/60
">

Choose a frame, add your memories and
we will turn them into a handmade keepsake.

</p>




<div className="
mt-10
flex
flex-wrap
justify-center
gap-4
">


<Link

href="/shop"

className="
rounded-full
bg-[#2a1a12]
px-8
py-4
text-white
transition
hover:scale-105
"

>

Start Creating

</Link>



<Link

href="/shop"

className="
rounded-full
border
border-[#b88a44]
px-8
py-4
transition
hover:bg-[#b88a44]
hover:text-white
"

>

View Gifts

</Link>


</div>




<p className="
mt-8
text-sm
text-black/50
">

✓ Personalized designs &nbsp; ✓ Premium finish &nbsp; ✓ Made with care

</p>



</div>


</div>


</section>

)

}