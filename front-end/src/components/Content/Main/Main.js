import React from "react";
import main from "./Main.module.css";
import google from "../../../images/getItOnGooglePlay.png";
import apple from "../../../images/downloadOnTheAppStore.png";
import Iphone from "../../../images/ER_Iphone.png"
import Pixel from "../../../images/ER_mobile.png"

function Main() {
    return (
        <div className={main.content}>
            <div className={main.pic}>
                <div className={main.text}>EasyRest System - розумна система для відстеження черг у закладах
                    харчування.
                </div>
            </div>
            <div className={main.forAndroid}><img src={Pixel}/></div>
            <div className={main.forIOS}><img src={Iphone}/></div>
            <div className={main.appDescription}>Мобільний додаток допоможе тобі знайти вільний столик у
                ресторані <br/> і не витрачати час у черзі.
                Також ти можеш переглянути меню та ціни, <br/> забронювати столик або прокласти маршрут до потрібного
                тобі закладу.
                <Navigation/>
            </div>
        </div>
    )

}

export default Main;

function Navigation() {
    return (
        <div className={main.Navigation}>
            <div className={main.google}>
                <a href="https://play.google.com/store/apps/details?id=com.glovo&referrer=adjust_reftag%3DcVjC6ekKhTcjV%26utm_source%3DHomepage%2B-%2BAndroid"><img
                    src={google} alt="google"/></a>
            </div>
            <div className={main.apple}>
                <a href="https://apps.apple.com/app/id951812684?mt=8"><img src={apple} alt="apple"/></a>
            </div>
        </div>
    )
}
