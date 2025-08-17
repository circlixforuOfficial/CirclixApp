import React from "react";

import UserNavbar from "../headerComponents/UserNavbar";
import ItemDetailView from "../UserPageComponents.jsx/ItemDetailView";
import UserFooter from "../footerSection/UserFooter";

function ItemFullDetail(params) {
    
    return(
        <>
        <UserNavbar/>
        <ItemDetailView/>
        <UserFooter/>
        </>
    );
}

export default ItemFullDetail;