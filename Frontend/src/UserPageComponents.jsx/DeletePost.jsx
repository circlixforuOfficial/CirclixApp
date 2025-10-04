import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeletePost(props) {
  const navigate = useNavigate();
  {
    /*handle Delete */
  }

  const handleDeletePost = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:8081/api/v1/post/deletePost/${props.itemId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Post deleted successfully.");
      {/*navigate back to previous page after successful post deletion */}
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Delete error:", error.response?.data || error.message);
      alert("Failed to delete post.");
    }
  };

  return (
    <>
      <button
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#DeletePostModal"
      >
        Delete Post
      </button>
      <div
        className="modal fade"
        id="DeletePostModal"
        tabIndex="-1"
        aria-labelledby="deletePostModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" id="deletePostModalLabel">
                Confirm Post Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this post?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDeletePost}
                data-bs-dismiss="modal"
              >
                Delete Post
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

export default DeletePost;
