import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axiosInstance from '../../Baseurl';
import { useNavigate } from 'react-router-dom';

function ParkingAgentEditProfile() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    dob: "",
    address: "",
    contact: "",
    image: null, // Will be managed separately
  });

  const [originalImage, setOriginalImage] = useState(null); // Track original image
  const [errors, setErrors] = useState({
    contact: "",
    dob: "",
  });

  const id = localStorage.getItem('parkingId');
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.post(`/viewParkingAgentById/${id}`)
      .then(response => {
        const data = response.data.data;
        if (data.dob) {
          data.dob = new Date(data.dob).toISOString().split('T')[0];
        }
        setFormData({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          gender: data.gender,
          dob: data.dob,
          address: data.address,
          contact: data.contact,
          image: data.image, // Track original image
        });
        setOriginalImage(data.image); // Save the original image URL
      })
      .catch(error => {
        console.error('There was an error fetching the parking agent data!', error);
      });
  }, [id]);

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    // Contact validation
    if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact must be a 10-digit number";
      isValid = false;
    }

    // Date of Birth validation
    const today = new Date().toISOString().split('T')[0];
    if (formData.dob > today) {
      newErrors.dob = "Date of Birth cannot be a future date";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'image' && formData[key] === null) {
          // Do not append the image if it's null
          return;
        }
        data.append(key, formData[key]);
      });

      axiosInstance.post(`/editParkingAgentById/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(response => {
          if (response.data.status === 200) {
            alert('Profile updated successfully!');
            navigate(-1);
          }
        })
        .catch(error => {
          console.error('There was an error updating the profile!', error);
        });
    }
  };

  return (
    <div className="container">
      <div className="col-12" style={{ margin: "auto" }}>
        <div className="reader_profile_account_info">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" name="firstname" value={formData.firstname} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lastname" value={formData.lastname} onChange={handleChange} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <select className="form-select" name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} />
                {errors.dob && <div className="text-danger">{errors.dob}</div>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Contact</label>
                <input type="text" className="form-control" name="contact" value={formData.contact} onChange={handleChange} />
                {errors.contact && <div className="text-danger">{errors.contact}</div>}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea className="form-control" name="address" value={formData.address} onChange={handleChange}></textarea>
            </div>
            {/* <div className="mb-3">
              <label className="form-label">Image</label>
              <input type="file" className="form-control" name="image" onChange={handleChange} />
              {formData.image === null && originalImage && <img src={originalImage} alt="Original" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
            </div> */}
            <button type="submit" className="btn btn-primary">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ParkingAgentEditProfile;
