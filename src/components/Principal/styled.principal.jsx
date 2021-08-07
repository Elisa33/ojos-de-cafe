import styled from 'styled-components'


export const Wrapper = styled.div`
    overflow: hidden;
    box-shadow: 0px 2px 10px rgb(23 24 33 / 15%);
    border-radius: 1rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
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

`

export const Wrap = styled.div`
    padding: 1rem;
`

