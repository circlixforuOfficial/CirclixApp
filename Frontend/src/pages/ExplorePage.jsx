import UserNavbar from "../headerComponents/UserNavbar";
import ExploreView from "../UserPageComponents.jsx/ExploreView";
import UserFooter from "../footerSection/UserFooter";


function ExplorePage(props) {
    
    return(
        <>
        <UserNavbar/>
        <ExploreView/>
        <UserFooter/>
        </>
    );
}

export default ExplorePage;