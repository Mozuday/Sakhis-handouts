import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


return (

<html lang="en">

<body>


<Script
src="https://checkout.razorpay.com/v1/checkout.js"
/>



<Navbar />


{children}


<Footer />



</body>


</html>

)

}



export const metadata = {

title:"Sakhi's Handouts",

description:
"Personalized gifts and frames"

};