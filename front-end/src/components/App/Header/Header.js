import React from "react";
import {NavLink} from "react-router-dom"
import logo from "../../../images/EasyRest.png"
import {HeaderWrapper, LinkWrapper, Logo, LogoWrapper} from "./Header.styled";

function Header(props) {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <NavLink to="/"><Logo src={logo} alt="logo"/></NavLink>
            </LogoWrapper>
            <LinkWrapper to="/restaurants">Restaurants</LinkWrapper>
            <LinkWrapper to="/product">Product</LinkWrapper>
        </HeaderWrapper>
    )
}

export default Header;