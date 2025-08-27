import React from "react";

import UserNavbar from "../headerComponents/UserNavbar";
import BidsForMeView from "../UserPageComponents.jsx/BidsForMeView";
import UserFooter from "../footerSection/UserFooter";

function BidsForMePage(params) {
    
    return(
        <>
        <UserNavbar/>
        <BidsForMeView/>
        <UserFooter/>
        </>
    );
}

export default BidsForMePage;