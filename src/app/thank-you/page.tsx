import Link from "next/link";
import { CheckCircle } from "lucide-react";


export default function ThankYouPage(){


return (

<main className="
min-h-screen
flex
items-center
justify-center
bg-[#faf7f2]
px-6
">


<div className="
max-w-xl
rounded-[40px]
bg-white
p-12
text-center
shadow-sm
">


<div className="
mx-auto
mb-6
flex
h-20
w-20
items-center
justify-center
rounded-full
bg-[#ede4d8]
">


<CheckCircle
className="text-[#b88a44]"
size={45}
/>


</div>





<p className="
text-sm
uppercase
tracking-[0.3em]
text-[#b88a44]
">

Order Confirmed

</p>





<h1 className="
mt-6
text-4xl
font-medium
md:text-5xl
">

Thank You For Your Order 🎁

</h1>





<p className="
mt-6
leading-8
text-black/60
">

Your payment was successful.
We have received your customization details
and will start creating your personalized gift soon.

</p>





<div className="
mt-8
rounded-3xl
bg-[#faf7f2]
p-6
text-left
">


<h3 className="
font-medium
">

What's Next?

</h3>


<ul className="
mt-4
space-y-3
text-sm
text-black/60
">


<li>
✓ We verify your order
</li>


<li>
✓ We prepare your custom design
</li>


<li>
✓ We create and deliver your gift
</li>


</ul>



</div>






<Link

href="/shop"

className="
mt-10
inline-block
rounded-full
bg-[#2a1a12]
px-8
py-4
text-white
"

>

Continue Shopping

</Link>



</div>


</main>

)


}