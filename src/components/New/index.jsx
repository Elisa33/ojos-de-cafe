import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Container, Markupi, Wrapper, Wrap, Column} from './styled.new'


const New = ({ }) => {

    
    const {slug} = useParams()

    const [ nueva, setNueva] = useState([])

    
    useEffect(()=>{
        const getNew = async ()=>{
            const noticia = await fetch(`https://wp.ojosdecafe.com/?rest_route=/gs/v1/noticia/${slug}`)
            const newprincipal = await noticia.json()
            setNueva(newprincipal)
        } 
        getNew()
    },[slug])

    const {titulo, bajada, fecha, contenido, imagen_destacada} = nueva   

    return (
        <Container>
            <Wrapper>
                <img src={imagen_destacada} alt="" />
                <Wrap>
                    <h2>{titulo}</h2>
                    <h5>{bajada}</h5>
                    <span>{fecha}</span>
                    <Markupi content={contenido} />
                </Wrap>
            </Wrapper>
            <Column>columna</Column>
        </Container>
    )
}

export default New
