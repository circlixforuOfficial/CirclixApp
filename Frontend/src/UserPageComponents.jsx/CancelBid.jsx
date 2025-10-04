import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CancelBid(props) {
  const navigate = useNavigate();

  const handleCancelBid = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(props.itemId);
      console.log(token);
      const response = await axios.delete(
        `http://localhost:8087/api/v1/bid/delete/${props.itemId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Bid cancel successfully.");

      {/*navigate back to previous page after successful bid cancellation */}
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Cancel bid error:", error.response?.data || error.message);
      alert("Failed to cancel bid.");
    }
  };

  return (
    <>
      <button
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#cancelBidModal"
      >
        Cancel Bid
      </button>
      <div
        className="modal fade"
        id="cancelBidModal"
        tabIndex="-1"
        aria-labelledby="ccancelBidModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" id="cacelBidModalLabel">
                Confirm Bid Canceling
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to cancel this bid?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleCancelBid}
                data-bs-dismiss="modal"
              >
                Delete Bid
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CancelBid;
