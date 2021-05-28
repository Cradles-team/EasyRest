import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #323232;
  width: 100%;
  color: white;

  > div > p {
    font-size: 24px;
    margin: 40px 0 0 30px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    
  }`;

export const PrimaryInfo = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 30px 0 30px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ERIcon = styled.div`
  font-family: "Rochester", sans-serif;
  color: white;
  font-size: 80px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin: 0;
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const CreatedBy = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  @media (max-width: 768px) {
    margin-top: auto;
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const SocialMedia = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  > a > img {
    margin: 0 30px;
  }
`;

export const DownloadSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-bottom: 30px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const FooterDownloadButton = styled.img`
  width: 260px;
  height: 105px;
`;
