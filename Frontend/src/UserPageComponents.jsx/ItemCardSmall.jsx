import { React, useRef, useEffect, useState } from "react";

import ItemsDetailModal from "./ItemsDetailModal";
import arrow from "../assets/arrow-right-circle.svg";

function ItemCardSmall(props) {

  const [parent, setParent] = useState("")
  useEffect(() => {
    setParent(props.parentType)
    //console.log(props.parentType);
    //console.log("hi")
  }, []);

  return (
    <>
      <div
        className="card p-1 pb-0 me-2 mb-2"
        style={{ width: "170px", height: "185px", minWidth:"165px" }}
      >
        <div className="d-flex justify-content-center justify-content-center mt-1">
          <img
            src={arrow}
            style={{ width: "90px" }}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body p-1 ps-3">
          <h5 className="card-title">{props.itemName}</h5>
            <ItemsDetailModal
              key={props.itemId}
              itemId={props.itemId}
              itemName={props.itemName}
              category={props.category}
              description={props.description}
              bidLimit={props.bidLimit}
              endDate={props.endDate}
              endTime={props.endTime}
              parent={props.parentType} 
            />
           
        </div>
      </div>
    </>
  );
}

export default ItemCardSmall;
