import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  background-color: #323232;
  width: 100%;
  color: white;

  > div > p {
    font-size: 24px;
    margin: 40px 0 0 30px;
  }
`;

export const ERIcon = styled.div`
  font-family: 'Rochester';
  color: white;
  font-size: 80px;
  margin: 0 0 0 30px;
`;

export const SocialMedia = styled.div`
  margin-left: 450px;

  > a > img {
    margin-top: 20px;
    margin-left: 60px;
  }
`;
