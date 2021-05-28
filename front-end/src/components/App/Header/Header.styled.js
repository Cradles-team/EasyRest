import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #353434;
  width: 100%;
  font-weight: bold;
  height: 66px;
  position: fixed;
  top: 0;
  padding-top: 9px;
  z-index: 99;

  @media (max-width: 425px) {
    padding-top: 17px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export const LinkWrapper = styled.div`

  > ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    font-size: 30px;
    width: 100%;
    font-weight: 300;
    margin: 0;
    padding: 0;

    @media (max-width: 425px) {
      font-size: 20px;
    }
  }

  > ul > li > a {
    text-decoration: none;
    color: white;
  }
`;
