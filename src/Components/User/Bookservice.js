import React, { useEffect, useState } from "react";
import "./Bookservice.css";
import img from "../../Assets/img2.png";
import { Link, useLocation, useParams } from "react-router-dom";
import axiosInstance from "../../Baseurl";
import img2 from "../../Assets/rightarrow.png";


function Bookservice({url}) {
    const {id}=useParams()
    const [data,setdata]=useState({})

    useEffect(()=>{
        axiosInstance.post(`viewServiceById/${id}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    console.log(data._id);

    const location = useLocation();
    const prevPage = new URLSearchParams(location.search).get('prevPage');


  return (
    <div className=" contributer_addnews_main">
      <div className="container">
        <div className="row">
          <div className="col-2  contributer_arrow">
            <Link to={prevPage || '/'}> <img src={img2} alt='images' width='40px' height='40px' /></Link>
          </div>
          <div className="col-6 contributer_arrow">
            <h2>Services</h2>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-4 contributer_addnews">
              <label
                htmlFor="fileInput"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img src={`${url}/${data.shopid?.image.filename}`} alt="image" width="330px" height="300px" />
              </label>
            </div>
            <div className="col-6 ccccccccccc">
              <div className="row contributer_addnewsone ">
                <h4>Service Name</h4>
              </div>

              <div className="row contributer_input">
                <input type="text" name="title" 
                value={data.serviceName} 
                />
              </div>

              <div className="row contributer_content ">
                <h4>Description</h4>
              </div>
              <div className=" ">
                <textarea
                  className="contributer_addnews_textarea"
                  name="content" value={data.description}
                />
              </div>

              <div className="row contributer_addnewsone ">
                <h4>Shop Name</h4>
              </div>

              <div className="row contributer_input">
                <input type="text" name="title"
                value={data.shopid?.name} />
              </div>

             
              <div className="row">
                <div className="col-6 ">
                  <div className=" " style={{ paddingTop: "10px" }}>
                    <h4>Contact Number</h4>
                  </div>

                  <input
                    type="text"
                    name="location"
                    className="contributer_inputsec"
                    value={data.shopid?.contact} />

                </div>
                <div className="col-6 ">
                  <div className=" " style={{ paddingTop: "10px" }}>
                    <h4>City</h4>
                  </div>

                  <input
                    type="text"
                    name="location"
                    className="contributer_inputsec"
                    value={data.shopid?.city} />

                </div>
                

              </div>

              <div className="row">
                <div className="col-6 ">
                  <div className=" " style={{ paddingTop: "10px" }}>
                    <h4>Price</h4>
                  </div>

                  <input
                    type="text"
                    name="location"
                    className="contributer_inputsec"
                    value={data.price}
                  />
                </div>
                <div className="col-6 ">
                  <div className=" " style={{ paddingTop: "10px" }}>
                    <h4>District</h4>
                  </div>

                  <input
                    type="text"
                    name="vehicleNumber"
                    className="contributer_inputsec"
                    value={data.shopid?.district}
                    required
                  />
                </div>

                {/*  */}
              </div>
            </div>
          </div>
          <div className="coontributor_button">
          <Link to={`/paymentservice/${data._id}`}>  <button type="submit" className="btn btn-primary">
              Book Service
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Bookservice;
