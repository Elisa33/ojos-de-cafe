import { ATTRIBUTES_TO_PROPS } from "interweave";
import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    margin: 2rem auto;
    color: #666;
    max-width: 1024px;
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
        background-color: ${(props)=> props.color};
        color: violet;
    }

`