import React from "react";

function Clipart(props) {
  return (
    <>
      <div className=" p-0 mb-sm-0 shadow-lg">
        <img src={props.source} alt={props.altText} />
      </div>
    </>
  );
}

export default Clipart;
