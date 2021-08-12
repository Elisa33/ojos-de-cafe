import styled from 'styled-components'
import { Markup } from 'interweave';

export const Container = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    display: grid;
    @media (min-width: 768px) {
        grid-template-columns: 4fr 1fr;
    }
    gap: 2rem
`

export const Markupi = styled(Markup)`

    img{
        width: 90%;
    object-fit: cover;

    }
    p{
     color: #555;
     text-align: left;
     padding: 0.5rem 1rem;

 }
    li{
        list-style: none;
        text-align: left;
        padding: 0.2rem 1rem;
    }
`

export const Wrapper = styled.div`
    box-shadow: 0px 2px 10px rgb(23 24 33 / 15%);
    border-radius: 0.5rem;
    
    display: flex;
    overflow: hidden;
    flex-direction: column;
    h2{
    font-family: 'Playfair Display', serif;
     color:#555;
 }

 h5{
     font-weight: 200;
     
 }
` 

export const Wrap = styled.div`
    padding: 1rem;
    a{
        color: #333;
        text-decoration: none;
    }
`

export const Column = styled.div`
    padding: 2rem;
    background-color: #ccc;
    display: none;
    @media (min-width: 768px) {
        display:block
    }
`