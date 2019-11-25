import React from "react";
import header from "./Header.module.css";
import {NavLink} from "react-router-dom"
import logo from "../../images/EasyRest.jpg"
import google from "../../images/getItOnGooglePlay.jpg"
import apple from "../../images/downloadOnTheAppStore.jpg"

function Header(props) {
    return (<header className={header.header}>
        <div className={header.logo}>
            <NavLink to="/home"><img src={logo} alt="logo"/></NavLink>
        </div>
        <NavLink className={header.forUsers} to="/forUsers">For Users</NavLink>
        <NavLink className={header.forRestaurants} to="/forRestaurants">For Restaurants</NavLink>
    </header>)
}

export default Header;