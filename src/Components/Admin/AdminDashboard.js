import React, { useEffect, useState, useRef } from 'react';
import axiosInstance from '../../Baseurl';
import Chart from 'chart.js/auto';
import './AdminDashboard.css';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [mechanics, setMechanics] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    axiosInstance.post('/viewCustomers')
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance.post('/viewMechanics')
      .then((res) => {
        setMechanics(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance.post('/viewApprovedWorkshops')
      .then((res) => {
        console.log(res);
        setWorkshops(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('entityChart');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Users', 'Mechanics', 'Workshops'],
        datasets: [{
          label: 'Count',
          data: [users ? users.length : 0, mechanics ? mechanics.length : 0, workshops ? workshops.length : 0],          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [users, mechanics, workshops]);

  return (
    <div>
      <div className='AdminDash-details'>
        <div className='row'>
          <div className='col-3 dashboard-box'>
            <p>Users</p>
            <hr/>
            <h5>{users? users.length:0}</h5>
          </div>
          <div className='col-3 dashboard-box'>
            <p>Mechanics</p>
            <hr/>
            <h5>{mechanics?mechanics.length:0}</h5>
          </div>
          <div className='col-3 dashboard-box'>
            <p>Workshops</p>
            <hr/>
            <h5>{workshops?workshops.length:0}</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <canvas id="entityChart"></canvas> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
