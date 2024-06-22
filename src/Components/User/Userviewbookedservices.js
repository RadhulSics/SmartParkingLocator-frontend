import React, { useEffect, useState } from 'react'
import "./Userviewbookedservices.css"
import img from "../../Assets/cat2.png"
import axiosInstance from '../../Baseurl';
import { Link, useLocation } from 'react-router-dom';

function Userviewbookedservices() {
    const id=localStorage.getItem("userid")
    console.log(id);
const location=useLocation()
    const [data,setdata]=useState([])
    useEffect(()=>{
        axiosInstance.post(`viewBookingByCustid/${id}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div style={{display:"flex",padding:"20px"}}>
                         {data.length ?(
              data.map((a)=>{
    
               
                   const dateTime = new  Date(a.bookingdate);
                   const dateOnly = dateTime.toISOString().split('T')[0];

                   const servicedate = new  Date(a.servicedate);
                   const sdate = servicedate.toISOString().split('T')[0];

                   const deletefn=(()=>{
                    axiosInstance.post(`deleteservicebookingById/${a._id}`)
                    .then((res)=>{
                      console.log(res);
                      if(res.data.status==200){
                        alert("Service deleted succesfully")
                        window.location.reload(false)
                      }
                  })
                  .catch((err)=>{
                      console.log(err);
                  })
                  })
              
    console.log(a._id+"serviceid");
             return( 
              <div className='view-userbooked-service'>
<Link to={`/bookservices/${a.serviceid._id}?prevPage=${encodeURIComponent(
                    location.pathname
                  )}`} style={{textDecoration:"none",color:"black"}}>
    <div className="booked-service-container" >
      {/* <img src={img} alt="Service Image" className="service-image" /> */}
      <div className="booking-info">
        <p><strong>Booking Date:</strong> {dateOnly}</p>
        <p><strong>Service Date:</strong> {sdate}</p>
        <p><strong>Service  Name:</strong> {a.serviceid?.serviceName}</p>
        <p><strong>Service Center Name:</strong> {a.shopid?.name}</p>
        <p><strong>Service Center Contact:</strong>  {a.shopid?.contact}</p>
        <p><strong>Booking Status:</strong> {a.approvalstatus ? 'Approved' : 'Pending'}</p>
        <p>
        </p>
      </div>
    </div>
    </Link>
    <button type='submit' className='btn btn-danger view-bookedservice-btn' onClick={deletefn}>Cancel Service</button>
    <Link to={`/viewserviceupdations/${a._id}`}>
    <button type='submit' className='btn btn-warning view-bookedservice-btn'>View Update</button></Link>
    </div>
              )
            })
         ) : (
           <div>No data available</div>
         )}  
        
        
    
    </div>
  )
}

export default Userviewbookedservices