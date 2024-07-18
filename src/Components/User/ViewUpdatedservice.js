import React, { useEffect, useState } from "react";
import "./Viewupdatedservice.css";
import CustImg from "../../Assets/cat3.png";
import axiosInstance from "../../Baseurl";
import { Link, useParams } from "react-router-dom";

function ViewUpdatedservice({ url }) {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .post(`viewbookigbyid/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const dateTime = data?.bookingdate ? new Date(data.bookingdate) : new Date();
  const dateOnly = dateTime.toISOString().split("T")[0];

  const servicedate = data?.servicedate
    ? new Date(data.servicedate)
    : new Date();
  const sdate = servicedate.toISOString().split("T")[0];

  const [update, setUpdate] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`viewServiceUpdateByserviceid/${id}`)
      .then((res) => {
        console.log(res);
        setUpdate(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const finaldatew = update?.finaldate ? new Date(update.finaldate) : new Date();
  // const finaldates = finaldatew.toISOString().split("T")[0];

  return (
    <div>
      <div className="updated-service-req-title">
        <h1>Service Updations</h1>
      </div>

      <div>
        <div>
          <div className="row">
            <div className="updated-service-req-description ">
              <h5 className="col-12 text-danger">
                Service : {data.serviceid?.serviceName}
              </h5>
              {/* <h6 className='col-3 service-req-date'>Service Date : 03/06/2024</h6>
        <h6 className='col-3 service-req-date'>Booking Date : 03/06/2024</h6> */}

              <h6 className="text-success">
                Service Description :{data.serviceid?.description}{" "}
              </h6>
            </div>
            <div className="updated-service-req-customer col-6">
              <h4 className="updated-service-req-customer-title">
                CUSTOMER DETAILS
              </h4>
              <hr></hr>
              <div className="row">
                <div className="col-12">
                  <p>
                    Name : {data.custid?.firstname} {data.custid?.lastname}{" "}
                  </p>
                  <p>Contact : {data.custid?.contact}</p>
                  <p>Payment Status : Paid</p>
                  <p>Booking Date : {dateOnly}</p>
                  <p>Service Date : {sdate} </p>
                </div>
                {/* <div className='col-4'>
              <img className='service-req-customer-img' src={CustImg}></img>
            </div> */}
              </div>
            </div>
            {update.length ? (
              update.map((a) => {
                return (
                  <div className="updated-service-req-customer col-6">
                    <h4 className="updated-service-req-customer-title">
                      UPDATION
                    </h4>
                    <hr></hr>
                    <div className="row">
                      <div className="col-12">
                        <label>
                          <b>Updation : </b>
                          {a?.comments}
                        </label>
                        <br />
                        <img
                          src={`${url}/${a.image?.filename}`}
                          alt="updated image"
                          width="400px"
                        />
                        <br />
                        <label>
                          <b>Final Date of Maintenance :</b> {a?.finaldate}
                        </label>
                      </div>
                      {/* <div className='col-4'>
              <img className='service-req-customer-img' src={CustImg}></img>
            </div> */}
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                No Updates available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUpdatedservice;
