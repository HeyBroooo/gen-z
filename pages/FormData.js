import React from "react";
import { SendToFirebase } from "./firebase/function";
import { useState } from "react";


const FormData = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  function onSubmit() {
    SendToFirebase("firstCollection", formdata)
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

        <button onClick={onSubmit} type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormData;
