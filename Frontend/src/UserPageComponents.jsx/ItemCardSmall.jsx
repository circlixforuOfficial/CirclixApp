import {React,useRef,useEffect,useState} from "react";

import ItemsDetailModal from "./ItemsDetailModal";
import arrow from "../assets/arrow-right-circle.svg";
import PropTypes from "prop-types";

function ItemCardSmall(props) {
  const containerRef = useRef(null);
  const cardRef =useRef(null);
  const [numCards,setNumCards] =useState(0);
  const [cardWidth,setCardWidth] =useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && cardRef.current) {
      
      }
    }
  });

  return (
    <>
      <div className="card p-1 pb-0 me-2 mb-2" style={{width: "170px",height:"185px"}}>
        <div className="d-flex justify-content-center justify-content-center mt-1">
            <img src={arrow} style={{width: "90px"}} className="card-img-top" alt="..." />
        </div>
        <div className="card-body p-1 ps-3">
          <h5 className="card-title">{props.itemName}</h5>
          <h5 className="card-title">{props.modalId}</h5>
          <ItemsDetailModal imgSrc={arrow} parentId={props.modalId} id="item1" heading={props.itemName}/>
        </div>
      </div>
    </> 
  );
}
export default ItemCardSmall;
