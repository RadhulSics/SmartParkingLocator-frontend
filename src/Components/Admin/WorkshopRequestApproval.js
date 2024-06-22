import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Baseurl'
import { useNavigate, useParams } from 'react-router-dom'
import img from "../../Assets/cat2.png"
import "./WorkshopRequestApproval.css"


function WorkshopRequestApproval({url}) {

  const {id}=useParams()
  const [state,setState]=useState([])
  useEffect(()=>{
      axiosInstance.post(`/viewWorkshopById/${id}`)
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
    axiosInstance.post(`approveWorkshopById/${id}`)
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
    axiosInstance.post(`deleteWorkshopById/${id}`)
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



return (
  <div className="col-12">
  <div className="container">
    <div className="row singlecontributer-main">
    <h3 className=' request-heading'>WORKSHOP REQUEST</h3>
<div style={{padding:"20px"}}>
      <img src={`${url}/${state.image && state.image.filename}`} alt='image' width="530px" height="200px"/></div>
      <div className="col-4" >Name :</div>
      <div className="col-8">
        <input type="text" value={state.name} />
      </div>
      <div className="col-4">Email :</div>
      <div className="col-8">
        <input type="text" value={state.email}
        />
      </div>
      <div className="col-4">Aadhar :</div>
      <div className="col-8">
        <input type="text" value={state.aadhar} />
      </div>{" "}
      <div className="col-4">Reg No :</div>
      <div className="col-8">
        <input type="text" value={state.regno}/>
      </div>{" "}
      <div className="col-4">Contact :</div>
      <div className="col-8">
        <input type="text" value={state.contact}/>
      </div>{" "}
      <div className="col-4">City :</div>
      <div className="col-8">
        <input type="text" value={state.city}/>
      </div>
      <div className="col-4">District :</div>
      <div className="col-8">
        <input type="text" value={state.district}/>
      </div>{" "}
      <div className="singlecontributer-button">
      <button type="submit" className="col-2 btn btn-warning" onClick={acceptfn}>Accept</button>
      <button type="submit" className="col-2 btn btn-danger" onClick={deletefn}>Delete</button>
      </div>
    </div>
  </div>
</div>
)
}

export default WorkshopRequestApproval