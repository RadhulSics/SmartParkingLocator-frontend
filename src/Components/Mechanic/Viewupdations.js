import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";

function Viewupdations({ url }) {
  const mechid = localStorage.getItem("mechid");
  console.log(mechid + "mech");

  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewServiceUpdateByMechid/${mechid}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="updated-service-req-title">
        <h1>Service Updations</h1>
      </div>

      <div>
        <div>
          {data.length ? (
            data.map((a) => {
              return (
                <div className="row">
                  <div className="updated-service-req-description ">
                    <h5 className="col-12 text-danger">
                      Service :{a.serviceid?.serviceName}
                    </h5>
                  </div>
                  <div
                    className="updated-service-req-customer col-4"
                    style={{ width: "30rem" }}
                  >
                    <h4 className="updated-service-req-customer-title">
                      SERVICE DETAILS
                    </h4>
                    <hr></hr>
                    <div className="row">
                      <div className="col-12">
                        <img
                          src={`${url}/${a.image?.filename}`}
                          alt="images"
                          width="300px"
                        />
                      </div>
                      <div className="col-12">
                        <p>
                          Customer Name : {a.custid?.firstname}{" "}
                          {a.custid?.lastname}
                        </p>
                        {/* <p>
                          Vehicle Number : {a.vehicleNumber?a.vehicleNumber:''}
                        </p> */}
                        <p>Contact : {a.custid?.contact}</p>
                        <p>Updations : {a?.comments}</p>
                        <p>Final Date :{a?.finaldate}</p>
                      </div>
                      {/* <Link to={`/view-individual-services-mechanic/${a.bookingid}`}> <button type='submit' className='btn btn-primary' style={{width:"200px"}}>Edit Update</button></Link> */}

                      {/* <div className='col-4'>
            <img className='service-req-customer-img' src={CustImg}></img>
          </div> */}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Updates available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Viewupdations;
