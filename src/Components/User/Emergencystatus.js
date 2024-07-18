import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import "./Emergencystatus.css";

function Emergencystatus() {
  const userid = localStorage.getItem("userid");
  console.log(userid);
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewEmergenciesByCustId/${userid}`)
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
      <div className="container uvcontainer">
        <div className="row">
          {data.length ? (
            data.map((a) => {
              return (
                <div className="col-4 emergencyststus-main">
                  <div className="col-12 emergencystatus-head">
                    <h6>AdminApproved:{a?.adminapproved}</h6>
                  </div>
                  <div className="col-12 emergencystatus-head" style={{padding:"0"}}>
                    <h6>
                      Date And Time: {formatDate(a.date)}&{formatTime(a.date)}
                    </h6>
                    <div className="row emergencystatus-issue">
                    <h6 className="col-2">Issue:</h6>
                    <p className="col-6" style={{color:"black"}}>{a?.issues}</p>
                  </div>
                  {a?.shopid ? ( 
                      <div className="shopnamdandcontact">
                        <div className="contact-info">
                        Shopname And Contact:<span className="shop-name"> {a.shopid?.name} {a.shopid?.contact}</span>
                        </div>
                        <div>
                        MechanicName And Contact:<span className="mechanic-name"> {a.mechid?.firstname} {a.mechid?.contact}</span>
                        </div>
                        {
                          a.service? <div className="final-info">
                        <h5 >Final Amount:<span style={{color:"black"}}>{a?.payment}</span></h5><br/>

                        <h5>Service done by shop:<span style={{color:"black"}}>{a?.service}</span></h5>

                      </div>:<h4 className="mt-5" >Will Contact you soon</h4>
                        }
                     
                      </div>
                      
                    ):
                    //  : null
                    // }
                    (
                        <p>No Shops accept your request</p>
                      )}
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Emergency services you are requested </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Emergencystatus;
