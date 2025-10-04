import React, { useEffect, useState } from "react";
import axios from "axios";
import arrow from "../assets/digital-products.png";

function ApiImage(props) {
  const [imageSrc, setImageSrc] = useState(null);

  const fetchImage = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(props.apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      });
      const imageUrl = URL.createObjectURL(response.data);

      setImageSrc(imageUrl);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Fetched from API"
          style={{
            width: `${props.width}px`,
            height: `${props.height}px`,
            objectFit: "cover",
          }}
        />
      ) : (
        <img
          src={arrow}
          alt="Loading..."
          style={{
            width: `${props.width}px`,
            height: `${props.height}px`,
            objectFit: 'contain',
          }}
        />
      )}
    </>
  );
};

export default ApiImage;
