import React from "react";
import { SendToFirebase } from "./firebase/function";
import { useState } from "react";
import { storage } from "./firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FormData = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    image: null,
  });

  function onSubmit() {
    console.log("Image:", formdata.image);
    if (formdata.image) {
      const storageRef = ref(storage, "images/" + formdata.image.name);
      uploadBytes(storageRef, formdata.image).then(() => {
        getDownloadURL(storageRef).then((imageUrl) => {
          const newData = {
            email: formdata.email,
            password: formdata.password,
            image: imageUrl,
          };

          SendToFirebase("Product-Data", newData)
            .then((res) => {
              console.log("send to Firebase: ", res);
            })
            .catch((error) => console.log(error));
        });
      });
    } else {
      console.log("No image selected");
    }
  }

  return (
    <div className="form-container">
    <h2>Sending Admin-Like Data to Firestore</h2>

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
      <small id="emailHelp" className="form-text text-muted">
        We never share your email with anyone else.
      </small>
    </div>
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

    <button onClick={onSubmit} type="submit" className="btn btn-primary">
      Submit
    </button>
  </div>
  );
};

export default FormData;
