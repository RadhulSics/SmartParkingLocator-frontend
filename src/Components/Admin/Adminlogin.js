import React, { useState } from 'react'
import Signin_image from '../../Assets/signin_image.png'
import SignupLogo from'../../Assets/signUpbtnlogo.png'
import './Adminlogin.css'
import axiosInstance from '../../Baseurl'
import { useNavigate } from 'react-router-dom'


function Adminlogin() {
    const[data,setdata]=useState({
        username:"",
        password:""
    })
const username="admin"
const password="admin123"

const changefn=((a)=>{
    setdata({
        ...data,[a.target.name]:a.target.value
    })
})
const navigate=useNavigate()
const submitfn=((b)=>{
    b.preventDefault()
    if(username==data.username){
        if(password==data.password){
            alert("Login Succesfully")
            navigate("/admin-dashboard")
        }
        else{
            alert("Incorrect Password")
        }
    
    }
    else{
        alert("User Not Found")
    }
})
  return (
    <div>
    <form onSubmit={submitfn}>
    <div>
      <img className="loginAdmin-img"src={Signin_image} alt='Signin_image'/>
    </div>
   
    <div className='loginAdmin-main'>
      <div>
        <h2 className='loginAdmin-head'>Admin Sign In</h2>
      </div>
      <div>
        <label className='loginAdmin-label'>Username</label>
        <input className='loginAdmin-input' name='username'  type='text' placeholder='Username' onChange={changefn}/>
      </div>
      <div>
        <label className='loginAdmin-label'>Password</label>
        <input className='loginAdmin-input'  name='password'  type='password' placeholder='Password'onChange={changefn}/>
       
      </div>
     
      <div>
        <button className='loginAdmin-btn' type='submit'  style={{marginTop:"20px"}}>Sign In  <img className='signupLogo2' src={SignupLogo} /></button>

      </div>
      </div>
      </form>
  </div>

  )
}

export default Adminlogin