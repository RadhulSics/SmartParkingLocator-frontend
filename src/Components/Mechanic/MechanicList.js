import React, { useEffect, useState } from 'react'
import './MechanicList.css';
import axiosInstance from '../../Baseurl'

function MechanicList() {
  const [users,SetUsers]=useState([]);

 useEffect(()=>{
  axiosInstance.post('/viewMechanics',users)
  .then((res)=>{
    SetUsers(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])

 const deletefn=((workshop)=>{
  axiosInstance.post(`deleteMechanicById/${workshop}`)
  .then((res)=>{
    console.log(res);
    if(res.data.status==200){
      alert("deleted succesfully")
      SetUsers(prevArray => prevArray.filter(item => item._id !== workshop));
    }
  })
  .catch((err)=>{
    console.log(err)
  })

 })
 console.log(users)
  return (
    <div>
      <div  className='mechanicList-main-box'>
        <h3 className='MechanicList-heading'>MECHANIC LIST :</h3>
        {users && users.length ? (
          users.map((user) => ( // Changed the map function
            <div className='WorkshopList-flex' key={user.id}>
              <div className='mechlist-box'>
                {'Name : ' + user.firstname+' '+user.lastname}
              </div>
              <div>
                {'Email : ' + user.email}
              </div>
              
              <div>
              {'Contact : ' + user.contact}
              </div>

              <div>
              <button className='mechanic-delete-btn' type='submit'  onClick={() => deletefn(user._id)}>Delete</button>
              </div>
              </div>
           
          ))
        ) : (
          <div>No data available</div>
        )}      </div>
    </div>
  )
}

export default MechanicList