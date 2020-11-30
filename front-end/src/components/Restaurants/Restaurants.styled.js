import styled from 'styled-components';

export const RestaurantsWrapper = styled.div`
    width: 1200px;
    grid-area: m;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    color: white;
    margin: 0 auto;
    column-count: 3;
    column-span: all;
    
    >a {
    text-decoration: none;
    text-align: center;
    font-size: 16px;
    font-weight: bolder;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    color: white;
    }
    
    >h1 {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    }
    `;