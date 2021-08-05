import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 2rem;
    h3{
        text-align: left;
        
        
    }
`

export const Grid = styled.div`
    display: grid;
    gap: 1rem;
    /* grid-auto-rows: 22rem; */
    grid-template-columns: repeat(auto-fill, minmax(min(100%,20rem), 1fr));
`
export const Card = styled.div`
    border-radius: 1rem;
    box-shadow: 0px 2px 10px rgb(23 24 33 / 15%);
    overflow: hidden;
    img{
        height: 14rem;
        object-fit: cover;
        width: 100%;
    }
    h2{
        padding: 1rem;
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem;
    }
` 