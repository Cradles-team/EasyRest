import React from "react";
import product from "./Product.module.css";
import kit from "../../../images/kit.png"


function Product() {
    return (
        <div className={product.content}>
            <div className={product.column1}><p className={product.title}>EasyRest System</p>
                <p className={product.text}>EasyRest System - розумна система, яка за допомогою датчиків під
                    столами <br/> зчитує чи сидить хтось за столом та відображає цю інформацію<br/> на екрані смартофна
                    або комп'ютера.
                    За допомогою цьої системи більше<br/> не треба бігати по закладу і дивитися за кожним столом,
                    система це зробить за вас.<br/>
                    Також за допомогою цієї системи спрощується процес бронювання стола.<br/> Вам потрібно натиснути
                    лише одну кнопку і стіл буде заброньовано.</p>
                <div className={product.pic}/>
            </div>
            <div className={product.buyForm}>
                <img src={kit}/>
                <a href="https://next.privat24.ua/" className={product.button}>BUY</a>
                <p className={product.price}>Ціна: 3499 грн</p>
            </div>
        </div>
    )

}

export default Product