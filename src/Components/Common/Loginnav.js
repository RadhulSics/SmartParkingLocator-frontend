import React, { useState } from "react";
// import './Navbar.css'
import Navbar_logo from "../../Assets/footer_logo.png";
import drop_pic from "../../Assets/droppic.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imglogo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Adminnav() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === "user-login") {
      navigate("/user-login"); // Navigate to the UserLogin page
    } else if (selectedValue === "mechanic-login") {
      navigate("/mechanic-login");
    } else if (selectedValue === "workshop-login") {
      navigate("/workshop-login");
    } else if (selectedValue === "admin") {
      navigate("/admin-login");
    } else if (selectedValue == "readerlogin") {
      navigate("/readerlogin");
    } else if (selectedValue == "parkingAgentLogin") {
      navigate("/parking_agent_reg");
    }
  };

  return (
    <div>
      <nav className="nav-main">
        <div className="nav_logo_new d-flex align-items-center">
          <img
            className=""
            src={imglogo}
            alt="Navbar_logo"
            style={{ marginLeft: "200px", marginTop: "15px" }}
          />
          <p className="mt-4 text-light mx-2">Smart Parking Locator</p>
        </div>

        <ul className="nav-position">
          {/* <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/'>Home</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/'>About us</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/'>Gallery</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/'>Jobs</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref' to='/'>Contact us</Link></li>
        </div>
        <div>
          <img className='dropdown_pic'src={drop_pic} alt='dropdown_pic'/>
        </div>
        <div>
        <div class="dropdown">
          <button className="btn btn-secondary dropdown-toggle navdrop-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">a</a></li>
            <li><a class="dropdown-item" href="#">b</a></li>
            <li><a class="dropdown-item" href="#">c</a></li>
          </ul>
        </div>

        </div> */}
          <div
            class="nav-item dropdown"
            style={{
              fontSize: "20px",
              fontWeight: "700",
              paddingRight: "60px",
            }}
          >
            <Link
              href=""
              class=" dropdown-toggle rjr_a"
              data-bs-toggle="dropdown"
              style={{ textDecoration: "none" }}
            >
              User Role{" "}
            </Link>
            <div class="dropdown-menu rounded-0 m-0">
              <Link
                to="/user-login"
                class="dropdown-item"
                style={{ fontSize: "17px", fontWeight: "700" }}
              >
                User
              </Link>

              <Link
                to="/mechanic-login"
                class="dropdown-item"
                style={{ fontSize: "17px", fontWeight: "700" }}
              >
                Mechanic
              </Link>
              <Link
                to="/workshop-login"
                class="dropdown-item"
                style={{ fontSize: "17px", fontWeight: "700" }}
              >
                Workshop
              </Link>
              <Link
                to="/parking_agent_login"
                class="dropdown-item"
                style={{ fontSize: "17px", fontWeight: "700" }}
              >
                Parking Agent
              </Link>
              <Link
                to="/admin-login"
                class="dropdown-item"
                style={{ fontSize: "17px", fontWeight: "700" }}
              >
                Admin
              </Link>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Adminnav;
