import React,{useState, useEffect} from 'react'
import {Card, Wrapper, Grid, Row, Wrap, Tag, Titulo, Bajada} from './../styled.common';
import { IoChatboxOutline, IoTimeOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import useFetch from '../Main/useFetch';


const Noticias = (props) => {

        const {etiqueta} = props
        
    
        const { isLoading,  apiData, serverError } = useFetch(
        `https://wp.ojosdecafe.com/?rest_route=/gs/v1/etiqueta/${etiqueta}`
        );
        
        
        const [noticias, setNoticias] = useState([]);
        
        useEffect(() => {
            //quite la condicion de que este vacia para que se pueda cambiar la etiqueta desde el menu
            if(apiData){
                setNoticias(apiData.listado) 
            }
        }, [noticias, setNoticias, apiData]);

        
   
    return (
        <Wrapper>
            <Grid col='24rem'>
                {isLoading && <p>Loading...</p>}
                {serverError && <p>{serverError}</p>}
                {!isLoading && (
                    noticias.map(item =>
                        (<Card key={item.id}>
                            <Link to={`/${etiqueta}/${item.slug}`}>
                                    <img src={item.imagen_destacada} alt="" />
                                <Wrap color="Violet">
                                    <Tag color='Green'>{item.categorias.nombre} Sociedad</Tag>
                                    <Titulo>{item.titulo}</Titulo>
                                    <Bajada>{item.bajada}</Bajada>
                                    <Row>
                                        <IoChatboxOutline/>
                                        <p>{item.autor.nombre}</p>
                                        <IoTimeOutline/>
                                        <p>{item.fecha}</p>
                                    </Row>
                                </Wrap>
                            
                            </Link>
                        </Card>))
                )}
            </Grid>
           
        </Wrapper>
    )
}

export default Noticias
