import logo from './logo.svg';
import './App.css';
import 'remixicon/fonts/remixicon.css'
import Footer from './Components/Common/Footer';
import Navbar from './Components/Common/Navbar';
import MainAdmin from './Components/Admin/MainAdmin';
import LoginMechanic from './Components/Mechanic/LoginMechanic';
import SignupMechanic from './Components/Mechanic/SignupMech';
import Pageheading from './Components/Admin/Pageheading';
import LoginUser from './Components/User/LoginUser';
import LoginWorkshop from './Components/Workshop/LoginWorkshop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminTable from './Components/Admin/AdminTable';
import SignupUser from './Components/User/SignupUser';
import SignupWorkshop from './Components/Workshop/signupWorkshop'
import ForgotpassUser from './Components/User/ForgotpassUser';
import AdminDashboard from './Components/Admin/AdminDashboard';
import Workshopsidebar from './Components/Workshop/Adminsidebar';
import Workshopmain from './Components/Workshop/Workshopmain';
import ForgotpassWorkshop from './Components/Workshop/ForgotpassWorkshop';
import ForgotpassMechanic from './Components/Mechanic/ForgotpassMechanic';
import Adminnav from './Components/Admin/Adminnav';
import AboutUs from './Components/Common/AboutUs';
import Workshopreuest from './Components/Admin/Workshoprequest';
import WorkshopRequestApproval from './Components/Admin/WorkshopRequestApproval';
import Loginnav from './Components/Common/Loginnav'
import Userhomenav from './Components/Common/Userhomenav';
import Viewservices from './Components/User/Viewservices';
import Adminlogin from './Components/Admin/Adminlogin';
import SparepartsList from './Components/User/SparepartsList';
import SpareIndividualpage from './Components/User/SpareIndividualpage';
import Bookservice from './Components/User/Bookservice';
import SparepartsWorkshop from './Components/Workshop/SparepartsWorkshop';
import UserProfileMain from './Components/User/UserProfileMain';
import Paymentservice from './Components/User/Paymentservice';
import Wnav from './Components/Common/Wnav';
import Viewmyservices from './Components/Workshop/Viewmyservices';
import Editservice from './Components/Workshop/Editservice';
import EditProfile from './Components/Workshop/EditWorkshopProfile';
import MechanicMain from './Components/Mechanic/MechanicMain';
import Viewmyspareparts from './Components/Workshop/Viewmyspareparts';
import Editspareparts from './Components/Workshop/Editspareparts';
import Emergencyreq from './Components/Admin/Emergencyreq';
import AdminEmergencyRequest from './Components/Admin/AdminEmergencyRequest';
import AdminEmergencyView from './Components/Admin/AdminEmergencyView';
import ViewServicesMechanic from './Components/Mechanic/ViewServicesMechanic';
import IndividualServicesMechanic from './Components/Mechanic/IndividualServicesMechanic';
import Viewsparepartbooking from './Components/Workshop/Viewsparepartbooking';
import Emergency from './Components/User/Emergency';
import AdminDashboardMain from './Components/Admin/AdminDashboardMain';
import WorkshopEmergencyrequest from './Components/Workshop/WorkshopEmergencyrequest';
import Assignmechforemergency from './Components/Workshop/Assignmechforemergency';
import Mechnav from './Components/Common/Mechnav';
import Mechemergencyreq from './Components/Mechanic/Mechemergencyreq';
import ViewUpdatedservice from './Components/User/ViewUpdatedservice';
import ViewIndividualServicesMechanic from './Components/Mechanic/ViewIndividualServicesMechanic';
import Emergencyfinal from './Components/Mechanic/Emergencyfinal';
import Emergencystatus from './Components/User/Emergencystatus';
import Viewupdations from './Components/Mechanic/Viewupdations';
import ParkingAgentReg from './Components/ParkingAgent/ParkingAgentReg';
import ParkingAgentLogin from './Components/ParkingAgent/ParkingAgentLogin';

const url = "http://localhost:4006";
// const url= "http://hybrid.srishticampus.in:4006/"

function App() {
  return (
    <BrowserRouter
       basename='/automodo'
     >
    <Routes>

      <Route path='/' element={[<Navbar/>,<MainAdmin/>,<Footer/>]}/>
      <Route path='/table-format' element={[<Navbar/>,<AdminTable/>,<Footer/>]}/>
      <Route path='/page-heading' element={[<Navbar/>,<Pageheading/>,<Footer/>]}/>
      <Route path='/Aboutus' element={[<Navbar/>,<AboutUs/>,<Footer/>]}/>
      <Route path='/Aboutusaft' element={[<Userhomenav/>,<AboutUs/>,<Footer/>]}/>

      {/* user */}
      <Route path='/user-login' element={[<Loginnav/>,<LoginUser/>,<Footer/>]}/>
      <Route path='/user-signup' element={[<Navbar/>,<SignupUser/>,<Footer/>]}/>
      <Route path='/userhome' element={[<Userhomenav/>,<MainAdmin/>,<Footer/>]}/>
      <Route path='/forgotpass-user' element={[<Adminnav/>,<ForgotpassUser/>,<Footer/>]}/>
      <Route path='/viewservices' element={[<Userhomenav/>,<Viewservices/>,<Footer/>]}/>
      <Route path='/viewserviceupdations/:id' element={[<Userhomenav/>,<ViewUpdatedservice url={url}/>,<Footer/>]}/>
      <Route path='/Sparepartslist' element={[<Userhomenav/>,<SparepartsList url={url}/>,<Footer/>]}/>
      <Route path='/SparepartsInd/:id' element={[<Userhomenav/>,<SpareIndividualpage url={url}/>,<Footer/>]}/>
      <Route path='/bookservices/:id' element={[<Userhomenav/>,<Bookservice url={url}/>,<Footer/>]}/>
      <Route path='/user-profile' element={[<Userhomenav/>,<UserProfileMain  data="viewprof"/>,<Footer/>]}/>
      <Route path='/user-viewbookedservices' element={[<Userhomenav/>,<UserProfileMain  data="bookedservices" url={url}/>,<Footer/>]}/>
      <Route path='/user-viewbookedspareparts' element={[<Userhomenav/>,<UserProfileMain  data="viewbookedsparepart"/>,<Footer/>]}/>
      <Route path='/user-profile-edit/:id' element={[<Userhomenav/>,<UserProfileMain  data="editprof"/>,<Footer/>]}/>
      <Route path='/paymentservice/:id' element={[<Userhomenav/>,<Paymentservice url={url}/>,<Footer/>]}/>
      <Route path='/emergency' element={[<Userhomenav/>,<Emergency />,<Footer/>]}/>
      <Route path='/emergency-status' element={[<Userhomenav/>,<Emergencystatus />,<Footer/>]}/>


      {/* Mechanic */}
      <Route path='/mechanic-login' element={[<Loginnav/>,<LoginMechanic/>,<Footer/>]}/>
      <Route path='/mechnav' element={[<Mechnav/>]}/>
      <Route path='/mechanic-dashboard-viewrequest' element={[<Mechnav/>,<MechanicMain data="mechanicdashboard"/>,<Footer/>]}/>
      <Route path='/mechanic-editprofile/:id' element={[<Mechnav/>,<MechanicMain data="profileedit"/>,<Footer/>]}/>
      <Route path='/forgotpass-mechanic' element={[<Adminnav/>,<ForgotpassMechanic/>,<Footer/>]}/>
      <Route path='/view-services-mechanic' element={[<Mechnav/>,<ViewServicesMechanic/>,<Footer/>]}/>
      <Route path='/view-individual-services-mechanic/:id' element={[<Mechnav/>,<ViewIndividualServicesMechanic/>,<Footer/>]}/>
      <Route path='/individual-services-mechanic' element={[<Mechnav/>,<IndividualServicesMechanic/>,<Footer/>]}/>
      <Route path='/view-mechemergency' element={[<Mechnav/>,<Mechemergencyreq/>,<Footer/>]}/>
      <Route path='/emergencyfinal/:id' element={[<Mechnav/>,<Emergencyfinal/>,<Footer/>]}/>
      <Route path='/viewupdations' element={[<Mechnav/>,<Viewupdations url={url}/>,<Footer/>]}/>




      {/* Workshop */}
      <Route path='/workshop-login' element={[<Loginnav/>,<LoginWorkshop/>,<Footer/>]}/> 
      <Route path='/workshop-signup' element={[<Adminnav/>,<SignupWorkshop/>,<Footer/>]}/>
      <Route path='/forgotpass-workshop' element={[<Adminnav/>,<ForgotpassWorkshop/>,<Footer/>]}/>
      <Route path='/workshop-sidebar' element={[<Wnav/>,<Workshopsidebar/>,<Footer/>]}/>
      <Route path='/workshop-dashboard' element={[<Wnav/>,<Workshopmain data="workshopdashboard"/>,<Footer/>]}/>
      <Route path='/workshop-dashboard-addMechanic' element={[<Wnav/>,<Workshopmain data="addmechanic"/>,<Footer/>]}/>
      <Route path='/workshop-dashboard-addservice' element={[<Wnav/>,<Workshopmain data="addservice"/>,<Footer/>]}/>
      <Route path='/workshop-dashboard-myservices' element={[<Wnav/>,<Viewmyservices/>,<Footer/>]}/>
      <Route path='/workshop-dashboard-viewrequest' element={[<Wnav/>,<Workshopmain data="viewrequest"/>,<Footer/>]}/>
      <Route path='/workshop-emergencyrequest' element={[<Wnav/>,<WorkshopEmergencyrequest url={url}/>,<Footer/>]}/>
      <Route path='/workshop-editprofile/:id' element={[<Wnav/>,<Workshopmain data="profileedit"/>,<Footer/>]}/>
      <Route path='/workshop-spareparts' element={[<Wnav/>,<Workshopmain data="addspareparts"/>,<Footer/>]}/>
      <Route path='/workshop-singlereq/:id' element={[<Wnav/>,<Workshopmain data="singlerequest"/>,<Footer/>]}/>
      <Route path='/workshop-editservice/:id' element={[<Wnav/>,<Editservice/>,<Footer/>]}/>
      <Route path='/workshop-viewspareparts' element={[<Wnav/>,<Viewmyspareparts url={url}/>,<Footer/>]}/>
      <Route path='/workshop-editspareparts/:id' element={[<Wnav/>,<Editspareparts url={url}/>,<Footer/>]}/>
      <Route path='/workshop-viewbookings' element={[<Wnav/>,<Viewsparepartbooking url={url}/>,<Footer/>]}/>
      <Route path='/workshop-assignmechemergencyreq/:id' element={[<Wnav/>,<Assignmechforemergency url={url}/>,<Footer/>]}/>
      <Route path='/view-mechaniclist' element={[<Wnav/>,<Workshopmain data="viewmechlist"/>,<Footer/>]}/>


      {/* Admin */}
      <Route path='/admin-login' element={[<Loginnav/>,<Adminlogin/>,<Footer/>]}/>
      {/* <Route path='/admin-dashboard' element={[<Adminnav/>,<AdminDashboard/>,<Footer/>]}/> */}
      <Route path='/req' element={<Workshopreuest/>}/>
      <Route path='/nav' element={<Loginnav/>}/>
      <Route path='/admin-emg' element={[<Adminnav/>,<Emergencyreq/>,<Footer/>]}/>
      <Route path='/dashboard-emergency-request/:id' element={[<Adminnav/>,<AdminEmergencyView url={url}/>,<Footer/>]}/>
      <Route path='/admin-dashboard' element={[<Adminnav/>,<AdminDashboardMain  data="Admindashboard"/>,<Footer/>]}/>
      <Route path='/admin-dashboard-userlist' element={[<Adminnav/>,<AdminDashboardMain  data="UserList"/>,<Footer/>]}/>
      <Route path='/admin-dashboard-mechaniclist' element={[<Adminnav/>,<AdminDashboardMain  data="mechanic"/>,<Footer/>]}/>
      <Route path='/admin-dashboard-workshoplist' element={[<Adminnav/>,<AdminDashboardMain  data="workshop"/>,<Footer/>]}/>
      <Route path='/admin-dashboard-request' element={[<Adminnav/>,<AdminDashboardMain  data="request"/>,<Footer/>]}/>
      <Route path='/admin-dashboard-emergency-request' element={[<Adminnav/>,<AdminDashboardMain  data="emergency"/>,<Footer/>]}/>
      <Route path='/dashboard-workshop-approval/:id' element={[<Adminnav/>,<AdminDashboardMain data="requestApproval" url={url}/>,<Footer/>]}/>
      <Route path='/dashboard-workshop-emergency-approval/:id' element={[<Adminnav/>,<AdminDashboardMain data="emergencyRequestApproval" url={url}/>,<Footer/>]}/>
     
     
     

      {/* Parking Agent */}

      <Route path='/parking_agent_reg' element={[<Loginnav/>,<ParkingAgentReg/>,<Footer/>]}/>
      <Route path='/parking_agent_login' element={[<Loginnav/>,<ParkingAgentLogin/>,<Footer/>]}/>

     
     
     </Routes>
     </BrowserRouter>
   

  );
}

export default App;
