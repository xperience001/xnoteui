import React from 'react';
import logo from "./logo.jpg";
import "./Header.css"
// import { Link } from "react-router-dom";


function Header() {
    return (
        <nav className="Header" >
            {/* <Link>
                <img className="Header__logo" src={logo} alt="LOGO" />
            </Link> */}
            <div>
                <img className="Header__logo" src={logo} alt="LOGO" />
            </div>
            <div className="Header__search">
                <input type="text" default text="search post" className="Header__searchInput" />
            </div>
            <div className="Header__profile">
                <span>User Profile</span>
                <span>Olawale Hassan</span>
            </div>
            
        </nav>
    )
}

export default Header
