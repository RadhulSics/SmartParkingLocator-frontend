import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import './ForgotpassUser.css'
import SignupLogo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate } from 'react-router-dom'


function ForgotpassUser() {
  const navigate=useNavigate()
    const [data,SetData]=useState({email:'',password:'',confirmpassword:''})
const [errors, setErrors] = useState({ email: '', password: '',confirmpassword:'' });
let formIsValid;

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
    formIsValid=false
      return `${fieldName} is required`;
  }
  return '';
};


let signin=(a)=>{
  a.preventDefault()
  let errors = {};
  let formIsValid = true;

  errors.email= validateField('email', data.email);
  errors.password = validateField('password', data.password);
 
  setErrors(errors);

 
 if(data.password !==data.confirmpassword){
  formIsValid=false
  setErrors(prevErrors => ({
    ...prevErrors,
    confirmpassword: 'password and confirmpassword should be same'
}));

 }
 if (formIsValid) {
  console.log("data", data);
  axiosInstance.post('/forgotPwdCustomer',data)
  .then((res)=>{
    console.log(res)
    if(res.data.status==200){
        alert('password updated')
        navigate("/user-login")
       }
       else if(res.data.status==500){
        alert("Customer not found")
       }
   })
   .catch((error)=>{
    console.log(error)
   })

}
}
  return (
    <div >
      <form onSubmit={signin}>
      <div>
        <img className="forgotUser-img"src={Signin_image} alt='Signin_image'/>
      </div>
      
      <div className='forgotUser-main '>
        <div>
          <h2 className='forgotUser-head'>Reset Password</h2>
        </div>
        <div className='row'>
        <div className='forggtUser-submain col-2'>
        <div>
          <label  className='forgotUser-label'>E-mail</label>
          <input className='forgotUser-input' name='email' value={data.email} onChange={change}   type='email' placeholder='Email'/>
          {errors.email && (
                <div className="text-danger input-validation">{errors.email}</div>
              )}
        </div>
        <div>
          <label className='forgotUser-label'>New Password</label>
          <input className='forgotUser-input' name='password' value={data.password} onChange={change} type='password' placeholder='New Password'/>
          {errors.password && (
                <div className="text-danger input-validation">{errors.password}</div>
              )}
        </div>
        <div>
          <label className='forgotUser-label'>Confirm Password</label>
          <input className='forgotUser-input' name='confirmpassword'value={data.confirmpassword} onChange={change}  type='password' placeholder=' Re-enter Password'/>
          {errors.confirmpassword && (
                <div className="text-danger input-validation">{errors.confirmpassword}</div>
              )}
        </div>
       
        <div>
          <button className='forgotUser-btn' type='submit'>Reset password <img className='signupLogo1' src={SignupLogo} /></button>
          
        </div>
        </div>
        </div>
        </div>
      </form>
      
    </div>
    
  )
}

export default ForgotpassUser