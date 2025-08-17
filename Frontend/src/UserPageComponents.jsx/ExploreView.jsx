import React from "react";

import ItemCardSmall from "./ItemCardSmall";

function ExploreView(props) {
  return (
    <>
      <div>
        <div>
          <div className="d-flex ps-5 pt-4 flex-column border-top">
            <h2 className="fs-2 ms-1">Explore</h2>
          </div>
          <div className="d-flex flex-wrap py-4 px-5 w-100 vh-100 border rounded-4">
            <ItemCardSmall itemName="item"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreView;