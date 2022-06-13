import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios"

function Signin() {
  let navigate = useNavigate();

  let [values, setValue] = useState({
    email: "",
    password: "",
  });

  const generateError = (err) =>
    toast.error(err, {
      position: "top-left",
    });

  let handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("values",values)
    try {
      let { data } = await axios.post(
        "http://localhost:4000/signin",

        values,

        {
          withCredentials: true,
        }
      );
      // console.log("sent data",data);
      if (data) {
        if (data.errors) {
          // console.log("failed")
          const { email, password } = data.errors;

          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          console.log("sucess");
          navigate("/order");
        }
      }
    } catch (err) {
      console.log("catch", err);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="create-form" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <div>
          <label>Email</label>
          <br></br>
          <input
            className="box"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValue({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label>Password</label>
          <br></br>
          <input
            className="box"
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) =>
              setValue({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <br />
        <button className="login-button">
          <b>Signin</b>
        </button>
        <br />
        <hr />
        create account{" "}
        <Link to="/signup" className="link-click">
          Signin
        </Link>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signin;
