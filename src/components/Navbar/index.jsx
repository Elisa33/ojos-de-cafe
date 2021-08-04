import React ,{useState}from 'react'
import { Container, Menu, Logo, Search, Submenu, MenuHam, ItemMenu } from './styled.navbar'
import logo from '../../assets/img/logo.png'


const Navbar = () => {
    const [ menu, setMenu ] = useState(false)

    const openMenu = ()=>{
        setMenu(!menu)
    }
    return (
        <>
            <Container>
                <MenuHam onClick={openMenu}>
                { menu ? <span>&#9747;</span> : <span>&#9776;</span> }</MenuHam>
                <Logo src={logo}></Logo>
                <Search>&#x26B2;</Search>
            </Container>
            
            {menu ? <Menu>
                <ItemMenu href=''>Locales</ItemMenu>
                <ItemMenu>Provinciales</ItemMenu>
                <ItemMenu>Nacionales</ItemMenu>
                <ItemMenu>Internacionales</ItemMenu>
                <ItemMenu>Orbitnado</ItemMenu>
                <ItemMenu>Emprendiientos</ItemMenu>
                <ItemMenu>Cultura</ItemMenu>
                <ItemMenu>Diversidad</ItemMenu>
            </Menu> : <Submenu>submenu</Submenu>}
        </>
    )
}

export default Navbar
