import React from "react";

import ItemCardSmall from "./ItemCardSmall";
import CreatePostModal from "./CreatePostModal";

function MyPostView(props) {
  return (
    <>
      <div>
        <div>
          <div className="d-flex justify-content-between px-5 py-4 flex-row border-top">
            <h2 className="fs-2 ms-1">My Posts</h2>
            <div className="d-flex align-items-center p-2 border rounded-4">
              <h2 className="fs-5 me-4">Create Post</h2>
              <CreatePostModal />
            </div>
          </div>
          <div className="d-flex flex-wrap py-4 px-5 w-100 vh-100 border rounded-4">
            <ItemCardSmall itemName="item" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPostView;
