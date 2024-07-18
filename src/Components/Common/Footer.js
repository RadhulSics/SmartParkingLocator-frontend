import React from 'react'
import './Footer.css'
import Logo from '../../Assets/footer_logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className='footer-main'>
      <div >
        {/* <div> 
          <img className='footer-logo' src={Logo} alt='Logo-footer' />
        </div> */}
        <div className='footer-flex'>
          <div>
            {/* <Link className='footer-a' to='/'>Home</Link> */}
          </div>
          <div>
            {/* <Link className='footer-a' to='/'>About us</Link> */}
          </div>
          <div>
            {/* <Link className='footer-a'to='/'>Gallery</Link> */}
          </div>
          <div>
            {/* <Link className='footer-a' to='/'>Jobs</Link> */}
          </div>
          <div>
            {/* <Link className='footer-a' to='/'>Contact us</Link> */}
          </div>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer