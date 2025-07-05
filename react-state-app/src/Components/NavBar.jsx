import "./NavBar.css"
import { SearchBox } from "./SearchBox";

const NavBar=()=>{
    return(
        <div className="navbar-container">
            <a>Home</a>
            <a>Services</a>
            <a>About Us</a>
            <a>Contact Us</a>
            <SearchBox />
        </div>
    );
};

export{
    NavBar
};