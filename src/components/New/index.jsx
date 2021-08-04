import React,{useState, useEffect} from 'react'
import {Markupi, Wrapper} from './styled.new'

const New = ({ }) => {

    const [ nueva, setNueva] = useState([])

    const getNew = async ()=>{
        const noticia = await fetch('https://wp.ojosdecafe.com/?rest_route=/gs/v1/noticia/del-norte-de-suecia-al-sur-de-mendoza-abisko-tabaco-munchies')
        const newprincipal = await noticia.json()
        setNueva(newprincipal)
    } 

    useEffect(()=>{
        getNew()
    },[])

    const {titulo, bajada, fecha, contenido} = nueva   

    return (
        <div>
            <Wrapper>
                <h2>{titulo}</h2>
                <h5>{bajada}</h5>
                <span>{fecha}</span>
                <Markupi content={contenido} />
            </Wrapper>

        </div>
    )
}

export default New
