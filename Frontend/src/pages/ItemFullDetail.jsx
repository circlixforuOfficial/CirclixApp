import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserNavbar from "../headerComponents/UserNavbar";
import ItemDetailView from "../UserPageComponents.jsx/ItemDetailView";
import UserFooter from "../footerSection/UserFooter";

function ItemFullDetail() {
  const { id, type } = useParams();
  const [item, setItem] = useState(0);

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
      itemId: "3",
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
      itemId: "4",
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
      itemId: "5",
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
      itemId: "6",
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

  useEffect(() => {
    const foundItem = testData.find((item) => item.itemId === id);
    if (foundItem) {
      setItem(foundItem);
    }
  }, [id]);

  return (
    <>
      <UserNavbar />
      <ItemDetailView
        itemId={item.itemId}
        itemName={item.itemName}
        category={item.category}
        description={item.description}
        bidLimit={item.bidLimit}
        startDate={item.startDate}
        startTime={item.startTime}
        endDate={item.endDate}
        endTime={item.endTime}
        parentComponent={type}
      />
      <UserFooter />
    </>
  );
}

export default ItemFullDetail;