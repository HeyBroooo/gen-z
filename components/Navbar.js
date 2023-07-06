import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = ({ cart, clearCart, subTotal, removeFromCart, addToCart }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center mb-1 py-2 shadow-md">
      <div className="logo mx-5">
        <Link legacyBehavior href="/">
          <a>
            <Image src="/logo.png" width={80} height={40} alt="" />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-xl">
          <li>
            <Link legacyBehavior href="/tshirts" passHref>
              <a>Tshirts</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/hoodies" passHref>
              <a>Hoodies</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/stickers" passHref>
              <a>Stickers</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/mugs" passHref>
              <a>Mugs</a>
            </Link>
          </li>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cursor-pointer cart absolute right-0 top-6 mx-5"
      >
        <AiOutlineShoppingCart className="text-xl md:text-3xl" />
      </div>

      <div
        ref={ref}
        className="w-72 h-full cursor-pointer text-indigo-500 sideCart absolute top-0 right-0 bg-indigo-100 p-10 px-8 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center"> Shopping Cart </h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 cursor-pointer text-2xl text-indigo-500"
        >
          <AiFillCloseCircle />
        </span>

        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-light">Your Cart is Empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            const { qty, price, name, size, variant } = cart[k];
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{name}</div>
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
              </li>
            );
          })}
        </ol>
        <div className="flex">
          <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-500 rounded text-sm">
            <BsFillBagCheckFill className="mt-1" />
            Checkout
          </button>

          <button
            onClick={clearCart}
            className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-500 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
