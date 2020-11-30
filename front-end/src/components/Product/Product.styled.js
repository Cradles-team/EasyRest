import styled from 'styled-components';
import censors from '../../images/censors.jpg'

export const ProductWrapper = styled.div`
    grid-area: m;
    `;

export const ProductArea = styled.div`
    display: inline-block;
    margin-left: 200px;
    `;

export const ProductTitle = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    font-size: 40px;
    `;

export const ProductDescription = styled.p`
    font-family: 'Montserrat', sans-serif;
    `;

export const ProductPic = styled.div`
    margin-top: 30px;
    width: 720px;
    background-size: 100%;
    background-image: url(${censors});
    height: 380px;
    border-radius: 35px;
    `;

export const BuyForm = styled.div`
    position: absolute;
    display: inline-block;
    width: 600px;
    height: 400px;
    background-color: #dbdbdb;
    border-radius: 20px;
    margin-left: 200px;
    margin-top: 150px;

    >a {
    text-decoration: none;
    font-size: 30px;
    font-weight: lighter;
    color: black;
    text-align: center;
    }
    `;

export const BuyFormImg = styled.img`
    margin-left: 25px;
    width: 550px;
    height: 300px;
`;

export const Button = styled.a`
    display: inline-block;
    background-color: #ffcc1b;
    border-radius: 40px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 244px;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;
    `;

export const Price = styled.p`
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    display: inline-block;
    margin-left: 40px;
    `;