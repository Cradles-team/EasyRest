import styled from 'styled-components';

export const RestaurantsWrapper = styled.div`
  width: 1200px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: auto;
  min-height: calc(100vh - 238px);

  > a {
    text-decoration: none;
    color: black;
    font-size: 30px;
    font-weight: normal;
  }
`;