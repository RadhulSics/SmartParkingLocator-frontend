import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";
import img from "../../Assets/cat2.png";

function UserProfile({ url }) {
  const userid = localStorage.getItem("userid");
  console.log(userid + "userid");

  const [data, setdata] = useState({});

  useEffect(() => {
    axiosInstance
      .post(`/viewCustById/${userid}`)
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
      <div className="col-8" style={{ marginLeft: "50px" }}>
        <div className="reader_profile_account_info" style={{ width: "60rem" }}>
          <div className="reader_profile_account_info_details row">
            <div className="col-7  reader_profile_account_info_fulldetails ">
              <p>Account Info</p>

              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4">Name</p>
                <p>
                  {data?.firstname} {data?.lastname}
                </p>
              </div>
              {/* <div className="reader_profile_account_info_fulldetails_box mb-3">
                  <p className="col-6">Owner Name</p>
                  <p>rfjhrjfrjr</p>
                </div> */}
              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4">Email</p>
                <p style={{textTransform:'none'}} >{data?.email}</p>
              </div>

              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4">Gender</p>
                <p>{data?.gender}</p>
              </div>
              <div className="reader_profile_account_info_fulldetails_box mb-3" style={{width:'auto'}}>
                <p className="col-4">Contact</p>
                <p>{data?.contact}</p>
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
                <Link to={`/user-profile-edit/${userid}`}>
                  <button className="btn btn-primary">Edit Profile</button>
                </Link>
              </div>
            </div>
            <div className="col-4">
              <img
                src={`${url}/${data?.image?.filename}`}
                alt="profile Picture"
                style={{ paddingTop: "80px" }}
                width="350px"
                height="400px"
              />
            </div>
            <div className="col-5 reader_profile_account_info_image">
              {/* {Users && Users.image && Users.image.filename && (
    <img src={`${url}/${Users.image.filename}`} />
)} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
