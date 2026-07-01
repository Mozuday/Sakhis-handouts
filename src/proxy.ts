import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function proxy(req: NextRequest) {


const pathname = req.nextUrl.pathname;


const adminCookie = req.cookies.get("admin");



console.log(
"PROXY RUNNING:",
pathname
);



if(

pathname.startsWith("/admin")

&&

pathname !== "/admin/login"

&&

!adminCookie

){


return NextResponse.redirect(

new URL(
"/admin/login",
req.url
)

);


}



return NextResponse.next();


}



export const config = {

matcher:[

"/admin/:path*"

]

};