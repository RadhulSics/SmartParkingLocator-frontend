import React, { useEffect, useState } from "react";
import "./Emergencyfinal.css";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function Emergencyfinal() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axiosInstance
      .post(`viewEmergencyById/${id}`)
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

  const [service, setService] = useState({
    payment: "",
    service: "",
  });
  const changefn = (a) => {
    setService({
      ...service,
      [a.target.name]: a.target.value,
    });
    console.log(service);
  };
  const navigate = useNavigate();
  const finalfn = (b) => {
    axiosInstance
      .post(`addServiceandPaymentByMech/${id}`, {
        payment: service.payment,
        service: service.service,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Success");
          navigate("/view-mechemergency");
        }
      });
  };

  return (
    <div>
      <div className="service-req-title">
        <h1>Update Amount For Emergency Service</h1>
      </div>
      <div
        className="service-req-cards-container"
        style={{ marginLeft: "400px" }}
      >
        <div className="col-12">
          <div className="row service-req-card">
            <h5 className="col-12 text-danger">District :{data?.district}</h5>

            <h6 className="text-success">Issue :{data?.issues}</h6>
            <div className="service-req-customer">
              <h4 className="service-req-customer-title">CUSTOMER DETAILS</h4>
              <hr></hr>
              <div className="row">
                <div className="col-12">
                  <p>
                    Name :{data.custid?.firstname} {data.custid?.lastname}
                  </p>
                  <p>Contact :{data.custid?.contact}</p>
                  <p>
                    Payment Status : {data.paymentstatus ? "paid" : "notpaid"}
                  </p>
                  <p> Date :{formatDate(data.date)}</p>

                  <p>Time :{formatTime(data.date)}</p>
                </div>
              </div>
            </div>
            <form onSubmit={finalfn}>
            <div className="col-12 card-finalprice">
              Final Price:
              <input
                type="number"
                name="payment"
                value={service.payment}
                onChange={changefn}
                required
              />
              <br />
              <div className="row">
                <div className="col-2">Service:</div>
                <div className="col-6">
                  <textarea
                    name="service"
                    value={service.service}
                    onChange={changefn}
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="service-req-btn" >
              DONE
            </button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emergencyfinal;
