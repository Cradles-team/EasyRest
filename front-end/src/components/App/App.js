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
        description: "Lviv Croissants - найсмачніші круасани у Львові"
    },
    2: {
        id: 2,
        name: "Celentano",
        image: "https://f.zaporizhzhia.city/location/2781/GzqK6.jpeg",
        photo: "https://franch.biz/franch/file/1935/pizza-celentano-2720663.jpg",
        description: "Celentano - піца на будь-який смак"
    },
    3: {
        id: 3,
        name: "Кебаб Шеф",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/12/53/18/97/caption.jpg",
        photo: "https://tomato.ua/image/resize/storage/restaurants//15349138775b7ced5541be1_5T8YhnfpCLnN9kI5dXImap4QEpmIWLvwcLDOq15V.jpeg?w=1200&h=1200",
        description: "Кебаб Шеф - їжа для справжніх чоловіків"
    },
    4: {
        id: 4,
        name: "Aroma Kava",
        image: "https://tomato.ua/image/resize/storage/restaurants/5a3914bbf88a8b003e55904b/15136902995a3914bb3c805_5a3914b5ebe7c6.23782622.jpeg?w=1200&h=1200",
        photo: "https://rau.ua/wp-content/uploads/2018/12/Conc2.jpg",
        description: "Aroma Kava - найкраща кава у зимовий день"
    },
    5: {
        id: 5,
        name: "Soda Buffet",
        image: "https://s3.eu-central-1.amazonaws.com/listmusor/production/187257/gallery/big/5d256c266d7af.jpg?1316609607",
        photo: "https://s3.eu-central-1.amazonaws.com/listmusor/production/187257/gallery/big/5d256d4964f36.jpg?1316609607",
        description: "Soda Buffet - дешево та смачно"
    },
    6: {
        id: 6,
        name: "Інтемпо",
        image: "https://lviv.virtual.ua/images/415143/",
        photo: "https://lviv.virtual.ua/images/415152/",
        description: "Інтемпо - сітка ресторанів у Львові"
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