import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Sparepartslist.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom';
import axiosInstance from '../../Baseurl';


function SparepartsList({url}) {
    const [state,setState]=useState([]);

    useEffect(()=>{
        axiosInstance.post(`viewallSpareParts`)
        .then((res)=>{
            console.log(res);
            setState(res.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })

    },[])
    console.log(state)

  return (
    <div>
        <div>
            <h1 className='spareList-head'>Spare Parts</h1>
        </div>
        
        <div className='row spareList-main'>
        {state.length ?(
            state.map((a)=>{
                return(
                <div className="card col-4 spareList-col">
                    <Link  to={`/SparepartsInd/${a._id}`}>
                     <div >
           <img className="card-img-top spareList-img" src={`${url}/${a.img?.filename}`} alt='images'/>
           <div className="card-body">
            <div className='spareList-name'>
            {a?.partName}
            </div> 
            <hr/>
            <div className='spareList-price' >
            <h6 style={{textDecoration:"none",color:"black"}}>{'Rs. '+a?.price+" "}</h6>
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
  )
}


  
export default SparepartsList