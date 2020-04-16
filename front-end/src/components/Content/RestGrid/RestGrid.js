import React from "react";
import restGrid from "./RestGrid.module.css";
import {NavLink} from "react-router-dom";


function RestaurantItem(props) {
    return (
        <div className={restGrid.restaurant}>
            <NavLink to={"/restaurants/" + props.id}>
                <img src={props.image}/>
                <h1>{props.name}</h1>
            </NavLink>
        </div>
    );
}

function RestGrid(props) {
    let RestElements = props.rests.map(r => <RestaurantItem id={r.id} name={r.name} image={r.image} key={r.id}/>);

    return (
        <div className={restGrid.restGrid}>
            <div>
                {RestElements}
            </div>
        </div>
    );
}

export default RestGrid;