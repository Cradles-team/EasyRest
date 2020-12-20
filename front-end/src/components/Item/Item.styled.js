import styled from 'styled-components';
import {Collapse} from "antd";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
`;

export const ItemHero = styled.div`
  width: 1920px;
  height: 675px;
  background-size: cover;
  background-repeat: round;
  display: flex;
  align-items: flex-end;
`;

export const CollapseSection = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 32px;
  justify-content: space-around;
  line-height: 50px;
  margin-top: 10px;
`;

export const ScheduleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const AddressSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const RouteSection = styled.p`
  font-size: 36px;
`;

export const OverrideCollapse = styled(Collapse)`
  margin: 25px 0 0 15px;
  cursor: pointer;
`;