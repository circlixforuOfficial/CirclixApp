import { React, useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import ItemCardSmall from "./ItemCardSmall";

function ExploreView(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const keywordFromURL = queryParams.get("keyword") || "";

  const [searchKeyword, setSearchKeyword] = useState(keywordFromURL);
  const [exploreData, setExploreData] = useState([]);

  {
    /*Fetch all post data */
  }
  const fetchExploreData = async () => {
    try {
      const token = localStorage.getItem("token");
      let response;

      if (keywordFromURL.trim()) {
        response = await axios.get(
          `http://localhost:8081/api/v1/post/item_Type?type=${encodeURIComponent(keywordFromURL.trim())}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        response = await axios.get(
          "http://localhost:8081/api/v1/post/publicWall",
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setExploreData(response.data);
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
  }, []);

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
          <div className="d-flex flex-wrap py-4 px-3 w-100 vh-100 border rounded-4">
            <div className="container py-3 px-0">
              <div className="row">
                {exploreData.map((item) => (
                  <ItemCardSmall
                    key={"explore" + item.postID}
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
                    parentType="explore"
                  />
                ))}
              </div>
              <div className="row">
                {exploreData.length===0?<h5 className="text-danger">Filtered items not found</h5>:<></>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreView;
