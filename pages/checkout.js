import Link from "next/link";
import React from "react";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

   


const Checkout = ({clearCart,cart,addToCart,removeFromCart,subTotal}) => {
  const initiatePayment =async() => {
    
    let oid = Math.floor(Math.random() * Date.now());
    //get transaction

    const data = { cart, subTotal, oid, email: "email" };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`,{
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
      let txnRes = await a.json()
      console.log(txnRes)
      let txnToken = txnRes.txnToken
    


      var config = {
      "root": "",
      "flow": "DEFAULT",
      "data": {
      "orderId": oid, /* update order id */
      "token": txnToken, /* update token value */
      "tokenType": "TXN_TOKEN",
      "amount": subTotal/* update amount */
      },
      "handler": {
      "notifyMerchant": function(eventName,data){
      console.log("notifyMerchant handler function called");
      console.log("eventName => ",eventName);
      console.log("data => ",data);
      }
      }
      };
    
      window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
      // after successfully updating configuration, invoke JS Checkout
      window.Paytm.CheckoutJS.invoke();
      }).catch(function onError(error){
      console.log("error => ",error);
      });
    
  }
  return (
    <div className="container px-2 sm:m-auto">
      <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/></Head>

      <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
        crossorigin="anonymous" />

      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label htmlFor="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label htmlFor="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        </div>
        <div className="px-2 w-full">
          <div class="mb-4">
            <label htmlFor="address" class="leading-7 text-sm text-gray-600">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label htmlFor="phone" class="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="number"
              id="Phone"
              name="phone"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label htmlFor="city" class="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        </div>
        <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label htmlFor="state" class="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class="mb-4">
            <label htmlFor="pincode" class="leading-7 text-sm text-gray-600">
              Pincode
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        </div>

        <h2 className="font-semibold text-xl">2. Review Cart Items & Pay</h2>

        <div
        className=" text-indigo-500 sideCart bg-indigo-100 p-6 m-2"
      >
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-light">Your Cart is Empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            const { qty, price, name, size, variant } = cart[k];
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="font-semibold">{name}</div>
                  <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-indigo-500"
                    />
                    <span className="mx-2 text-sm">{qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-indigo-500"
                    />{" "}
                  </div>
                 
                </div>
                <span className="font-bold">subTotal: ₹{subTotal}</span>
              </li>
               
            );
          })}
        </ol>
      </div>
      <div className="mx-4">
      <Link href="https://paytm.me/540-aFf"> <button onClick={initiatePayment} className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-500 rounded text-sm">
    Pay ₹ {subTotal}
  </button></Link>
  </div>
    </div>
    
  );
};

export default Checkout;
