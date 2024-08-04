import React, { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import axiosInstance from "../../Baseurl";
import { useNavigate, useParams } from "react-router-dom";

function ParkingAgentCheckSlots() {
  const { id,sid } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [carCount, setCarCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);
  const [available, setAvailable] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setCarCount(null); // Reset car count
    }
  };

  const detectCars = async () => {
    setLoading(true);
    const model = await cocoSsd.load();
    const predictions = await model.detect(imageRef.current);
    const carPredictions = predictions.filter(
      (prediction) => prediction.class === "car"
    );
    console.log(carPredictions);
    setCarCount(carPredictions.length);
    setLoading(false);
  };

  useEffect(() => {
    if (carCount !== null && carCount !== 0) {
      console.log(carCount);
      axiosInstance
        .post(`checkSlotAvailability/${id}`, { carCount: carCount })
        .then((res) => {
          console.log(res);
            setAvailable(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [carCount, id]);

  const approveFn = () => {
    axiosInstance
      .post(`approveSlotBookingById/${sid}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Approved");
          navigate('/parking_agent_view_parking_area_bookings')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectFn = () => {
    axiosInstance
      .post(`rejectSlotBookingById/${sid}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Rejected");
          navigate(-1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(available);
  

  return (
    <div className="p-5" style={{ minHeight: "80vh" }}>
      <h1>Upload Parking Area Image</h1>
      <form>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </form>
      {selectedImage && (
        <div>
          <img
            ref={imageRef}
            src={selectedImage}
            alt="Selected"
            onLoad={detectCars}
            style={{ width: "100%", maxWidth: "600px", margin: "20px 0" }}
          />
        </div>
      )}
      <h2>
        {loading
          ? "Loading..."
          : available == true
          ? <div>
            <p className="text-success">Slots are available</p> 
            <button className="btn btn-success" onClick={approveFn} >Approve</button>
          </div>
          : available == false
          ? <div>
          <p className="text-danger">No slots available</p> 
          <button className="btn btn-danger" onClick={rejectFn} >Reject</button>
        </div>
          : ""}
      </h2>
    </div>
  );
}

export default ParkingAgentCheckSlots;
