import UserNavbar from "../headerComponents/UserNavbar";
import MyPostView from "../UserPageComponents.jsx/MyPostView";
import UserFooter from "../footerSection/UserFooter";

function MyPosts(params) {
    
    return(
        <>
        <UserNavbar/>
        <MyPostView/>
        <UserFooter/>
        </>
    );
}

export default MyPosts;