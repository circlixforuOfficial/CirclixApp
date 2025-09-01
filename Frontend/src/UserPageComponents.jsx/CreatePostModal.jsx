import { React, useState } from "react";
import axios from "axios";
import plus from "../assets/plus-circle.svg";

function CreatePostModal(props) {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    bidLimit: "",
    itemType: "",
    description: "",
    image1: null,
    image2: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    const {
      startDate,
      endDate,
      startTime,
      endTime,
      bidLimit,
      itemType,
      description,
      image1,
      image2,
    } = formData;

    if (image1.size > 1 * 1024 * 1024 || image2.size > 1 * 1024 * 1024) {
      alert("Images must be under 2MB.");
      return;
    }

    const payload = new FormData();
    payload.append("startDate", startDate);
    payload.append("endDate", endDate);
    payload.append("startTime", startTime);
    payload.append("endTime", endTime);
    payload.append("bidLimit", bidLimit);
    payload.append("itemType", itemType);
    payload.append("description", description);
    payload.append("image1", image1);
    payload.append("image2", image2);

    try {
      if (
        !startDate ||
        !endDate ||
        !startTime ||
        !endTime ||
        !bidLimit ||
        !itemType ||
        !description ||
        !image1 ||
        !image2
      ) {
        alert("Please fill in all fields.");
        return;
      }
      await axios.post("http://localhost:8081/api/v1/post/CreatePost", payload);
      alert("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    }
  };

  const handleReset = () => {
    setFormData({
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      bidLimit: "",
      itemType: "",
      description: "",
      image1: null,
      image2: null,
    });

    document
      .querySelectorAll("#newItem input[type='file']")
      .forEach((input) => {
        input.value = "";
      });
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#newItem"
        >
          Create <img src={plus} />
        </button>

        <div
          className="modal fade"
          id="newItem"
          tabIndex="-1"
          aria-labelledby="exampleModalFullscreenSmLabel"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-4"
                  id="exampleModalFullscreenSmLabel"
                >
                  Create Post
                </h1>
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
                      onChange={handleChange}
                    />
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
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleReset}
                  data-bs-dismiss="modal"
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  data-bs-dismiss="modal"
                >
                  Create post
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
      </div>
    </>
  );
}

export default CreatePostModal;
