import React, { useEffect, useState } from "react";
import { GetAllData } from "./firebase/function";
import styles from "../styles/GetData.module.css";

const GetData = ({addToCart}) => {
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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.productGrid}>
      {first.map((value, index) => (
        <div key={index} className={styles.productBox}>
          <div className={styles.productImage}>
            <img src={value?.image} alt={`Image for ${value?.image}`} />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>Name: {value?.email}</div>
            <div className={styles.productPassword}>
              Password: {value?.password}
            </div>
          </div>
          <button
            onClick={() => {
              addToCart();
            }}
          
            className="flex ml-100 h-10 text-center  text-white bg-indigo-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >Add to Cart</button>
        </div>
        
      ))}
    </div>
    
  );
};

export default GetData;
