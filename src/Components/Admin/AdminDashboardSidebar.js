import React from "react";
import "./AdminDashboardSidebar.css";
import { Link } from "react-router-dom";

function AdminDashboardSidebar() {
  return (
    <div>
      <div>
        <div>
          <div className="sidebar-admin row">
            <h3 className="sidebar-heading">Admin</h3>
            <hr />

            <div className="sidebar-dash-btnflex">
              <div className="admin_profile_sidebar_padding ">
                <Link to="/admin-dashboard">
                  <div className="admin-dashboard-profile-sidebar">
                    <div className="d-flex mt-2">
                      <i class="admin_profile_sidebar_icons"></i>
                      <p className="sidebar-dash-btn">dashboard</p>
                    </div>

                    <div className="mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="sidebar-dash-btnflex">
              <div className="admin_profile_sidebar_padding ">
                <Link to="/admin-dashboard-userlist">
                  <div className="admin-dashboard-profile-sidebar">
                    <div className="d-flex mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                      <p className="sidebar-dash-btn">Users</p>
                    </div>

                    <div className="mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="sidebar-dash-btnflex">
              <div className="admin_profile_sidebar_padding ">
                <Link to="/admin-dashboard-mechaniclist">
                  <div className="admin-dashboard-profile-sidebar">
                    <div className="d-flex mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                      <p className="sidebar-dash-btn">Mechanic</p>
                    </div>

                    <div className="mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="sidebar-dash-btnflex">
              <div className="admin_profile_sidebar_padding ">
                <Link to="/admin-dashboard-workshoplist">
                  <div className="admin-dashboard-profile-sidebar">
                    <div className="d-flex mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                      <p className="sidebar-dash-btn">Workshop</p>
                    </div>

                    <div className="mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="sidebar-dash-btnflex">
              <div className="admin_profile_sidebar_padding ">
                <Link to="/admin-dashboard-request">
                  <div className="admin-dashboard-profile-sidebar">
                    <div className="d-flex mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                      <p className="sidebar-dash-btn">Workshop Request</p>
                    </div>

                    <div className="mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>


            <div className="sidebar-dash-btnflex">
              <div className="admin_profile_sidebar_padding ">
                <Link to="/dashboard_parking_agent_list">
                  <div className="admin-dashboard-profile-sidebar">
                    <div className="d-flex mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                      <p className="sidebar-dash-btn">Parking Agent Req</p>
                    </div>

                    <div className="mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="sidebar-dash-btnflex">
              <div className="admin_profile_sidebar_padding ">
                <Link to="/admin-dashboard-emergency-request">
                  <div className="admin-dashboard-profile-sidebar">
                    <div className="d-flex mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                      <p className="sidebar-dash-btn">Emergency request</p>
                    </div>

                    <div className="mt-2">
                      <i class=" admin_profile_sidebar_icons"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <Link to="/">
              <div className="admin_profile_sidebar_logoybtn mt-4 mb-4">
                <button className="btn btn-secondary">
                  <i class="ri-logout-box-r-line"></i> logout
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardSidebar;
