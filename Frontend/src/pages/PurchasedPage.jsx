import React from "react";

import UserNavbar from "../headerComponents/UserNavbar";
import PuerchasedView from "../UserPageComponents.jsx/PurchasedView";
import UserFooter from "../footerSection/UserFooter";

function PurchasedPage(params) {
    
    return(
        <>
        <UserNavbar/>
        <PuerchasedView/>
        <UserFooter/>
        </>
    );
}

export default PurchasedPage;