import axios from 'axios';

const axiosInstance = axios.create({

  //server api

  //  baseURL: 'http://hybrid.srishticampus.in:4006/automodo_api/', 

//local api

  baseURL: 'http://localhost:4006/automodo_api', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance