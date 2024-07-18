import React, { useState } from "react";
import "./signupWorkshop.css";
import Signin_image from "../../Assets/signin_image.png";
import signUp_logo from "../../Assets/signUpbtnlogo.png";
import axiosInstance from "../../Baseurl";
import { Link, useNavigate } from "react-router-dom";

const districtsInKerala = [
  "Alappuzha",
  "Ernakulam",
  "Idukki",
  "Kannur",
  "Kasaragod",
  "Kollam",
  "Kottayam",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Pathanamthitta",
  "Thiruvananthapuram",
  "Thrissur",
  "Wayanad",
];

function SignupWorkshop() {
  const [data, SetData] = useState({
    name: "",
    contact: "",
    email: "",
    city: "",
    district: "",
    aadhar: "",
    password: "",
    confirmPassword: "",
    image: null,
    regno: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    contact: "",
    email: "",
    city: "",
    district: "",
    aadhar: "",
    password: "",
    confirmPassword: "",
    image: "",
    regno: "",
  });

  let formIsValid;

  const change = (b) => {
    const { name, value } = b.target;

    if (b.target.name === "image") {
      SetData({ ...data, image: b.target.files[0] });
    } else {
      SetData({ ...data, [b.target.name]: b.target.value });
    }
    console.log(data);
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

  const validateEmail = (fieldName, value) => {
    if (!value.trim()) {
      formIsValid = false;
      return `${fieldName} is required`;
    } else if (!value.includes(".")) {
      formIsValid = false;
      return `${fieldName} should include '.'`;
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

  const validateAadhar = (fieldName, value) => {
    if (!value.trim()) {
      formIsValid = false;
      return `${fieldName} is required`;
    } else if (value.toString().length !== 12) {
      formIsValid = false;
      return `${fieldName} requires 12 digits`;
    }
    return "";
  };

  const validatePassword = (fieldName, value) => {
    var errorsPassword = [];
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

  let signup = (a) => {
    a.preventDefault();
    let errors = {};
    formIsValid = true;

    errors.name = validateField("name", data.name);
    errors.email = validateEmail("email", data.email);
    errors.city = validateField("city", data.city);
    errors.district = validateField("district", data.district);
    errors.aadhar = validateAadhar("aadhar", data.aadhar);
    errors.contact = validateNumber("contact", data.contact);
    errors.regno = validateField("regno", data.regno);
    errors.password = validatePassword("password", data.password);
    errors.confirmPassword = validateConfirmPassword(
      data.password,
      data.confirmPassword
    );

    setErrors(errors);
    console.log(formIsValid);

    if (formIsValid) {
      console.log("data", data);
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      axiosInstance
        .post("/registerWorkshop", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert("Successfully registered");
            navigate("/workshop-login");
          } else if (res.data.Error.code === 11000) {
            alert("This workshop has already registered");
          } else {
            alert("Failed to register");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={signup}>
        <div>
          <img
            className="signupWorkshop-img"
            src={Signin_image}
            alt="Signin_image"
          />
        </div>

        <div className="signupWorkshop-main">
          <div>
            <h2 className="signupWorkshop-head">Sign Up</h2>
          </div>
          <div className="row">
            <div className="signupWorkshop-submain col-2">
              <div>
                <label className="signupWorkshop-label">Shop name</label>
                <input
                  className="signupWorkshop-input"
                  type="text"
                  placeholder="Shop name"
                  value={data.name}
                  name="name"
                  onChange={change}
                />
                {errors.name && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <label className="signupWorkshop-label">Email</label>
                <input
                  className="signupWorkshop-input"
                  type="email"
                  placeholder="Email"
                  value={data.email}
                  name="email"
                  onChange={change}
                />
                {errors.email && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label className="signupWorkshop-label">City</label>
                <input
                  className="signupWorkshop-input"
                  type="text"
                  placeholder="City"
                  value={data.city}
                  name="city"
                  onChange={change}
                />
                {errors.city && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.city}
                  </div>
                )}
              </div>
              <div>
                <label className="signupWorkshop-label">District</label>
                <select
                  className="signupWorkshop-input"
                  value={data.district}
                  name="district"
                  onChange={change}
                >
                  <option value="">Select District</option>
                  {districtsInKerala.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
                {errors.district && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.district}
                  </div>
                )}
              </div>
              <div>
                <label className="signupWorkshop-label">Aadhar</label>
                <input
                  className="signupWorkshop-input"
                  type="number"
                  placeholder="Aadhar number"
                  value={data.aadhar}
                  name="aadhar"
                  onChange={change}
                />
                {errors.aadhar && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.aadhar}
                  </div>
                )}
              </div>
              <div>
                <label className="signupWorkshop-label">Contact Number</label>
                <input
                  className="signupWorkshop-input"
                  type="number"
                  placeholder="Contact Number"
                  value={data.contact}
                  name="contact"
                  onChange={change}
                />
                {errors.contact && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.contact}
                  </div>
                )}
              </div>
              <div>
                <label className="signupWorkshop-label">Register Number</label>
                <input
                  className="signupWorkshop-input"
                  type="text"
                  placeholder="Register Number"
                  value={data.regno}
                  name="regno"
                  onChange={change}
                />
                {errors.regno && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.regno}
                  </div>
                )}
              </div>
              <div>
                <label className="signupWorkshop-label">Image</label>
                <br />
                <input
                  className="gender-btn"
                  type="file"
                  name="image"
                  onChange={change}
                />
              </div>

              <div>
                <label className="signupWorkshop-label">Password</label>
                <input
                  className="signupWorkshop-input"
                  type="password"
                  placeholder="Password"
                  value={data.password}
                  name="password"
                  onChange={change}
                />
                {errors.password && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.password}
                  </div>
                )}
              </div>

              <div>
                <label className="signupWorkshop-label">Confirm Password</label>
                <input
                  className="signupWorkshop-input"
                  type="password"
                  placeholder="Confirm Password"
                  value={data.confirmPassword}
                  name="confirmPassword"
                  onChange={change}
                />
                {errors.confirmPassword && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              <div>
                <p className="signupWorkshop-p">Already have an account,</p>
              </div>
              <div>
                <Link to="/workshop-login" className="signupWorkshop-a ">
                  Login
                </Link>
              </div>
              <div>
                <button className="signupWorkshop-btn" type="submit">
                  Sign Up
                </button>
                <img
                  className="signupBtn-logo"
                  src={signUp_logo}
                  alt="signUp_logo"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupWorkshop;
