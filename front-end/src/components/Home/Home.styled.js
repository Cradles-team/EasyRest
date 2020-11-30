import styled from 'styled-components';
import censors from '../../images/censors.jpg';

export const HomeWrapper = styled.div`
    grid-area: m;
    `;

export const HeroSection = styled.div`
    width: 1920px;
    height: 1000px;
    background-image: url(${censors});
    background-size: 100%;
    `;

export const HeroDescription = styled.div`
    text-align: center;
    padding-top: 400px;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    color: white;
    `;

export const ForAndroid = styled.div`
    display: inline-block;
    height: 900px;
    width: 400px;
    margin-left: 100px;
    `;

export const ForAndroidImg = styled.img`
    height: 900px;
    width: 400px;
`;

export const ForIOS = styled.div`
    display: inline-block;
    height: 900px;
    width: 400px;
    margin-left: 50px;
    `;

export const ForIOSImg = styled.img`
    height: 900px;
    width: 400px;
`;

export const AppDescription = styled.div`
    display: inline-block;
    margin-left: 100px;
    vertical-align: top;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    margin-top: 400px;
    `;

export const NavigationWrapper = styled.div`
    position: absolute;
    margin-top: 100px;
    `;

export const GooglePlay = styled.div`
    display: inline-block;
    margin: 0 20px;
    `;

export const GooglePlayImg = styled.img`
    width: 323px;
    height: 125px;
    border-radius: 15px;
`;

export const AppStore = styled.div`
    display: inline-block;
    `;

export const AppStoreImg = styled.img`
    width: 323px;
    height: 125px;
    border-radius: 15px;
    `;