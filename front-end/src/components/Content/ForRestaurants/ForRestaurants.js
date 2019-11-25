import React from "react";
import forRestaurants from "./ForRestaurants.module.css";
import kit from "../../../images/kit.png"


function ForRestaurants() {
    return (
        <div className={forRestaurants.content}>
            <div className={forRestaurants.column1}><p className={forRestaurants.title}>EasyRest System</p>
            <p className={forRestaurants.text}>EasyRest System - розумна система, яка за допомогою датчиків під столами <br/> зчитує чи сидить хтось за столом та відображає цю інформацію<br/> на екрані смартофна або комп'ютера.
            За допомогою цьої системи більше<br/> не треба бігати по закладу і дивитися за кожним столом, система це зробить за вас.<br/>
                Також за допомогою цієї системи спрощується процес бронювання стола.<br/> Вам потрібно натиснути лише одну кнопку і стіл буде заброньовано.</p>
                <div className={forRestaurants.pic} />
            </div>
            <div className={forRestaurants.buyForm}>
                <img src={kit}/>
                <a href="https://next.privat24.ua/" className={forRestaurants.button}>BUY</a>
                <p className={forRestaurants.price}>Ціна: 3499 грн</p>
            </div>
        </div>
    )

}

export default ForRestaurants