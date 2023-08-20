import React, { useEffect, useState } from "react";
import { GetAllData } from "./firebase/function";

const GetData = () => {
  const [first, setFirst] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetAllData("Product-Data")
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
    <div>
      {first.map((value, index) => (
        <div key={index}>
          <div>Name: {value?.email}</div>
          <div>Password: {value?.password}</div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default GetData;
