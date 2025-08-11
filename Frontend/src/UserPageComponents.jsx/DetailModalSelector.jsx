import React from "react";

import BidDetailsModal from "./BidDetailsModal";
import PurchasedDetailsModal from "./PurchasedDetailsModal";
import ItemsDetailModal from "./ItemsDetailModal";

function DetailModalSelector(props) {
  const { imgsrc, id, heading, parentId } = props;
  const pId=props.parentId;

  if (pId === "Purchased") {
    return (
      <PurchasedDetailsModal
        imgsrc={imgsrc}
        parentId={parentId}
        id={id}
        heading={heading}
      />
    );
  } else if (pId === "Bids") {
    return (
      <BidDetailsModal
        imgsrc={imgsrc}
        parentId={parentId}
        id={id}
        heading={heading}
      />
    );
  } else {
    return (
      <ItemsDetailModal
        imgsrc={props.imgSrc}
        parentId={parentId}
        id={id}
        heading={heading}
      />
    ); // or a fallback UI if needed
  }
}

export default DetailModalSelector;
