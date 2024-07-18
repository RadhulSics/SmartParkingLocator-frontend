import React, { useEffect, useState } from 'react'
import "./WorkshopEmergencyrequest.css"
import img from "../../Assets/cat3.png"
import axiosInstance from '../../Baseurl'
import { Link } from 'react-router-dom'


function WorkshopEmergencyrequest({url}) {
    const[data,setData]=useState([])
    const wid=localStorage.getItem('workshopid')
    useEffect(()=>{
        axiosInstance.post(`/viewEmergencyForShops/${wid}`)
        .then((res)=>{
            console.log(res.data);
             setData(res.data.data.reverse())
        })
        .catch((err)=>{

            console.log(err);
        })
    },[])
    // console.log(data._id);
    

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
<div className='workshop-emergency-request-main-box' style={{padding:"10px"}}>
            <h3 className=' workshop-emergency-request-heading'>EMERGENCY REQUEST</h3>
            <div>
            </div>

             
            {data ? (
  data.length ? (
    data.map((a) => {
            //   const dateTime = new  Date(a.date);
            //   const timeString = dateTime.toLocaleTimeString();
         return( 
          <div  >
            <Link to={`/workshop-assignmechemergencyreq/${a?._id}`}  style={{textDecoration:"none",color:"black"}}>
          
                <div className='workshop-emergency-admin_advertiser_request workshop-emergency-request-box' style={{ display: 'flex' ,width:"60rem"}} >

                {/* <img src={`${url}/${a.custid?.image?.filename}`}  alt='images' width='130px' height='100px'/> */}
                    <div>
                        
                    <h4 style={{ width: '900px', overflow: 'hidden',
                     textOverflow: 'ellipsis', wordWrap: 'break-word' }}>Issues : {a.issues}</h4>
                    <hr/>
                    <div className='row'>
                            <div className='col-6 workshop-emergency-work-email'>
                            <p>Date&Time :{formatDate(a.date)} {formatTime(a.date)}</p>

                            </div>
                            <div className='col-6 workshop-emergency-work-reg'>
                            <p id='arrow'>District :{a.district}</p>

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
    )
    ) : (
      <div>No request is available</div>
    )}


</div>
    </div>
    </div>

  )
}

export default WorkshopEmergencyrequest