import React from "react";

import arrow from "../assets/arrow-right-circle.svg";

function ItemDetailView(props) {
  return (
    <>
      <div>
        <div>
          <div className="d-flex ps-5 pt-4 flex-column border-top">
            <h2 className="fs-2 ms-1">Item Deatails</h2>
          </div>
          <div className="d-flex flex-row py-4 px-5 w-100 vh-100 border rounded-4">
            <div className="col">
              <div className="d-flex justify-content-evenly flex-sm-column flex-lg-row">
                <img
                  src={arrow}
                  className="my-3"
                  alt="Item image 1"
                  style={{ width: "170px" }}
                />
                <img
                  src={arrow}
                  className="my-3"
                  alt="Item image 1"
                  style={{ width: "170px" }}
                />
              </div>
            </div>
            <div className="col">
              <div className="d-flex ">
                <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border-0">
                  <li className="list-group-item text-start border-0">
                    Item Name
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Category
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Description
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid limit
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid Status
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid start Date
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid start Time
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid End Date
                  </li>
                  <li className="list-group-item  text-start border-0">
                    Bid End Time
                  </li>
                </ul>
                <ul className="list-group list-group-flush  d-flex flex-wrap justify-content-center border-0">
                  <li className="list-group-item text-start border-0">
                    {": "}itemName
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "}Category
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "}Description
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "}bidLimit
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "} Status
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "} Status
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "} Status
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "} Status
                  </li>
                  <li className="list-group-item  text-start border-0">
                    {": "} Status
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailView;

{/*
  {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "NIC", name: "nic" },
                { label: "Date of Birth", name: "DOB", type: "date" },
                { label: "Address", name: "address" },
                { label: "Email", name: "email", type: "email" },
                { label: "Telephone", name: "tpNumber" },
              ].map(({ label, name, type = "text" }) => (
                <div className="mb-3" key={name}>
                  <label className="form-label">{label}</label>
                  <input
                    type={type}
                    className="form-control"
                    name={name}
                    value={userData[name]}
                    onChange={handleChange}
                  />
                </div>
              ))}
  
  */}
