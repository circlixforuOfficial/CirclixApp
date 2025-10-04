import { React, useRef, useEffect, useState } from "react";
import axios from "axios";

import ItemsDetailModal from "./ItemsDetailModal";
import arrow from "../assets/digital-products.png";

function ItemCardSmall(props) {
  const [imageSrc, setImageSrc] = useState(null);

  const fetchImage =async () => {
    try {
      const token = localStorage.getItem("token");

      const image = await axios.get(props.image1,{
        headers:{
          Authorization : `Bearer ${token}`,
        },
        responseType: "blob",
      });

      const imageUrl = URL.createObjectURL(image.data);
      setImageSrc(imageUrl);
    } catch (e) {
      
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <div
        className="card border-0 shadow-lg p-1 pb-0 me-2 mb-2"
        style={{ width: "140px", height: "185px", minWidth: "130px" }}
      >
        <div className="d-flex justify-content-center justify-content-center mt-1">
          {imageSrc?<img
            src={imageSrc}
            style={{ width: "110px",maxHeight:"95px" }}
            className="card-img-top"
            alt="..."
          />:<img
            src={arrow}
            style={{ width: "110px" }}
            className="card-img-top"
            alt="..."
          />}
        </div>
        <div className="card-body p-1 ps-3">
          <h5 className="card-title">{props.description}</h5>
          <ItemsDetailModal
            key={props.parentType + props.itemId}
            itemId={props.itemId}
            category={props.category}
            description={props.description}
            bidLimit={props.bidLimit}
            endDate={props.endDate}
            endTime={props.endTime}
            startDate={props.startDate}
            startTime={props.startTime}
            image1={props.image1}
            image2={props.image2}
            user={props.user}
            parent={props.parentType}
          />
        </div>
      </div>
    </>
  );
}

export default ItemCardSmall;
