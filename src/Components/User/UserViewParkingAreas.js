import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { Link, useNavigate } from "react-router-dom";

function UserViewParkingAreas() {

    const [data, setdata] = useState([]);
    const id=localStorage.getItem('userid')

    const navigate=useNavigate()


    useEffect(() => {
      axiosInstance
        .post(`viewParkingAreas`)
        .then((res) => {
          console.log(res);
          setdata(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const bookFn = (parkingAreaId,agentId) => {
        console.log('pid',parkingAreaId);
        console.log('aid',agentId);
        
        axiosInstance
          .post(`createSlotBooking`,{paId:parkingAreaId,custId:id,agentId:agentId})
          .then((res) => {
            console.log(res);
            if (res.data.status === 200) {
              alert("Request Sent");
              navigate('/user_view_parking_area_bookings')
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
      <div className="container">
        <div className="row" style={{minHeight:'80vh'}}>
          {data.length ? (
            data.map((a) => {
              return (
                <div
                  
                  style={{ textDecoration: "none" }}
                  className="col-lg-4 col-md-4 col-sm-6 mb-4"
                >
                  
                    <div className="cards" style={{height:'auto'}}>
                      <div className="card-content ">
                        <div className="service-name "> {a.location}</div>
                        <div className="price">Total Slots : {a.slots}</div>
                        <div className="description">Price : ₹ {a.price}</div>
                        <Link to={`/user_view_parking_area_map/${a.lat}/${a.lon}`} ><div className="shop-name" style={{color:"black"}}>View Location</div></Link>
                        <div className="mt-3" >
                        {/* <button className="btn btn-success">Request</button> */}
                        <button onClick={()=>{bookFn(a._id,a.agentId._id)}} className="btn btn-success">Request</button>
                        </div>
                      </div>
                    {/* </div> */}
                  </div>
                </div>
              );
            })
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserViewParkingAreas
