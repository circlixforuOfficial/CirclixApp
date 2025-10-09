import React from "react";

function ServicesSection() {
  return (
    <>
      <div>
        <div className="container px-5 py-5" id="featured-3">
        <h2 id="scrollspyHeading3" className="display-4">Services</h2>
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
                src="src\assets\bidding-system.png"
                style={{ width: "160px",height:"170px" }}
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
                src="src\assets\security-authentication.png"
                style={{ width: "160px",height:"170px" }}
              ></img>
            </div>
          </div>

          <div className="m-5 p-3 d-flex flex-sm-row flex-lg-column shadow-lg">
            <div className="px-3">
              <h3 className="fs-2 text-body-emphasis text-center">
                Clear Item Details
              </h3>
              <ul>
                <li>User posted item, bids placed info.</li>
                <li>Real time date-time detail updating.</li>
                <li>Item status update.</li>
              </ul>
            </div>
            <div className="d-flex mx-3 py-4 flex-wrap justify-content-center">
              <img
                src="src\assets\details.png"
                style={{ width: "160px",height:"170px" }}
              ></img>
            </div>
          </div>

          {/*sms service detail cards*/}
          <div className="m-5 p-3 d-flex flex-sm-row flex-lg-column shadow-lg">
            <div className="px-3">
              <h3 className="fs-2 text-body-emphasis text-center">
                SMS Service Gateway
              </h3>
              <ul>
                <li>Easy Communocation</li>
                <li>Real time SMS updating.</li>
                <li>Secure Communication</li>
              </ul>
            </div>
            <div className="d-flex mx-3 py-4 flex-wrap justify-content-center">
              <img
                src="src\assets\sms gateway.png"
                style={{ width: "160px",height:"170px" }}
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
 