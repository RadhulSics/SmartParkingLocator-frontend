import React, { useEffect, useState } from 'react'
import './UserList.css';
import axiosInstance from '../../Baseurl'

function UserList() {
  const [users,SetUsers]=useState([]);

 useEffect(()=>{
  axiosInstance.post('/viewCustomers',users)
  .then((res)=>{
    SetUsers(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])

 const deletefn=((userid)=>{
  axiosInstance.post(`deleteCustomerById/${userid}`)
  .then((res)=>{
    console.log(res);
    if(res.data.status==200){
      alert("deleted succesfully")
      SetUsers(prevArray => prevArray.filter(item => item._id !== userid));
    }
  })
  .catch((err)=>{
    console.log(err)
  })

 })
 console.log(users)
  return (
    <div>
      <div className='usersList-main-box'>
        <h3 className='usersList-heading'>USERS LIST :</h3>
        {users && users.length ? (
          users.map((user) => ( // Changed the map function
            <div className='WorkshopList-flex' key={user.id}>
              <div className='userlist-box'>
                {'Name : ' + user.firstname +' '+ user.lastname}
              </div>
              <div>
              {'Number : ' + user.contact}
              </div>
              <div>
              {'Email : ' + user.email}
              </div>
              <div>
              <button className='user-delete-btn' type='submit' onClick={() => deletefn(user._id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}      </div>
    </div>
  )
}

export default UserList