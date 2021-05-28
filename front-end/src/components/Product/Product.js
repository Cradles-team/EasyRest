import React from "react";
import kit from "../../images/kit.png";
import {
  BuyButton,
  BuyForm,
  BuyFormImg,
  Components,
  ComponentsTitle,
  ComponentsWrapper,
  OneComponent,
  OneComponentDescription,
  Price,
  ProductArea,
  ProductDescription,
  ProductHeroSection,
  ProductTitle,
  ProductWrapper
} from "./Product.styled";
import sensors from "../../images/sensors.png";
import station from "../../images/station.png";
import tablet from "../../images/tablet.png";
import { ArrowRightOutlined } from "@ant-design/icons";

function Product() {
  return (
    <ProductWrapper>
      <ProductHeroSection>
        <ProductArea>
          <ProductTitle>EasyRest System</ProductTitle>
          <ProductDescription>
            EasyRest System - розумна система, яка за допомогою датчиків під
            столами зчитує чи сидить хтось за столом та відображає цю інформацію
            на екрані смартфона або комп'ютера. За допомогою цієї системи більше
            не треба бігати по закладу і дивитися за кожним столиком, система це
            зробить за вас.
            <br /> <br />
            Також за допомогою цієї системи спрощується процес бронювання стола.
            Вам потрібно натиснути лише одну кнопку і стіл буде заброньовано.
          </ProductDescription>
        </ProductArea>
        <BuyForm>
          <BuyFormImg src={kit} />
          <BuyButton type="primary" size="large">
            BUY
          </BuyButton>
          <Price>Price: 170$(5 table) + 10$/table</Price>
        </BuyForm>
      </ProductHeroSection>
      <ComponentsWrapper>
        <ComponentsTitle>Компоненти</ComponentsTitle>
        <Components>
          <OneComponent>
            <img src={sensors} alt="sensors image"/>
            <h1>Датчики</h1>
            <OneComponentDescription>
              Довзоляють дізнатись коли хтось сідає за столик
            </OneComponentDescription>
          </OneComponent>
          <ArrowRightOutlined style={{ fontSize: "100px" }} />
          <OneComponent>
            <img src={station} alt="station image"/>
            <h1>Станція</h1>
            <OneComponentDescription>
              Обробляє та передає дані на девайс
            </OneComponentDescription>
          </OneComponent>
          <ArrowRightOutlined style={{ fontSize: "100px" }} />
          <OneComponent>
            <img src={tablet} alt="tablet image"/>
            <h1>Девайс</h1>
            <OneComponentDescription>
              Показує вільні та зайняті столики
            </OneComponentDescription>
          </OneComponent>
        </Components>
      </ComponentsWrapper>
    </ProductWrapper>
  );
}

export default Product;
