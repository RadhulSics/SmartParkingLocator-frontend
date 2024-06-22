import React, { useEffect, useState } from 'react'
import './ViewServicesMechanic.css'
import CustImg from '../../Assets/cat3.png'
import axiosInstance from '../../Baseurl';
import { Link } from 'react-router-dom';

function ViewServicesMechanic() {
  const mechid=localStorage.getItem("mechid")
  console.log(mechid+"mechid");
const[data,setData]=useState([])

useEffect(()=>{
  axiosInstance.post(`viewBookingByMechid/${mechid}`)
  .then((res)=>{
    console.log(res);
    setData(res.data.data)
  })
  .catch((err)=>{
    console.log(err);
  })
},[])

  return (
    <div>


      <div className='service-req-title'>
        <div className='row'>
        <h1 className='col-9 '>SERVICE REQUESTS</h1>
       <div className='col-3'>
       <Link to="/viewupdations"><button type='submit'  className='col-2 btn btn-danger' style={{height:"40px",width:"200px" }}>View Service Updates</button></Link>
        </div> 
        </div>
      </div>
     
<div  className="service-req-cards-container">
      {data.length ? (
          data.map((a) => {
            const dateTime = new Date(a.bookingdate);
            const dateOnly = dateTime.toISOString().split("T")[0];

            const servicedate = new Date(a.servicedate);
            const sdate = servicedate.toISOString().split("T")[0];

            return (
              <div className='col-4'>
      <div className='row service-req-card' >
        <h5 className='col-12 text-danger'>Service : {a.serviceid?.serviceName}</h5>
        {/* <h6 className='col-3 service-req-date'>Service Date : 03/06/2024</h6>
        <h6 className='col-3 service-req-date'>Booking Date : 03/06/2024</h6> */}

        <h6 className='text-success'>Service Description :{a.serviceid?.description} </h6>
        <div className='service-req-customer'>
          <h4 className='service-req-customer-title'>CUSTOMER DETAILS</h4>
          <hr></hr>
          <div className='row'>
            <div className='col-12'>
              <p>Name : {a.custid?.firstname}  {a.custid?.lastname} </p>
              <p>Contact :  {a.custid?.contact}</p>
              <p>Payment Status : Paid</p>
              <p>Booking Date : {dateOnly}</p>
              <p>Service Date : {sdate} </p>
            </div>
            {/* <div className='col-4'>
              <img className='service-req-customer-img' src={CustImg}></img>
            </div> */}
          </div>
        </div>
       <Link to={`/view-individual-services-mechanic/${a._id}`}> <button className='service-req-btn'>Update Service</button></Link>
      </div>
      </div>
        )
          })
        ) : (
          <div  >No data available</div>
        )}


      </div>

      </div>
 
  )
}

export default ViewServicesMechanic