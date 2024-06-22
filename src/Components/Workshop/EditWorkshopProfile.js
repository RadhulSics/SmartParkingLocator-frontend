import React, { useEffect, useState } from "react";
import './editWorkshopprofile.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate, useParams } from 'react-router-dom'


function EditProfile() {
  const {id}=useParams()
    const [data,SetData]=useState({name:'',contact:'',email:'',city:'',district:'',aadhar:'',image:'null',regno:''})



  useEffect(()=>{
    axiosInstance.post(`viewWorkshopById/${id}`,data)
    .then((res)=>{
      console.log(res);
       SetData(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
   },[])
  

  const change=(b)=>{

    if(b.target.name === "image"){
      // handleImageUpload(e);
      SetData({...data,image:b.target.files[0]});
  }else {
      SetData({...data,[b.target.name]:b.target.value})
  }
  console.log(data);


}
  const navigate=useNavigate()

  
const editfn = ((a) => {
  a.preventDefault()
  console.log("data", data);
  axiosInstance.post(`/editWorkshopById/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((res) => {
    console.log(res)
    if (res.data.status == 200) {
      alert('Updated succesfully')
      navigate("/workshop-dashboard")
    } else {
      alert('failed')
    }
  })
  .catch((error) => {
    console.log(error)
  })
})
  
  
  return (
    <div>
      <form onSubmit={editfn}>

        
      <div className='editWorkshop-main'>
        <div>
          <h2 className='editWorkshop-head'>Edit Profile</h2>
        </div>
        <div className='row'>
          <div className='editWorkshop-submain col-2'>
        <div>
          <label className='editWorkshop-label'>Shop name</label>
          <input className='editWorkshop-input' type='text' placeholder='Shop name' value={data.name} name='name' onChange={change}/>

        </div>
       
        <div>
          <label className='editWorkshop-label'>Email</label>
          <input className='editWorkshop-input' type='email' placeholder='Email' value={data.email} name='email' onChange={change}/>

         </div>
       
        <div>
          <label className='editWorkshop-label'>City</label>
          <input className='editWorkshop-input' type='text' placeholder='City' value={data.city} name='city' onChange={change}/>

        </div>
        <div>
          <label className='editWorkshop-label'>District</label>
          <input className='editWorkshop-input' type='text' placeholder='District' value={data.district} name='district' onChange={change}/>

         
        </div>
        <div>
          <label className='editWorkshop-label'>Aadhar</label>
          <input className='editWorkshop-input' type='number' placeholder='Aadhar number'value={data.aadhar} name='aadhar' onChange={change}/>

         
        </div>
        <div>
          <label className='editWorkshop-label'>Contact Number</label>
          <input className='editWorkshop-input' type='number' placeholder='Contact Number' value={data.contact} name='contact' onChange={change}/>

        </div>
        <div>
          <label className='editWorkshop-label'>Register Number</label>
          <input className='editWorkshop-input' type='number' placeholder='Register Number'value={data.regno} name='regno' onChange={change}/>

        </div>
        <div>
        <label className='editWorkshop-label' >Image</label><br/>
          <input  className='editWorkshop-file' type='file' name='image'  onChange={change}/>
        </div>
        <div>
          <button className='editWorkshop-btn' type='siubmit'>Submit</button>
        </div>
        </div>
        </div>
        </div>
        
        </form>
      
    </div>
  )
}

  

export default EditProfile