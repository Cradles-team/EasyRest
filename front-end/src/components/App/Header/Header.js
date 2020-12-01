import React from "react";
import {NavLink} from "react-router-dom"
import {HeaderWrapper, LinkWrapper} from "./Header.styled";

function Header(props) {
    return (
        <HeaderWrapper>
            <LinkWrapper>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/restaurants">Restaurants</NavLink></li>
                    <li><NavLink to="/product">Product</NavLink></li>
                </ul>
            </LinkWrapper>
        </HeaderWrapper>
    )
}

export default Header;