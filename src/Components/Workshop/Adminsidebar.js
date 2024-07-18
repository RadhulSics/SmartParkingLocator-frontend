import React, { useEffect, useState } from 'react'
import "./Adminsidebar.css"
import {Link} from "react-router-dom"
import axiosInstance from '../../Baseurl';


function Adminsidebar() {
  const wid=localStorage.getItem("workshopid")
  console.log(wid);

  const[data,setdata]=useState({})

  useEffect(()=>{
    axiosInstance.post(`viewWorkshopById/${wid}`)
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
    localStorage.removeItem("workshopid");
    setReaderid(null);
  };
  
  return (
    <div className='col-3' style={{marginLeft:"20px"}}>
    <div className="admin_profile_sidebar">
{/* <div className="reader_profile_sidebar_img mt-5">
<Link to=''><img src={""} alt="profile_picture" /></Link>
<div className="reader_profile_sidebar_camerabg">
<Link to=''><i class="ri-camera-line"></i></Link>
</div>
</div> */}
<div className="admin_profile_sidebar_title">
<p>{data?.name}</p>
</div>
{/* <div className="admin_profile_sidebar_settings admin_profile_sidebar_padding ">
<i class="ri-settings-3-fill reader_profile_sidebar_icons"></i>
<p>Settings</p>
</div> */}
<hr />
<div className="admin_profile_sidebar_padding ">
<Link to='/workshop-dashboard' >
  <div className="admin_profile_sidebar_account_info">
    <div className="d-flex mt-2">
      <i class="ri-dashboard-line admin_profile_sidebar_icons"></i>
      <p> Dashboard</p>
    </div>

    <div className="mt-2">
      <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
    </div>
  </div>
</Link>
</div>
<div className="admin_profile_sidebar_padding ">
<Link to='/workshop-dashboard-addMechanic' >
<div className="admin_profile_sidebar_account_info">
  <div className="d-flex mt-2 ">
    <i class="ri-user-fill admin_profile_sidebar_icons"></i>{" "}
    <p> Add Mechanic</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
  </div>
</div>
</Link>

</div>

<div className="admin_profile_sidebar_padding ">
<Link to='/workshop-dashboard-addservice' >
<div className="admin_profile_sidebar_account_info">
  <div className="d-flex mt-2 ">
    <i class="ri-advertisement-fill admin_profile_sidebar_icons"></i>{" "}
    <p> Add services</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
  </div>
</div>
</Link>

</div>
<div className="admin_profile_sidebar_padding ">
<Link to='/workshop-spareparts' >
<div className="admin_profile_sidebar_account_info">
  <div className="d-flex mt-2 ">
    <i class="ri-sticky-note-line admin_profile_sidebar_icons"></i>{" "}
    <p> Add Spareparts</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
  </div>
</div>
</Link>

</div>
<div className="admin_profile_sidebar_padding ">
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
<div className="admin_profile_sidebar_padding ">
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
<div className="admin_profile_sidebar_padding ">
<Link to='/workshop-dashboard-viewrequest' >
<div className="admin_profile_sidebar_account_info">
  <div className="d-flex mt-2">
    <i class="ri-mail-volume-line admin_profile_sidebar_icons"></i>
    <p> View service requests</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
    <p></p>
  </div>
</div>
</Link>
{/* <Link to='' >
<div className="admin_profile_sidebar_account_info">
  <div className="d-flex mt-2">
    <i class="ri-question-fill admin_profile_sidebar_icons"></i>
    <p> About</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
    <p></p>
  </div>
</div>
</Link> */}

</div>
<div className="admin_profile_sidebar_padding ">
{/* <Link to='' >
<div className="admin_profile_sidebar_account_info">
  <div className="d-flex mt-2">
    <i class="ri-error-warning-fill admin_profile_sidebar_icons"></i>
    <p> Privacy & Security</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
  </div>
</div>
</Link> */}

</div>
<div className="admin_profile_sidebar_padding ">
<Link to='/view-mechaniclist' >
<div className="admin_profile_sidebar_account_info">
  <div className="d-flex mt-2 ">
    <i class="ri-sticky-note-line admin_profile_sidebar_icons"></i>{" "}
    <p> Mechanic List</p>
  </div>

  <div className="mt-2">
    <i class="ri-arrow-right-s-line admin_profile_sidebar_icons"></i>
  </div>
</div>
</Link>

</div>
<Link to='/' ><div className="admin_profile_sidebar_logoybtn mt-4 mb-4">
<button className="btn btn-secondary" onClick={handleLogout}>
  <i class="ri-logout-box-r-line"></i> logout
</button>
</div></Link>
</div>

</div>

  )
}

export default Adminsidebar