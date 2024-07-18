import React, { useEffect, useState } from 'react'
import "./Viewmyservices.css"
import axiosInstance from '../../Baseurl';
import { Link } from 'react-router-dom';

function Viewmyservices() {

    const wid=localStorage.getItem("workshopid")
    console.log(wid);

    const[data,setdata]=useState([])
     useEffect(()=>{
        axiosInstance.post(`viewServicesByWid/${wid}`)
        .then((res)=>{
            console.log(res);
             setdata(res.data.data)
            // console.log(res.data+"hello");
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div className='col-12 row'  style={{margin:"20PX",marginLeft:"30px"}}>

{data.length ?(
                data.map((a)=>{
               return(

    <div className="service-box " style={{margin:"20px"}}>
      <div className="service-details">
        <div className="field">
          <label>Service Name:</label>
          <span >{a?.serviceName}</span>
        </div>
        <div className="field">
          <label>Description:</label>
          <span>{a?.description}</span>
        </div>
        <div className="field">
          <label>Price:</label>
          <span>{a?.price}</span>
        </div>
        <Link to={`/workshop-editservice/${a?._id}`}><button>Edit Service</button></Link>
      </div>
    </div>

)
})
) : (
    <div>No Services available</div>
)}


    </div>
  )
}

export default Viewmyservices