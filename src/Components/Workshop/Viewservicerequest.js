import React, { useEffect, useState } from "react";
import "./Viewservicerequest.css";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";

function Viewservicerequest() {
  const wid = localStorage.getItem("workshopid");
  console.log(wid);

  const [data, setdata] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewBookingByWid/${wid}`)
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="view-servicerequest-box" >
      <div className="col-9" style={{width:"100%"}}>
        <div className="row">
          {/* <div className='col'> */}
          <h2 className=" view-servicerequest-title">Service Requests</h2>
          {/* </div> */}
        </div>
        {data.length ? (
          data.map((a) => {
            const dateTime = new Date(a.bookingdate);
            const dateOnly = dateTime.toISOString().split("T")[0];

            const servicedate = new Date(a.servicedate);
            const sdate = servicedate.toISOString().split("T")[0];

            return (
              <Link
                to={`/workshop-singlereq/${a?._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="row" style={{ padding: "10px" }}>
                  <div
                    className="admin_advertiser_request"
                    style={{ display: "flex", width: "1000px" }}
                  >
                    {/* <img src={img}  alt='images' width='130px' height='100px'/> */}

                    {/* <img src={"`${url}/${a.image?.filename}`"}  alt='images' width='130px' height='100px'/> */}

                    <div>
                      <div className="row" style={{ width: "650px" }}>
                        <div className="col-6">
                          <h4>Service Name : {a.serviceid?.serviceName}</h4>
                        </div>
                        <div className="col-6">
                          <h4>
                            Customer Name : {a.custid?.firstname}{" "}
                            {a.custid?.lastname}
                          </h4>
                        </div>
                      </div>
                      <div className="row" style={{ width: "700px" }}>
                        <div className="col-6 " style={{ padding: "20px" }}>
                          <p>Booking Date :{dateOnly}</p>
                        </div>
                        <div className="col-6 ">
                          <p id="arrow">Service Date :{sdate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div  >No data available</div>
        )}
      </div>
    </div>
  );
}

export default Viewservicerequest;
