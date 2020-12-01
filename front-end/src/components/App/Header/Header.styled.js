import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-area: h;
    background-color: #353434;
    width: auto;
    font-weight: bold;
`;

export const LinkWrapper = styled.div`
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    
    >ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
    width: 80%;
    font-weight: 300;
    }
    
    >ul>li>a {
    text-decoration: none;
    color: white;
    }
`;
