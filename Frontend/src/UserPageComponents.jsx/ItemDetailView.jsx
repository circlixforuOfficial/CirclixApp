import React from "react";

import arrow from "../assets/arrow-right-circle.svg";
import axios from "axios";

function ItemDetailView(props) {
  const {
    itemId,
    itemName,
    category,
    description,
    bidLimit,
    startDate,
    startTime,
    endDate,
    endTime,
    parentComponent,
  } = props;

  const handleDeletePost = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/post/${itemId}`
      );
      alert("Post deleted successfully.");
    } catch (error) {
      console.error("Delete error:", error.response?.data || error.message);
      alert("Failed to delete post.");
    }
  };

  const handleEditPost = () => {
    // You can navigate to edit page or open modal
    alert("Edit post triggered.");
  };

  const handleCancelBid = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/bid/cancel`,
        { itemId }
      );
      alert("Bid cancelled successfully.");
    } catch (error) {
      console.error("Cancel bid error:", error.response?.data || error.message);
      alert("Failed to cancel bid.");
    }
  };

  const handleAddBid = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/bid/add`,
        {
          itemId,
          bidAmount: 1000, // Replace with dynamic input if needed
        }
      );
      alert("Bid added successfully.");
    } catch (error) {
      console.error("Add bid error:", error.response?.data || error.message);
      alert("Failed to add bid.");
    }
  };

  const expiration = new Date(`${endDate}T${endTime}`);
  const now = new Date();
  const status = now > expiration ? "Expired" : "Active";

  return (
    <>
      <div>
        <div>
          <div className="d-flex ps-5 pt-4 flex-column border-top">
            <h2 className="fs-2 ms-1">Item Details</h2>
          </div>
          <div className="d-flex flex-row py-4 px-5 w-100 vh-100 border rounded-4">
            <div className="col">
              <div className="d-flex justify-content-evenly flex-sm-column flex-lg-row">
                <img
                  src={arrow}
                  className="my-3"
                  alt="Item image 1"
                  style={{ width: "170px" }}
                />
                <img
                  src={arrow}
                  className="my-3"
                  alt="Item image 1"
                  style={{ width: "170px" }}
                />
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                {itemId ? (
                  <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border-0">
                  {[
                    { label: "Item Name", itemValue: itemName },
                    { label: "Category", itemValue: category },
                    { label: "Description", itemValue: description },
                    { label: "Bid limit", itemValue: bidLimit },
                    { label: "Bid Status", itemValue: status },
                    { label: "Bid start Date", itemValue: startDate },
                    { label: "Bid start Time", itemValue: startTime },
                    { label: "Bid end Date", itemValue: endDate },
                    { label: "Bid end Time", itemValue: endTime },
                  ].map(({ label, itemValue }) => (
                    <div className="d-flex flex-row" key={label}>
                      <li
                        className="list-group-item text-start border-0"
                        style={{ width: "160px" }}
                      >
                        {label}
                      </li>
                      <li
                        className="list-group-item text-start border-0"
                        style={{ width: "200px" }}
                      >
                        {": "}{itemValue}
                      </li>
                    </div>
                  ))}
                </ul>
        ) : (
          <p className="text-danger mt-3">Item not found.</p>
        )}
                
              </div>
              {/* Action Buttons */}
              <div className="mt-4 d-flex gap-3 justify-content-center">
                {parentComponent === "mypost" && (
                  <>
                    <button
                      className="btn btn-danger"
                      onClick={handleDeletePost}
                    >
                      Delete Post
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={handleEditPost}
                    >
                      Edit Post
                    </button>
                  </>
                )}
                {parentComponent === "bids" && (
                  <>
                  <button
                      className="btn btn-warning"
                      onClick={handleEditPost}
                    >
                      Edit bid
                    </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleCancelBid}
                  >
                    Cancel Bid
                  </button>
                  </>
                )}
                {parentComponent === "explore" && (
                  <button className="btn btn-success" onClick={handleAddBid}>
                    Add Bid
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailView;

{
  /*
  {[
                { label: "Item Name", itemValue: "itemName" },
                { label: "Category", itemValue: "category" },
                { label: "Description", itemValue: "description" },
                { label: "Bid limit", itemValue: "bidLimit" },
                { label: "Bid Status", itemValue: "status" },
                { label: "Bid start Date", itemValue: "startDate"},
                { label: "Bid start Time", itemValue: "startTime" },
                { label: "Bid end Date", itemValue: "endDate"},
                { label: "Bid end Time", itemValue: "endTime" },
              ].map(({ label, itemValue}) => (
                <div className="d-flex flex-row" key={label}>
                  <li className="list-group-item text-start border-0" style={{width:"200px"}}>
                    {label}
                  </li>
                  <li className="list-group-item text-start border-0" style={{width:"200px"}}>
                    {itemValue}
                  </li>
                </div>
              ))}

              <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border-0">
                  <li className="list-group-item text-start border-0">
                    Item Name
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Category
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Description
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid limit
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid Status
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid start Date
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid start Time
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid End Date
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid End Time
                  </li>
                </ul>
                <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border-0">
                  <li className="list-group-item text-start border-0">
                    {": "}
                    {itemName}
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "}
                    {category}
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "}
                    {description}
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "}
                    {bidLimit}
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "} {status}
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "} {startDate}
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "}
                    {startTime}
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "} {endDate}
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "} {endTime}
                  </li>
                </ul>
  
  */
}
