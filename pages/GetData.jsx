import React, { useEffect, useState } from "react";
import { GetAllData } from "./firebase/function";
import styles from "../styles/GetData.module.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const GetData = () => {
  const [first, setFirst] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetAllData("tshirt")
      .then((data) => {
        console.log("Fetched data:", data);
        setFirst(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, []);

  const [subTotal, setSubTotal] = useState(0);

  const [cart, setCart] = useState({});

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };

  const router = useRouter();
  const { slug } = router.query;

  const addToCart = (itemCode, qty, price, name, size, varaiant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, varaiant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const buyNow = (itemCode, qty, price, name, size, varaiant) => {
    let newCart = { itemCode: { qty: 1, price, name, size, varaiant } };

    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };

  return (
    <div className={styles.productGrid}>
      {first.map((value, index) => (
        <div key={index} className={`${styles.productBox} mb-4 cursor-pointer`}>
          <Link href={`/product/${value.email}`} key={value.id} passHref>
          <div className={styles.productImage}>
            <img src={value?.image} alt={`Image for ${value?.image}`} />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>Name: {value?.email}</div>
            <div className={styles.productPassword}>
              Password: {value?.password}
            </div>
          </div>
          </Link>
          <button
            onClick={() => {
              addToCart(
                slug,
                1,
                499,
                "Fashion Meets Comfort(XL, RED)",
                "XL",
                "RED"
              );
              toast.success("Added To Cart 😇");
            }}
            className="flex   text-white bg-indigo-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Add to Cart
            <ToastContainer />
          </button>
          <br />
          <button
            onClick={() => {
              buyNow(slug, 1, 499, "Fashion Meets Comfort(XL, RED)");
            }}
            class="flex  text-white bg-indigo-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default GetData;
