import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderWrapper = styled.header`
    position: relative;
    grid-area: h;
    background-color: #ffcc1b;
    font-size: 30px;
    text-align: center;
    width: auto;
    font-weight: bold;
`;

export const LogoWrapper = styled.div`
    position: absolute;
    margin-left: 30px;
    `;

export const Logo = styled.img`
    height: 48px;
    width: 172px;
`;

export const LinkWrapper = styled(NavLink)`
    margin: 0 100px;
    text-decoration: none;
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    transition-duration: 0.3s;
    `;