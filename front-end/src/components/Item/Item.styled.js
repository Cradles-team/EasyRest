import styled from "styled-components";
import { Collapse } from "antd";

export const ItemWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

export const ItemTitle = styled.div`
  width: 283px;
  height: 129px;
  border-radius: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin: 0 0 36px 22px;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 175px;
    height: 80px;
    font-size: 20px;
  }
`;

export const ItemHero = styled.div`
  width: 100%;
  height: 491px;
  background-size: cover;
  background-repeat: round;
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    height: 380px;
  }
`;

export const CollapseSection = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 32px;
  justify-content: space-around;
  line-height: 50px;
  margin-top: 10px;
`;

export const CollapseItem = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const RouteSection = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 36px;
  line-height: 50px;
  margin-top: 37px;
`;

export const OverrideCollapse = styled(Collapse)`
  margin: 25px 0 0 15px;
`;
