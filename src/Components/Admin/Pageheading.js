import React from 'react'
import './Pageheading.css'
 import Signin_image from '../../Assets/signin_image.png'


function Pageheading() {
  return (
    <div className='pageheadAdmin-main'>
        <div>
        <img className="pageheadAdmin-img"src={Signin_image} alt='Signin_image'/>
        </div>
        <div>
            <h2 className='pageheadAdmin-head'>Page heading</h2>
        </div>
        <div>
            <p className='pageheadAdmin-para'>
            Share tips on preventing loss, navigating return processes, and promoting a collaborative community. Success Stories: Feature heartwarming stories of lost items reunited with their owners through the platform. FAQs: Address common questions and concerns about using the platform.
            </p>
        </div>


    </div>
  )
}

export default Pageheading