import styled from 'styled-components'

export const Container = styled.div`
    color: #fff;
    background-color: #444;
`

export const Logo = styled.img`
    width: 8rem;
    margin: 1rem 0;
    
`

export const Contact = styled.div`
    margin: 1rem auto;
    max-width: 30rem;
    display: flex ;
    justify-content: center;
    gap: 3rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap:1.2rem;
    }
`

export const Wrap = styled.div`
    font-size:12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:8px;
`

export const Copy = styled.p`
    background-color: #333;
    padding: 1rem;
    font-size: 0.8rem;
`