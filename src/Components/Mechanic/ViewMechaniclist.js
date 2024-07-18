import React, { useEffect, useState } from "react";
import "./ViewMechaniclist.css";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

function ViewMechaniclist({ url }) {
  const id = localStorage.getItem("workshopid");
  console.log(id);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    axiosInstance
      .post(`/viewMechanicsByShopid/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deletefn = (mechanicid) => {
    axiosInstance.post(`deleteMechanicById/${mechanicid}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Removed Successfully")
          setData(prevArray => prevArray.filter(item => item._id !== mechanicid));
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCertificate(null);
  }

  return (
    <div className="container">
      <div className="col-8">
        <div className="viewmechanic-main-box" style={{ padding: "10px" }}>
          <h3 className=" viewmechanic-heading">Mechanic List</h3>
          <div></div>

          <div className="row viewmechanic-main">
            {data ? (
              data.length ? (
                data.map((a) => {
                  return (
                    <div className="card col-4 viewmechanic-card" key={a._id}>
                      <div>
                        <img
                          className="card-img-top viewmechanic-img object-fit-cover"
                          src={`${url}/${a.image?.filename}`}
                          alt="images"
                        />
                        <div className="card-body">
                          <hr />
                          <div className="viewmechanic-name">
                            Name :{a?.firstname} {a?.lastname}
                          </div>
                          Email :{a?.email}
                          <br />
                          Contact :{a?.contact}
                          <br />
                          Aadhar :{a?.aadhar}
                        </div>
                      </div>
                      <div className="mb-4">
                        <button className="btn btn-danger" onClick={() => deletefn(a._id)}>
                          Delete
                        </button>
                        <button className="btn btn-success mx-2" onClick={() => handleViewCertificate(`${url}/${a.certificate?.filename}`)}>
                          View Certificate
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>No data available</div>
              )
            ) : (
              <div>No Mechanics available</div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCertificate && (
            selectedCertificate.endsWith(".pdf") ? (
              <embed src={selectedCertificate} width="100%" height="400px" type="application/pdf" />
            ) : (
              <img src={selectedCertificate} alt="Certificate" style={{ width: '100%' }} />
            )
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewMechaniclist;
