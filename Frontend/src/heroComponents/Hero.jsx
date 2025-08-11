import React from "react";
import Clipart from "../component/Clipart";
import IntroContent from "../component/IntroContent";

function Hero() {
  return (
    <>
      <div className="main-bg content-container pb-sm-0 p-lg-5">
        <div className="hero-content pe-4">
          <div className="p-4 pb-0 pt-lg-5 pb-sm-5 align-items-center">
            <h1
              id="scrollspyHeading1"
              className="display-4 fw-bold lh-1 text-body-emphasis"
            >
              Circlix
            </h1>
            <IntroContent textContent="Building Bridges For Reusage" />
            <p class="lead">
              User friendly marketplace for pre-owned goods with "Circular
              Economy" concept to gradually increase living standards of the
              society.
            </p>
            <div className="d-flex flex-row">
              <form action="/login">
                <button className="btn bg-primary btn-lg px-4 mb-2 me-2">
                  Sign Up
                </button>
              </form>
              <button className="btn bg-white btn-lg px-4 mb-2 me-2">
                Learn more...
              </button>
            </div>
          </div>
        </div>
        <Clipart
          source="src\assets\digital-products.png"
          altText="Shopping Items"
        />
      </div>
    </>
  );
}

export default Hero;
