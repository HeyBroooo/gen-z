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

