import { React, useEffect, useState } from "react";
import axios from "axios";

function CarouselImages(props) {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);

  const fetchImage1 = async () => {
    try {
      const token = localStorage.getItem("token");
      const image = await axios.get(props.image1, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "blob",
      });
      const imageUrl1 = URL.createObjectURL(image.data);
      setImg1(imageUrl1);
    } catch (e) {
      console.error("Image fetch error:", e);
    }
  };
  const fetchImage2 = async () => {
    try {
      const token = localStorage.getItem("token");
      const image = await axios.get(props.image2, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "blob",
      });
      const imageUrl2 = URL.createObjectURL(image.data);
      setImg2(imageUrl2); 
    } catch (e) {
      console.error("Image fetch error:", e);
    }
  };

  useEffect(() => {
    fetchImage1();
    fetchImage2();
  }, [props.image1, props.image2]);

  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        style={{ height: "230px" }}
      >
        <div className="carousel-inner d-flex align-items-center">
          <div className="d-flex justify-content-center align-items-center carousel-item active">
            <img
              src={img1}
              className="my-3"
              alt="Item image 1"
              style={{ height: "200px" }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center carousel-item active">
            <img
              src={img2}
              className="my-3"
              alt="Item image 1"
              style={{ height: "200px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev bg-success"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-success"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CarouselImages;
