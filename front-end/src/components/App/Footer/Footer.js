import React from "react";
import {ERIcon, FooterWrapper, SocialMedia} from "./Footer.styled";
import twitter from "../../../images/twitter.png";
import instagram from "../../../images/instagram.png";
import facebook from "../../../images/facebook.png";

function Footer() {
    return (
        <FooterWrapper>
            <div>
                <ERIcon>EasyRest</ERIcon>
                <p>Created by Cradles Team</p>
            </div>
            <SocialMedia>
                <p>Ми у соціальних мережах</p>
                <a href="#"><img src={instagram}/></a>
                <a href="#"><img src={twitter}/></a>
                <a href="#"><img src={facebook}/></a>
            </SocialMedia>
        </FooterWrapper>
    )
}

export default Footer;