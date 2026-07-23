import { NextResponse } from "next/server";
import Razorpay from "razorpay";


if (
  !process.env.RAZORPAY_KEY_ID ||
  !process.env.RAZORPAY_KEY_SECRET
) {
  throw new Error(
    "Razorpay keys missing"
  );
}



const razorpay = new Razorpay({

  key_id:
    process.env.RAZORPAY_KEY_ID,

  key_secret:
    process.env.RAZORPAY_KEY_SECRET

});



export async function POST(req: Request) {


  try {


    const body = await req.json();



    const amount = Number(body.amount);



    if (!amount || amount <= 0) {


      return NextResponse.json(

        {
          error:"Invalid amount"
        },

        {
          status:400
        }

      );


    }




    const storeOrderId =
      `SH-${Date.now().toString().slice(-8)}`;




    const razorpayOrder =
      await razorpay.orders.create({

        amount:
          Math.round(amount * 100),

        currency:"INR",

        receipt:
          storeOrderId

      });





    return NextResponse.json({

      id:
        razorpayOrder.id,

      amount:
        razorpayOrder.amount,

      currency:
        razorpayOrder.currency,

      store_order_id:
        storeOrderId

    });




  } catch(error:any) {


    console.error(
      "Create Razorpay Order Error:",
      error
    );



    return NextResponse.json(

      {
        error:
        "Unable to create payment order"
      },

      {
        status:500
      }

    );


  }


}
