import {  useState, useEffect } from "react";
import axios from "axios";
import ItemCardSmall from "./ItemCardSmall";
import SeeAllBtn from "../component/SeeAllBtn";

function MyPostItemContainer(props) {
  const [myPostsData, setMyPostsData] = useState([]);

  {
    /*Feetch My post data */
  }
  const fetchMyPostsData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:8081/api/v1/post/getMyPosts",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const info=response.data;
      setMyPostsData(info);

    } catch (err) {
      console.error("Failed to fetch my posts data:", err);
    }
  };

  useEffect(() => {
      fetchMyPostsData();
    }, []);

  return (
    <>
      <div className="d-flex flex-wrap bg-white h-50 border p-3">
        <h3 className="fs-4">{props.division}</h3>
        <div className="item-container w-100 d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-row pt-2">
            <div className="d-flex flex-row w-100">
              {myPostsData.map((item) => (
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
            <div className="row">
              {myPostsData.length === 0 ? (
                <h5 className="text-danger">Items not found</h5>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="see-all-btn d-flex justify-content-center align-items-center">
            <SeeAllBtn navigateTo={props.navigateTo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPostItemContainer;
