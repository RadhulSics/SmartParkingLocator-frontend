import React, { useState } from 'react'
import imglogo from "../../Assets/logo.png"
import { Link } from 'react-router-dom'


function ParkingAgentNavbar() {

    const[readerid,setReaderid]=useState(null);

  const handleLogout = () => {
    localStorage.removeItem("userid");
    setReaderid(null);
  };

  return (
    <div>
      <nav className='nav-main'>
    <div className='nav_logo_new d-flex align-items-center' >
        <img className='' src={imglogo} alt='Navbar_logo'  style={{marginLeft:"200px",marginTop:"15px"}}/>
        <p className='mt-4 text-light mx-2' >Smart Parking Locator</p>
      </div>
      
      
      <ul className='nav-position'>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/parking_agent_home'>Home</Link></li>
        </div>
        <div class="dropdown">
          <li className="navbar-li dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Parking Area
          </li>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/parking_agent_add_parking_area">Add</Link></li>
            <li><Link class="dropdown-item" to="/parking_agent_view_parking_area">View Areas</Link></li>
            <li><Link class="dropdown-item" to="/parking_agent_view_parking_area_request">View Requests</Link></li>
            <li><Link class="dropdown-item" to="/parking_agent_view_parking_area_bookings">Bookings</Link></li>
          </ul>
        </div>
   
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/parking_agent_profile'>Profile</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/' onClick={handleLogout}>Logout</Link></li>
        </div>
       


      </ul>
    </nav>
    </div>
  )
}

export default ParkingAgentNavbar
