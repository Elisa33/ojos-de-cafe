import { ATTRIBUTES_TO_PROPS } from "interweave";
import styled from "styled-components";
import {Colors} from '../styled.common'

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    margin: 2rem auto;
    color: #666;
    max-width: 1024px;
`

export const Titulo = styled.h2` 
    text-align: left;
    margin-left: 2rem;
    padding-left: 1rem;
    border-left: 5px solid ${props => Colors[props.color]};

`