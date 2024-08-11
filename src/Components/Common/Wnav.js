import React, { useEffect } from 'react'
import imglogo from "../../Assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'


function Wnav() {


  const navigate=useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("workshopid")==null){
      navigate('/')
    }
  })

  const handleLogout = () => {
    localStorage.removeItem("workshopid");
  };


  return (
    <div >
    <nav className='nav-main'>
    <div className='nav_logo_new d-flex align-items-center' >
        <img className='' src={imglogo} alt='Navbar_logo'  style={{marginLeft:"200px",marginTop:"15px"}}/>
        <p className='mt-4 text-light mx-2' >Smart Parking Locator</p>
      </div>
      
      
      <ul className='nav-position'>
          <div>
          {/* <li className='navbar-li'><Link className='nav-ahref'to='/'>Home</Link></li> */}
        </div>
        <div>
          {/* <li className='navbar-li'><Link className='nav-ahref'to='/Aboutus'>About us</Link></li> */}
        </div>
        <div>
          {/* <li className='navbar-li'><Link className='nav-ahref'to='/'>Gallery</Link></li> */}
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref' to='/workshop-dashboard-myservices'>View My Services</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref' to='/workshop-viewspareparts'>View My Spareparts</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/workshop-viewbookings'>View Bookings</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref' to='/workshop-emergencyrequest'><button type='submit' className='btn btn-danger'>Emergency request</button></Link></li>
        </div>
        <div>
        <li className='navbar-li'><Link className='nav-ahref' to='/workshop-dashboard'>Profile</Link></li>
        </div>
        <div>
        <li className='navbar-li'><Link className='nav-ahref' onClick={handleLogout} to='/'>Logout</Link></li>
        </div>




      </ul>
    </nav>
</div>

  )
}

export default Wnav