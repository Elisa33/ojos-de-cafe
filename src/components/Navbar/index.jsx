import React ,{useState, useEffect}from 'react'
import { Container, Menu, Logo, Search, Submenu, MenuHam, ItemMenu } from './styled.navbar'
import logo from '../../assets/img/logo.png'


const Navbar = () => {
    const [ menu, setMenu ] = useState(false)

    const openMenu = ()=>{
        setMenu(!menu)
    }

    /* useEffect(()=>{
        getClima();

    },[])

    const [ mendoza, getMendoza ] = useState([])

    const getClima = async ()=>{
    const clima = await fetch('https://ws.smn.gob.ar/map_items/weather')
    const datoClima = await clima.json()
    getMendoza(datoClima)
}    

    const climamendoza = mendoza.filter(item => 
        item.name === 'Mendoza'
    ) */

    //const temp = climamendoza[0].weather.temp
   

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
                <ItemMenu>Orbitando</ItemMenu>
                <ItemMenu>Emprendimientos</ItemMenu>
                <ItemMenu>Cultura</ItemMenu>
                <ItemMenu>Diversidad</ItemMenu>
            </Menu> : 
            <Submenu>aqui temp</Submenu>}
        </>
    )
}

export default Navbar
