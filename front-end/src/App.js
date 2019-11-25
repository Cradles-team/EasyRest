import React from "react";
import "./App.css";
import RestGrid from "./components/Content/RestGrid/RestGrid";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Content/Main/Main"
import ForRestaurants from "./components/Content/ForRestaurants/ForRestaurants";
import {BrowserRouter, Route} from "react-router-dom"

function App(props) {

  return (
      <BrowserRouter>
    <div className="wrapper">
      <Header/>
      <Route exact path="/home" render={ () => <Main/>}/>
      <Route exact path="/forRestaurants" render={ () => <ForRestaurants/>}/>
      <Route exact path="/forUsers" render={ () => <RestGrid rests={props.state.rests}/>}/>
      <Footer/>
    </div>
      </BrowserRouter>
  );
}


export default App;

