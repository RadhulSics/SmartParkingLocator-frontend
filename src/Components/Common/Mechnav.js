import React from 'react'
import imglogo from "../../Assets/logo.png"
import { Link } from 'react-router-dom'


function Mechnav() {
  return (
    <div >
    <nav className='nav-main'>
    <div className='nav_logo_new d-flex align-items-center' >
        <img className='' src={imglogo} alt='Navbar_logo'  style={{marginLeft:"200px",marginTop:"15px"}}/>
        <p className='mt-4 text-light mx-2' >Smart Parking Locator</p>
      </div>
      
      
      <ul className='nav-position'>
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
        </div> */}
        <div>
          <li className='navbar-li'><Link className='nav-ahref' to='/view-services-mechanic'>View Assigned Services</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/mechanic-dashboard-viewrequest'>Profile</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/view-mechemergency'><button type='submit' className='btn btn-danger'>Emergency Requests</button></Link></li>
        </div>
        <div>


        </div>


      </ul>
    </nav>
</div>

  )
}

export default Mechnav