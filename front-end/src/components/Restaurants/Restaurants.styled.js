import styled from "styled-components";

export const RestaurantsWrapper = styled.div`
  max-width: 1200px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: auto;
  min-height: calc(100vh - 238px);

  @media (max-width: 768px) {
    padding: 0 30px;
  }
  
  > a {
    text-decoration: none;
    color: black;
    font-size: 30px;
    font-weight: normal;

    @media (max-width: 425px) {
      margin: 0 auto;
    }
  }
`;

export const RestaurantsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`;
