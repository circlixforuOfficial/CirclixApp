import React from "react";
import Navbar from '../headerComponents/navbar';
import UserCards from "../UserPageComponents.jsx/UserCards";
import FooterSection from "../footerSection/FooterSection";

function UserPage() {
    
    return(
        <>
        <Navbar/>
        <UserCards/>
        <FooterSection/>
        </>
    );
}

export default UserPage;