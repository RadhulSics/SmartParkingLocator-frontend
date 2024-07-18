import React, { useEffect, useState } from "react";
import './EditMechanicProfile.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate, useParams } from 'react-router-dom'


function EditMechanicProfile() {
    const {id}=useParams()
    console.log(id);
    const [data,SetData]=useState({firstname:'',lastname:'',email:'',aadhar:'',contact:'',image:null,certificate:null})




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
  axiosInstance.post(`/viewMechById/${id}`)
  .then((res)=>{
    console.log(res);
     SetData(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])

  const navigate=useNavigate()

  
// const editfn = ((a) => {
//   a.preventDefault()
//   console.log("data", data);
//   axiosInstance.post(`/editMechanicById/${id}`, data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   })
//   .then((res) => {
//     console.log(res)
//     if (res.data.status == 200) {
//       alert('Updated succesfully')
//       navigate("/mechanic-dashboard-viewrequest")
//     } else {
//       alert('failed')
//     }
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// })
const editfn = (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("firstname", data.firstname);
  formData.append("lastname", data.lastname);
  formData.append("contact", data.contact);
  formData.append("email", data.email);
  formData.append("city", data.city);
  formData.append("district", data.district);
  formData.append("aadhar", data.aadhar);
  formData.append("image", data.image); // Append the image file

  axiosInstance
    .post(`/editMechanicById/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        alert("Updated successfully");
        navigate("/mechanic-dashboard-viewrequest");
      } else {
        alert("Failed to update");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
    <div>
         <form onSubmit={editfn}>

        
<div className='editMechanic-main'>
  <div>
    <h2 className='editMechanic-head'>Edit Profile</h2>
  </div>
  <div className='row'>
    <div className='editMechanic-submain col-2'>
  <div>
    <label className='editMechanic-label'>First Name</label>
    <input className='editMechanic-input' type='text'  value={data.firstname} name='firstname' onChange={change}/>

  </div>
  <div>
    <label className='editMechanic-label'>Last Name</label>
    <input className='editMechanic-input' type='text' value={data.lastname} name='lastname' onChange={change}/>

  </div>
 
  <div>
    <label className='editMechanic-label'>Email</label>
    <input className='editMechanic-input' type='email'  value={data.email} name='email' onChange={change}/>

   </div>
  <div>
    <label className='editMechanic-label'>Aadhar</label>
    <input className='editMechanic-input' type='number' value={data.aadhar} name='aadhar' onChange={change}/>

   
  </div>
  <div>
    <label className='editMechanic-label'>Contact Number</label>
    <input className='editMechanic-input' type='number'  value={data.contact} name='contact' onChange={change}/>

  </div>
  <div>
  <label className='editMechanic-label' >Gender</label><br/>
        <div className='mechanic-edit-genderflex'>
          <input className='mechanic-edit-gender-btn' id='Idgender1' type='radio' name='gender' value='male'  onChange={change} required/>
          <label  className='mechanic-edit-gender-btn' for='Idgender1'>Male</label>
          <input  className='mechanic-edit-gender-btn' id='Idgender2' type='radio' name='gender' value='female'  onChange={change} required/>
          <label className='mechanic-edit-gender-btn' for='Idgender2'>Female</label>
        </div>
        </div>
  <div>
  {/* <div>
  <label className='editMechanic-label' >Certificate</label><br/>
    <input  className='editMechanic-file' type='file' name='image'  onChange={change}/>
  </div> */}
 
  </div>
  <div>
  <label className='editMechanic-label' >Image</label><br/>
    <input  className='editMechanic-file' type='file' name='certificate'  onChange={change}/>
  </div>
  <div>
    <button className='editMechanic-btn' type='submit'>Submit</button>
  </div>
  </div>
  </div>
  </div>
  
  </form>

    </div>
  )
}

export default EditMechanicProfile