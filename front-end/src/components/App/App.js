import React from "react";
import Restaurants from "../Restaurants/Restaurants";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../Home/Home"
import Product from "../Product/Product";
import StoreContext from "../../StoreContext";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import {AppWrapper} from "./App.styled";
import Item from "../Item/Item";

const data = {
    1: {
        id: 1,
        name: "Lviv Croissants",
        image: "https://lviv.virtual.ua/images/387175/",
        photo: "http://franchithink.com/wp-content/uploads/2018/06/Lvivski-kruasani05593-1160x570.jpg",
        coordinates: "lat: 49.842521, lng: 24.031530",
        schedule: "Пн 12:00 - 20:00 Вт 12:00 - 20:00 Ср 12:00 - 20:00 Чт 12:00 - 20:00 Пт 12:00 - 20:00 Сб 12:00 - 20:00 Нд 12:00 - 20:00 ",
        address: "вулиця Козельницька, 1А, Львів, Львівська область, 79000 вулиця Федьковича, 38, Львів, Львівська область, 79000",
        logo: "https://skypark.ua/wp-content/uploads/2019/04/55545404_2519766608053004_3582564841593765888_n.jpg"
    },
    2: {
        id: 2,
        name: "Celentano",
        image: "https://f.zaporizhzhia.city/location/2781/GzqK6.jpeg",
        photo: "https://franch.biz/franch/file/1935/pizza-celentano-2720663.jpg",
        coordinates: "lat: 49.841145, lng: 24.031094",
        schedule: "Пн 12:00 - 20:00 Вт 12:00 - 20:00 Ср 12:00 - 20:00 Чт 12:00 - 20:00 Пт 12:00 - 20:00 Сб 12:00 - 20:00 Нд 12:00 - 20:00 ",
        address: "вулиця Козельницька, 1А, Львів, Львівська область, 79000 вулиця Федьковича, 38, Львів, Львівська область, 79000",
        logo: "https://s3.eu-central-1.amazonaws.com/listmusor/production/169255/logo/big/5ae168ffcd3da.jpg"
    },
    3: {
        id: 3,
        name: "Aroma Kava",
        image: "https://tomato.ua/image/resize/storage/restaurants/5a3914bbf88a8b003e55904b/15136902995a3914bb3c805_5a3914b5ebe7c6.23782622.jpeg?w=1200&h=1200",
        photo: "https://rau.ua/wp-content/uploads/2018/12/Conc2.jpg",
        coordinates: "lat: 49.841262, lng: 24.026231",
        schedule: "Пн 12:00 - 20:00 Вт 12:00 - 20:00 Ср 12:00 - 20:00 Чт 12:00 - 20:00 Пт 12:00 - 20:00 Сб 12:00 - 20:00 Нд 12:00 - 20:00 ",
        address: "вулиця Козельницька, 1А, Львів, Львівська область, 79000 вулиця Федьковича, 38, Львів, Львівська область, 79000",
        logo: "https://ufa.hh.ru/employer-logo/2059107.png"
    },
    4: {
        id: 4,
        name: "Soda Buffet",
        image: "https://s3.eu-central-1.amazonaws.com/listmusor/production/187257/gallery/big/5d256c266d7af.jpg?1316609607",
        photo: "https://s3.eu-central-1.amazonaws.com/listmusor/production/187257/gallery/big/5d256d4964f36.jpg?1316609607",
        coordinates: "lat: 49.834550, lng: 24.013447",
        schedule: "Пн 12:00 - 20:00 Вт 12:00 - 20:00 Ср 12:00 - 20:00 Чт 12:00 - 20:00 Пт 12:00 - 20:00 Сб 12:00 - 20:00 Нд 12:00 - 20:00 ",
        address: "вулиця Козельницька, 1А, Львів, Львівська область, 79000 вулиця Федьковича, 38, Львів, Львівська область, 79000",
        logo: "https://s3.eu-central-1.amazonaws.com/listmusor/production/187257/logo/big/5d26d6deec871.jpg"
    },
    5: {
        id: 5,
        name: "Інтемпо",
        image: "https://lviv.virtual.ua/images/415143/",
        photo: "https://lviv.virtual.ua/images/415152/",
        coordinates: "lat: 49.833478, lng: 23.999315",
        schedule: "Пн 12:00 - 20:00 Вт 12:00 - 20:00 Ср 12:00 - 20:00 Чт 12:00 - 20:00 Пт 12:00 - 20:00 Сб 12:00 - 20:00 Нд 12:00 - 20:00 ",
        address: "вулиця Козельницька, 1А, Львів, Львівська область, 79000 вулиця Федьковича, 38, Львів, Львівська область, 79000",
        logo: "data:image/png;base64,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"
    },
    6: {
        id: 6,
        name: "Кебаб Шеф",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/12/53/18/97/caption.jpg",
        photo: "https://tomato.ua/image/resize/storage/restaurants//15349138775b7ced5541be1_5T8YhnfpCLnN9kI5dXImap4QEpmIWLvwcLDOq15V.jpeg?w=1200&h=1200",
        coordinates: "lat: 49.839688, lng: 24.023542",
        schedule: "Пн 12:00 - 20:00 Вт 12:00 - 20:00 Ср 12:00 - 20:00 Чт 12:00 - 20:00 Пт 12:00 - 20:00 Сб 12:00 - 20:00 Нд 12:00 - 20:00 ",
        address: "вулиця Козельницька, 1А, Львів, Львівська область, 79000 вулиця Федьковича, 38, Львів, Львівська область, 79000"
    }
};

let dataArr = Object.values(data);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.updataArr = (arr) => {
            this.setState(() => ({dataArr: arr,}))
        };

        this.sortArr = (arr, compareFunc) => {
            this.setState(() => ({dataArr: arr.sort(compareFunc),}))
        };

        this.state = {
            data: data,
            dataArr: dataArr,
            updataArr: this.updataArr,
            sortArr: this.sortArr,
        };
    }

    render() {
        return (
            <Router>
                <StoreContext.Provider value={this.state}>
                    {" "}
                    <AppWrapper>
                        <Header/>
                        <Switch>
                            <Route path="/restaurants"><Restaurants/></Route>
                            <Route path="/product"><Product/></Route>
                            <Route path="/restaurant/:id"><Item/></Route>
                            <Route path="/"><Home/></Route>
                        </Switch>
                        <Footer/>
                    </AppWrapper>
                </StoreContext.Provider>
            </Router>
        )
    }
}

export default App;