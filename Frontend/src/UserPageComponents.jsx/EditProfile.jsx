import React, { useState, useEffect } from "react";
import axios from "axios";

function EditProfile() {
  const [userData, setUserData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    tpNumber: "",
    address: "",
    DOB: "",
    email: "",
    nic: "",
    password: "",
    image: null,
  });

  const [existingData, setExistingData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    tpNumber: "",
    address: "",
    DOB: "",
    email: "",
    nic: "",
    password: "",
    userProfile: "",
    myAvgRateValue: "",
  });

  const testData = {
    userId: "",
    firstName: "Kisame",
    lastName: "Hoshigaki",
    tpNumber: "123",
    address: "Kirigakure",
    DOB: "1960-10-10",
    email: "samehada@akatsuki.com",
    nic: "123",
    password: "",
    image: null,
  };

  const [userImgPreview, setUserImgPreview] = useState(null);

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
        setExistingData(data);

        setUserData((prev) => ({
          ...prev,
          userId: data.userId,
          firstName: data.firstName,
          lastName: data.lastName,
          tpNumber: data.tpNumber,
          address: data.address,
          DOB: data.DOB,
          email: data.email,
          nic: data.nic,
          password: "",
        }));

        if (data.userProfile) {
          const { data: imageBlob } = await axios.get(data.userProfile, {
            headers: { Authorization: `Bearer ${token}` },
            responseType: "blob",
          });

          const imageURL = URL.createObjectURL(imageBlob);
          setUserImgPreview(imageURL);

          setUserData((prev) => ({
            ...prev,
            image: imageBlob,
          }));
        }
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData((prev) => ({ ...prev, image: file }));
      setUserImgPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      for (const key in userData) {
        if (key === "image" && userData.image) {
          formData.append("image", userData.image);
        } else {
          formData.append(key, userData[key]);
        }
      }

      await axios.put(
        `http://localhost:8080/api/v1/user/update-user/${userData.userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
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
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {userImgPreview && (
                  <img
                    src={userImgPreview}
                    alt="Preview"
                    className="img-fluid rounded mt-2"
                    style={{ maxHeight: "200px" }}
                  />
                )}
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
