import React from "react";
import AdminDashboardSidebar from "./AdminDashboardSidebar";
import AdminDashboard from "./AdminDashboard";
import UserList from "../User/UserList";
import MechanicList from "../Mechanic/MechanicList";
import WorkshopList from "../Workshop/WorkshopList";
import Workshoprequest from "./Workshoprequest";
import AdminEmergencyRequest from "./AdminEmergencyRequest";
import WorkshopRequestApproval from "./WorkshopRequestApproval";
import AdminEmergencyView from "./AdminEmergencyView";
import AdminViewParkingReq from "./AdminViewParkingReq";
import AdminViewSingleReqParking from "./AdminViewSingleReqParking";

const url = "http://localhost:4031";
// const url= "http://hybrid.srishticampus.in:4031/"

function Workshopmain({ data }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <AdminDashboardSidebar />
        {data === "Admindashboard" ? (
          <AdminDashboard url={url} />
        ) : data == "UserList" ? (
          <UserList />
        ) : data == "mechanic" ? (
          <MechanicList />
        ) : data == "workshop" ? (
          <WorkshopList />
        ) : data == "request" ? (
          <Workshoprequest url={url} />
        ) : data == "emergency" ? (
          <AdminEmergencyRequest url={url} />
        ) : data == "requestApproval" ? (
          <WorkshopRequestApproval url={url} />
        ) : data == "emergencyRequestApproval" ? (
          <AdminEmergencyView url={url} />
        ) : data == "parking_req_list" ? (
          <AdminViewParkingReq url={url} />
        ) : data == "parking_single_req" ? (
          <AdminViewSingleReqParking url={url} />
        ) : (
          "No data"
        )}
      </div>
    </div>
  );
}

export default Workshopmain;
