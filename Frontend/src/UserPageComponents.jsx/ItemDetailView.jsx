import React from "react";

import img1 from "../assets/online-sell.jpg";
import img2 from "../assets/product-art.jpg";
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
          <div className="d-flex flex-lg-row flex-sm-column align-items-center gap-5 justify-content-center py-5 px-5 w-100 border rounded-4">
            <div className="col">
              <div className="d-flex justify-content-center">
                {/*carousel start*/}
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  style={{ height: "230px" }}
                >
                  <div className="carousel-inner d-flex align-items-center">
                    <div className="d-flex justify-content-center align-items-center carousel-item active">
                      <img
                        src={img1}
                        className="my-3"
                        alt="Item image 1"
                        style={{ height: "200px" }}
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center carousel-item active">
                      <img
                        src={img2}
                        className="my-3"
                        alt="Item image 1"
                        style={{ height: "200px" }}
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev bg-success"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next bg-success"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                {/*carousel end*/}
              </div>
            </div>
            <div className="col d-flex flex-column justify-content-center">
              <div className="d-flex flex-column justify-content-center">
                {itemId ? (
                  <>
                    <ul className="list-group list-group-flush d-flex flex-wrap justify-content-center border-0">
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
                            {": "}
                            {itemValue}
                          </li>
                        </div>
                      ))}
                    </ul>
                    <br />
                    <ul className="list-group list-group-flush d-flex flex-wrap justify-content-center border-0">
                      {[
                        { label: "Owner Name", itemValue: itemName },
                        { label: "Tp number", itemValue: category },
                        { label: "Rating", itemValue: description },
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
                            {": "}
                            {itemValue}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-danger mt-3">Item not found.</p>
                )}
              </div>
              {/* Action Buttons */}
              <div className="mt-4 d-flex gap-3">
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
                {parentComponent === "bidsforme" && (
                  <>
                    {itemId ? (
                      <ul className="list-group list-group-flush d-flex flex-wrap justify-content-center border-0">
                        {[
                          { label: "Bid amount", itemValue: bidLimit },
                          { label: "Bid placed date", itemValue: startDate },
                          { label: "Bid Placed time", itemValue: startTime },
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
                              {": "}
                              {itemValue}
                            </li>
                          </div>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-danger mt-3">Item not found.</p>
                    )}
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
