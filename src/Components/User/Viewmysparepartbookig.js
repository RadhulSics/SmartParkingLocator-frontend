import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";

function Viewmysparepartbookig({ url }) {
  const userid = localStorage.getItem("userid");
  console.log(userid);

  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewBookingByUserid/${userid}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="col-9" style={{ padding: "20px" }}>
      <div className="row spareList-main">
        {data.length ? (
          data.map((a) => {
            return (
              <div className="card col-4 spareList-col">
               
                  <div>
                    <img
                      className="card-img-top spareList-img"
                      src={`${url}/${a.sparepartid?.img.filename}`}
                      alt="images"
                    />
                    <div className="card-body">
                      <div className="spareList-name">
                        {a.sparepartid?.partName}
                        <p>Status : {a.status==true?`Please collect`:`Collected`}</p>
                      </div>
                      <hr />
                      <div style={{ display: "flex" }}>
                        <div className="spareList-price">
                          {"Rs. " + a.price + " "}
                        </div>

                        <div
                          className="spareList-price"
                          style={{ paddingLeft: "60px" }}
                        >
                          {"Count. " + a?.quantity + " "}
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Viewmysparepartbookig;
