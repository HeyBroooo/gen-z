import React from "react";
import { SendToFirebase } from "./api/firebase/function";
import { useState } from "react";
import { storage } from "./api/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styles from "../styles/FormData.module.css";


const FormData = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    Image: null,
    productType: "tshirt",
  });

  function onSubmit() {
    console.log("Image:", formdata.Image);
    if (formdata.Image) {
      const storageRef = ref(
        storage,
        `Images/${formdata.productType}/${formdata.Image.name}`
      );
      uploadBytes(storageRef, formdata.Image)
        .then(() => {
          return getDownloadURL(storageRef);
        })
        .then((ImageUrl) => {
          const newData = {
            email: formdata.email,
            password: formdata.password,
            Image: ImageUrl,
          };

          console.log("New Data:", newData);
          SendToFirebase(formdata.productType, newData)
            .then((res) => {
              console.log("Sent to Firebase:", res);
            })
            .catch((error) => {
              console.log("Error sending data to Firebase:", error);
            });
        })
        .catch((error) => {
          console.log("Error uploading Image:", error);
        });
    } else {
      console.log("No Image selected");
    }
  }

  ///
  return (
    <div className={styles["form-container"]}>
    <h2>Sending Admin-Like Data to Firestore</h2>
    <br></br>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Product Name</label>
      <input
        onChange={(e) =>
          setformdata({ ...formdata, email: e.target.value })
        }
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Product Name"
      />
    </div>
        <br></br>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Price</label>
      <input
        onChange={(e) =>
          setformdata({ ...formdata, password: e.target.value })
        }
        type="number"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Price"
      />
    </div>
    <br></br>
    <div className="form-group">
      <label htmlFor="ImageUpload">Upload Image</label>
      <input
        type="file"
        accept="Image/*"
        id="ImageUpload"
        onChange={(e) =>
          setformdata({ ...formdata, Image: e.target.files[0] })
        }
        className="form-control-file"
      />
    </div>
    <br></br>
    <div className="form-group">
        <label htmlFor="productType">Product Type</label>
        <select
          id="productType"
          value={formdata.productType}
          onChange={(e) => setformdata({ ...formdata, productType: e.target.value })}
          className="form-control"
        >
          <option value="tshirt">T-Shirt</option>
          <option value="hoodie">Hoodie</option>
          <option value="stickers">Stickers</option>
          
         
        </select>
      </div>
      <br></br>
    <button onClick={onSubmit} type="submit" className={styles["btn btn-primary"]}>
      Submit
    </button>
  </div>
  );
};

export default FormData;
