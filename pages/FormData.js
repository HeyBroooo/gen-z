import React from "react";
import { SendToFirebase } from "./firebase/function";
import { useState } from "react";

const FormData = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    image: null,
  });

  function onSubmit() {
    SendToFirebase("Product-Data", formdata)
      .then((res) => {
        console.log("send to Firebase: ", res);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h2>sending admin like data to firestore</h2>

      <div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) =>
              setformdata({ ...formdata, email: e.target.value })
            }
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We,ll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            onChange={(e) =>
              setformdata({ ...formdata, password: e.target.value })
            }
            type="password"
            class="form-control"
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
              setformdata({ ...formdata, image: e.target.value[0] })
            }
            
            className="form-control-file"
          />
              
        </div>
           
        <button onClick={onSubmit} type="submit" class="btn btn-primary">
          Submit
        </button>

        
      </div>
    </div>
    
  );
};

export default FormData;
