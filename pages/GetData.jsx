import React, { useEffect, useState } from "react";
import { GetAllData } from "./firebase/function";
import styles from "../styles/GetData.module.css";

const GetData = () => {
  const [first, setFirst] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetAllData("hoodie-collection")
      .then((data) => {
        console.log("Fetched data:", data);
        setFirst(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error); // Set the error state
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
            <div className={styles.productPassword}>Password: {value?.password}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetData;
