import React, { useEffect, useState } from "react";
import "./Emergency.css";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";

const districtsInKerala = [
  "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod",
  "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad",
  "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
];

function Emergency() {
  const userid = localStorage.getItem("userid");
  console.log(userid);

  const [data, setData] = useState({
    custid: userid,
    district: "",
    issues: ""
  });

  const changefn = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value
    });
    console.log(data);
  };

  const submitfn = (b) => {
    b.preventDefault();
    axiosInstance.post(`addEmergency`, data)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Your request has been successfully sent, Mechanic will contact you shortly");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [name, setName] = useState({});
  useEffect(() => {
    axiosInstance.post(`viewCustById/${userid}`)
      .then((res) => {
        console.log(res);
        setName(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userid]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2" style={{ marginTop: "10px" }}>
            <Link to="/emergency-status">
              <button type="submit" className="btn btn-warning">View Emergency Status</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={submitfn}>
              <div className="emergency-user-main-box">
                <h2>Emergency Request</h2>
                <div className="col-12">
                  <p className="emergency-para">UserName: {name.firstname} {name.lastname}</p>
                </div>
                <div className="District-emergecy w-50 m-auto">
                  <select name="district" value={data.district} onChange={changefn} required className="form-control">
                    <option value="">Select Your District</option>
                    {districtsInKerala.map((district) => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
                <div className="District-emergecy">
                  <textarea placeholder="Enter Your Issue" name="issues" value={data.issues} onChange={changefn} required />
                </div>
                <div className="emergencybtn">
                  <button type="submit" className="btn btn-primary">Submit Emergency Service</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emergency;
