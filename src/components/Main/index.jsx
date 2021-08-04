import React,{useEffect, useState} from 'react'
import { Container } from './styled.main'
import New from '../New/index'

const Main = () => {

    const [noticias, setNoticias] = useState(null) 

    useEffect(()=>{
        getData()
        getDataAll()
    },[])

    const getData = async ()=>{
        const data = await fetch('https://wp.ojosdecafe.com/?rest_route=/gs/v1/noticia/del-norte-de-suecia-al-sur-de-mendoza-abisko-tabaco-munchies')
        const notis = await data.json()
        setNoticias(notis)

    }

    const [all, setAll] = useState(null) 

    const getDataAll = async ()=>{
        const datos = await fetch('https://wp.ojosdecafe.com/?rest_route=/gs/v1/home')
        const todas = await datos.json()
        setAll(todas)
        console.log(all)

    }

    return (
        <Container>
            <New noticias={noticias}/>
            <h2></h2>
        </Container>
    )
}

export default Main
