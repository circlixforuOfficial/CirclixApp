import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteProfile() {

  const navigate = useNavigate();
  const [userId,setUserId] =useState("");

  const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        //taking user data
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/user/me`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserId(data.userId);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/user/deleteMyAccount/${userId}`);
      alert("User deleted successfully!");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");

      // Optionally refresh or redirect here
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  return (
    <div
      className="modal fade"
      id="deleteProfileModal"
      tabIndex="-1"
      aria-labelledby="deleteProfileLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title" id="deleteProfileLabel">
              Confirm Deletion
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this user? This action cannot be
            undone.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
              data-bs-dismiss="modal"
            >
              Delete
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
  );
}

export default DeleteProfile;
