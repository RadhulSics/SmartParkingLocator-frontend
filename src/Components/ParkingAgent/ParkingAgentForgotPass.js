import React, { useState } from 'react';
import Signin_image from '../../Assets/signin_image.png';
import SignupLogo from '../../Assets/signUpbtnlogo.png';
import axiosInstance from '../../Baseurl';
import { useNavigate } from 'react-router-dom';

function ParkingAgentForgotPass() {

    const navigate = useNavigate();
  const [data, setData] = useState({ email: '', password: '', confirmpassword: '' });
  const [errors, setErrors] = useState({ email: '', password: '', confirmpassword: '' });

  const change = (b) => {
    const { name, value } = b.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return '';
  };

  const signin = (a) => {
    a.preventDefault();
    let formErrors = {};
    let formIsValid = true;

    formErrors.email = validateField('email', data.email);
    formErrors.password = validateField('password', data.password);

    if (data.password !== data.confirmpassword) {
      formErrors.confirmpassword = 'New password and confirm password should be the same';
      formIsValid = false;
    }

    for (let key in formErrors) {
      if (formErrors[key]) {
        formIsValid = false;
        break;
      }
    }

    setErrors(formErrors);

    if (formIsValid) {
      console.log('data', data);
      axiosInstance.post('/forgotPwd', data)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert('Password updated');
            navigate('/parking_agent_login');
          } else if (res.data.status === 500) {
            alert('User not found');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div>
      <form onSubmit={signin}>
        <div>
          <img className="forgotMechanic-img" src={Signin_image} alt="Signin_image" />
        </div>

        <div className="forgotMechanic-main">
          <div>
            <h2 className="forgotMechanic-head">Reset Password</h2>
          </div>
          <div className="row">
            <div className="forgotMechanic-submain col-2">
              <div>
                <label className="forgotMechanic-label">E-mail</label>
                <input
                  className="forgotMechanic-input"
                  name="email"
                  value={data.email}
                  onChange={change}
                  type="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <div className="text-danger input-validation">{errors.email}</div>
                )}
              </div>
              <div>
                <label className="forgotMechanic-label">New Password</label>
                <input
                  className="forgotMechanic-input"
                  name="password"
                  value={data.password}
                  onChange={change}
                  type="password"
                  placeholder="New Password"
                />
                {errors.password && (
                  <div className="text-danger input-validation">{errors.password}</div>
                )}
              </div>
              <div>
                <label className="forgotMechanic-label">Confirm Password</label>
                <input
                  className="forgotMechanic-input"
                  name="confirmpassword"
                  value={data.confirmpassword}
                  onChange={change}
                  type="password"
                  placeholder="Re-enter Password"
                />
                {errors.confirmpassword && (
                  <div className="text-danger input-validation">{errors.confirmpassword}</div>
                )}
              </div>
              <div>
                <button className="forgotMechanic-btn" type="submit">
                  Reset password <img className="signupLogo1" src={SignupLogo} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ParkingAgentForgotPass
