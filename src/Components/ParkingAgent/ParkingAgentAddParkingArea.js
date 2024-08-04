import React, { useState } from 'react';
import axiosInstance from '../../Baseurl';

function ParkingAgentAddParkingArea() {
  const initialFormData = {
    location: "",
    lat: "",
    lon: "",
    slots: "",
    price: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const id = localStorage.getItem('parkingId');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axiosInstance
      .post(`/createParkingArea/${id}`, formData)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Parking area created successfully");
          setFormData(initialFormData); // Reset form fields
          // navigate("/parking_agent_login");
        } else if (res.data.status === 409) {
          alert(res.data.msg);
        } else {
          alert("Failed to register");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="col-12" style={{ margin: "auto" }}>
        <div className="reader_profile_account_info">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Latitude</label>
                <input
                  type="number"
                  step="0.000001"
                  className="form-control"
                  name="lat"
                  value={formData.lat}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Longitude</label>
                <input
                  type="number"
                  step="0.000001"
                  className="form-control"
                  name="lon"
                  value={formData.lon}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Number of Slots</label>
                <input
                  type="number"
                  className="form-control"
                  name="slots"
                  value={formData.slots}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Add Parking Area</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ParkingAgentAddParkingArea;
