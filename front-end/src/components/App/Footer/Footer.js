import React from "react";
import {
  CreatedBy,
  DownloadSection,
  ERIcon,
  FooterContent,
  FooterDownloadButton,
  FooterWrapper, PrimaryInfo,
  SocialMedia
} from "./Footer.styled";
import twitter from "../../../images/twitter.png";
import instagram from "../../../images/instagram.png";
import facebook from "../../../images/facebook.png";
import appstore from "../../../images/downloadOnTheAppStore.png";
import googleplay from "../../../images/getItOnGooglePlay.png";

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <PrimaryInfo>
          <ERIcon>EasyRest</ERIcon>
          <CreatedBy>Created by Cradles Team</CreatedBy>
        </PrimaryInfo>
        <SocialMedia>
          <p>Ми у соціальних мережах</p>
          <a href="#">
            <img src={instagram} alt="instagram link"/>
          </a>
          <a href="#">
            <img src={twitter} alt="twitter link"/>
          </a>
          <a href="#">
            <img src={facebook} alt="facebook link"/>
          </a>
        </SocialMedia>
        <DownloadSection>
          <a href="#">
            <FooterDownloadButton src={appstore} />
          </a>
          <a href="#">
            <FooterDownloadButton src={googleplay} />
          </a>
        </DownloadSection>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
