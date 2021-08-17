import React ,{useState, useEffect}from 'react'
import {
    BrowserRouter as Router, Link
  } from "react-router-dom";
import { Container, Menu, Logo, Search, Submenu, GroupSubmenu, MenuHam, ItemMenu } from './styled.navbar'
import logo from '../../assets/img/logo.png'
import { SiInstagram, SiYoutube, SiTwitter, SiFacebook } from "react-icons/si";
import { FaTemperatureLow } from "react-icons/fa";


const Navbar = () => {
    const fecha = new Date();
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril",
        "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ];
    const dias = ["Domingo", "Lunes","Martes",  "Miercoles","Jueves",  "Viernes", "Sábado"];
    
    const mes = meses[fecha.getMonth()]; 
    const dia = dias[fecha.getDay()]; 
    const anio = fecha.getFullYear(); 
    const num = fecha.getDate(); 
    const Hoy = `${dia}, ${num} de ${mes}, ${anio}`

    const [ menu, setMenu ] = useState(false)

    const openMenu = ()=>{
        setMenu(!menu)
    }

    const [ mendoza, getMendoza ] = useState([])
    const [ isFetching, setIsFetching] = useState('')
    useEffect(()=>{
        const getClima = async ()=>{
            setIsFetching(true)
            try{
                const response = await fetch('https://ws.smn.gob.ar/map_items/weather')
                if(response.status === 200){
                    const clima = await response.json()
                    getMendoza(clima)
                    setIsFetching(false)
                }
                else{
                    console.log('Ups, hubo un error')
                    setIsFetching(false);
                }
            }catch(error){
                console.log(error)
                setIsFetching(false)
            }
        }
        getClima()
    },[])

    const climamendoza = mendoza.find(item => 
        item.name === 'Mendoza'
        )

    const tempMendoza = climamendoza && climamendoza.weather.temp

    return (
        <>
            <Container>
                <MenuHam onClick={openMenu}>
                { menu ? <span>&#9747;</span> : <span>&#9776;</span> }</MenuHam>
                <Link to="/">
                    <Logo src={logo}></Logo>
                </Link>
                <Search>&#x26B2;</Search>
            </Container>
            
            {menu ? <Menu>
                <ItemMenu to="/locales" onClick={openMenu}>Locales
                </ItemMenu>
                <ItemMenu to="/provinciales" onClick={openMenu}>Provinciales</ItemMenu>
                <ItemMenu to="/nacionales" onClick={openMenu}>Nacionales</ItemMenu>
                <ItemMenu to="/internacionales" onClick={openMenu}>Internacionales</ItemMenu>
                <ItemMenu to="/orbitando" onClick={openMenu}>Orbitando</ItemMenu>
                <ItemMenu to="/emprendimientos" onClick={openMenu}>Emprendimientos</ItemMenu>
                <ItemMenu to="/cultura" onClick={openMenu}>Cultura</ItemMenu>
                <ItemMenu to="/diversidad" onClick={openMenu}>Diversidad</ItemMenu>
            </Menu> : 
            <Submenu>
                <GroupSubmenu>
                Dólar: venta $101,75 / compra $95,75 BNA
                </GroupSubmenu>
                <GroupSubmenu>
                    <SiInstagram />
                    <SiTwitter />
                    <SiFacebook />
                    <SiYoutube />
                </GroupSubmenu>
                {!isFetching && 
                <GroupSubmenu>
                    <FaTemperatureLow />
                    {tempMendoza} °C {Hoy}
                </GroupSubmenu> }
            </Submenu>}
        </>
    )
}

export default Navbar
