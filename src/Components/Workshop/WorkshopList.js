import React, { useEffect, useState } from 'react'
import './WorkshopList.css';
import axiosInstance from '../../Baseurl'

function WorkshopList() {
  const [users,SetUsers]=useState([]);

 useEffect(()=>{
  axiosInstance.post('/viewApprovedWorkshops',users)
  .then((res)=>{
    SetUsers(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
 console.log(users)
  return (
    <div>
      <div className='workshopList-main-box'>
        <h3 className=' WorkshopList-heading'>WORKSHOP LIST :</h3>
        {users && users.length ? (
          users.map((user) => ( // Changed the map function
            <div className='WorkshopList-flex' key={user.id}>
              <div className='workshoplist-box'>
                {'Name : ' + user.name}
              </div>
              {/* <div>
              {'Contact : ' + user.contact}
              </div> */}
              <div>
              {'Email : ' + user.email}
              </div>
              <div>
              {'District : ' + user.district}
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
  )
}

export default WorkshopList