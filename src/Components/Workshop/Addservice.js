import React, { useState } from 'react'
import "./Addservice.css"
import signUp_logo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl';


function Addservice() {
    const workshopid=localStorage.getItem("workshopid")
    console.log(workshopid);
    const[data,setData]=useState({
        serviceName:"",
        description:"",
        price:"",
        shopid:workshopid
    })

    const changefn=((e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    })
console.log(data);
    const submitfn=((a)=>{
        a.preventDefault()
        axiosInstance.post(`registerService`,data)
        .then((result) => {
            console.log("data entered successfully", result);
            
    
            if (result.status === 200) {
                alert("Service Added Succesfully")
                window.location.reload(false)
            } else {
              alert("failed to entered");
            }
          })
          .catch((error) => {
            console.log("error", error);
          });

    })

  return (
    <div >
      <form onSubmit={submitfn}>
       
        
       <div className='signupMech-main'>
         <div>
           <h2 className='signupMech-head'>Add Service</h2>
         </div>
         <div className='row'>
           <div className='signupMech-submain col-2'>
         <div>
           <label className='signupMech-label'>Service Name</label>
           <input className='signupMech-input' type='text' placeholder='Service Name' name='serviceName' value={data.serviceName} style={{width:"440px"}} required title='please fill the box' onChange={changefn}/> 
               
         </div>
         <div>
           <label className='signupMech-label'>Description</label>
           <textarea className='textarea-addservice' name='description' value={data.description}  onChange={changefn} required/>
               
         </div>
         <div>
           <label className='signupMech-label'>Price</label>
           <input className='signupMech-input' type='text' placeholder='price' name='price'  value={data.price} style={{width:"440px"}}  onChange={changefn} required/> 
          </div>
        
        
     
         <div>
       
         
           <button className='signupMech-btn' type='submit'>Add</button>
           <img className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
         </div>
         
         </div>
 
 
         </div>
         </div>
         
         </form>
       
     </div>
 
  )
}

export default Addservice