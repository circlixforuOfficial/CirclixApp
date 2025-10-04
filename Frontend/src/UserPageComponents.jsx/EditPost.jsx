import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function EditPost(props) {
  const location = useLocation();
  const {
    itemId,
    itemType,
    description,
    bidLimit,
    startDate,
    startTime,
    endDate,
    endTime,
    image1,
    image2,
  } = props;

  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    bidLimit: "",
    itemType: "",
    description: "",
    image1Url: null,
    image2Url: null,
  });
  const [image1Preview, setImage1Preview] = useState(null);
  const [image2Preview, setImage2Preview] = useState(null);

  const handleChange = (event) => {
    if (!event || !event.target) return;

    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditPost = async () => {
    console.log(itemId);
    try {
      const token = localStorage.getItem("token");
      const payLoad = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "image1" && key !== "image2") {
          payLoad.append(key, value ?? "");
        }
      });

      if (formData.image1 instanceof File) {
        payLoad.append("image1", formData.image1Url);
      }
      if (formData.image2 instanceof File) {
        payLoad.append("image2", formData.image2Url);
      }

      for (let [key, value] of payLoad.entries()) {
        if (value instanceof File) {
          console.log(
            `${key}: [File] name=${value.name}, size=${value.size} bytes`
          );
        } else {
          console.log(`${key}: ${value}`);
        }
      }

      await axios.patch(
        `http://localhost:8081/api/v1/post/update-post/${itemId}`,
        payLoad,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Post updated successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Edit error:", error.response?.data || error.message);
      alert("Failed to update post.");
    }
  };

  useEffect(() => {
    setFormData({
      startDate: startDate || "",
      endDate: endDate || "",
      startTime: startTime || "",
      endTime: endTime || "",
      bidLimit: bidLimit || "",
      description: description || "",
      itemType: itemType || "",
      image1: image1 || null,
      image2: image2 || null,
    });

    if (image1) setImage1Preview(image1);
    if (image2) setImage2Preview(image2);
  }, [itemId]);

  return (
    <>
      <div>
        <button
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#editPostModal"
        >
          Edit Post
        </button>
        {/* Edit Post Modal */}
        <div
          className="modal fade"
          id="editPostModal"
          tabIndex="-1"
          aria-labelledby="editPostLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editPostLabel">
                  Edit Post
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex flex-wrap">
                <form>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Start Date
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Start Time
                    </label>
                    <input
                      className="form-control"
                      type="time"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      End Date
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      End Time
                    </label>
                    <input
                      className="form-control"
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Bid Limit
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="bidLimit"
                      value={formData.bidLimit}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Item Type
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="itemType"
                      value={formData.itemType}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Description
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Image 1
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      accept="image/*"
                      name="image1"
                      onChange={(e) => {
                        setFormData((prevData) => ({
                          ...prevData,
                          image1Url: e.target.files[0], // store the File object
                        }));
                        setImage1Preview(
                          URL.createObjectURL(e.target.files[0])
                        );
                      }}
                    />
                    {image1Preview && (
                      <img
                        src={image1Preview}
                        alt="Preview"
                        className="img-fluid rounded mt-2"
                        style={{ maxHeight: "100px" }}
                      />
                    )}
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Image 2
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      accept="image/*"
                      name="image2"
                      onChange={(e) => {
                        setFormData((prevData) => ({
                          ...prevData,
                          image2Url: e.target.files[0], // store the File object
                        }));
                        setImage2Preview(
                          URL.createObjectURL(e.target.files[0])
                        );
                      }}
                    />
                    {image2Preview && (
                      <img
                        src={image2Preview}
                        alt="Preview"
                        className="img-fluid rounded mt-2"
                        style={{ maxHeight: "100px" }}
                      />
                    )}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEditPost}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditPost;
