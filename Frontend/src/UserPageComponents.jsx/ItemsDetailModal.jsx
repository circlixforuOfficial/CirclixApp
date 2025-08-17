import React from "react";


import PropTypes from "prop-types";
import arrow from "../assets/arrow-right-circle.svg";

function ItemsDetailModal(props) {

  const {
    id,
    heading,
    itemName,
    category,
    description,
    bidLimit,
    endDate,
    endTime,
  } = props;

  const target = "#" + props.id;
  const expiration = new Date(`${endDate}T${endTime}`);
  const now = new Date();
  const status = now > expiration ? "Expired" : "Active";

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
          id={props.id}
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
                  {heading}
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
                  {/*<img src={props.imgSrc} /> */}
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
                      {": "}{itemName}
                    </li>
                    <li className="list-group-item  text-start border-0">
                      {": "}{category}
                    </li>
                    <li className="list-group-item  text-start border-0">
                     {": "}{description}
                    </li>
                    <li className="list-group-item  text-start border-0">
                      {": "}{bidLimit}
                    </li>
                    <li className="list-group-item  text-start border-0">
                      {": "} {status}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <form action="/details">
                  <button className="btn bg-primary">View Full</button>
                </form>
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

   ItemsDetailModal.propTypes = {
    id: PropTypes.string,
    heading: PropTypes.string,
    itemName: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    bidLimit: PropTypes.string,
    endDate: PropTypes.string,
    endTime: PropTypes.string,
  };
  ItemsDetailModal.defaultProps = {
    id: "Item",
    heading: "Item Details",
    itemName: "Item",
    category: "Category",
    description: "No description provided.",
    bidLimit: "N/A",
    endDate: "2025-12-31",
    endTime: "23:59",
  };
}

export default ItemsDetailModal;
