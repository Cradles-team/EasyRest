import styled from "styled-components";
import censorsDark from "../../images/censorsDark.png";

export const HomeWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const HeroSection = styled.div`
  max-width: 100vw;
  height: 740px;
  background-image: url(${censorsDark});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    max-height: 400px;
  }

  @media (max-width: 425px) {
    max-height: 300px;
  }
`;

export const EasyRest = styled.div`
  font-family: "Rochester", sans-serif;
  color: white;
  font-size: 80px;
  text-align: center;
  padding: 176px 0 295px 0;

  @media (max-width: 768px) {
    padding: 100px 0 100px 0;
  }

  @media (max-width: 425px) {
    padding: 50px 0 50px 0;
    font-size: 60px;
  }
`;

export const HeroDescription = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const PopularRestaurants = styled.div`
  > h2 {
    margin: 50px 0 0 70px;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;

    @media (max-width: 425px) {
      font-size: 24px;
      line-height: 36px;
      margin: 20px 0 0 0;
      text-align: center;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0 124px 0;

  @media (max-width: 425px) {
    flex-wrap: wrap;
    margin: 40px 0;
  }
`;

export const LogoWrapper = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  border: 1px solid black;

  @media (max-width: 768px) {
    height: 90px;
    width: 90px;
  }

  @media (max-width: 425px) {
    height: 120px;
    width: 120px;
  }
`;

export const MobileAppSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ForAndroid = styled.div`
  height: 900px;
  width: 400px;

  @media (max-width: 768px) {
    height: 540px;
    width: 240px;
  }

  @media (max-width: 425px) {
    margin: 0 auto;
  }
`;

export const ForAndroidImg = styled.img`
  height: 900px;
  width: 400px;

  @media (max-width: 768px) {
    height: 540px;
    width: 240px;
  }
`;

export const AppDescription = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  max-width: 650px;
  margin-top: 100px;

  @media (max-width: 768px) {
    font-size: 30px;
    max-width: 450px;
    margin-top: 0;
  }

  @media (max-width: 425px) {
    margin: 0 auto;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DownloadButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DownloadButtonImg = styled.img`
  width: 323px;
  height: 125px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 135px;

  @media (max-width: 425px) {
    padding-top: 40px;
    margin: 0 auto;
  }
`;

export const IconSection = styled.div`
  max-width: 200px;
  font-size: 28px;

  @media (max-width: 768px) {
    max-width: 150px;
    font-size: 20px;
  }
`;
