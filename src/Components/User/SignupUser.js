import React, { useState } from "react";
import "./signupUser.css";
import Signin_image from "../../Assets/signin_image.png";
import signUp_logo from "../../Assets/signUpbtnlogo.png";
import axiosInstance from "../../Baseurl";
import { Link, useNavigate } from "react-router-dom";

function SignupUser() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    image: null,
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  let formIsValid;

  const change = (b) => {
    const { name, value } = b.target;
    if (b.target.name === "image") {
      setData({ ...data, image: b.target.files[0] });
    } else {
      setData({ ...data, [b.target.name]: value });
    }

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
    if (fieldName === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        formIsValid = false;
        return "Email is not valid";
      }
    }
    return "";
  };

  const validateNumber = (fieldName, value) => {
    if (!value.trim()) {
      formIsValid = false;
      return `${fieldName} is required`;
    } else if (value.toString().length !== 10) {
      formIsValid = false;
      return `${fieldName} requires 10 digits`;
    }
    return "";
  };

  const validatePassword = (fieldName, value) => {
    const errorsPassword = [];
    if (!value.trim()) {
      formIsValid = false;
      errorsPassword.push(`${fieldName} is required`);
    }

    if (value.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
      formIsValid = false;
      errorsPassword.push(`special character`);
    }

    if (value.length < 8) {
      formIsValid = false;
      errorsPassword.push(`minimum length of 8`);
    }
    if (value.search(/[a-z]/) < 0) {
      formIsValid = false;
      errorsPassword.push(`one small letter`);
    }
    if (value.search(/[A-Z]/) < 0) {
      formIsValid = false;
      errorsPassword.push(`one capital letter`);
    }
    if (value.search(/[0-9]/) < 0) {
      formIsValid = false;
      errorsPassword.push(`one number`);
    }
    if (errorsPassword.length > 0) {
      formIsValid = false;
      return `${errorsPassword.join(", ")}`;
    }
    return true;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      formIsValid = false;
      return "Passwords do not match";
    }
    return "";
  };

  const navigate = useNavigate();

  const signup = (a) => {
    a.preventDefault();

    let errors = {};
    formIsValid = true;

    errors.firstname = validateField("firstname", data.firstname);
    errors.lastname = validateField("lastname", data.lastname);
    errors.email = validateField("email", data.email);
    errors.contact = validateNumber("contact", data.contact);
    errors.password = validatePassword("password", data.password);
    errors.confirmPassword = validateConfirmPassword(data.password, data.confirmPassword);

    setErrors(errors);

    if (formIsValid) {
      axiosInstance
        .post("/registerCustomer", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert("Successfully registered");
            navigate("/user-login");
          } else if (res.data.status === 409) {
            alert(res.data.msg);
          } else {
            alert("Failed to register");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={signup}>
        <div>
          <img className="signupUser-img" src={Signin_image} alt="Signin_image" />
        </div>

        <div className="signupUser-main">
          <div>
            <h2 className="signupUser-head">Sign Up</h2>
          </div>
          <div className="row">
            <div className="signupUser-submain col-2">
              <div>
                <label className="signupUser-label">First Name</label>
                <input
                  className="signupUser-input"
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  value={data.firstname}
                  onChange={change}
                />
                {errors.firstname && (
                  <div className="text-danger signupUser-validation">
                    {errors.firstname}
                  </div>
                )}
              </div>
              <div>
                <label className="signupUser-label">Last Name</label>
                <input
                  className="signupUser-input"
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  value={data.lastname}
                  onChange={change}
                />
                {errors.lastname && (
                  <div className="text-danger signupUser-validation">
                    {errors.lastname}
                  </div>
                )}
              </div>
              <div>
                <label className="signupUser-label">Email</label>
                <input
                  className="signupUser-input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={change}
                />
                {errors.email && (
                  <div className="text-danger signupUser-validation">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label className="signupUser-label">Contact Number</label>
                <input
                  className="signupUser-input"
                  type="number"
                  placeholder="Contact Number"
                  name="contact"
                  value={data.contact}
                  onChange={change}
                />
                {errors.contact && (
                  <div className="text-danger signupUser-validation">
                    {errors.contact}
                  </div>
                )}
              </div>

              <div>
                <label className="signupUser-label">Gender</label>
                <br />
                <input
                  className="gender-btn"
                  id="Idgender1"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={change}
                />
                <label className="gender-btn" htmlFor="Idgender1">
                  Male
                </label>
                <input
                  className="gender-btn"
                  id="Idgender2"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={change}
                />
                <label className="gender-btn" htmlFor="Idgender2">
                  Female
                </label>
              </div>
              <div>
                <label className="signupUser-label">Image</label>
                <br />
                <input
                  className="gender-btn"
                  type="file"
                  name="image"
                  onChange={change}
                />
              </div>

              <div>
                <label className="signupUser-label">Password</label>
                <input
                  className="signupUser-input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={change}
                />
                {errors.password && (
                  <div className="text-danger signupUser-validation">
                    {errors.password}
                  </div>
                )}
              </div>

              <div>
                <label className="signupUser-label">Confirm Password</label>
                <input
                  className="signupUser-input"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={change}
                />
                {errors.confirmPassword && (
                  <div className="text-danger signupUser-validation">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              
              <div>
                <button className="signupUser-btn" type="submit">
                  Sign Up
                </button>
                <img className="signupBtn-logo" src={signUp_logo} alt="signUp_logo" />
              </div>
              <div>
                <p className="signupUser-p mt-5">Already have an account,</p>
              </div>
              <div>
                <Link to="/user-login" style={{ textDecoration: "none" }}>
                  <a className="signupUser-a" href="">
                    Login
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupUser;
