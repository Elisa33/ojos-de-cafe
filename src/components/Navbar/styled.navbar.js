import styled from "styled-components";
import {Link} from 'react-router-dom'

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
    display: none;
    padding: 6px 1rem;
    justify-content: space-between;
    @media (min-width: 768px) {
        display: flex;
        font-size: 0.8rem;
    }
    @media (min-width: 1024px) {
        font-size: 1rem;
    }
`

export const GroupSubmenu = styled.div`
    display: flex;
    gap:1rem;
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

export const ItemMenu = styled(Link)`
    color: #eee;
    text-decoration: none;
    @media (max-width: 768px) {
        display: block;
        padding: 1.2rem 0;
        border-top:1px solid #fff;
        :first-of-type {
        border-top: none;
        }
    }

`


