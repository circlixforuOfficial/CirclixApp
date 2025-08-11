import React from "react";

import ItemCardSmall from "./ItemCardSmall";
import ItemsModal from "./ItemsModal";
import UserProfileCard from "./UserProfileCard";

function UserCards(props) {
  return (
    <>
      <div>
        <div className="d-flex flex-lg-row flex-sm-column overflow-hidden">
          <div className="w-100 d-flex flex-lg-row flex-sm-column">
            <UserProfileCard
              userName="Kisame"
              fName="Hoshigaki"
              lName="Kisame"
              nic="12345"
              address="kirigakure"
              dob="01/01/1990"
              tpNumber="01234"
              email="samehada@akatsuki.com"
            />
            {/*user Item list */}
            <div className="h-100 d-flex flex-column bg-dark rounded-4 flex-grow-1">
              <div className="d-flex flex-wrap bg-white h-50 border rounded-top-4 p-3">
                <h3 className="fs-4">Purchased</h3>
                <div className="w-100 d-flex flex-row justify-content-between align-items-center">
                  <div className="">
                    <ItemCardSmall itemName="item"/>
                  </div>
                  <ItemsModal id="Purchased"/>
                </div>
              </div>
              <div className="d-flex flex-wrap bg-white h-50 border rounded-bottom-4 p-3">
                <h3 className="fs-4">Bids</h3>
                <div className="w-100 d-flex flex-row justify-content-between align-items-center">
                  <div className="">
                    <ItemCardSmall itemName="item"/>
                  </div>
                  <ItemsModal id="Bids"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*items */}
        <div className="d-flex ps-5 pt-4 flex-column border rounded-4">
          <h2 className="fs-2">Explore</h2>
          <form className="d-flex flex-row">
            <input
              className="form-control w-25"
              type="text"
              placeholder="search by filter"
            />
            <button className="btn bg-primary">Search</button>
          </form>
          <div className="d-flex flex-wrap pt-3">
            <ItemCardSmall itemName="Item"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCards;
