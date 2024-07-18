import React from 'react';
import aboutImg from '../../Assets/mainimg.png';
import '../Common/AboutUs.css';
import Img3 from '../../Assets/img3.png'
import Img4 from '../../Assets/img4.png'
import Img5 from '../../Assets/img5.png'
function AboutUs() {
  return (
    <div className='aboutus-main'>
    <div>
    <img className="aboutus-img"src={aboutImg} alt='Signin_image'/>
    </div>
    <div>
        <h2 className='aboutus-head'><b>About Us</b></h2>
    </div>
    <div>
        <p className='aboutus-para'>
        At Automodo, we're passionate about revolutionizing the way people interact with their vehicles. Our mission is to integrate cutting-edge technology seamlessly into everyday driving experiences, making transportation safer, more efficient, and enjoyable for everyone. With a dedicated team of experts in automotive engineering, software development, and user experience design, we strive to push the boundaries of innovation in the automotive industry. Whether it's enhancing vehicle performance, implementing smart navigation solutions, or developing advanced driver-assistance systems, Automodo is committed to delivering excellence in every aspect of automotive technology. Join us on our journey as we pave the way towards a smarter, more connected future on the road.
        </p>
    </div>
    <div className='row abt-image-div'>
          <img  className='col-4' src={Img3}  alt='CarImg'/>
          <img  className='col-4' src={Img4}  alt='CarImg'/>
          <img  className='col-4' src={Img5}  alt='CarImg'/>
          </div>
          <br/> <br/> <br/>
</div>
  )
}

export default AboutUs