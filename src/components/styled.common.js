import styled from 'styled-components'
import {Colors} from './styled.colors'

export const Wrapper = styled.div`
    margin: 2rem;
    text-align: left;
`

export const Grid = styled.div`
    display: grid;
    gap: 1rem;
    /* grid-auto-rows: 22rem; */
    grid-template-columns: repeat(auto-fill, minmax(min(100%,${(props)=>props.col ? props.col : '20rem'}), 1fr));
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

    a:link, a:visited, a:active {
        text-decoration:none;
    }
    &:hover{
        box-shadow: 0px 3px 15px rgb(23 24 33 / 25%);

    }
` 
export const Titulo = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: #555;
    min-height: ${(props)=> props.height ? props.height : ''};
`
export const Wrap = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
    color: ${Colors.Gray};
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
`