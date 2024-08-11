import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import SignupLogo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { Link, useNavigate } from 'react-router-dom'

function ParkingAgentLogin() {
  const [data, SetData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const change = (b) => {
    const { name, value } = b.target;
    SetData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return '';
  };

  let signin = (a) => {
    a.preventDefault();

    let errors = {};
    let formIsValid = true;

    errors.email = validateField('email', data.email);
    errors.password = validateField('password', data.password);

    setErrors(errors);

    // Check if there are any errors
    if (errors.email || errors.password) {
      formIsValid = false;
    }

    if (formIsValid) {
      console.log("data", data);
      axiosInstance.post(`/loginParkingAgent`, data)
        .then((result) => {
          console.log("data entered", result);
          if (result.data.status == 200) {
            localStorage.setItem("parkingId", result.data.data._id);
            console.log("parkingId", result.data.data._id);
            alert("login Sucessfully...");
            navigate("/parking_agent_home")
          } else if (result.data.status == 401) {
            alert("password mismatch");
          } else if (result.data.status == 400) {
            alert("user not found");
          } else {
            alert(result.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <form onSubmit={signin}>
        <div>
          <img className="loginWorkshop-img" src={Signin_image} alt='Signin_image' />
        </div>

        <div className='loginWorkshop-main'>
          <div>
            <h2 className='loginWorkshop-head'>Parking Agent Sign In</h2>
          </div>
          <div>
            <label className='loginWorkshop-label'>Email</label>
            <input className='loginWorkshop-input1' type='text' name='email' value={data.email} onChange={change} placeholder='E-mail' />
            {errors.email && (
              <div className="text-danger input-validation">{errors.email}</div>
            )}
          </div>
          <div>
            <label className='loginWorkshop-label'>Password</label>
            <input className='loginWorkshop-input' type='password' name='password' value={data.password} onChange={change} placeholder='Password' />
            {errors.password && (
              <div className="text-danger input-validation">{errors.password}</div>
            )}
          </div>
          <div className='loginWorkshop-Areset'>
            <Link to={'/parking_agent_reset_pass'} className='loginUser-a'>Reset Password</Link>
          </div>
          <div className='loginWorkshop-Asignup'>
            <Link to="/parking_agent_reg"><a className='loginWorkshop-a' href=''>Signup</a></Link>
          </div>
          <div>
            <button className='loginWorkshop-btn' type='submit'>Sign In  <img className='signupLogo2' src={SignupLogo} /></button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ParkingAgentLogin;
