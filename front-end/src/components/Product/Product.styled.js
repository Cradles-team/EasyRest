import styled from "styled-components";
import { Button } from "antd";

export const ProductWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const ProductHeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 92px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const ProductArea = styled.div`

`;

export const ProductTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    font-size: 28px;
  }
`;

export const ProductDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  width: 600px;
  font-size: 22px;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding-bottom: 20px;
  }

  @media (max-width: 425px) {
    max-width: 400px;
    font-size: 16px;
  }
`;

export const BuyForm = styled.div`
  width: 600px;
  height: 400px;
  background-color: #dbdbdb;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  @media (max-width: 425px) {
    max-width: 400px;
    max-height: 300px;
  }

  > a {
    text-decoration: none;
    font-size: 30px;
    font-weight: lighter;
    color: black;
    text-align: center;
  }
`;

export const BuyFormImg = styled.img`
  width: 550px;
  height: 300px;

  @media (max-width: 425px) {
    width: 350px;
    height: 190px;
  }
`;

export const BuyButton = styled(Button)`
  width: 200px;
`;

export const Price = styled.p`
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  margin-top: 20px;
`;

export const ComponentsTitle = styled.h1`
  margin: 100px 0 80px 200px;
  font-weight: bolder;

  @media (max-width: 768px) {
    margin: 20px 0 0 0;
    text-align: center;
  }
`;

export const Components = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  > span {
    @media (max-width: 768px) {
      transform: rotate(90deg);
    }
  }
`;

export const OneComponent = styled.div`
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 0;
  }

  > h1 {
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  
  > img {
    @media (max-width: 768px) {
      height: 200px;
    }
  }
`;

export const OneComponentDescription = styled.div`
  font-size: 24px;
  width: 250px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ComponentsWrapper = styled.div`
  margin-bottom: 50px;
`;
