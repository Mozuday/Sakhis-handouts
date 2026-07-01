import ProductForm from "@/components/admin/product-form";
import ProductList from "@/components/admin/product-list";
import LogoutButton from "@/components/admin/logout-button";

export default function AdminPage(){

return (

<main className="px-6 py-20">

<div className="mx-auto max-w-7xl">


<div className="mb-12">

<p className="
text-sm
uppercase
tracking-[0.3em]
text-[#c79a4a]
">

Dashboard

</p>


<h1 className="
text-5xl
font-medium
">

Product Management

</h1>

</div>



<div className="
grid
gap-8
lg:grid-cols-3
">


<ProductForm />



<div className="lg:col-span-2">

<ProductList />

</div>

<LogoutButton />

</div>


</div>

</main>


)

}