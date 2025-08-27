import { React, useState, useEffect } from "react";
import { useParams,useNavigate  } from "react-router-dom";
import axios from "axios";

import CreatePostModal from "./CreatePostModal";
import UserProfileCard from "./UserProfileCard";
import BidItemContainer from "./BidItemContainer";
import MyPostItemContainer from "./MypostItemContainer";
import BidsForMeContainer from "./BidsForMeContainer";
import arrow from "../assets/arrow-right-circle.svg";

function UserCards(props) {
  const { token } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "Kisame",
    lastName: "Hoshigaki",
    tpNumber: "123",
    address: "Kirigakure",
    DOB: "1960-10-10",
    email: "samehada@akatsuki.com",
    nic: "123",
    userProfile: "",
    myAvgRateValue:"3.333"
  });
  const [useImg, setUserImg] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  {
    /*Fetch user data */
  }
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("http://localhost:8080/api/v1/user/me", 
        {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(data);
      fetchUserImage(data.userProfile);
    } catch (err) {
      console.error("Failed to fetch user data:", err);
    }
  };

  //Fetch profile pic using URL
  const fetchUserImage = async (profileLink) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(profileLink, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: "blob", // if it's binary
      });
      const userImage = URL.createObjectURL(data);
      setUserImg(userImage);
    } catch (err) {
      console.error("Failed to fetch user image:", err);
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
    fetchUserData();
  }, []);

  return (
    <>
      <div className="user-page">
        <div>
          <div className="d-flex flex-lg-row flex-sm-column overflow-hidden">
            <div className="w-100 d-flex flex-lg-row flex-sm-column">
              <UserProfileCard
                userImg={useImg || arrow}
                userName={userData.firstName}
                fName={userData.firstName}
                lName={userData.lastName}
                nic={userData.nic}
                address={userData.address}
                dob={userData.DOB}
                tpNumber={userData.tpNumber}
                email={userData.email}
                userImage={userData.userProfile}
                onProfileUpdate={fetchUserData}
              />
              {/*user Item list */}
              <div className="h-100 d-flex flex-column bg-dark rounded-4 flex-grow-1">
                <BidItemContainer
                  division="Bids"
                  navigateTo="/bids"
                />
                <MyPostItemContainer
                  division="MyPosts"
                  navigateTo="/myposts" 
                />
              </div>
            </div>
          </div>
          <BidsForMeContainer
            division="Bids For My Posts"
            navigateTo="/bidsforme"
          />
        </div>
        {/*items */}
        <div className="d-flex flex-row border rounded-4">
          <div className="d-flex justify-content-center align-items-center p-3 col-6 border rounded-4">
            <h2 className="fs-2 me-4">Create Posts</h2>
            <CreatePostModal />
          </div>
          <div className=" h-100 py-3 ps-4 d-flex flex-column justify-content-center border rounded-4 col-6">
            <div className="d-flex flex-row mb-2 justify-content-center">
              <h2 className="fs-2 me-4">Explore</h2>
              <form action="/explore">
                <button className="btn btn-primary">
                  See all <img src={arrow} />
                </button>
              </form>
            </div>
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
              <button type="submit" className="btn bg-primary">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCards;
