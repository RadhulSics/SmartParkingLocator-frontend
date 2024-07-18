import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Baseurl'
import { useNavigate, useParams } from 'react-router-dom'
import img from "../../Assets/cat2.png"
import "./AdminEmergencyView.css"


function AdminEmergencyView({url}) {

  const {id}=useParams()
  const [state,setState]=useState({})
  useEffect(()=>{
      axiosInstance.post(`/viewEmergencyById/${id}`)
      .then((res)=>{
        console.log(res);
          setState(res.data.data)
      })
      .catch((err)=>{
          console.log(err)

      })
  },[])
  console.log(state)
  console.log('id ='+id);
  const navigate=useNavigate()

  const acceptfn=((e)=>{
    e.preventDefault()
    axiosInstance.post(`adminApproveEmergencyReqs/${id}`)
    .then((res)=>{
      console.log(res);
      if(res.data.status==200){
      alert("approved successfully")
       navigate("/admin-dashboard")
      }
    })
    .catch((err)=>{
        console.log(err)

    })

  })
  const deletefn=((e)=>{
    e.preventDefault()
    axiosInstance.post(`adminRejectEmergencyReqs/${id}`)
    .then((res)=>{
      console.log(res);
      if(res.data.status==200){
      alert("Deleted successfully")
       navigate("/admin-dashboard")
      }
    })
    .catch((err)=>{
        console.log(err)

    })

  })

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
};
const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString();
};


return (
  <div className="col-8" >
  <div className="container">
    <div className="row emergencysinglecontributer-main">
    <h1>Emergency request</h1>
<div style={{padding:"20px"}}>
 
      <img src={`${url}/${state.custid?.image?.filename}`} alt='image' width="530px" height="200px" className='object-fit-cover'/></div>
      <div className="col-4" >Name :</div>
      <div className="col-8">
        <input type="text" value={state.custid?.firstname} />
      </div>
      <div className="col-4">Email :</div>
      <div className="col-8">
        <input type="text" value={state.custid?.email}
        />
      </div>
      <div className="col-4">Issue :</div>
      <div className="col-8">
        <textarea type="text" value={state.issues} />
      </div>{" "}
      <div className="col-4">Date :</div>
      <div className="col-8">
        <input type="text" value={formatDate(state.date)}/>
      </div>{" "}
      <div className="col-4">Time :</div>
      <div className="col-8">
        <input type="text" value={formatTime(state.date)}/>
      </div>{" "}
      <div className="col-4">Contact :</div>
      <div className="col-8">
        <input type="text" value={state.custid?.contact}/>
      </div>
      <div className="col-4">District :</div>
      <div className="col-8">
        <input type="text" value={state.district}/>
      </div>{" "}
      <div className="emergencysinglecontributer-button">
      <button type="submit" className="col-3 btn btn-primary" onClick={acceptfn}>Accept</button>
      <button type="submit" className="col-3 btn btn-danger" onClick={deletefn}>Delete</button>
      </div>
    </div>
  </div>
</div>
)
}

export default AdminEmergencyView