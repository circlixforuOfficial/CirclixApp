import React from "react";

function ServicesSection() {
  return (
    <>
      <div>
        <div className="container px-5 py-5" id="featured-3">
        <h2 className="display-4">Services</h2>
        <div className="d-flex flex-sm-column flex-lg-row">
  
          {/*service detail cards*/}
          <div className="m-5 p-3 d-flex flex-sm-row flex-lg-column shadow-lg">
            <div className="px-3">
              <h3 className="fs-2 text-body-emphasis text-center">
                Bidding System Handling
              </h3>
              <ul>
                <li>Real-time bidding for auction items.</li>
                <li>Notification for bid status and expiration.</li>
                <li>Bid cancellation and refund option.</li>
              </ul>
            </div>
            <div className="d-flex mx-3 py-4 flex-wrap justify-content-center">
              <img
                src="src\assets\digital-products.png"
                style={{ width: "160px" }}
              ></img>
            </div>
          </div>

          <div className="m-5 p-3 d-flex flex-sm-row-reverse flex-lg-column shadow-lg">
            <div className="px-3">
              <h3 className="fs-2 text-body-emphasis text-center">
                Security & Authetication
              </h3>
              <ul>
                <li>Token based secure login and session control.</li>
                <li>Role based access for admins and users.</li>
                <li>Data privacy and encrypted communication.</li>
              </ul>
            </div>
            <div className="d-flex mx-3 py-4 flex-wrap justify-content-center">
              <img
                src="src\assets\digital-products.png"
                style={{ width: "160px" }}
              ></img>
            </div>
          </div>

          <div className="m-5 p-3 d-flex flex-sm-row flex-lg-column shadow-lg">
            <div className="px-3">
              <h3 className="fs-2 text-body-emphasis text-center">
                Use Profile & Insights
              </h3>
              <ul>
                <li>Customizable user dashboards.</li>
                <li>Purchase & sale history.</li>
                <li>Engagement metrics and activity logs.</li>
              </ul>
            </div>
            <div className="d-flex mx-3 py-4 flex-wrap justify-content-center">
              <img
                src="src\assets\digital-products.png"
                style={{ width: "160px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ServicesSection;

<div className="content-container pb-sm-0 p-lg-5">
  <div className="hero-content pe-4">
    <div className="p-4 pb-0 pt-lg-5 pb-sm-5 align-items-center">
      <h3 className="fs-2 text-body-emphasis">Bidding System</h3>
    </div>
  </div>
  <div className=" p-5 m-4 mb-sm-0 shadow-lg">
    <img src="" alt="" />
  </div>
</div>;
