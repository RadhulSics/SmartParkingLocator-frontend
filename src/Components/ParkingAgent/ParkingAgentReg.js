import React, { useState } from "react";
import Signin_image from "../../Assets/signin_image.png";
import signUp_logo from "../../Assets/signUpbtnlogo.png";
import axiosInstance from "../../Baseurl";
import { Link, useNavigate } from "react-router-dom";

function ParkingAgentReg() {
  const [data, SetData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    dob: "",
    address: "",
    contact: "",
    image: null,
    password: "",
    confirmPassword: "",

  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    dob: "",
    address: "",
    contact: "",
    image: "",
    password: "",
    confirmPassword: "",

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

  const validateDate = (fieldName, value) => {
    if (!value.trim()) {
      formIsValid = false;
      return `${fieldName} is required`;
    }
    const today = new Date().toISOString().split("T")[0];
    if (value > today) {
      formIsValid = false;
      return `${fieldName} cannot be a future date`;
    }
    return "";
  };

  const navigate = useNavigate();

  let signup = (a) => {
    a.preventDefault();
    let errors = {};
    formIsValid = true;

    errors.firstname = validateField("firstname", data.firstname);
    errors.lastname = validateField("lastname", data.lastname);
    errors.email = validateEmail("email", data.email);
    errors.gender = validateField("gender", data.gender);
    errors.dob = validateDate("dob", data.dob); // Use validateDate for dob
    errors.address = validateField("address", data.address);
    errors.contact = validateNumber("contact", data.contact);
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

      console.log(formData);

      axiosInstance
        .post("/registerParkingAgent", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert("Successfully registered");
            navigate("/parking_agent_login");
          } else if (res.data.status === 409) {
            alert(res.data.msg);
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
                <label className="signupWorkshop-label">First Name</label>
                <input
                  className="signupWorkshop-input"
                  type="text"
                  placeholder="First Name"
                  value={data.firstname}
                  name="firstname"
                  onChange={change}
                />
                {errors.firstname && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.firstname}
                  </div>
                )}
              </div>

              <div>
                <label className="signupWorkshop-label">Last Name</label>
                <input
                  className="signupWorkshop-input"
                  type="text"
                  placeholder="Last Name"
                  value={data.lastname}
                  name="lastname"
                  onChange={change}
                />
                {errors.lastname && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.lastname}
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
                <label className="signupWorkshop-label">Gender</label>
                <select
                  className="signupWorkshop-input"
                  value={data.gender}
                  name="gender"
                  onChange={change}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.gender}
                  </div>
                )}
              </div>

              <div>
                <label className="signupWorkshop-label">Date of Birth</label>
                <input
                  className="signupWorkshop-input"
                  type="date"
                  value={data.dob}
                  name="dob"
                  onChange={change}
                />
                {errors.dob && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.dob}
                  </div>
                )}
              </div>

              <div>
                <label className="signupWorkshop-label">Address</label>
                <input
                  className="signupWorkshop-input"
                  type="text"
                  placeholder="Address"
                  value={data.address}
                  name="address"
                  onChange={change}
                />
                {errors.address && (
                  <div className="text-danger signupWorkshop-validation">
                    {errors.address}
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
                <label className="signupWorkshop-label">Upload Image</label>
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
                <Link to="" className="signupWorkshop-a ">
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

export default ParkingAgentReg;
