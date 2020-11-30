import React from "react";
import kit from "../../images/kit.png"
import {
    Button,
    BuyForm, BuyFormImg, Price,
    ProductArea,
    ProductDescription,
    ProductPic,
    ProductTitle,
    ProductWrapper
} from "./Product.styled";


function Product() {
    return (
        <ProductWrapper>
            <ProductArea>
                <ProductTitle>EasyRest System</ProductTitle>
                <ProductDescription>EasyRest System - розумна система, яка за допомогою датчиків під
                    столами <br/> зчитує чи сидить хтось за столом та відображає цю інформацію<br/> на екрані смартофна
                    або комп'ютера.
                    За допомогою цьої системи більше<br/> не треба бігати по закладу і дивитися за кожним столом,
                    система це зробить за вас.<br/>
                    Також за допомогою цієї системи спрощується процес бронювання стола.<br/> Вам потрібно натиснути
                    лише одну кнопку і стіл буде заброньовано.
                </ProductDescription>
                <ProductPic/>
            </ProductArea>
            <BuyForm>
                <BuyFormImg src={kit}/>
                <Button href="https://next.privat24.ua/">BUY</Button>
                <Price>Price: 170$(5 table) + 10$/table</Price>
            </BuyForm>
        </ProductWrapper>
    )
}

export default Product