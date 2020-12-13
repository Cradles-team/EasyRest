import React, {useContext} from 'react';
import StoreContext from "../../../StoreContext";
import {RestaurantImage, RestaurantName, RestaurantWrapper} from "./Restaurant.styled";
import {NavLink} from "react-router-dom";

export const Restaurant = (props) => {
    const {dataArr} = useContext(StoreContext);
    return (
        <NavLink to={"/restaurant/" + props.id}>
            <RestaurantWrapper style={{backgroundImage: `url(${props.image})`}}>

                <RestaurantName>{props.name}</RestaurantName>
            </RestaurantWrapper>
        </NavLink>
    )
};

export default Restaurant;