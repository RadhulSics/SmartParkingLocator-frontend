import React, { useState } from "react";
import "./MainAdmin.css";
import mainImg from "../../Assets/mainimg.png";
import Cat1 from "../../Assets/cat1.png";
import Cat2 from "../../Assets/cat2.png";
import Cat3 from "../../Assets/cat3.png";
import Cat4 from "../../Assets/cat4.png";
import Conv from "../../Assets/convenience.png";
import HeadPhone from "../../Assets/headp.png";
import Arrow from "../../Assets/Arrow.png";
import Rectangle from "../../Assets/rect.png";
import Polygon from "../../Assets/poly.png";
import Fourarrow from "../../Assets/fourarrow.png";
import Car from "../../Assets/carrep.png";
import Ellipse from "../../Assets/Ellipse.png";
import Img1 from "../../Assets/img1.png";
import Img2 from "../../Assets/img2.png";
import Img3 from "../../Assets/img3.png";
import Img4 from "../../Assets/img4.png";
import Img5 from "../../Assets/img5.png";
import Img6 from "../../Assets/img6.png";
import Img7 from "../../Assets/img7.png";
import imghome from "../../Assets/homepic.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useLocation } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function MainAdmin() {
  const userid = localStorage.getItem("userid");
  console.log(userid);

  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (e) => {
    try {
      const response = await axiosInstance.post(
        `/searchServicesByName/${e}`
      );
      setSearchResults(response.data);
      setErrorMessage("");
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setSearchResults([]);
        // setErrorMessage("No services found with the given name.");
      } else {
        setErrorMessage("Server error. Please try again later.");
      }
    }
  };
  return ( 
    <div>
      {userid && (
        <div className="Main-box">
          <div className=" user_prescription_link">
            <Link to="/emergency">
              <button type="submit" className="btn btn-danger">
                Emergency Service
              </button>
            </Link>
          </div>
          <p className="main-heading">
            Keep Your Car Running Smoothly with Easy,
            <br /> Convenient Service
          </p>
          <div className="main-search">
            <input
              className="main-input"
              type="search"
              placeholder="Service Name"
              // value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="main-search-btn" onClick={handleSearch}>
              Search
            </button>
            {errorMessage && <p>{errorMessage}</p>}
            <div id="service-search">
              {searchResults.length?searchResults.map((service) => (
                <div className=" viewservices_search">
                  <Link
                    to={`/bookservices/${
                      service._id
                    }?prevPage=${encodeURIComponent(location.pathname)}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p className="ri-search-line">{service.serviceName}</p>
                  </Link>
                </div>
              ))
            :''}
            </div>
          </div>
        </div>
      )}

      <div>
        <img className="main-img" src={imghome} alt="mainimage" />
      </div>
      <div>
        <h2 className="main-category">Popular Category</h2>
        <p className="main-cat-title">
          Many desktop publishing packages and web page editors
        </p>
      </div>
      <div className="main-categorydiv">
        <img src={Cat1} alt="mainimage" />
        <img src={Cat3} alt="mainimage" />
        <img src={Cat2} alt="mainimage" />
        <img src={Cat4} alt="mainimage" />
      </div>
      <div className="main-categorydiv2">
        {/* <p className="category-service">Service Name</p>
        <p className="category-service">Service Name</p>
        <p className="category-service">Service Name</p>
        <p className="category-service">Service Name</p> */}
      </div>
      <div className="popular-category-div">
        <h2 className="popular-category">Convenience</h2>
        <p className="popular-title">
          Emphasize easy online booking, transparent pricing, service reminders,
          and <br />
          progress tracking.
        </p>
      </div>
      <div className="conv-div row">
        <div className="col-3">
          <img className="conv-img" src={Conv} />
        </div>
        <div className="conv-details col-6">
          <h5 className="schedule-title">Schedule</h5>
          <p className="schedule-details">
            Schedule routine maintenance or fix surprise issues
          </p>
          <p className="schedule-details1">
            Mention the diverse range of services available, from oil changes
            and brakes to diagnostics and major repairs. Highlight any unique
            offerings like mobile mechanics or express services.
          </p>
          {/* <button className="schedule-btn">One-stop shop</button> */}
        </div>
        <div>
          <h3 className="trustworthy-title">Trustworthy network</h3>
          <p className="trustworthy-title1">
            Briefly introduce your vetted and qualified mechanics or partner
            garages.
            <br />
            Mention certifications, experience, and positive customer reviews.
          </p>
        </div>

        <div className="icon-div">
          <img className="icon-headph" src={HeadPhone} alt="icons" />
          <img className="icon-ellipse1" src={Ellipse} alt="icons" />
          <img className="icon-arrow1" src={Arrow} alt="icons" />
          <img className="icon-rectangle" src={Rectangle} alt="icons" />
          <img className="icon-polygon" src={Polygon} alt="icons" />
          <img className="icon-fourarrow" src={Fourarrow} alt="icons" />
          <img className="icon-ellipse2" src={Ellipse} alt="icons" />
          <img className="icon-arrow2" src={Arrow} alt="icons" />
          <img className="icon-carrep" src={Car} alt="icons" />
        </div>
        <h2 className="howdo-title">How we do</h2>
        <p className="howdo-details">
          Briefly introduce your vetted and qualified mechanics or partner
          garages.
          <br />
          Mention certifications, experience, and positive customer reviews.
        </p>
        <div>
          <div className="row image-div">
            <img className="col-4" src={Img1} alt="CarImg" />
            <img className="col-4" src={Img2} alt="CarImg" />
            <img className="col-4" src={Img3} alt="CarImg" />
            <img className="col-4" src={Img4} alt="CarImg" />
            <img className="col-4" src={Img5} alt="CarImg" />
            <img className="col-4" src={Img6} alt="CarImg" />
            <img className="col-12" src={Img7} alt="CarImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainAdmin;
