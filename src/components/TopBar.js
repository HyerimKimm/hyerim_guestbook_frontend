import React from 'react';
import styled from "styled-components"

export const TopBarDesign = styled.header`
    background-color: lightblue;
    margin: 0;
    padding: 10px;
    //position: fixed;
    height: 55px;
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poor Story', cursive;
    position: sticky;
    top: 0;
    left: 0;
`;

export const TopBar = ({title}) => {
    return <TopBarDesign>{title}</TopBarDesign>
}