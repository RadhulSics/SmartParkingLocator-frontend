import React, { useEffect, useState } from "react";
import "./ViewMechaniclist.css";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";

function ViewMechaniclist({ url }) {
  const id = localStorage.getItem("workshopid");
  console.log(id);
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewMechanicsByShopid/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(data._id);
  const deletefn=((mechanicid)=>{
    axiosInstance.post(`deleteMechanicById/${mechanicid}`)
    .then((res)=>{
      console.log(res);
      if (res.data.status==200) {
        alert("Removed Succesfully")
        setData(prevArray => prevArray.filter(item => item._id !== mechanicid));
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <div className="container">
      <div className="col-8">
        <div className="viewmechanic-main-box" style={{ padding: "10px" }}>
          <h3 className=" viewmechanic-heading">Mechanic List</h3>
          <div></div>

          <div className="row viewmechanic-main">
            {data ? (
              data.length ? (
                data.map((a) => {

                  
                  return (
                    <div className="card col-4 viewmechanic-card">
                      <div>
                        <img
                          className="card-img-top viewmechanic-img"
                          src={`${url}/${a.image?.filename}`}
                          alt="images"
                        />
                        <div className="card-body">
                          <hr />
                          <div className="viewmechanic-name">
                            Name :{a?.firstname} {a?.lastname}
                          </div>
                          Email :{a?.email}
                          <br />
                          Contact :{a?.contact}
                          <br />
                          Aadhar :{a?.aadhar}
                        </div>
                      </div>
                      <div>
                        <button className="viewmechanic-deletebtn"  onClick={() => deletefn(a._id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>No data available</div>
              )
            ) : (
              <div>No Mechanics  available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMechaniclist;
