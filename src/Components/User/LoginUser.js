import React, { useState } from "react";
import Signin_image from "../../Assets/signin_image.png";
import "./loginUser.css";
import SignupLogo from "../../Assets/signUpbtnlogo.png";
import axiosInstance from "../../Baseurl";
import { Link, useNavigate } from "react-router-dom";

function LoginUser() {
  let formIsValid = true;

  const [data, SetData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const change = (b) => {
    const { name, value } = b.target;
    SetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      formIsValid = false;
      return `${fieldName} is required`;
    }
    return "";
  };
  const navigate = useNavigate();

  let signin = (a) => {
    a.preventDefault();
    let errors = {};
    formIsValid = true;
    errors.email = validateField("email", data.email);
    errors.password = validateField("password", data.password);

    setErrors(errors);
    console.log(formIsValid);
    if (formIsValid) {
      console.log("data", data);
      axiosInstance
        .post("/loginCust", data)
        .then((res) => {
          console.log(res);
          if (res.data.status == 200) {
            localStorage.setItem("userid", res.data.data._id);
            alert("succesfully login");
            navigate("/userhome");
          } else if (res.data.status == 401) {
            alert(res.data.msg);
          } else if (res.data.status == 405) {
            alert(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={signin}>
        <div>
          <img
            className="loginUser-img"
            src={Signin_image}
            alt="Signin_image"
          />
        </div>

        <div className="loginUser-main">
          <div>
            <h2 className="loginUser-head">User Sign In</h2>
          </div>
          <div>
            <label className="loginUser-label">Email</label>
            <input
              className="loginUser-input1"
              name="email"
              value={data.email}
              onChange={change}
              type="text"
              placeholder="Email"
            />
            {errors.email && (
              <div className="text-danger input-validation">{errors.email}</div>
            )}
          </div>
          <div>
            <label className="loginUser-label">Password</label>
            <input
              className="loginUser-input"
              name="password"
              value={data.password}
              onChange={change}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <div className="text-danger input-validation">
                {errors.password}
              </div>
            )}
          </div>
          <div className="loginUser-Areset">
            <Link className="loginUser-a" to="/forgotpass-user">
              Reset Password{" "}
            </Link>
          </div>
          <div className="loginUser-Asignup">
            <Link to="/user-signup">
              <a className="loginUser-a" href="">
                Signup
              </a>
            </Link>
          </div>
          <div>
            <button className="loginUser-btn" type="submit">
              Sign In <img className="signupLogo1" src={SignupLogo} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginUser;
