import { React, useState, useEffect } from "react";
import axios from "axios";
import ItemCardSmall from "./ItemCardSmall";
import SeeAllBtn from "../component/SeeAllBtn";

function BidsForMeContainer(props) {
  const [bidsForMeData, setBidsForMeData] = useState([]);

  const fetchBidsForMeData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:8087/api/v1/bid/getBidsForMe",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setBidsForMeData(response.data);
    } catch (err) {
      console.error("Failed to fetch bids for me data:", err);
    }
  };

  useEffect(() => {
    fetchBidsForMeData();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap bg-white h-50 border rounded-top-4 p-3">
        <h3 className="fs-4">{props.division}</h3>
        <div className="item-container w-100 d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-row pt-2 ">
            <div className="d-flex flex-row w-100">
              {bidsForMeData.map((item,index) => (
                <ItemCardSmall
                  key={"bidsForMe" + index}
                  itemId={item.post.postID}
                  category={item.post.itemType}
                  description={item.post.description}
                  bidLimit={item.post.bidLimit}
                  startDate={item.post.startDate}
                  startTime={item.post.startTime}
                  endDate={item.post.endDate}
                  endTime={item.post.endTime}
                  image1={item.post.image1Url}
                  image2={item.post.image2Url}
                  user={item.post.user}
                  parentType="bidsforme"
                />
              ))}
            </div>
            <div className="row">
              {bidsForMeData.length === 0 ? (
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

export default BidsForMeContainer;
