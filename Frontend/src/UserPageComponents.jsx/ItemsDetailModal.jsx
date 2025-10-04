import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ApiImage from "../component/ApiImage.jsx";

function ItemsDetailModal(props) {
  const {
    itemId,
    category,
    description,
    bidLimit,
    endDate,
    endTime,
    startDate,
    startTime,
    image1,
    image2,
    parent,
  } = props;

  useEffect(() => {
    }, []);

  const navigate = useNavigate();

  const target = "#" + parent+itemId;
  const modelId=parent+itemId;
  const expiration = new Date(`${endDate}T${endTime}`);
  const now = new Date();
  const status = now > expiration ? "Expired" : "Active";

  const handleViewFull = () => {
    const Id = itemId; // use the actual prop value
    navigate(`/details/${parent}/${Id}`);
    window.location.reload();

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
          id={modelId}
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
                  {description}
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
                  <ApiImage apiUrl={image1} width="130" height="130"/>
                </div>
                <div className="d-flex ">
                  <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border-0">
                    <li className="list-group-item  text-start border-0">
                      Description
                    </li>
                    <li className="list-group-item  text-start border-0">
                      Category
                    </li>
                    <li className="list-group-item  text-start border-0">
                      Bid limit
                    </li>
                    <li className="list-group-item  text-start border-0">
                      Status
                    </li>
                  </ul>
                  <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border-0">
                    <li className="list-group-item  text-start border-0">
                      {": "}
                      {description}
                    </li>
                    <li className="list-group-item  text-start border-0">
                      {": "}
                      {category}
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

