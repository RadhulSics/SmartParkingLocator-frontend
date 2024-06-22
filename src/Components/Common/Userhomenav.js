import React from 'react'
import imglogo from "../../Assets/logo.png"
import { Link } from 'react-router-dom'


function Userhomenav() {
  return (
    
    <div >
    <nav className='nav-main'>
      <div>
        <img className='' src={imglogo} alt='Navbar_logo' width="60px" height="60px" style={{marginLeft:"200px",marginTop:"15px"}}/>
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