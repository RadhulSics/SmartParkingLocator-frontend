import React, { useEffect, useState } from 'react'
import signUp_logo from'../../Assets/signUpbtnlogo.png'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../Baseurl'


function Editservice() {

    const wid=useParams()
    console.log(wid);

    const[data,setdata]=useState({
        serviceName:"",
    description:"",
     price:""
    })
    useEffect(()=>{
       axiosInstance.post(`viewServiceById/${wid.id}`)
       .then((res)=>{
           console.log(res);
            setdata(res.data.data)
           // console.log(res.data+"hello");
       })
       .catch((err)=>{
           console.log(err);
       })
   },[])
// const [edit,setedit]=useState({
//     serviceName:"",
//     description:"",
//     price:""
// })
const navigate=useNavigate()
const changefn=((a)=>{
    setdata({
        ...data,[a.target.name]:a.target.value
    })
})
console.log(data);
const updatefn=((b)=>{
    b.preventDefault()
    axiosInstance.post(`editServiceById/${wid.id}`,data)
    .then((res)=>{
        console.log(res);
        if(res.data.status==200){
            alert("Updated Succesfully")
            navigate("/workshop-dashboard-myservices")
        }
        else{
            alert("Updation failed")
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})

const deletefn=((e)=>{
    e.preventDefault()
    axiosInstance.post(`deleteServiceById/${wid.id}`,data)
    .then((res)=>{
        console.log(res);
        if(res.data.status==200){
            alert("Deleted Succesfully")
            navigate("/workshop-dashboard-myservices")
        }
        else{
            alert("Updation failed")
        }
    })
    .catch((err)=>{
        console.log(err);
    })

})

  return (

    <div style={{margin:"0"}}>
    {/* <form > */}
     
      
     <div className='signupMech-main' style={{margin:"30px",width:"1350px"}}>
       <div>
         <h2 className='signupMech-head'>Edit Service</h2>
       </div>
       <div className='row' style={{marginLeft:"250px"}}>
         <div className='signupMech-submain col-2'>
       <div>
         <label className='signupMech-label'>Service Name</label>
         <input className='signupMech-input' type='text' placeholder='Service Name' name='serviceName'  style={{width:"440px"}}  value={data.serviceName} onChange={changefn} required title='please fill the box' /> 
             
       </div>
       <div>
         <label className='signupMech-label'>Description</label>
         <textarea className='textarea-addservice' name='description' value={data.description} onChange={changefn}  required/>
             
       </div>
       <div>
         <label className='signupMech-label'>Price</label>
         <input className='signupMech-input' type='text' placeholder='price' name='price' value={data.price}   style={{width:"440px"}} onChange={changefn}  required/> 
        </div>
      
      <div className='row' >
   
       <div className='col-6' >
     
       
         <button className='signupMech-btn' type='submit' style={{margin:"10px",marginLeft:"200px"}} onClick={updatefn}>Update</button>
         </div>
         <div className='col-6'>
         <button className='signupMech-btn' type='submit' onClick={deletefn} style={{backgroundColor:"red"}}>Delete</button>

       </div>
       
       </div>
       </div>

       </div>
       </div>
       
       {/* </form> */}
     
  </div>
  )
}

export default Editservice