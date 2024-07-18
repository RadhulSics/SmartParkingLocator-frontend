import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './LoginMech.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { Link, useNavigate } from 'react-router-dom'
function LoginMechanic() {

  const [data,SetData]=useState({email:'',password:''})
  const [errors, setErrors] = useState({ email: '', password: '' });

 
const navigate=useNavigate() 
const change=(b)=>{
  
  const { name, value } = b.target;
  SetData(prevData => ({
      ...prevData,
      [name]: value
  }));
  setErrors(prevErrors => ({
    ...prevErrors,
    [name]: ''
}));
}

const validateField = (fieldName, value) => {
  if (!value.trim()) {
      return `${fieldName} is required`;
  }
  return '';
};





let signin=(a)=>{
  a.preventDefault()

  let errors = {};
      let formIsValid = true;

      errors.emaile= validateField('email', data.email);
      errors.email = validateField('email', data.password);

      setErrors(errors);

      if (formIsValid) {
          console.log("data", data);
          axiosInstance.post(`loginMech`,data)
          .then((result) => {
            console.log("data entered", result);
            if (result.data.status == 200) {
              localStorage.setItem("mechid", result.data.data._id);
              console.log("mechid", result.data.data._id);
              alert("login Sucessfully...");
              navigate("/mechanic-dashboard-viewrequest")
             
            } 
            else if (result.data.status==401) {
                alert("password mismatch")
            }else if(result.data.status==400){
              alert("user not found")
            }
            else  {
              alert(result.data.msg)
            }
          })
        
          .catch((err)=>{
            console.log(err);
          })
      }
}

const showPassword=()=> {
  var x = document.getElementById("myPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
  return (
    <div>
        <form onSubmit={signin}>
      <div>
        <img className="loginMech-img"src={Signin_image} alt='Signin_image'/>
      </div>
     
      <div className='loginMech-main'>
        <div>
          <h2 className='loginMech-head'>Mechanic Sign In</h2>
        </div>
        <div>
          <label className='loginMech-label'>Email</label>
          <input className='loginMech-input1'  name='email' value={data.email}  onChange={change} type='text' placeholder='Email'/>
          {errors.email && (
                <div className="text-danger input-validation">{errors.email}</div>
              )}
             
        </div>
        <div>
          <label className='loginMech-label'>Password</label>
          <input className='loginMech-input' name='password' id='myPassword' value={data.password}  onChange={change}  type='password' placeholder='Password'/>
          {errors.password && (
                <div className="text-danger input-validation ">{errors.password}</div>
              )}
               {/* <input type="checkbox" onclick={showPassword} />Show Password */}
        </div>
        <div className='loginMech-Areset'>
        <Link className='loginMech-a' to='/forgotpass-mechanic'>Reset Password </Link>
        </div> 
         <div className='loginMech-Asignup'>
          {/* <a className='loginMech-a'  href='#'>Signup</a> */}
        </div>
        <div>
          <button className='loginMech-btn' type='submit' style={{marginTop:"20px",}}>Sign In <img className='signupLogo' src={SignupLogo} /></button>
       
        </div>
        
        </div>
   </form>
      
    </div>
  )
}

export default LoginMechanic