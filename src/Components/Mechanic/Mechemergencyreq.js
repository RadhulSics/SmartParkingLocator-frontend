import React, { useEffect, useState } from "react";
import "./ViewServicesMechanic.css";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";

function Mechemergencyreq() {
  const wid = localStorage.getItem("mechid");
  console.log(wid);
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`viewEmergencyByMechid/${wid}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString();
  };

  return (
    <div>
      <div className="service-req-title">
        <h1>EMERGENCY SERVICE REQUESTS</h1>
      </div>
      <div className="service-req-cards-container">
        {data.length ? (
          data.map((a) => {
            return (
              <div className="col-4">
                <div className="row service-req-card">
                  <h5 className="col-12 text-danger">
                    District :{a?.district}
                  </h5>
                  {/* <h6 className='col-3 service-req-date'>Service Date : 03/06/2024</h6>
    <h6 className='col-3 service-req-date'>Booking Date : 03/06/2024</h6> */}

                  <h6 className="text-success">Issue :{a?.issues}</h6>
                  <div className="service-req-customer">
                    <h4 className="service-req-customer-title">
                      CUSTOMER DETAILS
                    </h4>
                    <hr></hr>
                    <div className="row">
                      <div className="col-12">
                        <p>
                          Name :{a.custid?.firstname} {a.custid?.lastname}
                        </p>
                        <p>Contact :{a.custid?.contact}</p>
                        <p>
                          Payment Status :{" "}
                          {a.paymentstatus ? "paid" : "notpaid"}
                        </p>
                        <p> Time :{formatTime(a.date)}</p>
                        <p> Date :{formatDate(a.date)}</p>
                      </div>
                      {/* <div className='col-4'>
          <img className='service-req-customer-img' src={CustImg}></img>
        </div> */}
                    </div>
                  </div>
                  <Link to={`/emergencyfinal/${a._id}`}>
                    <button className="service-req-btn">DONE WORK</button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}

export default Mechemergencyreq;
