// components/PaymentDetails.js
import React from "react";
import Image from "next/Image";

const PaymentDetails = ({ paymentId, subTotal}) => {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  HoodieHub.Com
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                  payment Id: {paymentId}
                </h1>
                <p class="leading-relaxed mb-4">
                  Your Order has been Successfully Placed
                </p>
                <div class="flex mb-4">
                  <a class="flex-grow text-center py-2 text-lg px-1">
                    Item Description
                  </a>
                  <a class="flex-grow text-center border-b-2 border-gray-300 py-2 text-lg px-1">
                    Quantity
                  </a>
                  <a class="flex-grow text-center border-b-2 border-gray-300 py-2 text-lg px-1">
                    Item Total
                  </a>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Hoodiehub.com(xl/Black)</span>
                  <span class="ml-auto text-gray-900">1</span>
                  <span class="ml-auto text-gray-900">499</span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Hoodiehub.com(xl/Black)</span>
                  <span class="ml-auto text-gray-900">1</span>
                  <span class="ml-auto text-gray-900">499</span>
                </div>
                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span class="text-gray-500">Hoodiehub.com(xl/Black)</span>
                  <span class="ml-auto text-gray-900">1</span>
                  <span class="ml-auto text-gray-900">499</span>
                </div>
                <div class="flex flex-col">
                  {/* <span class="title-font font-medium text-2xl text-gray-900">
                    Total: {subTotal}
                  </span> */}
                  <div className="my-6">
                    <button class="flex mx-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
              <Image 
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="/order-try.jpg"
                // style={{ marginTop: '0px' }}
              />
            </div>
          </div>
        </section>
      );
  };
  
  export default PaymentDetails;
  