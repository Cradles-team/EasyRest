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
        <AppNav/>
    </header>)
}

function AppNav(props) {
    return (
        <div className={header.appNav}>
            <div className={header.google}>
                <a href="https://play.google.com/store/apps/details?id=com.glovo&referrer=adjust_reftag%3DcVjC6ekKhTcjV%26utm_source%3DHomepage%2B-%2BAndroid"><img src={google} alt="google"/></a>
            </div>
            <div className={header.apple}>
                <a href="https://apps.apple.com/app/id951812684?mt=8"><img src={apple} alt="apple"/></a>
            </div>
        </div>

    )
}

export default Header;