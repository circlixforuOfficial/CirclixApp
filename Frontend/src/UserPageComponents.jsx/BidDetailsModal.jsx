import React from "react";


import PropTypes from "prop-types";

function BidDetailsModal(props) {

  const target="#"+props.id;
    
    return(
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
              <div className="modal-body d-flex flex-wrap">
                <img src={props.imgSrc} />
              </div>
              <div className="modal-footer">
                <button type="button"   className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Bids" >Back</button>
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

export default BidDetailsModal;