import React,{useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Container, Etiqueta } from './styled.main'
import { IoChatboxOutline, IoTimeOutline } from "react-icons/io5";
import Navbar from './../Navbar/index';
import {Card, Wrapper, Grid, Row, Wrap, Tag, Titulo, Bajada, Publi, Perfil, OpLink} from './../styled.common';
import Locales from '../Locales'
import Provinciales from '../Provinciales/index'
import Nacionales from '../Nacionales';
import Internacionales from './../Internacionales/index';
import New from './../New/index';
import Footer from '../Footer';



const Main = () => {

   
    const [all, setAll] = useState([]) 
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    
       
    useEffect(()=>{
        const getDataAll = async ()=>{
            try{
                const response = await fetch('https://wp.ojosdecafe.com/?rest_route=/gs/v1/home',{
                    "method": "GET",
                    "headers": {}
                })
                if(response.status === 200){
                    console.log('esta ok en 200')
                    const todas = await response.json()
                    setAll(todas)
                    setIsFetching(false)
                }
                else{
                    console.log('Ups, hubo un error')
                    setIsFetching(false)
                    setError("Ups, hubo un error");
                }
            }catch(error){
                console.log(error)
                setError(e)
                setIsFetching(false)
            }
        }
        getDataAll()
    },[])
    
    const principal = all ? all.principal : undefined;
    const localitos = all ? all.locales : undefined;
    const provinciales = all ? all.provinciales : undefined;
    const nacionales = all ? all.nacionales : undefined;
    const internacionales = all ? all.internacionales : undefined;
    const destacadas = all ? all.destacadas : undefined;
    const orbitando = all ? all.orbitando : undefined;
    const opiniones = all ? all.opiniones : undefined;
    const cafeacademico = all ? all['cafe academico'] : undefined;
    const informaciondespierta = all ? all['informacion despierta'] : undefined;
    const emprendimientos = all ? all.emprendimientos : undefined;
    const cultura = all ? all.cultura : undefined;
    const diversidad = all ? all.diversidad : undefined;


    return (
        <Router>
            <Navbar/>
            <Container>
                <Switch>
                    <Route path="/provinciales/:slug" >
                        <New/>
                    </Route>
                    <Route path="/locales/:slug" >
                        <New/>
                    </Route>
                    <Route path="/nacionales/:slug" >
                        <New/>
                    </Route>
                    <Route path="/internacionales/:slug" >
                        <New/>
                    </Route>
                    <Route path="/emprendimientos/:slug" >
                        <New/>
                    </Route>

                    <Route path="/locales" exact>
                        <h1>locales</h1>
                        <Locales/>
                    </Route>
                    <Route path="/provinciales" exact>
                        <Provinciales/>
                    </Route>
                    <Route path="/nacionales" exact>
                        <Nacionales/>
                    </Route>
                    <Route path="/internacionales" exact>
                        <Internacionales/>
                    </Route>
                    <Route path="/:slug" exact>
                        <New/>
                    </Route>
                    <Route path="/" exact>
                        
                        {isFetching && <p>Loading...</p>}
                        {error && <p>{error}</p>}
                        <Wrapper>
                            <Grid col='40rem'>
                                {!isFetching && (
                                    
                                        <Card key={principal.id}>
                                            <Link to={`/destacadas/${principal.slug}`}>
                                                    <img src={principal.imagen_destacada} alt="" />
                                                <Wrap color="Violet">
                                                    <Tag color='Green'>{principal.categorias.nombre} Sociedad</Tag>
                                                    <Titulo>{principal.titulo}</Titulo>
                                                    <p>{principal.bajada}</p>
                                                    <Row>
                                                        <IoChatboxOutline/>
                                                        <p>{principal.autor.nombre}</p>
                                                        <IoTimeOutline/>
                                                        <p>{principal.fecha}</p>
                                                    </Row>
                                                </Wrap>
                                            
                                            </Link>
                                        </Card>
                                )}
                            </Grid>
                            <Etiqueta color='Blue'>Destacadas</Etiqueta>
                            <Grid col='24rem'>
                                {!isFetching && (
                                    destacadas.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/destacadas/${item.slug}`}>
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

                            <Publi src="https://ik.imagekit.io/ugck6caznxf/ojos-media/epre/ESTABILIZACION_BODEGA-1170x200-CS6-1_d0CCx9YbG.gif" alt="" />

                            <Etiqueta color='Yellow'>Locales</Etiqueta>
                            <Grid col='15rem'>
                                {!isFetching && (
                                    localitos.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/locales/${item.slug}`}>
                                                    <img src={item.imagen_destacada} alt="" />
                                                <Wrap>
                                                    <Titulo>{item.titulo}</Titulo>
                                                </Wrap>
                                            </Link>
                                        </Card>))
                                )}
                            </Grid>

                            <Etiqueta color='LightBlue'>Provinciales</Etiqueta>
                            <Grid col='15rem'>
                                {!isFetching && (
                                    provinciales.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/provinciales/${item.slug}`}>
                                                    <img src={item.imagen_destacada} alt="" />
                                                <Wrap>
                                                    <Tag>Política</Tag>
                                                    <Titulo height='8rem'>{item.titulo}</Titulo>
                                                    <Bajada>{item.bajada}</Bajada>
                                                </Wrap>
                                            </Link>
                                        </Card>))
                                )}
                            </Grid>

                            <Etiqueta color='MediumBlue'>Nacionales</Etiqueta>
                            <Grid col='15rem'>
                                {!isFetching && (
                                    nacionales.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/nacionales/${item.slug}`}>
                                                    <img src={item.imagen_destacada} alt="" />
                                                <Wrap>
                                                    <Tag>Política</Tag>
                                                    <Titulo height='8rem'>{item.titulo}</Titulo>
                                                    <Bajada>{item.bajada}</Bajada>
                                                </Wrap>
                                            </Link>
                                        </Card>))
                                )}
                            </Grid>
                            <Etiqueta color='DarkGreen'>Internacionales</Etiqueta>
                            <Grid col='24rem'>
                                {!isFetching && (
                                    internacionales.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/internacionales/${item.slug}`}>
                                                    <img src={item.imagen_destacada} alt="" />
                                                <Wrap>
                                                    <Tag>Política</Tag>
                                                    <Titulo height='7rem'>{item.titulo}</Titulo>
                                                    <Bajada>{item.bajada}</Bajada>
                                                </Wrap>
                                            </Link>
                                        </Card>))
                                )}
                            </Grid>
                            <Etiqueta color='Green'>Orbitando</Etiqueta>
                            <Grid col='15rem'>
                                {!isFetching && (
                                    orbitando.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/orbitando/${item.slug}`}>
                                                    <img src={item.imagen_destacada} alt="" />
                                                <Wrap>
                                                    <Titulo>{item.titulo}</Titulo>
                                                </Wrap>
                                            </Link>
                                        </Card>))
                                )}
                            </Grid>

                            <Publi src="https://ik.imagekit.io/ugck6caznxf/ojos-media/epre/ESTABILIZACION_BODEGA-1170x200-CS6-1_d0CCx9YbG.gif" alt="" />

                            <Etiqueta color='DarkRed'>Opiniones</Etiqueta>
                            
                            <Grid col='15rem'>
                                {!isFetching && (
                                    opiniones.map(item =>
                                        (
                                            <OpLink key={item.id} to={`/${item.slug}`}>
                                                <Perfil src={item.imagen_destacada} alt=""/>
                                        
                                                <Titulo>{item.titulo}</Titulo>
                                           
                                            </OpLink>
                                       ))
                                )}
                            </Grid>
                            <Etiqueta color='Pink'>Café Academico</Etiqueta>
                            <Grid col='15rem'>
                                {!isFetching && (
                                    cafeacademico.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/cafe-academico/${item.slug}`}>
                                                    <img src={item.imagen_destacada} alt="" />
                                                <Wrap>
                                                    <Titulo>{item.titulo}</Titulo>
                                                </Wrap>
                                            </Link>
                                        </Card>))
                                )}
                            </Grid>
                            <Etiqueta color='MediumBlue'>Información Despierta</Etiqueta>
                            <Grid col='24rem'>
                                {!isFetching && (
                                    informaciondespierta.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/informacion-despierta/${item.slug}`}>
                                                    <img src={item.imagen_destacada} alt="" />
                                                <Wrap>
                                                    <Titulo>{item.titulo}</Titulo>
                                                </Wrap>
                                            </Link>
                                        </Card>))
                                )}
                            </Grid>
                            <Etiqueta color='MediumPink'>Emprendimientos</Etiqueta>
                            <Grid col='60rem'>
                                {!isFetching && (
                                    emprendimientos.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/emprendimientos/${item.slug}`}>
                                                    <img src={item.imagen_destacada} alt="" />
                                                <Wrap>
                                                    <Titulo>{item.titulo}</Titulo>
                                                    <Bajada>{item.bajada}</Bajada>
                                                </Wrap>
                                            </Link>
                                        </Card>))
                                )}
                            </Grid>
                            <Etiqueta color='DarkGreen'>Cultura</Etiqueta>
                            <Grid col='15rem' bg="#333" pad="1rem" radius='0.5rem'>
                                {!isFetching && (
                                    cultura.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/cultura/${item.slug}`}>
                                                    <img src={item.imagen_destacada} alt="" />
                                                <Wrap>
                                                    <Titulo height='8rem' >{item.titulo}</Titulo>
                                                </Wrap>
                                            </Link>
                                        </Card>))
                                )}
                            </Grid>

                            <Publi src="https://ik.imagekit.io/ugck6caznxf/ojos-media/epre/ESTABILIZACION_BODEGA-1170x200-CS6-1_d0CCx9YbG.gif" alt="" />

                            <Etiqueta color='Violet'>Diversidad</Etiqueta>
                            <Grid col='15rem'>
                                {!isFetching && (
                                    diversidad.map(item =>
                                        (<Card key={item.id}>
                                            <Link to={`/diversidad/${item.slug}`}>
                                                    <img src={item.imagen_destacada} alt="" />
                                                <Wrap>
                                                    <Titulo>{item.titulo}</Titulo>
                                                </Wrap>
                                            </Link>
                                        </Card>))
                                )}
                            </Grid>
                        </Wrapper>
                    </Route>
                </Switch>
            </Container>
            <Footer/>
        </Router>
    )
}

export default Main