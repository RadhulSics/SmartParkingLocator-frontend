import React from 'react'
import './IndividualServicesMechanic.css'
import CustImg from '../../Assets/cat3.png'

function IndividualServicesMechanic() {
  return (
    <div>
    <div className='service-req-title'>
      <h1>SERVICE REQUESTS</h1>
    </div>
    <div className='row ind-service-req-card'>
      <h5 className='col-6 text-danger'>Service : Transmission fluid leakage</h5>
      <h6 className='col-6 ind-service-req-date'>Date : 03/06/2024</h6>
      <h6 className='text-success'>Mechanic Assigned : Sukumar</h6>
      <div className='ind-service-req-customer'>
        <h4 className='ind-service-req-customer-title'>CUSTOMER DETAILS</h4>
        <hr></hr>
        <div className='row'>
          <div className='col-8'>
            <p>Name : Mark wood</p>
            <p>Contact : 8823612378</p>
            <p>Email : markyy@yahoo.in</p>
            <p>Place : Kazhakkoottam</p>
            <p>Remarks : lorem ipsum lorem  </p>
          </div>
          <div className='col-4'>
            <img className='ind-service-req-customer-img' src={CustImg}></img>
          </div>
        </div>
       
      
      </div>
    </div>
  </div>
  )
}

export default IndividualServicesMechanic