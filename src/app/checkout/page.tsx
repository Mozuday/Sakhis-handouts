import { Suspense } from "react";
import CheckoutClient from "./checkout-client";


export default function CheckoutPage(){


return (

<Suspense

fallback={

<div className="
min-h-screen
flex
items-center
justify-center
">

Loading Checkout...

</div>

}

>


<CheckoutClient />


</Suspense>

)

}