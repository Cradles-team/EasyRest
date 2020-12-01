import React, {useContext} from "react";
import google from "../../images/getItOnGooglePlay.png";
import apple from "../../images/downloadOnTheAppStore.png";
import Android from "../../images/android.png"
import {
    AppDescription, AppStore, AppStoreImg, CardWrapper, EasyRest,
    ForAndroid, ForAndroidImg,
    GooglePlay, GooglePlayImg,
    HeroDescription,
    HeroSection,
    HomeWrapper, IconSection, IconsWrapper, LogoWrapper, MobileAppSection,
    NavigationWrapper, PopularRestaurants
} from "./Home.styled";
import StoreContext from "../../StoreContext";
import {NavLink} from "react-router-dom";
import tableIcon from "../../images/tableIcon.png";
import noteIcon from "../../images/noteIcon.png";
import mapIcon from "../../images/mapIcon.png";

function Home() {
    const {data} = useContext(StoreContext);
    return (
        <HomeWrapper>
            <HeroSection>
                <EasyRest>EasyRest</EasyRest>
                <HeroDescription>
                    EasyRest System - розумна система для відстеження черг у закладах
                    харчування.
                </HeroDescription>
            </HeroSection>
            <PopularRestaurants>
                <h2>Найпопулярніші заклади</h2>
                <CardWrapper>
                    {Object.values(data).slice(0, 5).map(({id, logo}) => (
                        <NavLink to={"/restaurant/" + id}>
                            <LogoWrapper src={logo} key={id}/>
                        </NavLink>
                    ))}
                </CardWrapper>
            </PopularRestaurants>
            <MobileAppSection>
                <ForAndroid><ForAndroidImg src={Android}/></ForAndroid>
                <AppDescription>Мобільний додаток допоможе тобі знайти вільний столик у ресторані
                    та не витрачати час у черзі
                    <Icons/>
                    <Navigation/>
                </AppDescription>
            </MobileAppSection>
        </HomeWrapper>
    )
}

export default Home;

function Navigation() {
    return (
        <NavigationWrapper>
            <GooglePlay>
                <a href="https://play.google.com/store/apps/details?id=com.glovo&referrer=adjust_reftag%3DcVjC6ekKhTcjV%26utm_source%3DHomepage%2B-%2BAndroid">
                    <GooglePlayImg src={google} alt="google"/></a>
            </GooglePlay>
            <AppStore>
                <a href="https://apps.apple.com/app/id951812684?mt=8"><AppStoreImg src={apple} alt="apple"/></a>
            </AppStore>
        </NavigationWrapper>
    )
}

function Icons() {
    return (
        <IconsWrapper>
            <IconSection>
                <p>Забронюй столик</p>
                <img src={tableIcon}/>
            </IconSection>
            <IconSection>
                <p>Переглянь меню та ціни</p>
                <img src={noteIcon}/>
            </IconSection>
            <IconSection>
                <p>Проклади маршрут</p>
                <img src={mapIcon}/>
            </IconSection>
        </IconsWrapper>
    )
}