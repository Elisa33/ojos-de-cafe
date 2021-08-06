import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  font-size: 32px;
  padding: 1rem;
  margin: 0;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const MenuHam = styled.div`
    color: #fff;
    cursor: pointer;
    transform: scaleX(1.3);
    
    span{
        
    }
`

export const Logo = styled.img`
    width: 10rem;

    
`

export const Search = styled.div`
    cursor: pointer;
    font-size: 30px;
    color: #fff;
    transform: rotate(-45deg);
`
export const Submenu = styled.div`
    background-color: #444;
    color: #fff;
    display: flex;
    padding: 5px 1rem;
    justify-content: space-between;
    
`
export const Menu = styled.div`
    background-color: #444;
    color: #fff;
    display: grid;
    padding: 1rem 1rem;
    grid-template-columns: repeat(8,1fr);
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        
        padding: 0;
    }
    
`

export const ItemMenu = styled.a`
    color: #eee;
    @media (max-width: 768px) {
        display: block;
        padding: 1.2rem 0;
        border-top:1px solid #fff;
        :first-of-type {
        border-top: none;
        }
    }

`


