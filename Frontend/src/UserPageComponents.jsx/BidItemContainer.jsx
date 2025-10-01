import { React, useState, useEffect } from "react";
import axios from "axios";
import ItemCardSmall from "./ItemCardSmall";
import SeeAllBtn from "../component/SeeAllBtn";

function BidItemContainer(props) {
  const [bidData, setBidData] = useState([]);

  {
    /*Fetch bid data */
  }
  const fetchBidData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:8087/api/v1/bid/getMyBids",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setBidData(response.data);
    } catch (err) {
      console.error("Failed to fetch bid data:", err);
    }
  };

  useEffect(() => {
    fetchBidData();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap bg-white h-50 border rounded-top-4 p-3">
        <h3 className="fs-4">{props.division}</h3>
        <div className="item-container w-100 d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-row pt-2">
            <div className="d-flex flex-row w-100">
              {bidData.map((item) => (
                <ItemCardSmall
                  key={"bid" + item.postID}
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
                  parentType="bids"
                />
              ))}
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

export default BidItemContainer;
