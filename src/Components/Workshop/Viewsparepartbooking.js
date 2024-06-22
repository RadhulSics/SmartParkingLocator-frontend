import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";

function Viewsparepartbooking({url}) {
    const wid=localStorage.getItem("workshopid")
    console.log(wid);

    const[data,setData]=useState([])

    useEffect(()=>{
        axiosInstance.post(`viewSparePartBookingByWid/${wid}`)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className="col-12" style={{ padding: "20px" }}>
      <div className="row spareList-main">
        {data.length ? (
          data.map((a) => {
            return (
              <div className="card col-4 spareList-col"  style={{height:"450px"}}>
                {/* <Link
                  to={`/SparepartsInd/${a.sparepartid._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                > */}
                  <div>
                    <img
                      className="card-img-top spareList-img"
                      src={`${url}/${a.sparepartid?.img.filename}`}
                      alt="images"
                    />
                    <div className="card-body">
                      <div className="spareList-name">
                        {a.sparepartid?.partName}
                        <div><p>ygdyujgdewj</p></div>

                      </div>

                      <hr />
                      <div style={{ display: "flex" }}>
                        <div className="spareList-price">
                          {"Rs. " + a?.price + " "}
                        </div>

                        <div
                          className="spareList-price"
                          style={{ paddingLeft: "60px" }}
                        >
                          {"Count. " + a?.quantity + " "}
                        </div>
                        
                      </div>
                      <div style={{paddingTop:"10px"}}>
                        <p><b>UserName:</b>{a.userid?.firstname}</p>
                        <p><b>Contact:</b>{a.userid?.contact}</p>
                        <p><b>Email:</b>{a.userid?.email}</p>

                        </div>
                    </div>
                  </div>
                {/* </Link> */}
              </div>
            );
          })
        ) : (
          <div>No bookings available</div>
        )} 
      </div>
    </div>
  );
}

export default Viewsparepartbooking;
