import { React, useState, useEffect } from "react";
import axios from "axios";
import ItemCardSmall from "./ItemCardSmall";

function BidsForMeView() {

  const [bidsForMeData, setBidsForMeData] = useState([]);

    {
    /*Fetch bid data */
  }
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
      <div>
        <div>
          <div className="d-flex ps-5 pt-4 flex-column border-top">
            <h2 className="fs-2 ms-1">Bids For My Posts</h2>
          </div>
          <div className="d-flex flex-wrap py-4 px-5 w-100 vh-100 border rounded-4">
            {bidsForMeData.map((item) => (
                <ItemCardSmall
                  key={"bidsForMe" + item.post.postID}
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
      </div>
    </>
  );
}

export default BidsForMeView;
