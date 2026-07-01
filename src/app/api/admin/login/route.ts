import {NextResponse} from "next/server";


export async function POST(req:Request){


const {password}=await req.json();



if(
password !== process.env.ADMIN_PASSWORD
){

return NextResponse.json({

success:false

});

}



const response = NextResponse.json({

success:true

});



response.cookies.set(

"admin",

"authenticated",

{

httpOnly:true,

secure:process.env.NODE_ENV==="production",

sameSite:"strict",

maxAge:60*60*24*7,

path:"/"

}

);



return response;


}