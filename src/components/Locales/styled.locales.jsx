import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 1rem;
    h3{
        text-align: left;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
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
    }
` 