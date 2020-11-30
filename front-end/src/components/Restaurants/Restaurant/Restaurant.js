import React, {useContext} from 'react';
import StoreContext from "../../../StoreContext";
import {RestaurantImage, RestaurantWrapper} from "./Restaurant.styled";
import {NavLink} from "react-router-dom";

export const Restaurant = (props) => {
    const { dataArr } = useContext(StoreContext);
    return (
        <RestaurantWrapper>
            <NavLink to={"/restaurant/" + props.id}>
                <RestaurantImage src={props.image}/>
                {props.name}
            </NavLink>
        </RestaurantWrapper>
    )
};

export default Restaurant;