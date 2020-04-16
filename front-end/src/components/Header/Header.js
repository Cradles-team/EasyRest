import React from "react";
import header from "./Header.module.css";
import {NavLink} from "react-router-dom"
import logo from "../../images/EasyRest.png"

function Header(props) {
    return (<header className={header.header}>
        <div className={header.logo}>
            <NavLink to="/home"><img src={logo} alt="logo"/></NavLink>
        </div>
        <NavLink className={header.restaurants} to="/restaurants">Restaurants</NavLink>
        <NavLink className={header.product} to="/product">Product</NavLink>
    </header>)
}

export default Header;