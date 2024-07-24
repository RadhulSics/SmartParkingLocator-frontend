import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";

function AdminViewParkingReq({ url }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewPendingParkingAgents`)
      .then((res) => {
        if(res.data.msg=='No data obtained'){
            setData([]);

        }else if(res.data.status==200)
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="col-8">
      <div className="container">
        <div className=" workshop-request-main-box" style={{ padding: "10px" }}>
          <h3 className=" Workshop-request-heading">Parking Agent Requests</h3>
          <div></div>
          {data.length ? (
            data.map((a) => {
              return (
                <div>
                  <Link
                    to={`/dashboard_parking_agent_single_req/${a?._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      className="admin_advertiser_request workshop-request-box"
                      style={{ display: "flex" }}
                    >
                      <img
                        src={`${url}/${a.image?.filename}`}
                        alt="images"
                        width="130px"
                        height="100px"
                      />

                      <div className="col-12">
                        <h4>
                          Agent Name : {a.firstname} {a.secondaname}
                        </h4>
                        <hr style={{ width: "700px" }} />
                        <div className="row">
                          <div className="col-6 work-email">
                            <p style={{ paddingTop: "0px" }}>
                              Email :{a.email}
                            </p>
                          </div>
                          <div className="col-6 work-reg">
                            <p id="arrow" style={{ paddingTop: "0px" }}>
                              Address :{a.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminViewParkingReq;
