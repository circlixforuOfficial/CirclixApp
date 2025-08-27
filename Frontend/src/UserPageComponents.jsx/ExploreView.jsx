import { React, useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import ItemCardSmall from "./ItemCardSmall";

function ExploreView(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const keywordFromURL = queryParams.get("keyword") || "";

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

  const [searchKeyword, setSearchKeyword] = useState(keywordFromURL);
  const [exploreData, setExploreData] = useState({
    itemId: "",
    itemName: "",
    category: "",
    description: "",
    bidLimit: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  {
    /*Fetch all post data */
  }
  const fetchExploreData = async () => {
    try {
      const token = localStorage.getItem("token");
      const endpoint = keywordFromURL 
        ? `http://localhost:8080/api/v1/post/item_Type?type=${encodeURIComponent(
            keywordFromURL 
          )}`
        : "http://localhost:8080/api/v1/post/publicWall";

      const { data } = await axios.get(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setExploreData(data);
    } catch (err) {
      console.error("Failed to fetch explore data:", err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // prevent form default submission
    if (searchKeyword.trim()) {
      navigate(`/explore?keyword=${encodeURIComponent(searchKeyword.trim())}`);
    }
    window.location.reload();
  };

  useEffect(() => {
    fetchExploreData();
  }, [keywordFromURL ]);

  return (
    <>
      <div>
        <div>
          <div className="d-flex ps-5 pt-4 pb-4 flex-row justify-content-between border-top">
            <h2 className="fs-2 ms-1">Explore</h2>
            <form
              className="d-flex flex-row justify-content-center"
              onSubmit={handleSearch}
            >
              <input
                className="form-control w-50"
                type="text"
                placeholder="search by filter"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button type="submit" className="btn bg-primary">
                Search
              </button>
            </form>
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
                parentType="explore"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreView;

{
  /*
  import React, { useEffect, useState } from "react";
import axios from "axios";

const SecureImageRenderer = ({ imageId }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const token = localStorage.getItem("token"); // Or use context if you prefer
        const response = await axios.get(
          `http://localhost:8080/api/v1/image/${imageId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            responseType: "blob", // 👈 This is key
          }
        );

        const blobUrl = URL.createObjectURL(response.data);
        setImageSrc(blobUrl);
      } catch (err) {
        setError("Failed to load image");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imageId]);

  if (loading) return <p>Loading image...</p>;
  if (error) return <p>{error}</p>;

  return (
    <img
      src={imageSrc}
      alt="Fetched from API"
      style={{ maxWidth: "100%", borderRadius: "8px" }}
    />
  );
};

export default SecureImageRenderer;
 */
}
