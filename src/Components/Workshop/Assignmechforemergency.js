import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../Baseurl'

function Assignmechforemergency() {
    const {id}=useParams()
    const wid=localStorage.getItem("workshopid")


    const[data,setData]=useState({})
    const[reqapprove,setreqapprove]=useState({
        shopid:wid
    })
    const [selectedMechanic, setSelectedMechanic] = useState(""); 

    useEffect(()=>{
        axiosInstance.post(`viewEmergencyById/${id}`)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
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
  const[mechanic,setmechanic]=useState([])
  useEffect(()=>{
    axiosInstance.post(`viewMechanicsByShopid/${wid}`)
    .then((res)=>{
        console.log(res);
        setmechanic(res.data.data)
    })
    .catch((err)=>{
        console.log(err);
    })

},[])


const approvebyshopid=((b)=>{
    b.preventDefault()
    axiosInstance.post(`shopAcceptEmergencyReq/${id}`,reqapprove)
    .then((res)=>{
        console.log(res);
        if(res.data.status==200){
            // alert("Approved succesfully")
        }
        
    })
    .catch((err)=>{
        console.log(err);
    })

})
const navigate=useNavigate()

const assignmech=((e)=>{
    e.preventDefault()
    axiosInstance.post(`assignMechForEmergencyService/${id}`, { mechid: selectedMechanic })
    .then((res)=>{
        console.log(res);
        if(res.data.status==200){
             alert("Request approved and assign mechnaic succesfully")
             navigate("/workshop-emergencyrequest")
        }
    else{
        alert("Please select a Mechanic")
    }
    })
    .catch((err)=>{
        console.log(err);
    })
})

  
  return (
    <div>
        <div className="container viewsinglereq">
            <h2  >Request Details</h2>
            <div className="details" style={{marginTop:"20px"}}>
                <span className="label">Customer Name:</span>
                <span className="value">
                    {data.custid?.firstname}
                    </span>
            </div>
            <div className="details">
                <span className="label">Issue:</span>
                <span className="value" style={{maxWidth:"450px",wordWrap: 'break-word'}}>{data.issues}</span>
            </div>
            <div className="details">
                <span className="label">District:</span>
                <span className="value">{data.district}</span>
            </div>
            <div className="details">
                <span className="label">Date:</span>
                <span className="value">{formatDate(data.date)} </span>
            </div>
            <div className="details">
                <span className="label">Bookign Date:</span>
                <span className="value">{formatTime(data.date)}</span>
            </div>

            <div className="details">
                <span className="label">Customer Email:</span>
                <span className="value">{data.custid?.email}</span>
            </div>
            <div className="details">
                <span className="label">Customer Contact:</span>
                <span className="value">{data.custid?.contact}</span>
            </div>
            <div className="details">
                <span className="label">paymentservice:</span>
                <span className="value">Not Paid</span>
            </div>

            <div className="details">
            <h4 style={{marginLeft:"140px",fontWeight:"600"}}> Assign Mechanic: </h4> 
             <select style={{width:"200px",height:"40px",marginLeft:"100px",border:"2px solid black",borderRadius:"12px"}}
              value={selectedMechanic} 
             onChange={(e) => setSelectedMechanic(e.target.value)}
             required 
             >
                <option >select</option>

                  {mechanic.length ?(
              mechanic.map((a)=>{    
             return( 
                    <option key={a._id} value={a._id}>{a.firstname} {a.lastname}</option>
                    )
                })
             ) : (
               <div>No Mechanic available</div>
             )}   
    
         

                </select>
            </div>


           <div className='row'>
            <div className='col-12'>
                <button type='submit' className='btn btn-info' 
                  onClick={(e) => {
                    approvebyshopid(e);
                                         assignmech(e);
                                       }}
                                      >Approve Request</button>
            </div>

        </div>
        </div> 

    </div>
  )
}

export default Assignmechforemergency