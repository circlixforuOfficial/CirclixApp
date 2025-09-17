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
            <img src={props.userImg} alt="" width="120px" height="120px" />
          </div>
        </div>
        <div className="card-body d-flex flex-column justify-content-center col-lg-12 col-sm-6">
          <h5 className="card-title text-center">{props.fName}</h5>
          <p className="card-text text-center">{userFullName}</p>
        </div>
        <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border" style={{minWidth:"220px"}}>
          {[
            {label:"DOB", value: props.dob },
            {label:"Address", value: props.address },
            {label:"TP Number", value: props.tpNumber },
            {label:"Rating", value: props.rating },
          ].map(({ label,value }) => (
            <li className="list-group-item text-center w-100"><span>{label} : </span>{value}</li>
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
          <EditProfile
            userId={props.userId}
            userImg={props.userImg}
            fName={props.fName}
            lName={props.lName}
            tpNumber={props.tpNumber}
            dob={props.dob}
            address={props.address}
            onUpdate={props.onProfileUpdate}
          />
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
