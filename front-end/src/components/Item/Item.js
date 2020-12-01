import React, {useContext} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import StoreContext from "../../StoreContext";
import {ItemDescription, ItemImg, ItemTitle, ItemWrapper} from "./Item.styled";
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const MapWithMarker = withGoogleMap(props =>
    <GoogleMap defaultZoom={14} defaultCenter={{lat: 49.839975, lng: 24.030528}}>
        <Marker position={{lat: 49.842521, lng: 24.031530}}/>
    </GoogleMap>
);

export const Item = (props) => {
    const {id} = useParams();
    const {data} = useContext(StoreContext);
    const item_element = data[id];
    return (
        <ItemWrapper>
            <ItemTitle>{item_element.name}</ItemTitle>
            <ItemImg src={item_element.photo}/>
            <ItemDescription>{item_element.description}</ItemDescription>
            <MapWithMarker
                containerElement={<div style={{height: '400px', width: '600px'}}/>}
                mapElement={<div style={{height: '100%', width: '100%'}}/>}
            />
        </ItemWrapper>
    )
};

export default Item;