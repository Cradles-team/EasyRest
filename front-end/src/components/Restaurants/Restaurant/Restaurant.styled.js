import styled from "styled-components";

export const RestaurantWrapper = styled.div`
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    padding-top: 40px;
    padding-bottom: 20px;
    `;

export const RestaurantImage = styled.img`
    width: 350px;
    height: 250px;
    border-radius: 15px;
    box-shadow: 5px 5px 5px lightgrey;
    `;