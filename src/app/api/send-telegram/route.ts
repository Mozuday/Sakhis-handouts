import { NextResponse } from "next/server";


export async function POST(req:Request){


try{


const data = await req.json();



const message = `

🎁 NEW ORDER RECEIVED


Product:
${data.product}


Amount:
₹${data.amount}


CUSTOMER


Name:
${data.customer.name}


Email:
${data.customer.email}


Phone:
${data.customer.phone}



ADDRESS


${data.customer.address}

${data.customer.city},

${data.customer.state}

${data.customer.pincode}



CUSTOM MESSAGE


${data.customer.message || "No message"}

`;




// SEND TEXT

await fetch(

`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

chat_id:
process.env.TELEGRAM_CHAT_ID,

text:message

})

}

);






// SEND PHOTOS

if(data.photos && data.photos.length){


for(const photo of data.photos){


await fetch(

`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendPhoto`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

chat_id:
process.env.TELEGRAM_CHAT_ID,


photo:photo

})

}

);



}



}




return NextResponse.json({

success:true

});





}

catch(error){


console.log(error);


return NextResponse.json({

success:false

},

{

status:500

});


}


}