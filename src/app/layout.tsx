import type { Metadata, Viewport } from "next";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


export const metadata: Metadata = {

  metadataBase: new URL(
    "https://www.sakhis-handouts.in"
  ),


  title: {
    default:
      "Sakhi's Handouts | Personalized Handmade Gifts & Custom Frames",

    template:
      "%s | Sakhi's Handouts",
  },


  description:
    "Discover personalized handmade gifts, custom frames, handcrafted keepsakes, and unique creations made with love. Order customized gifts online from Sakhi's Handouts.",



  keywords: [

    "personalized gifts",

    "custom gifts",

    "handmade gifts",

    "custom frames",

    "gift shop",

    "personalized frame",

    "Sakhi's Handouts",

    "customized gifts India",

  ],



  authors: [

    {
      name:
        "Sakhi's Handouts",
    },

  ],



  creator:
    "Sakhi's Handouts",



  publisher:
    "Sakhi's Handouts",



  category:
    "Shopping",



  robots: {

    index:true,

    follow:true,

    googleBot: {

      index:true,

      follow:true,

      "max-image-preview":
        "large",

      "max-video-preview":
        -1,

      "max-snippet":
        -1,

    },

  },



  alternates: {

    canonical:
      "/",

  },



  openGraph: {

    type:
      "website",

    locale:
      "en_IN",

    url:
      "https://www.sakhis-handouts.in",

    siteName:
      "Sakhi's Handouts",


    title:
      "Sakhi's Handouts | Personalized Handmade Gifts",


    description:
      "Personalized handmade gifts, custom frames, handcrafted keepsakes and more.",



    images:[

      {

        url:
          "/icon.png",

        width:
          512,

        height:
          512,

        alt:
          "Sakhi's Handouts",

      },

    ],

  },



  twitter: {

    card:
      "summary_large_image",


    title:
      "Sakhi's Handouts",


    description:
      "Personalized handmade gifts and custom creations.",


    images:[
      "/icon.png"
    ],

  },



  icons: {

    icon:
      "/icon.png",

    shortcut:
      "/icon.png",

    apple:
      "/icon.png",

  },

};



export const viewport: Viewport = {

  themeColor:
    "#faf7f2",

};



export default function RootLayout({

  children,

}: Readonly<{

  children:
    React.ReactNode;

}>) {


return (

<html lang="en">


<body className="antialiased">


<Navbar />


{children}


<Footer />


</body>


</html>

);


}
