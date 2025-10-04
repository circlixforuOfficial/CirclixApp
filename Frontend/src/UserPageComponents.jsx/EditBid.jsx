import { useState } from "react";
import axios from "axios";

function EditBid(props) {
  const [bidAmount, setBidAmount] = useState();

  const handleEditBid = async () => {
    if (!bidAmount || isNaN(bidAmount) || parseFloat(bidAmount) <= 0) {
      alert("Please enter a valid bid amount.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.patch(
        `http://localhost:8087/api/v1/bid/changeMybid/${props.itemId}`,
        { bidAmount: bidAmount },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Bid updated successfully.");
      setBidAmount(""); // reset
    } catch (error) {
      console.error("Edit bid error:", error.response?.data || error.message);
      alert("Failed to edit bid.");
    }
  };

  return (
    <>
      <button
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#editBidModal"
      >
        Edit Bid
      </button>
      <div
        className="modal fade"
        id="editBidModal"
        tabIndex="-1"
        aria-labelledby="editBidModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editBidModalLabel">
                Place Your New Bid
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
                placeholder="Enter your new bid amount"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEditBid}
                data-bs-dismiss="modal"
              >
                Submit New Bid
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

export default EditBid;
