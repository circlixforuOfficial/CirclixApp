import React from "react";

function AboutSection() {
  return (
    <>
      <div className="container px-5 py-5" id="featured-3">
        <div className="d-flex flex-row-reverse justify-content-lg-evenly">
          <div className="w-50 m-3 w-lg-75">
            <h2 className="display-4">About Us</h2>
            <p>
              We are 3rd year undergraduates of the USJ,FAS Department of
              Computer Science working for betterment of the society.
            </p>
          </div>
          <div className="d-flex mx-5 py-4 flex-wrap justify-content-center">
            <img
              src="src\assets\digital-products.png"
              style={{ width: "200px" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
