import React from "react";
import google from "../../images/getItOnGooglePlay.png";
import apple from "../../images/downloadOnTheAppStore.png";
import Iphone from "../../images/iphone.png"
import Android from "../../images/android.png"
import {
    AppDescription, AppStore, AppStoreImg,
    ForAndroid, ForAndroidImg,
    ForIOS, ForIOSImg, GooglePlay, GooglePlayImg,
    HeroDescription,
    HeroSection,
    HomeWrapper,
    NavigationWrapper
} from "./Home.styled";

function Home() {
    return (
        <HomeWrapper>
            <HeroSection>
                <HeroDescription>
                    EasyRest System - розумна система для відстеження черг у закладах
                    харчування.
                </HeroDescription>
            </HeroSection>
            <ForAndroid><ForAndroidImg src={Android}/></ForAndroid>
            <ForIOS><ForIOSImg src={Iphone}/></ForIOS>
            <AppDescription>Мобільний додаток допоможе тобі знайти вільний столик у
                ресторані <br/> і не витрачати час у черзі.
                Також ти можеш переглянути меню та ціни, <br/> забронювати столик або прокласти маршрут до потрібного
                тобі закладу.
                <Navigation/>
            </AppDescription>
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
