import React, { useEffect, useState } from "react";
import "./Workshopdashboard.css";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";
import img from "../../Assets/cat2.png";

function Workshopdashboard({ url }) {
  const id = localStorage.getItem("workshopid");
  console.log(id);
  const [Users, SetUsers] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewWorkshopById/${id}`, Users)
      .then((res) => {
        console.log(res);
        SetUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="col-8" style={{ marginLeft: "50px" }}>
        <div className="reader_profile_account_info">
          <div className="reader_profile_account_info_details row">
            <div className="col-7  reader_profile_account_info_fulldetails ">
              <p>Account Info</p>

              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4"> Name</p>
                <p>{Users.name}</p>
              </div>
              {/* <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-6">Owner Name</p>
                  <p>rfjhrjfrjr</p>
                </div> */}
              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4">Email</p>
                <p style={{textTransform:'none'}} >{Users.email}</p>
              </div>
              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4">Aadhar</p>
                <p>{Users.aadhar}</p>
              </div>
              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4">City</p>
                <p>{Users.city}</p>
              </div>
              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4">District</p>
                <p>{Users.district}</p>
              </div>
              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4">Contact</p>
                <p>{Users.contact}</p>
              </div>

              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4">Reg No</p>
                <p>{Users.regno}</p>
              </div>
              {/* <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p></p>
                  <p>hbfrjbrfr</p>
                </div> */}

              {/* <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p>Email</p>
                  <p
                    style={{
                      overflow: "hidden",
                      maxWidth: "100%",
                      wordBreak: "break-all",
                    }}
                  >
                    frbfrhjr
                  </p>
                </div> */}

              <div className="reader_profile_account_info_editbtn ">
                <Link to={`/workshop-editprofile/${id}`}>
                  <button className="btn btn-primary">Edit Profile</button>
                </Link>
              </div>
            </div>
            <div className="col-5 reader_profile_account_info_image">
              {Users && Users.image && Users.image.filename && (
                <img src={`${url}/${Users.image.filename}`} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshopdashboard;
