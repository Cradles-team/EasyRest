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
        description: "Lviv Croissants - найсмачніші круасани у Львові",
        coordinates: "lat: 49.842521, lng: 24.031530",
        logo: "https://skypark.ua/wp-content/uploads/2019/04/55545404_2519766608053004_3582564841593765888_n.jpg"
    },
    2: {
        id: 2,
        name: "Celentano",
        image: "https://f.zaporizhzhia.city/location/2781/GzqK6.jpeg",
        photo: "https://franch.biz/franch/file/1935/pizza-celentano-2720663.jpg",
        description: "Celentano - піца на будь-який смак",
        coordinates: "lat: 49.841145, lng: 24.031094",
        logo: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/74428353_2476768682441590_3994229897772924928_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=97qDD1Kg2fAAX9sQo5S&_nc_ht=scontent.fiev12-1.fna&oh=30373f0aebd6289f48bceb09e424cd76&oe=5FE952A3"
    },
    3: {
        id: 3,
        name: "Aroma Kava",
        image: "https://tomato.ua/image/resize/storage/restaurants/5a3914bbf88a8b003e55904b/15136902995a3914bb3c805_5a3914b5ebe7c6.23782622.jpeg?w=1200&h=1200",
        photo: "https://rau.ua/wp-content/uploads/2018/12/Conc2.jpg",
        description: "Aroma Kava - найкраща кава у зимовий день",
        coordinates: "lat: 49.841262, lng: 24.026231",
        logo: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/43878244_1870820849700942_7644275362850930688_o.png?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=JFnMSbfaHu8AX_xum_I&_nc_ht=scontent.fiev12-1.fna&oh=725234af45303e04645a1e263f9ae41d&oe=5FEAA82E"
    },
    4: {
        id: 4,
        name: "Soda Buffet",
        image: "https://s3.eu-central-1.amazonaws.com/listmusor/production/187257/gallery/big/5d256c266d7af.jpg?1316609607",
        photo: "https://s3.eu-central-1.amazonaws.com/listmusor/production/187257/gallery/big/5d256d4964f36.jpg?1316609607",
        description: "Soda Buffet - дешево та смачно",
        coordinates: "lat: 49.834550, lng: 24.013447",
        logo: "https://s3.eu-central-1.amazonaws.com/listmusor/production/187257/logo/big/5d26d6deec871.jpg"
    },
    5: {
        id: 5,
        name: "Інтемпо",
        image: "https://lviv.virtual.ua/images/415143/",
        photo: "https://lviv.virtual.ua/images/415152/",
        description: "Інтемпо - сітка ресторанів у Львові",
        coordinates: "lat: 49.833478, lng: 23.999315",
        logo: "https://lh3.googleusercontent.com/proxy/c0cakM6RhMxyP1XIE-Gmj4yebVREhDI8Jhy6ZAYYk8WNp3wGSMlCfC-zV399iGvedkZXYcs9wZEFcwqp9COnefZHMpYQvA8H7FkINuDbAT9ErXsNgGg"
    },
    6: {
        id: 6,
        name: "Кебаб Шеф",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/12/53/18/97/caption.jpg",
        photo: "https://tomato.ua/image/resize/storage/restaurants//15349138775b7ced5541be1_5T8YhnfpCLnN9kI5dXImap4QEpmIWLvwcLDOq15V.jpeg?w=1200&h=1200",
        description: "Кебаб Шеф - їжа для справжніх чоловіків",
        coordinates: "lat: 49.839688, lng: 24.023542"
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