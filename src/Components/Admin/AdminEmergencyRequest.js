import React, { useEffect, useState } from 'react'
import "./AdminEmergencyRequest.css"
import img from "../../Assets/cat3.png"
import axiosInstance from '../../Baseurl'
import { Link } from 'react-router-dom'



function AdminEmergencyRequest({url}) {

    const[data,setData]=useState([])
    useEffect(()=>{
        axiosInstance.post(`/adminViewEmergencyReqs`,data)
        .then((res)=>{
            console.log(res.data);
            setData(res.data.data.reverse())
        })
        .catch((err)=>{

            console.log(err);
        })
    },[])
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
  };

  const formatTime = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleTimeString();
  };
  return (
    
    <div className='container'>

<div className='col-8'>
<div className=' emergency-request-main-box' style={{padding:"10px"}}>
            <h3 className=' emergency-request-heading'>EMERGENCY REQUEST</h3>
            <div>
            </div>
             {data && data.length ?(
          data.map((a)=>{
         return( 
          <div  >
            <Link to={`/dashboard-workshop-emergency-approval/${a?._id}`}  style={{textDecoration:"none",color:"black"}}>
          
                <div className='emergency-admin_advertiser_request emergency-request-box' style={{ display: 'flex' }} >

                {/* <img src={img}  alt='images' width='130px' height='100px'/> */}

                <img src={`${url}/${a.custid?.image?.filename }`}  alt='images' width='130px' height='100px'/>


                    <div>
                        
                    <h4 style={{ width: '600px', overflow: 'hidden', textOverflow: 'ellipsis', wordWrap: 'break-word' }}>Issue : {a.issues}</h4>
                    <hr/>
                    <div className='row'>
                            <div className='col-6 emergency-work-email'>
                            <p >Date :{formatDate(a.date)}</p>

                            </div>
                            <div className='col-6 emergency-work-reg'>
                            <p id='arrow'>Time :{formatTime(a.date)}</p>

                            </div>
                            <div className='col-6 emergency-work-reg'>
                            <p id='arrow'>District :{a.district}</p>

                            </div>
                            <div className='col-6 emergency-work-reg'>
                            <p id='arrow'>Contact :{a.custid?.contact}</p>

                            </div>


                    </div>
                    
                    </div>
                    
                    </div>
         
            
            </Link>
            </div>
      )
    })
 ) : (
   <div>No data available</div>
 )} 



</div>
    </div>
    </div>)

}
export default AdminEmergencyRequest