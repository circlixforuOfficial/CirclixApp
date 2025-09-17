import { React, useState, useEffect } from "react";
import axios from "axios";
import ItemCardSmall from "./ItemCardSmall";
import SeeAllBtn from "../component/SeeAllBtn";

function BidItemContainer(props) {
  const testData = [
    {
      itemId: "1",
      itemName: "Laptop",
      category: "Electronics",
      description: "High-end gaming laptop",
      bidLimit: "5000",
      startDate: "2025-12-31",
      startTime: "23:59",
      endDate: "2025-12-31",
      endTime: "23:59",
    },
    {
      itemId: "2",
      itemName: "Chair",
      category: "Furniture",
      description: "Ergonomic office chair",
      bidLimit: "1500",
      startDate: "2025-12-31",
      startTime: "23:59",
      endDate: "2025-11-30",
      endTime: "18:00",
    },
    {
      itemId: "8",
      itemName: "Laptop",
      category: "Electronics",
      description: "High-end gaming laptop",
      bidLimit: "5000",
      startDate: "2025-12-31",
      startTime: "23:59",
      endDate: "2025-12-31",
      endTime: "23:59",
    },
    {
      itemId: "9",
      itemName: "Chair",
      category: "Furniture",
      description: "Ergonomic office chair",
      bidLimit: "1500",
      startDate: "2025-12-31",
      startTime: "23:59",
      endDate: "2025-11-30",
      endTime: "18:00",
    },
    {
      itemId: "10",
      itemName: "Laptop",
      category: "Electronics",
      description: "High-end gaming laptop",
      bidLimit: "5000",
      startDate: "2025-12-31",
      startTime: "23:59",
      endDate: "2025-12-31",
      endTime: "23:59",
    },
    {
      itemId: "11",
      itemName: "Chair",
      category: "Furniture",
      description: "Ergonomic office chair",
      bidLimit: "1500",
      startDate: "2025-12-31",
      startTime: "23:59",
      endDate: "2025-11-30",
      endTime: "18:00",
    },
  ];

  const [bidData, setBidData] = useState();

  {
    /*Fetch bid data */
  }
  const fetchBidData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/user/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setBidData(data);
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
          <div className="d-flex flex-row overflow-hidden">
            <div className="d-flex flex-row w-100">
              {testData.map((item) => (
                <ItemCardSmall
                  key={item.itemId}
                  itemId={item.itemId}
                  itemName={item.itemName}
                  category={item.category}
                  description={item.description}
                  bidLimit={item.bidLimit}
                  endDate={item.endDate}
                  endTime={item.endTime}
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
