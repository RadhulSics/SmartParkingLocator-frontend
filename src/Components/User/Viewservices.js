import React, { useEffect, useState } from "react";
import "./Viewservices.css";
import axiosInstance from "../../Baseurl";
import { Link, useLocation } from "react-router-dom";

function Viewservices() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`viewallservices`)
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const location = useLocation();
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.length ? (
            data.map((a) => {
              return (
                <Link
                  to={`/bookservices/${a._id}?prevPage=${encodeURIComponent(
                    location.pathname
                  )}`}
                  style={{ textDecoration: "none" }}
                  className="col-lg-4 col-md-4 col-sm-6 mb-4"
                >
                  {/* <div className="row viewservices-box">
                  <div className="row">
                    <div className="col">
                      <p id="clor">Service Name:</p>
                    </div>
                    <div className="col">
                      <p>{a.serviceName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p id="clor">Description :</p>
                    </div>
                    <div className="col">
                      <p>{a.description}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p id="clor">Price:</p>
                    </div>
                    <div className="col">
                      <p>{a.price}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p id="clor">Shop Name:</p>
                    </div>
                    <div className="col">
                      <p>{a.shopid.name}</p>
                    </div>
                  </div>
                </div> */}
                  {/* <div className="col-3" style={{ display: "flex" }}> */}
                    <div className="cards ">
                      <div className="card-content ">
                        <div className="service-name "> {a.serviceName}</div>
                        <div className="price">{a.description}</div>
                        <div className="price">City : {a.shopid?.city}</div>
                        <div className="price">District : {a.shopid?.district}</div>
                        <div className="description">Cost : {a.price}</div>
                        <div className="shop-name" style={{color:"black"}}>ShopName: {a.shopid?.name}</div>
                      </div>
                    {/* </div> */}
                  </div>
                </Link>
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

export default Viewservices;
