import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const navbarData = [
    { title: "Compass", path: "/Compass" },
    { title: "Explore", path: "/explore" },
    { title: "Academy", path: "/" },
    { title: "NFTs", path: "/nfts" },
    { title: "For Projects", path: "/projects" },
]

const Sidebar = () => {
    const selectedRoute = window.location.pathname;
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
    };

    return (
        <div className="nav-full-container">
            <div id="nav">
                <div id="logoo">
                    <Link to="/">
                        <img className="w-24" src='https://www.intract.io/logo/intract_text.svg' alt="logo" />
                    </Link>
                </div>



                <div id="nav-div">

                    <ul id="navbar" className={clicked ? "active" : ""}>
                        {navbarData.map((element, index) => {
                            return (
                                <li key={index} >
                                    <Link
                                        className={element.path === selectedRoute ? "selected" : ""} to={element.path} >
                                        {element.title}
                                    </Link>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>

                <div className="nav-right-div">

                    <div className="nav-input">
                        <div className="input-search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search for ecosystems, trending quests etc." />
                        </div>
                    </div>
                    <div className="television">
                        <img src="https://www.intract.io/assets/broadcast_or-04af786c.svg" alt="broadcast" />
                    </div>
                    <div className="sign-in">
                        <button>Sign In</button>
                    </div>

                    <div id="mobile" onClick={handleClick}>
                        <i className={
                            !clicked ? "fi fi-br-menu-burger" : "fi fi-br-cross"
                        }></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;