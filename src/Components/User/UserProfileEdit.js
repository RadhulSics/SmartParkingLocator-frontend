import React, { useEffect, useState } from "react";
import './UserProfileEdit.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate, useParams } from 'react-router-dom'
import LoginMechanic from "../Mechanic/LoginMechanic";

function UserProfileEdit()  {

  // const userid=localStorage.getItem("userid")
  // console.log(userid+"userid");
  const { id } = useParams()

  const [data,SetData]=useState({firstname:'',lastname:'',email:'',contact:'',gender:'',image:null})


  

  const change=(b)=>{
    const { name, value } = b.target;
    if(b.target.name === "image"){
      // handleImageUpload(e);
      SetData({...data,image:b.target.files[0]});
  }else {
      SetData({...data,[b.target.name]:b.target.value})
  }

 console.log(data);
  }


  useEffect(()=>{
    axiosInstance.post(`/viewCustById/${id}`)
    .then((res)=>{
      console.log(res);
      SetData(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


   const navigate=useNavigate()
  
  let signup=(a)=>{
    a.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      alert("Please enter a valid email address");
      return;
    }
      if (!data.password || data.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
           
          axiosInstance.post(`/editCustomerById/${id}`,data,{
            headers: {
              "Content-Type": "multipart/form-data",
            }
          })
                 .then((res)=>{
                  console.log(res)
                  if(res.status==200){
                      alert('Profile edited')
                      navigate("/user-profile")
               }
                     else{
                      alert('failed')
                     }
                 })
                 .catch((error)=>{
                  console.log(error)
                 })
      }
  
  return (
    <div >
      <form onSubmit={signup}>
       
       
      <div className='user-edit-main'>
        <div>
          <h2 className='user-edit-head'>EDIT PROFILE</h2>
        </div>
        <div className='row'>
          <div className='user-edit-submain col-2'>
        <div>
          <label className='user-edit-label'>First Name</label>
          <input className='user-edit-input' type='text'  name='firstname' value={data.firstname} onChange={change} required title="please fill the form"/>
        </div>
        <div>
          <label className='user-edit-label'>Last Name</label>
          <input className='user-edit-input' type='text' placeholder='Lastname' name='lastname'value={data.lastname} onChange={change} required />
        </div>
        <div>
          <label className='user-edit-label'>Email</label>
          <input className='user-edit-input' type='email' placeholder='Email' name='email'value={data.email} onChange={change } required/>
         </div>
       
        <div>
          <label className='user-edit-label'>Contact Number</label>
          <input className='user-edit-input' type='number' placeholder='Contact Number' name='contact'value={data.contact} onChange={change}required />
        </div>

        <label className='user-edit-label' >Gender</label><br/>
        <div className='user-edit-genderflex'>
          <input className='user-edit-gender-btn' id='Idgender1' type='radio' name='gender' value='male'  onChange={change} required/>
          <label  className='user-edit-gender-btn' for='Idgender1'>Male</label>
          <input  className='user-edit-gender-btn' id='Idgender2' type='radio' name='gender' value='female'  onChange={change} required/>
          <label className='user-edit-gender-btn' for='Idgender2'>Female</label>
        </div>
        <div>
        <label className='user-edit-label' >Image</label><br/>
          <input  className='user-edit-file' type='file' name='image'  onChange={change} />
        </div>
       
     
        <div>
          <button className='user-edit-btn' type='submit'>Submit</button>
          <img className="user-edit-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        
        </div>


        </div>
        </div>
        
        </form>
      
    </div>
  )
}

export default UserProfileEdit