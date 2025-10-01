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
              {bidsForMeData.map((item) => (
                <ItemCardSmall
                  key={"bidsForMe" + item.postID}
                  itemId={item.postID}
                  category={item.category}
                  description={item.description}
                  bidLimit={item.bidLimit}
                  startDate={item.startDate}
                  startTime={item.startTime}
                  endDate={item.endDate}
                  endTime={item.endTime}
                  image1={item.image1Url}
                  image2={item.image2Url}
                  user={item.user}
                  parentType="bidsforme"
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

export default BidsForMeContainer;
