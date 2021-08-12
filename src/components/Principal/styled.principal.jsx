import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Wrapper = styled(Link)`
    overflow: hidden;
    box-shadow: 0px 2px 10px rgb(23 24 33 / 15%);
    border-radius: 0.5rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-decoration: none;
    color: #444;
    h2{
        font-family: 'Playfair Display', serif;
        color:#222;
        padding: 0 1rem;
    }
    
    h5{
        
        padding: 0 1rem;
        font-weight: 200;
    }
    img{
        width: 100%;
        object-fit: cover;
        max-height: 20rem;
    }
    span{
        text-align: left;
    }
    
    `

export const Wrap = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

