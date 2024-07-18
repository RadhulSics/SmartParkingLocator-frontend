import React, { useEffect, useState } from "react";
import "./ViewServicesMechanic.css";
import CustImg from "../../Assets/cat3.png";
import axiosInstance from "../../Baseurl";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ViewIndividualServicesMechanic.css";

function ViewIndividualServicesMechanic() {
  const mechid = localStorage.getItem("mechid");
  console.log(mechid + "mechid");

  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axiosInstance
      .post(`viewbookigbyid/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        console.log(res.data.data);
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

  const [update, setUpdate] = useState({
    comments: "",
    image: "",
    finaldate: "",
  });
  const updatefn = (e) => {
    if (e.target.name === "image") {
      setUpdate({ ...update, image: e.target.files[0] });
    } else if (e.target.name === "finaldate") {
      setUpdate({ ...update, finaldate: e.target.value });
    } else {
      setUpdate({ ...update, [e.target.name]: e.target.value });
    }
  };
  console.log(update);
  const navigate = useNavigate();
  const submitfn = (b) => {
    b.preventDefault();
    axiosInstance
      .post(`addServiceUpdate/${id}`, update, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Service Updated Succesfully");
          navigate("/view-services-mechanic");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closeFn = (b) => {
    axiosInstance
      .post(`closeBookingById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Service Closed");
          navigate("/view-services-mechanic");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="ind-service-req-title">
        <h1>SERVICE REQUEST</h1>
      </div>

      <div>
        <div>
          <form onSubmit={submitfn}>
            <div className="row">
              <div className="ind-service-req-description ">
                <h5 className="col-12 text-danger">
                  Service : {data.serviceid?.serviceName}
                </h5>
                {/* <h6 className='col-3 service-req-date'>Service Date : 03/06/2024</h6>
        <h6 className='col-3 service-req-date'>Booking Date : 03/06/2024</h6> */}

                <h6 className="text-success">
                  Service Description :{data.serviceid?.description}{" "}
                </h6>
              </div>
              <div className="ind-service-req-customer col-6">
                <h4 className="ind-service-req-customer-title">
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

              <div className="ind-service-req-customer col-6">
                <h4 className="ind-service-req-customer-title">UPDATION</h4>
                <hr></hr>
                <div className="row">
                  <div className="col-12">
                    <textarea
                      type="text-box"
                      className="ind-service-req-textbox"
                      placeholder="updations..."
                      name="comments"
                      value={update.comments}
                      onChange={updatefn}
                      required
                      title="please fill the details"
                    />
                    <div className="ind-service-req-file">
                      <input
                        type="file"
                        name="image"
                        onChange={updatefn}
                        required
                      />
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        name="finaldate"
                        value={update.finaldate}
                        onChange={updatefn}
                        required
                      />
                    </div>
                    {/* <button type="submit" className="ind-service-update-btn">
                      Update
                    </button> */}
                  </div>
                  {/* <div className='col-4'>
              <img className='service-req-customer-img' src={CustImg}></img>
            </div> */}
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-success">
                  UPDATE
                </button>
                <button type="button" className="btn btn-warning mx-2" onClick={()=>{closeFn()}} >
                  Close Work
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ViewIndividualServicesMechanic;
