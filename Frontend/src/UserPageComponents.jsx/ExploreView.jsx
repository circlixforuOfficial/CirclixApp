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
      console.log(token);
      
      const response= await axios.get("http://localhost:8081/api/v1/post/publicWall", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response.data);
      setExploreData(response.data)

    } catch (err) {
      console.error("Failed to fetch explore data:", err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // prevent form default submission
    if (searchKeyword.trim()) {
      console.log(searchKeyword);
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
              onSubmit={fetchExploreData}
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
            {exploreData.map((item) => (
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
