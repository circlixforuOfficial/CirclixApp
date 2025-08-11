import React from "react";

import ItemsDetailModal from "./ItemsDetailModal";
import PurchasedDetailsModal from "./PurchasedDetailsModal";
import DetailModalSelector from "./DetailModalSelector";
import testImg from "./icons/arrow-right-circle.svg";
import PropTypes from "prop-types";

function ItemCardSmall(props) {

  return (
    <>
      <div className="card p-1 pb-0 me-2 mb-2" style={{width: "12rem",height:"12rem"}}>
        <div className="d-flex justify-content-center justify-content-center mt-1">
            <img src={testImg} style={{width: "90px"}} className="card-img-top" alt="..." />
        </div>
        <div className="card-body p-1 ps-3">
          <h5 className="card-title">{props.itemName}</h5>
          <ItemsDetailModal imgSrc={testImg} parentId={props.modalId} id="item1" heading={props.itemName}/>
        </div>
      </div>
    </> 
  );

  ItemCardSmall.propTypes ={
    itemName: PropTypes.string,
    modelId: PropTypes.string, 
  }
  ItemCardSmall.defaultProps ={
    itemName: "Item",
    modelId: "Purchased",
  }
}

export default ItemCardSmall;
