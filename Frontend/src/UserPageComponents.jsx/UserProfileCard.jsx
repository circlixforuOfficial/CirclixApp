import React from "react";
import EditProfile from "./EditProfile";
import DeleteProfile from "./DeleteProfile";

function UserProfileCard(props) {

  const userFullName=props.fName+" "+props.lName;
  return (
    <>
      <div className="card rounded-4  d-flex justify-content-center flex-lg-column flex-sm-row col-lg-2 me-1">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div
            className="m-3 bg-white shadow-lg rounded-circle"
            style={{ width: "120px", height: "120px" }}
          >
            <img
              src={props.userImg}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
        <div className="card-body d-flex flex-column justify-content-center col-lg-12 col-sm-6">
          <h5 className="card-title text-center">{props.userName}</h5>
          <p className="card-text text-center">{userFullName}</p>
        </div>
        <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border">
          <li className="list-group-item text-center">{props.nic}</li>
          <li className="list-group-item  text-center">{props.dob}</li>
          <li className="list-group-item  text-center">{props.address}</li>
          <li className="list-group-item  text-center">{props.email}</li>
          <li className="list-group-item  text-center">{props.tpNumber}</li>
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
