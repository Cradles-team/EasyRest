import styled from 'styled-components';
import censorsDark from '../../images/censorsDark.png';

export const HomeWrapper = styled.div`
    grid-area: m;
    display: flex;
    flex-direction: column;
    `;

export const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 980px;
    background-image: url(${censorsDark});
    background-size: 100%;
    `;

export const EasyRest = styled.div`
    font-family: 'Rochester';
    color: white;
    font-size: 80px;
    margin-bottom: 300px;
`;

export const HeroDescription = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    color: white;
    `;

export const PopularRestaurants = styled.div`
    height: 450px;
    display: flex;
    flex-direction: column;
    
    >h2 {
    margin-top: 50px;
    margin-left: 70px;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
`;

export const LogoWrapper = styled.img`
    height: 180px;
    width: 180px; 
    border-radius: 50%;
    border: 1px solid black;
`;

export const MobileAppSection = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;

export const ForAndroid = styled.div`
    height: 900px;
    width: 400px;
    `;

export const ForAndroidImg = styled.img`
    height: 900px;
    width: 400px;
`;

export const AppDescription = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    width: 650px;
    margin-top: 100px;
    `;

export const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    `;

export const GooglePlay = styled.div`

    `;

export const GooglePlayImg = styled.img`
    width: 323px;
    height: 125px;
    border-radius: 15px;
`;

export const AppStore = styled.div`

    `;

export const AppStoreImg = styled.img`
    width: 323px;
    height: 125px;
    border-radius: 15px;
    `;

export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 135px;
    `;

export const IconSection = styled.div`
    width: 200px;
    height: 250px;
    font-size: 28px;
    `;