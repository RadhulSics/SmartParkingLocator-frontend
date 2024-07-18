import React, { useState } from "react";
import "./SignupMech.css";
import signUp_logo from "../../Assets/signUpbtnlogo.png";
import axiosInstance from "../../Baseurl";

function SignupMech() {
  const shopid = localStorage.getItem("workshopid");
  console.log(shopid);

  const [data, SetData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    aadhar: "",
    gender: "",
    password: "",
    image: null,
    certificate: null,
    shopid: shopid,
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    aadhar: "",
    password: "",
  });
  let formIsValid;

  const change = (b) => {
    const { name, files } = b.target;
    
      SetData({ ...data, [b.target.name]: b.target.value });
    

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };


  const handleFileChange = (e) => {
    const { name, files } = e.target;
    SetData({ ...data, [name]: files[0] });
  };


console.log(data);
  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      formIsValid = false;
      return `${fieldName} is required`;
    }
    return "";
  };

  const validateNumber = (fieldName, value) => {
    if (!value.trim()) {
      formIsValid = false;
      return `${fieldName} is required`;
    } else if (value.toString().length !== 10) {
      formIsValid = false;
      return `${fieldName}  10 digits required`;
    }
  };

  const validatePassword = (fieldName, value) => {
    var erorrsPassword = [];
    if (!value.trim()) {
      formIsValid = false;
      erorrsPassword.push(`${fieldName} is required and include any`);
    }

    if (value.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
      formIsValid = false;
      erorrsPassword.push(`special character ,`);
    }

    if (value.length < 7) {
      formIsValid = false;
      erorrsPassword.push(`length minimum 8 ,`);
    }
    if (value.search(/[a-z]/) < 0) {
      formIsValid = false;
      erorrsPassword.push(`one small letter ,`);
    }
    if (value.search(/[A-Z]/) < 0) {
      formIsValid = false;
      erorrsPassword.push(`one capital letter ,`);
    }
    if (value.search(/[0-9]/) < 0) {
      formIsValid = false;
      erorrsPassword.push(`and any number.`);
    }
    if (erorrsPassword.length > 0) {
      formIsValid = false;
      return `${erorrsPassword.join("\n")}`;
    }
    return true;
  };

  let signup = (a) => {
    a.preventDefault();

    console.log(data.contact.length);

    if(!data.contact || data.contact.length !== 10){
      return alert("Contact must have 10 numbers");
    }
    if(!data.aadhar || data.aadhar.length !== 12){
      return alert("Aadhar must have 12 numbers");
    }    
    if(!data.password|| data.password.length <8){
      return alert("Password must contain 8 charecters");
    }    

    let errors = {};
    let formIsValid = true;

    errors.firstname = validateField("firstname", data.firstname);
    errors.lastname = validateField("lastname", data.lastname);
    errors.email = validateField("email", data.email);
    errors.aadhar = validateField("aadhar", data.aadhar);
    errors.contact = validateNumber("contact", data.contact);
    errors.password = validatePassword("password", data.password);

    setErrors(errors);
    console.log(formIsValid);

    if (formIsValid) {
      const formData = new FormData();
      formData.append("firstname", data.firstname);
      formData.append("lastname", data.lastname);
      formData.append("email", data.email);
      formData.append("contact", data.contact);
      formData.append("aadhar", data.aadhar);
      formData.append("gender", data.gender);
      formData.append("password", data.password);
       formData.append("files", data.image);
      formData.append("files", data.certificate);
      // if (data.image) {
      //   for (let i = 0; i < data.image.length; i++) {
      //     formData.append("files", data.image[i]);
      //   }
      // }
      
      // // Append certificate files
      // if (data.certificate) {
      //   for (let i = 0; i < data.certificate.length; i++) {
      //     formData.append("files", data.certificate[i]);
      //   }
      // }

      console.log("re form ", formData);

      console.log("data", data);
      if (formIsValid) {

        console.log('hi');
        axiosInstance
          .post(`/addMechanic/${shopid}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res);
            if (res.data.status == 200) {
              alert("succesfully registered");
              window.location.reload(false);
            } else if (res.data.Error.code === 11000) {
              alert("This mechanic has already registered");
            } else {
              alert("Failed to register");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  return (
    <div>
      <form onSubmit={signup}>
        <div className="signupMech-main">
          <div>
            <h2 className="signupMech-head">Add Mechanic</h2>
          </div>
          <div className="row">
            <div className="signupMech-submain col-2">
              <div>
                <label className="signupMech-label">First Name</label>
                <input
                  className="signupMech-input"
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  required
                  value={data.firstname}
                  onChange={change}
                />{" "}
                {errors.firstname && (
                  <div className="text-danger signupMech-validation">
                    {errors.firstname}
                  </div>
                )}
              </div>
              <div>
                <label className="signupMech-label">Last Name</label>
                <input
                  className="signupMech-input"
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  required
                  value={data.lastname}
                  onChange={change}
                />{" "}
                {errors.lastname && (
                  <div className="text-danger signupMech-validation">
                    {errors.lastname}
                  </div>
                )}
              </div>
              <div>
                <label className="signupMech-label">Email</label>
                <input
                  className="signupMech-input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  value={data.email}
                  onChange={change}
                />{" "}
                {errors.email && (
                  <div className="text-danger signupMech-validation">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label className="signupMech-label">Contact Number</label>
                <input
                  className="signupMech-input"
                  type="number"
                  placeholder="Contact Number"
                  name="contact"
                  required
                  value={data.contact}
                  onChange={change}
                />{" "}
                {errors.contact && (
                  <div className="text-danger signupMech-validation">
                    {errors.contact}
                  </div>
                )}
              </div>
              <div>
                <label className="signupMech-label">Aadhar Number</label>
                <input
                  className="signupMech-input"
                  type="number"
                  placeholder="Aadhar Number"
                  name="aadhar"
                  required
                  value={data.aadhar}
                  onChange={change}
                />{" "}
                {errors.aadhar && (
                  <div className="text-danger signupMech-validation">
                    {errors.aadhar}
                  </div>
                )}
              </div>
              <div>
                <label className="signupMech-label">Gender</label>
                <br />
                <div className="genderMech-btn">
                  <input
                    id="Idgender1"
                    type="radio"
                    name="gender"
                    value="male"
                    required
                    onChange={change}
                  />
                  <label className="genderMech-label" for="Idgender1">
                    Male
                  </label>
                  <input
                    id="Idgender2"
                    type="radio"
                    name="gender"
                    value="female"
                    required
                    onChange={change}
                  />
                  <label className="genderMech-label" for="Idgender2">
                    Female
                  </label>
                </div>
              </div>
              <div>
                <label className="signupMech-label">Image</label>
                <br />
                <input
                  className="fileMech-btn"
                  type="file"
                  required
                  name="image"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <label className="signupMech-label">Certificate</label>
                <br />
                <input
                  className="fileMech-btn"
                  type="file"
                  required
                  name="certificate"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <label className="signupMech-label">Password</label>
                <input
                  className="signupMech-input"
                  type="password"
                  required
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={change}
                />{" "}
                {errors.password && (
                  <div className="text-danger signupMech-validation">
                    {errors.password}
                  </div>
                )}
              </div>
              <div>
                <button className="signupMech-btn" type="siubmit">
                  Add
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

export default SignupMech;
