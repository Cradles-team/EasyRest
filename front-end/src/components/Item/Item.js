import React, { useContext } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import StoreContext from "../../StoreContext";
import {ItemDescription, ItemImg, ItemTitle, ItemWrapper} from "./Item.styled";

export const Item = (props) => {
    const { id } = useParams();
    const { data } = useContext(StoreContext);
    const item_element = data[id];
    return (
        <ItemWrapper>
            <ItemTitle>{item_element.name}</ItemTitle>
            <ItemImg src={item_element.photo}/>
            <ItemDescription>{item_element.description}</ItemDescription>
        </ItemWrapper>
    )
};

export default Item;