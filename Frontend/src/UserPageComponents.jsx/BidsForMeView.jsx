import { React, useState, useEffect } from "react";
import axios from "axios";
import ItemCardSmall from "./ItemCardSmall";

function BidsForMeView(props) {

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
  ];

  const [bidsForMeData, setBidsForMeData] = useState(
      {
        itemId: "",
        itemName: "",
        category: "",
        description: "",
        bidLimit: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
      }
    );

    {
    /*Fetch bid data */
  }
  const fetchBidsForMeData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/user/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setBidsForMeData(data);
    } catch (err) {
      console.error("Failed to fetch bid data:", err);
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
                  parentType="bidsforme"
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BidsForMeView;
