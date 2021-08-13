import { ATTRIBUTES_TO_PROPS } from "interweave";
import styled from "styled-components";
import {Colors} from '../styled.colors'

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    margin: 2rem auto;
    color: #666;
    max-width: 1024px;
`

export const Etiqueta = styled.h2` 
    text-align: left;
    margin: 3.5rem 0 2rem 0;
    padding-left: 10px;
    border-left: 5px solid ${props => Colors[props.color]};
    font-size: 1.2rem;
    color: #444;
`