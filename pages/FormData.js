import React from "react";
import { SendToFirebase } from "./firebase/function";
import { useState } from "react";
import { storage } from "./firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styles from "../styles/FormData.module.css";


const FormData = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    image: null,
    productType: "tshirt",
  });

  function onSubmit() {
    console.log("Image:", formdata.image);
    if (formdata.image) {
      const storageRef = ref(
        storage,
        `images/${formdata.productType}/${formdata.image.name}`
      );
      uploadBytes(storageRef, formdata.image)
        .then(() => {
          return getDownloadURL(storageRef);
        })
        .then((imageUrl) => {
          const newData = {
            email: formdata.email,
            password: formdata.password,
            image: imageUrl,
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
          console.log("Error uploading image:", error);
        });
    } else {
      console.log("No image selected");
    }
  }

  ///
  return (
    <div className={styles["form-container"]}>
    <h2>Sending Admin-Like Data to Firestore</h2>
    <br></br>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input
        onChange={(e) =>
          setformdata({ ...formdata, email: e.target.value })
        }
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </div>
        <br></br>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input
        onChange={(e) =>
          setformdata({ ...formdata, password: e.target.value })
        }
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>
    <br></br>
    <div className="form-group">
      <label htmlFor="imageUpload">Upload Image</label>
      <input
        type="file"
        accept="image/*"
        id="imageUpload"
        onChange={(e) =>
          setformdata({ ...formdata, image: e.target.files[0] })
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
