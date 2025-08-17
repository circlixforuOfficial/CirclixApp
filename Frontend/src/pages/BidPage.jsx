import React from "react";

import UserNavbar from "../headerComponents/UserNavbar";
import BidView from "../UserPageComponents.jsx/BidView";
import UserFooter from "../footerSection/UserFooter";


function BidPage(props) {
    
    return(
        <>
        <UserNavbar/>
        <BidView/>
        <UserFooter/>
        </>
    );
}

export default BidPage;