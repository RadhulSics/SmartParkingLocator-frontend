import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import axiosInstance from '../../Baseurl';
import './MechanicSidebar.css'


function MechanicSidebar() {
  const wid=localStorage.getItem("mechid")
  console.log(wid);

  const[data,setdata]=useState({})

  useEffect(()=>{
    axiosInstance.post(`viewMechById/${wid}`)
    .then((res)=>{
      console.log(res);
      setdata(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  const[readerid,setReaderid]=useState(null);
  const handleLogout = () => {
    localStorage.removeItem("mechid");
    setReaderid(null);
  };
  
  return (
    <div className='col-3' style={{marginLeft:"20px"}}>
    <div className="mechanic_profile_sidebar">
{/* <div className="reader_profile_sidebar_img mt-5">
<Link to=''><img src={""} alt="profile_picture" /></Link>
<div className="reader_profile_sidebar_camerabg">
<Link to=''><i class="ri-camera-line"></i></Link>
</div>
</div> */}
<div className="mechanic_profile_sidebar_title">
<p>{data?.firstname} {data?.lastname}</p>
</div>
{/* <div className="admin_profile_sidebar_settings admin_profile_sidebar_padding ">
<i class="ri-settings-3-fill reader_profile_sidebar_icons"></i>
<p>Settings</p>
</div> */}
<hr />
<div className="mechanic_profile_sidebar_padding ">
<Link to='/mechanic-dashboard-viewrequest' >
  <div className="mechanic_profile_sidebar_account_info">
    <div className="d-flex mt-2">
      <i class="ri-dashboard-line mechanic_profile_sidebar_icons"></i>
      <p> Profile</p>
    </div>

    <div className="mt-2">
      <i class="ri-arrow-right-s-line mechanic_profile_sidebar_icons"></i>
    </div>
  </div>
</Link>
</div>
{/* <div className="mechanic_profile_sidebar_padding ">
<Link to='/' >
<div className="mechanic_profile_sidebar_account_info">
  <div className="d-flex mt-2 ">
    <i class="ri-user-fill mechanic_profile_sidebar_icons"></i>{" "}
    <p> Null</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line mechanic_profile_sidebar_icons"></i>
  </div>
</div>
</Link>

</div> */}

{/* <div className="mechanic_profile_sidebar_padding ">
<Link to='/' >
<div className="mechanic_profile_sidebar_account_info">
  <div className="d-flex mt-2 ">
    <i class="ri-advertisement-fill mechanic_profile_sidebar_icons"></i>{" "}
    <p>Null</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line mechanic_profile_sidebar_icons"></i>
  </div>
</div>
</Link>

</div> */}
{/* <div className="mechanic_profile_sidebar_padding ">
<Link to='/' >
<div className="mechanic_profile_sidebar_account_info">
  <div className="d-flex mt-2 ">
    <i class="ri-sticky-note-line mechanic_profile_sidebar_icons"></i>{" "}
    <p>Null</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line mechanic_profile_sidebar_icons"></i>
  </div>
</div>
</Link>

</div> */}
<div className="mechanic_profile_sidebar_padding ">
{/* <Link to='' >
<div className="admin_profile_sidebar_account_info">
  <div className="d-flex mt-2">
    <i class="ri-file-user-fill admin_profile_sidebar_icons"></i>
    <p> Contributor</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
  </div>
</div>
</Link> */}

</div>
<div className="mechanic_profile_sidebar_padding ">
{/* <Link to= '' >
<div className="admin_profile_sidebar_account_info">
  <div className="d-flex mt-2">
    <i class="ri-vip-crown-fill admin_profile_sidebar_icons"></i>
    <p>Moderator</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
  </div>
</div>
</Link> */}

</div>
<div className="mechanic_profile_sidebar_padding ">
{/* <Link to='' >
<div className="mechanic_profile_sidebar_account_info">
  <div className="d-flex mt-2">
    <i class="ri-error-warning-fill mechanic_profile_sidebar_icons"></i>
    <p> Privacy & Security</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line mechanic_profile_sidebar_icons"></i>
  </div>
</div>
</Link> */}

</div>
<Link to='/' ><div className="mechanic_profile_sidebar_logoybtn mt-4 mb-4">
<button className="btn btn-secondary" onClick={handleLogout}>
  <i class="ri-logout-box-r-line"></i> logout
</button>
</div></Link>
</div>

</div>

  )
}

export default MechanicSidebar