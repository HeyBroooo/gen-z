import React from "react";
import { useEffect, useState } from "react";
import { GetAllData } from "./firebase/function";

const GetData = () => {
  const [first, setfirst] = useState([]);

  useEffect(() => {

    
    GetAllData("firstCollection").then((docs) => {
      docs.forEach((doc) => {
        console.log(doc.id, doc.data());
        setfirst((first) => [...first, doc.data()]);
      });
    });
  }, []);

  return (
    <div>
      {first.map((value) => {
        return(
        <>
          <div>Name: {value?.email}</div>
          <div>password:{value?.password}</div>
          <br></br>
        </>
        );
      })}
    </div>
  );
};

export default GetData;
