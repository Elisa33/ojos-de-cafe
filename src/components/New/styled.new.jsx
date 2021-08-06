import styled from 'styled-components'
import { Markup } from 'interweave';


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
`

export const Wrapper = styled.div`
    box-shadow: 0px 2px 10px rgb(23 24 33 / 15%);
    border-radius: 1rem;
    margin: 2rem;
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