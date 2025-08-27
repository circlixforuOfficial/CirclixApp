import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow-right-circle.svg";

function ItemsDetailModal(props) {
  const {
    itemId,
    itemName,
    category,
    description,
    bidLimit,
    endDate,
    endTime,
    parent,
  } = props;

  const navigate = useNavigate();

  const target = "#" + itemId;
  const expiration = new Date(`${endDate}T${endTime}`);
  const now = new Date();
  const status = now > expiration ? "Expired" : "Active";

  const handleViewFull = () => {
    const Id = itemId; // use the actual prop value
    console.log("1");
    console.log(props.parent);
    navigate(`/details/${Id}/${parent}`);
    
    console.log("4");
  };
  

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={target}
        >
          Details
        </button>

        <div
          className="modal fade"
          id={itemId}
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
                  {itemName}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex flex-wrap justify-content-evenly">
                <div>
                  <img
                    src={arrow}
                    style={{ width: "90px" }}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="d-flex ">
                  <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border-0">
                    <li className="list-group-item text-start border-0">
                      Item Name
                    </li>
                    <li className="list-group-item  text-start border-0">
                      Category
                    </li>
                    <li className="list-group-item  text-start border-0">
                      Description
                    </li>
                    <li className="list-group-item  text-start border-0">
                      Bid limit
                    </li>
                    <li className="list-group-item  text-start border-0">
                      Status
                    </li>
                  </ul>
                  <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border-0">
                    <li className="list-group-item text-start border-0">
                      {": "}
                      {itemName}
                    </li>
                    <li className="list-group-item  text-start border-0">
                      {": "}
                      {category}
                    </li>
                    <li className="list-group-item  text-start border-0">
                      {": "}
                      {description}
                    </li>
                    <li className="list-group-item  text-start border-0">
                      {": "}
                      {bidLimit}
                    </li>
                    <li className="list-group-item  text-start border-0">
                      {": "} {status}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn bg-primary" onClick={handleViewFull}>
                  View Full
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

export default ItemsDetailModal;

