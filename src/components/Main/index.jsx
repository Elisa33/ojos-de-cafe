import React,{useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Container, Titulo } from './styled.main'
import Navbar from './../Navbar/index';
import Locales from '../Locales'
import Provinciales from '../Provinciales/index'
import Nacionales from '../Nacionales';
import Internacionales from './../Internacionales/index';
import Principal from './../Principal/index';
import New from './../New/index';
import Footer from '../Footer';
import PrincipalDos from './../PrincipalDos/index';


const Main = () => {

   
    const [all, setAll] = useState([]) 
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    
       
    useEffect(()=>{
        console.log('entro al useefect')
        const getDataAll = async ()=>{
            console.log('entro al getdataall')
            try{
                console.log('entro al try')
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
                                
                                {/* <PrincipalDos/> */}

                                <Titulo color='Yellow'>Locales</Titulo>
                                <Locales/>
        
                                <Titulo color='LightBlue'>Provinciales</Titulo>
                                <Provinciales/>

                                <Titulo color='MediumBlue'>Nacionales</Titulo>
                                <Nacionales/>

                                <Titulo color='DarkGreen'>Internacionales</Titulo>
                                <Internacionales/>
    
                            </Route>
                        </Switch>
                    </>
            </Container>
            <Footer/>
        </Router>
    )
}

export default Main