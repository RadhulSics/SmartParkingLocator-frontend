import React, { useEffect, useState } from "react";
import axiosInstance from "../../Baseurl";
import { Link, useNavigate } from "react-router-dom";

function UserViewParkingAreas() {
  const [data, setdata] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [selectedParking, setSelectedParking] = useState({}); // To store selected parking area details
  const [error, setError] = useState("");
  const id = localStorage.getItem("userid");

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .post(`viewParkingAreas`)
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openModal = (parkingAreaId, agentId) => {
    // Open the modal and set selected parking details
    setSelectedParking({ parkingAreaId, agentId });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVehicleNumber("");
    setError("");
  };

  const handleVehicleNumberChange = (e) => {
    setVehicleNumber(e.target.value);
    setError(""); // Reset error on input change
  };

  const handleSubmit = () => {
    const vehicleNumberRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{1,4}$/;
    if (!vehicleNumberRegex.test(vehicleNumber)) {
      setError("Invalid vehicle number format. Eg : KL01AB1234");
      return;
    }

    const { parkingAreaId, agentId } = selectedParking;

    axiosInstance
      .post(`createSlotBooking`, {
        paId: parkingAreaId,
        custId: id,
        agentId: agentId,
        vehicleNumber: vehicleNumber, // Include vehicle number in the request
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Request Sent");
          handleCloseModal();
          navigate("/user_view_parking_area_bookings");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row" style={{ minHeight: "80vh" }}>
          {data.length ? (
            data.map((a) => {
              return (
                <div
                  key={a._id}
                  style={{ textDecoration: "none" }}
                  className="col-lg-4 col-md-4 col-sm-6 mb-4"
                >
                  <div className="cards" style={{ height: "auto" }}>
                    <div className="card-content ">
                      <div className="service-name "> {a.location}</div>
                      <div className="price">Total Slots : {a.slots}</div>
                      <div className="description">Price : ₹ {a.price}</div>
                      <Link to={`/user_view_parking_area_map/${a.lat}/${a.lon}`}>
                        <div className="shop-name" style={{ color: "black" }}>
                          View Location
                        </div>
                      </Link>
                      <div className="mt-3">
                        <button
                          onClick={() => openModal(a._id, a.agentId._id)}
                          className="btn btn-success"
                        >
                          Request
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Vehicle Number</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={vehicleNumber}
                  onChange={handleVehicleNumberChange}
                  placeholder="Enter Vehicle Number"
                />
                {error && <div className="text-danger mt-2">{error}</div>}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserViewParkingAreas;
