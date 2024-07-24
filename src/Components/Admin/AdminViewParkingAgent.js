import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Baseurl'


function AdminViewParkingAgent() {

    const [users,SetUsers]=useState([]);

    useEffect(()=>{
     axiosInstance.post('/viewParkingAgents')
     .then((res)=>{
       SetUsers(res.data.data)
     })
     .catch((err)=>{
       console.log(err)
     })
    },[])

    console.log(users);
    
  return (
    <div>
      <div>
      <div className='workshopList-main-box'>
        <h3 className=' WorkshopList-heading'>PARKING AGENT LIST :</h3>
        {users && users.length ? (
          users.map((user) => ( // Changed the map function
            <div className='WorkshopList-flex' key={user.id}>
              <div className='workshoplist-box'>
                {'Name : ' + user.firstname } {user.lastname}
              </div>
              {/* <div>
              {'Contact : ' + user.contact}
              </div> */}
              <div>
              {'Email : ' + user.email}
              </div>
              <div>
              {'Contact : ' + user.contact}
              </div>
              <div>
              {/* <button className='workshop-delete-btn'>Delete</button> */}
              </div>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}      </div>
    </div>
    </div>
  )
}

export default AdminViewParkingAgent
