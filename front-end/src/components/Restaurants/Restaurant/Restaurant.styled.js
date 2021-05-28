import styled from "styled-components";

export const RestaurantWrapper = styled.div`
  width: 334px;
  height: 223px;
  border-radius: 30px;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const RestaurantName = styled.div`
  height: 50px;
  background-color: #e5e5e5;
  border-radius: 50px;
  width: 100%;
  text-align: center;
`;
