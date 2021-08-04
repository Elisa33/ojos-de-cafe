import styled from 'styled-components'
import { Markup } from 'interweave';


export const Markupi = styled(Markup)`

 h2{
     font-family: 'Times New Roman', Times, serif;
     color:#222;
 }

 h5{
     font-family: Verdana, Geneva, Tahoma, sans-serif;
 }
 p{
     color: #555;
     text-align: left;
 }
 img{
    width: 90%;
  object-fit: cover;

 }
`

export const Wrapper = styled.div`
    box-shadow: 0px 2px 10px rgb(23 24 33 / 15%);
    border-radius: 1rem;
    margin: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;

` 