import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CarouselImages from "../component/CarouselImages";

import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import AddBid from "./AddBid";
import EditBid from "./EditBid";
import CancelBid from "./CancelBid";

function ItemDetailView(props) {
  const { type, id } = useParams();
  const [item, setItem] = useState(0);
  const [fullItem, setFullItem] = useState(0);

  const fetchDetails = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    let endPoint;
    if (type === "mypost") {
      endPoint = "http://localhost:8081/api/v1/post/getMyPosts";
    } else if (type === "bids") {
      endPoint = "http://localhost:8087/api/v1/bid/getMyBids";
    } else if (type === "bidsforme") {
      endPoint = "http://localhost:8087/api/v1/bid/getBidsForMe";
    } else if (type === "explore") {
      endPoint = "http://localhost:8081/api/v1/post/publicWall";
    }

    try {
      const response = await axios.get(endPoint, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const details = response.data;

      const foundItem = details.find((entry) => {
        if (type === "mypost" || type === "explore") {
          return entry.postID.toString() === id;
        } else if (type === "bids" || type === "bidsforme") {
          return entry.post.postID.toString() === id;
        }
        return false;
      });

      if (foundItem) {
        setFullItem(foundItem);
        console.log(foundItem);
        if (type === "mypost") {
          const postDetails = foundItem;
          setItem(postDetails);
        } else if (type === "explore") {
          const postDetails = foundItem;
          setItem(postDetails);
        } else {
          const postDetails = foundItem.post;
          setItem(postDetails);
        }
      } else {
        console.warn("Item not found for ID:", id);
      }
    } catch (e) {
      console.error("Failed to fetch data:", e);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id, type]);

  const expiration = new Date(`${item.endDate}T${item.endTime}`);
  const now = new Date();
  const status = now > expiration ? "Expired" : "Active";

  return (
    <>
      <div>
        <div>
          <div className="d-flex ps-5 pt-4 flex-column border-top">
            <h2 className="fs-2 ms-1">Item Details</h2>
          </div>
          <div className="d-flex flex-lg-row flex-sm-column align-items-center gap-5 justify-content-center py-5 px-5 w-100 border rounded-4">
            <div className="col">
              <div className="d-flex justify-content-center">
                {/*carousel start*/}
                <CarouselImages image1={item.image1Url} image2={item.image2Url} />
                {/*carousel end*/}
              </div>
            </div>
            <div className="col d-flex flex-column justify-content-center">
              <div className="d-flex flex-column justify-content-center">
                {item.postID ? (
                  <>
                    <ul className="list-group list-group-flush d-flex flex-wrap justify-content-center border-0">
                      {[
                        { label: "Category", itemValue: item.itemType },
                        { label: "Description", itemValue: item.description },
                        { label: "Bid limit", itemValue: item.bidLimit },
                        { label: "Bid Status", itemValue: status },
                        { label: "Bid start Date", itemValue: item.startDate },
                        { label: "Bid start Time", itemValue: item.startTime },
                        { label: "Bid end Date", itemValue: item.endDate },
                        { label: "Bid end Time", itemValue: item.endTime },
                      ].map(({ label, itemValue }) => (
                        <div className="d-flex flex-row" key={label}>
                          <li
                            className="list-group-item text-start border-0"
                            style={{ width: "160px" }}
                          >
                            {label}
                          </li>
                          <li
                            className="list-group-item text-start border-0"
                            style={{ width: "200px" }}
                          >
                            {": "}
                            {itemValue}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-danger mt-3">Item not found.</p>
                )}
              </div>
              {/* Action Buttons */}
              <div className="mt-4 d-flex gap-3">
                {type === "mypost" && (
                  <>
                    <div className="d-flex gap-3">
                      <DeletePost itemId={item.postID} />
                      <EditPost
                        itemId={item.postID}
                        itemType={item.itemType}
                        description={item.description}
                        bidLimit={item.bidLimit}
                        startDate={item.startDate}
                        startTime={item.startTime}
                        endDate={item.endDate}
                        endTime={item.endTime}
                      />
                    </div>
                  </>
                )}
                {type === "bids" && (
                  <>
                    <EditBid itemId={item.postID} />
                    <CancelBid itemId={fullItem.bidID} />
                  </>
                )}
                {type === "bidsforme" && (
                  <div>
                    {item.postID ? (
                      <ul className="list-group list-group-flush d-flex flex-wrap justify-content-center border-0">
                        {[
                          {
                            label: "Bidder",
                            itemValue: fullItem.post.user.firstName,
                          },
                          {
                            label: "Bid placed date",
                            itemValue: fullItem.mybidedDay,
                          },
                          {
                            label: "Bid Placed time",
                            itemValue: fullItem.myBidedTime,
                          },
                        ].map(({ label, itemValue }) => (
                          <div className="d-flex flex-row" key={label}>
                            <li
                              className="list-group-item text-start border-0"
                              style={{ width: "160px" }}
                            >
                              {label}
                            </li>
                            <li
                              className="list-group-item text-start border-0"
                              style={{ width: "200px" }}
                            >
                              {": "}
                              {itemValue}
                            </li>
                          </div>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-danger mt-3">Item not found.</p>
                    )}
                    {status === "Expired" && fullItem && (
                      <ul className="list-group list-group-flush d-flex flex-wrap justify-content-center border-0 mt-3">
                        {[
                          {
                            label: "Bidded Amount",
                            itemValue: fullItem.biddedAmount,
                          },
                          {
                            label: "TP Number",
                            itemValue: fullItem.post.user.tpNumber,
                          },
                          {
                            label: "Address",
                            itemValue: fullItem.post.user.address,
                          },
                        ].map(({ label, itemValue }) => (
                          <div className="d-flex flex-row" key={label}>
                            <li
                              className="list-group-item text-start border-0"
                              style={{ width: "160px" }}
                            >
                              {label}
                            </li>
                            <li
                              className="list-group-item text-start border-0"
                              style={{ width: "200px" }}
                            >
                              {": "} {itemValue}
                            </li>
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
                {type === "explore" && <AddBid itemId={item.postID} />}
              </div>
              {/*End of conditional action buttons */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailView;
