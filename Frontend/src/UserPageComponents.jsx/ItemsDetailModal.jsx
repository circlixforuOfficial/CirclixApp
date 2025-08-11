import React from "react";

import ItemsModal from "./ItemsModal";
import PropTypes from "prop-types";
import testImg from "./icons/arrow-right-circle.svg";

function ItemsDetailModal(props) {
  const target = "#" + props.id;
  const targetParent = "#" + props.parentId;

  function Test(e) {
    e.preventDefault();
    console.log(targetParent);
    console.log("Target modal ID:", props.id);
  }
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
                  {props.heading}
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
                    src={testImg}
                    style={{ width: "90px" }}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="d-flex ">
                  <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border">
                    <li className="list-group-item text-center">Item Name: Item</li>
                    <li className="list-group-item  text-center">
                      Category: Category
                    </li>
                    <li className="list-group-item  text-center">
                      Starting Bid: 400
                    </li>
                    <li className="list-group-item  text-center">
                      Bid Expiration:
                    </li>
                    <li className="list-group-item  text-center">
                      Status: Not Available
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
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
    modelId: PropTypes.string,
  };
  ItemsDetailModal.defaultProps = {
    id: "Item",
    modelId: "Purchased",
  };
}

export default ItemsDetailModal;
