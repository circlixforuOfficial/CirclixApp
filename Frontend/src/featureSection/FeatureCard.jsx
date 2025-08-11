import React from "react";

function FeatureCard(props) {
  return (
    <>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <img src={props.source} alt={props.altText} />
        </div>
        <h3 className="fs-2 text-body-emphasis">{props.heading}</h3>
        <p>
          {props.description}
        </p>
      </div>
    </>
  );
}

export default FeatureCard;
