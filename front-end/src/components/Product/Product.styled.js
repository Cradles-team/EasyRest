import styled from 'styled-components';
import {Button} from "antd";

export const ProductWrapper = styled.div`
  min-height: calc(100vh - 238px);
`;

export const ProductHeroSection = styled.div`
  display: flex;
`;

export const ProductArea = styled.div`
  margin-left: 200px;
  margin-top: 100px;
`;

export const ProductTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: lighter;
  font-size: 40px;
  margin: 0 0 40px 0;
`;

export const ProductDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  width: 600px;
  font-size: 22px;
`;

export const BuyForm = styled.div`
  width: 600px;
  height: 400px;
  background-color: #dbdbdb;
  border-radius: 20px;
  margin-left: 200px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
`;

export const BuyButton = styled(Button)`
  width: 200px;
`;

export const Price = styled.p`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
`;

export const ComponentsTitle = styled.h1`
  margin: 100px 0 80px 200px;
  font-weight: bolder;
`;

export const Components = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const OneComponent = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-weight: 500;
  }
`;

export const OneComponentDescription = styled.div`
  font-size: 24px;
  width: 250px;
  text-align: center;
`;

export const ComponentsWrapper = styled.div`
  margin-bottom: 50px;
`;