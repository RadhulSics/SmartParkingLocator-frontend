import React, { useEffect, useState } from "react";
import "./Userviewbookedservices.css";
import img from "../../Assets/cat2.png";
import axiosInstance from "../../Baseurl";
import { Link, useLocation } from "react-router-dom";

function Userviewbookedservices() {
  const id = localStorage.getItem("userid");
  console.log(id);
  const location = useLocation();
  const [data, setdata] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`viewBookingByCustid/${id}`)
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deletefn = (id) => {
    axiosInstance
      .post(`deleteservicebookingById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Service deleted succesfully");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div className="row view-userbooked-service">
        {data.length
          ? data.map((a) => {
              return (
                <div className="booked-service-container">
                  <div className="booking-info">
                    <p>{/* <strong>Booking Date:</strong> {dateOnly} */}</p>
                    <p>{/* <strong>Service Date:</strong> {sdate} */}</p>
                    <p>
                      <strong>Service Name:</strong> {a.serviceid?.serviceName}
                    </p>
                    <p>
                      <strong>Service Center Name:</strong> {a.shopid?.name}
                    </p>
                    <p>
                      <strong>Service Center Contact:</strong>{" "}
                      {a.shopid?.contact}
                    </p>
                    {
                      a.completedStatus?<p>
                      <strong>Service Status:</strong>Completed
                      
                    </p>  : <p>
                      <strong>Booking Status:</strong>{" "}
                      {a.approvalstatus ? "Approved" : "Pending"}
                    </p> 
                    }
                    
                    <p></p>
                  </div>
                  <div className="d-flex" >
                    {
                      a.completedStatus?'':<button
                    type="submit"
                    className="btn btn-danger view-bookedservice-btn"
                    onClick={()=>{deletefn(a._id)}}
                  >
                    Cancel Service
                  </button>
                    }
                  
                  <Link to={`/viewserviceupdations/${a._id}`}>
                    <button
                      type="submit"
                      className="btn btn-warning view-bookedservice-btn"
                    >
                      View Update
                    </button>
                  </Link>
                  </div>
                  
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Userviewbookedservices;
