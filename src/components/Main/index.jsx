import React,{useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Container, Titulo } from './styled.main'
import Navbar from './../Navbar/index';
import {Card, Wrapper, Grid} from './../styled.common';
import Locales from '../Locales'
import Provinciales from '../Provinciales/index'
import Nacionales from '../Nacionales';
import Internacionales from './../Internacionales/index';
import Principal from './../Principal/index';
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
                
                    <>
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
                            {!isFetching && (
                                <Principal principal={principal}/>
                            )}
                                
                               

                                {isFetching && <p>Loading...</p>}
                                {error && <p>{error}</p>}
                                <Wrapper>
                                    <Titulo color='Yellow'>Destacadas</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            destacadas.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/destacadas/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>

                                    <Titulo color='Yellow'>Locales</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            localitos.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/locales/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>

                                    <Titulo color='LightBlue'>Provinciales</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            provinciales.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/provinciales/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>

                                    <Titulo color='Blue'>Nacionales</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            nacionales.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/nacionales/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>
                                    <Titulo color='DarkGreen'>Internacionales</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            internacionales.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/internacionales/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>
                                    <Titulo color='DarkGreen'>Café Academico</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            cafeacademico.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/cafe-academico/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>
                                    <Titulo color='DarkGreen'>Orbitando</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            orbitando.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/orbitando/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>
                                    <Titulo color='DarkGreen'>Opiniones</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            opiniones.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/opiniones/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>
                                    <Titulo color='DarkGreen'>Información Despierta</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            informaciondespierta.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/informacion-despierta/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>
                                    <Titulo color='DarkGreen'>Emprendimientos</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            emprendimientos.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/emprendimientos/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>
                                    <Titulo color='DarkGreen'>Cultura</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            cultura.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/cultura/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>
                                    <Titulo color='DarkGreen'>Diversidad</Titulo>
                                    <Grid col='20rem'>
                                        {!isFetching && (
                                            diversidad.map(item =>
                                                (<Card key={item.id}>
                                                    <Link to={`/diversidad/${item.slug}`}>
                                                        <img src={item.imagen_destacada} alt="" />
                                                        <h2>{item.titulo}</h2>
                                                    </Link>
                                                </Card>))
                                        )}
                                    </Grid>
                                </Wrapper>
        
                                

    
                            </Route>
                        </Switch>
                    </>
            </Container>
            <Footer/>
        </Router>
    )
}

export default Main