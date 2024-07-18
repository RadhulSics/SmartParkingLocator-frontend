import React, { useState } from 'react'
import imglogo from "../../Assets/logo.png"
import { Link } from 'react-router-dom'


function Userhomenav() {

  const[readerid,setReaderid]=useState(null);

  const handleLogout = () => {
    localStorage.removeItem("userid");
    setReaderid(null);
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
          <li className='navbar-li'><Link className='nav-ahref'to='/userhome'>Home</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/Aboutusaft'>About us</Link></li>
        </div>
         <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/viewservices'>View Services</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/Sparepartslist'>Spareparts</Link></li>
        </div>
        {/* <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/emergency'>Emergeny Service</Link></li>
        </div> */}
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/user-profile'>Profile</Link></li>
        </div>
        <div>
          <li className='navbar-li'><Link className='nav-ahref'to='/' onClick={handleLogout}>Logout</Link></li>
        </div>
       {/* <div>
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


      </ul>
    </nav>
</div>

  )
}

export default Userhomenav