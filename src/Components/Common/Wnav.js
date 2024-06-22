import React from 'react'
import imglogo from "../../Assets/logo.png"
import { Link } from 'react-router-dom'


function Wnav() {
  return (
    <div >
    <nav className='nav-main'>
      <div>
        <img className='' src={imglogo} alt='' width="60px" height="60px" style={{marginLeft:"190px",marginTop:"20px",}}/>
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
          {/* <img className='dropdown_pic'src={drop_pic} alt='dropdown_pic'/> */}
        </div>
        <div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref' to='/workshop-dashboard'>Profile</Link></li>
        </div>
       

        </div>


      </ul>
    </nav>
</div>

  )
}

export default Wnav