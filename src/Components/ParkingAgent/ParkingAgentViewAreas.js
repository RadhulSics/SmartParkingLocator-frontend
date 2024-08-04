import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { Link, useLocation } from "react-router-dom";
function ParkingAgentViewAreas() {

    const [data, setdata] = useState([]);

    const id=localStorage.getItem('parkingId')


    useEffect(() => {
      axiosInstance
        .post(`viewParkingAreaByAgentId/${id}`)
        .then((res) => {
          console.log(res);
          setdata(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const deletefn = (parkingAreaId) => {
        axiosInstance
          .post(`deleteParkingAreaById/${parkingAreaId}`)
          .then((res) => {
            console.log(res);
            if (res.data.status === 200) {
              alert("Deleted successfully");
              setdata(prevData => prevData.filter(area => area._id !== parkingAreaId));
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
                        <Link to={`/parking_agent_view_parking_area_map/${a.lat}/${a.lon}`} ><div className="shop-name" style={{color:"black"}}>View Location</div></Link>
                        <div className="mt-3" >
                            <Link to={`/parking_agent_edit_parking_area/${a._id}`}><button className="btn btn-success">Edit</button></Link>
                            <button className="btn btn-danger mx-2" onClick={()=>{deletefn(a._id)}} >Delete</button>
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

export default ParkingAgentViewAreas
