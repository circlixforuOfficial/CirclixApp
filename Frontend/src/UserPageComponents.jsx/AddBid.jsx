import { useState } from "react";
import axios from "axios";

function AddBid(props) {
  const [bidAmount, setBidAmount] = useState();

  const handleAddBid = async () => {
    if (!bidAmount || isNaN(bidAmount) || parseFloat(bidAmount) <= 0) {
      alert("Please enter a valid bid amount.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:8087/api/v1/bid/place/${props.itemId}`,
        { bidAmount: bidAmount },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Bid added successfully.");
      setBidAmount(""); // reset
    } catch (error) {
      console.error("Add bid error:", error.response?.data || error.message);
      alert("Failed to add bid.");
    }
  };

  return (
    <>
      <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#addBidModal"
      >
        Add Bid
      </button>
      <div
        className="modal fade"
        id="addBidModal"
        tabIndex="-1"
        aria-labelledby="addBidModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addBidModalLabel">
                Place Your Bid
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="number"
                className="form-control"
                placeholder="Enter your bid amount"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddBid}
                data-bs-dismiss="modal"
              >
                Submit Bid
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

export default AddBid;
