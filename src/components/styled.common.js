import styled from 'styled-components'
import {Colors} from './styled.colors'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    margin: 2rem;
    text-align: left;
`

export const Grid = styled.div`
    display: grid;
    gap: 1rem;
    /* grid-auto-rows: 22rem; */
    grid-template-columns: repeat(auto-fill, minmax(min(100%,${(props)=>props.col ? props.col : '20rem'}), 1fr));
    background-color: ${(props)=> props.bg && props.bg};
    padding: ${(props)=> props.pad && props.pad};
    border-radius: ${(props)=> props.radius && props.radius};
    a:link, a:visited, a:active {
        text-decoration:none;
    }
`
export const Card = styled.div`
    border-radius: 0.5rem;
    box-shadow: 0px 2px 10px rgb(23 24 33 / 15%);
    overflow: hidden;
    transition: all 0.3s ease;
    img{
        height: 14rem;
        object-fit: cover;
        width: 100%;
    }

    &:hover{
        box-shadow: 0px 3px 15px rgb(23 24 33 / 25%);

    }
`
export const Wrap = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${Colors.Gray};
    background: #fff;
`
export const Titulo = styled.h2`
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: #333;
    min-height: ${(props)=> props.height && props.height};
`
export const Bajada = styled.p`
    font-size: 0.8rem;
    color: #555;
    min-height: 3rem;
`

export const Tag = styled.div`
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0 3px;
    padding-bottom: 4px;
    border-bottom: 4px solid ${(props)=> Colors[props.color]};
    display: flex;
    align-self: flex-start; 
    color: ${Colors.Gray}    
`
export const Row = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    color: #444;
`

export const Publi = styled.img`
    margin-top: 3rem;
    width: 100%;

`

export const OpLink = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 2rem;
    h2{
        text-align: center;
        font-size: 0.9rem;
        height: 2rem;
        font-family: 'Roboto';
        width: 75%;
        align-self: center;
    }
`
export const Perfil = styled.img`
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    align-self: center;
`