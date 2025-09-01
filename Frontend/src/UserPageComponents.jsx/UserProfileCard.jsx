import React from "react";
import EditProfile from "./EditProfile";
import DeleteProfile from "./DeleteProfile";
import ApiImage from "../component/ApiImage";

function UserProfileCard(props) {
  const userFullName = props.fName + " " + props.lName;

  return (
    <>
      <div className="card rounded-4 d-flex justify-content-center max-vh-75 flex-lg-column flex-sm-row col-lg-2 me-1">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div
            className="m-3 rounded-circle shadow-lg overflow-hidden"
            style={{ width: "120px", height: "120px" }}
          >
            <ApiImage apiUrl={props.userImage} width="120px" height="120px" />
          </div>
        </div>
        <div className="card-body d-flex flex-column justify-content-center col-lg-12 col-sm-6">
          <h5 className="card-title text-center">{props.userName}</h5>
          <p className="card-text text-center">{userFullName}</p>
        </div>
        <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border">
          {[
            { label: props.nic },
            { label: props.dob },
            { label: props.address },
            { label: props.email },
            { label: props.tpNumber },
          ].map(({ label }) => (
            <li className="list-group-item text-center w-100">{label}</li>
          ))}
        </ul>
        <div className="card-body text-center">
          <button
            className="btn btn-primary my-3 mx-2"
            data-bs-toggle="modal"
            data-bs-target="#editProfileModal"
          >
            Edit
          </button>
          <EditProfile userId={props.userId} onUpdate={props.onProfileUpdate} />

          <button
            className="btn btn-danger my-3 mx-2"
            data-bs-toggle="modal"
            data-bs-target="#deleteProfileModal"
          >
            Delete
          </button>
          <DeleteProfile userId={props.userId} />
        </div>
      </div>
    </>
  );
}

export default UserProfileCard;
