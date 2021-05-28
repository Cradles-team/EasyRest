import React from "react";
import {NavLink} from "react-router-dom"
import {HeaderContent, HeaderWrapper, LinkWrapper} from "./Header.styled";

function Header() {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <LinkWrapper>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/restaurants">Restaurants</NavLink></li>
                        <li><NavLink to="/product">Product</NavLink></li>
                    </ul>
                </LinkWrapper>
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header;