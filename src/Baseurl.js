import axios from 'axios';

const axiosInstance = axios.create({

  //server api

  //  baseURL: 'http://hybrid.srishticampus.in:4031/vehicle_parking_locator_api/', 

//local api

  baseURL: 'http://localhost:4031/vehicle_parking_locator_api', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance