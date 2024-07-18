import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";

function Viewmyspareparts({ url }) {
  const shopid = localStorage.getItem("workshopid");
  console.log(shopid);
  const [data, setdata] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewSparePartByWid/${shopid}`)
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <h1 className="spareList-head">Spare Parts</h1>
      </div>

      <div className="row spareList-main">
        {data.length ? (
          data.map((a) => {
            return (
              <div className="card col-4 spareList-col">
                <div>
                  <img
                    className="card-img-top spareList-img"
                    src={`${url}/${a.img?.filename}`}
                    alt="images"
                  />
                  <div className="card-body">
                    <div className="spareList-name">
                      {a?.partName}<br/>
                      {a?.description}
                    </div>
                    <hr />
                    <div className="spareList-price">
                      {"Rs. " + a?.price + " "},Count: {a?.count}
                    </div>
                  </div>
                  <Link to={`/workshop-editspareparts/${a._id}`}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: "150px", marginLeft: "40px" }}
                    >
                      Edit
                    </button>{" "}
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

export default Viewmyspareparts;
