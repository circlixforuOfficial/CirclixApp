import React from "react";

function Icon(props) {
    
    return(
        <>
        <div className="d-flex flex-wrap flex-row align-items-center my-2">
              <img
                src={props.source}
                className="feature-icon feature-icon-space d-inline-flex align-items-center justify-content-center bg-gradient fs-2 me-3"
                alt={props.altText}
              />
              <p className="lead">{props.name}</p>
            </div>
        </>
    );
}

export default Icon;