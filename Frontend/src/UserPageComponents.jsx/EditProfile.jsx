import React, { useState, useEffect } from "react";
import axios from "axios";

function EditProfile( ) {
  const [userData, setUserData] = useState({
    userId:"",
    firstName: "Kisame",
    lastName: "Hoshigaki",
    tpNumber: "123",
    address: "Kirigakure",
    DOB: "1960-10-10",
    email: "samehada@akatsuki.com",
    nic: "123",
    password:"",
    userProfile: "",
  });

  const [userImg, setUserImg] = useState(null);

  // Fetch user data and image separately
  useEffect(() => {
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
        setUserData(data);

        const { dataImg } = await axios.get(userProfile, {
          headers: { Authorization: `Bearer ${token}` },
          responseType: "blob", // if it's binary
        });
        const userImage = URL.createObjectURL(dataImg);
        setUserImg(userImage);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };

    const modal = document.getElementById("editProfileModal");
    modal.addEventListener("show.bs.modal", fetchUserData);

    return () => {
      modal.removeEventListener("show.bs.modal", fetchUserData);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:8080/api/v1/user/update-user/${userData[userId]}`, userData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div
      className="modal fade"
      id="editProfileModal"
      tabIndex="-1"
      aria-labelledby="editProfileLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editProfileLabel">
              Edit Profile
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "NIC", name: "nic" },
                { label: "Date of Birth", name: "DOB", type: "date" },
                { label: "Address", name: "address" },
                { label: "Email", name: "email", type: "email" },
                { label: "Telephone", name: "tpNumber" },
              ].map(({ label, name, type = "text" }) => (
                <div className="mb-3" key={name}>
                  <label className="form-label">{label}</label>
                  <input
                    type={type}
                    className="form-control"
                    name={name}
                    value={userData[name]}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="mb-3" key="userImg">
                  <label className="form-label">User Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="useImg"
                    value={userImg}
                    onChange={handleChange}
                  />
                </div>
              <div className="mb-3" key="password">
                  <label className="form-label">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    required
                    value={userData["password"]}
                    onChange={handleChange}
                  />
                </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
              data-bs-dismiss="modal"
            >
              Save Changes
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

export default EditProfile;
