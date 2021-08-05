import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 1280px;
    margin: 2rem auto;
    color: #666;
`

export const Titulo = styled.h2` 
    text-align: left;
    margin-left: 3rem;
    position: relative;
    ::before{
        content: '';
        display: block;
        position: absolute;
        top:0;
        left: -10px;
        width: 5px;
        height: 30px;
        background-color: coral;
        color: violet;
    }

`