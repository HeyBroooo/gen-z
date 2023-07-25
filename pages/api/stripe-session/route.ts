import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2022-11-15",
});


export async function POST(request: NextRequest) {
    const body = request.json();
    console.log(body);

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
            {    
                price: '{{PRICE_ID}}',
                quantity: 1,
            },
            ],
            mode: 'payment',
            success_url: `${request.headers.get("origin")}/?success=true`,
            cancel_url: `${request.headers.get("origin")}/?canceled=true`,
        });
        return NextResponse.json({session});
    }catch (err: any) {
        return NextResponse.json(err.message);

}
}