import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosInstance from '../../Baseurl';

function ParkingAgentViewApprovedBookings() {

    const [data,setData]=useState([])
  const id=localStorage.getItem('parkingId')


  useEffect(()=>{
    axiosInstance
          .post(`viewApprovedBookingByAgentId/${id}`)
          .then((res) => {
            console.log(res);
            if (res.data.status === 200) {
              setData(res.data.data.reverse());
            }
          })
          .catch((err) => {
            console.log(err);
          });
  },[])

  return (
    <div>
      {data.length > 0 ? (
        <div className="p-4" style={{ minHeight: "80vh" }}>
          <table class="table table-primary table-striped-columns">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Date</th>
                {/* <th scope="col">Time</th> */}
                <th scope="col">Price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => {
                return (
                  <tr>
                    <th >{e.custId.firstname} {e.custId.lastname}</th>
                    <td>{e.custId.firstname}</td>
                    <td>{e.date.slice(0,10)}</td>
                    <td>{e.paId.price}</td>
                    <td>{e.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <h1>No Bookings Found</h1>
        </div>
      )}
    </div>
  )
}

export default ParkingAgentViewApprovedBookings
