import React,{useEffect, useState} from 'react'
import { Container, Titulo } from './styled.main'
import Locales from '../Locales/Locales'
import Principal from './../Principal/index';
import New from './../New/index';

const Main = () => {

    const [all, setAll] = useState([]) 

    const getDataAll = async ()=>{
        const datos = await fetch('https://wp.ojosdecafe.com/?rest_route=/gs/v1/home',  {
        "method": "GET",
        "headers": {}
    })
        const todas = await datos.json()
        setAll(todas)
    }

    /* const getDataAll = async ()=>{
        const datos = await fetch('https://wp.ojosdecafe.com/?rest_route=/gs/v1/home')
        const todas = await datos.json()
        setAll(todas)
    } */
    
    
    useEffect(()=>{
        getDataAll()
    },[])
    
    const principal = all.principal;
    const locales = all.locales

    return (
        <Container>
            <Principal principal={principal}/>
            <Titulo>Locales</Titulo>
            <Locales locales={locales}/>
            <New/>
        </Container>
    )
}

export default Main
