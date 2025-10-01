import { React, useState, useEffect } from "react";
import axios from "axios";
import ItemCardSmall from "./ItemCardSmall";
import CreatePostModal from "./CreatePostModal";

function MyPostView() {

  const [myPostData, setMyPostData] = useState([]);

  {
    /*Fetch my post data */
  }
  const fetchMyPostData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:8081/api/v1/post/getMyPosts",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMyPostData(response.data);
    } catch (err) {
      console.error("Failed to fetch my post data:", err);
    }
  };

  useEffect(() => {
    fetchMyPostData();
  }, []);

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
            {myPostData.map((item) => (
                <ItemCardSmall
                  key={"myPost"+item.postID}
                  itemId={item.postID}
                  category={item.itemType}
                  description={item.description}
                  bidLimit={item.bidLimit}
                  startDate={item.startDate}
                  startTime={item.startTime}
                  endDate={item.endDate}
                  endTime={item.endTime}
                  image1={item.image1Url}
                  image2={item.image2Url}
                  user={item.user}
                  parentType="mypost"
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPostView;
