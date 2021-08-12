import React,{useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Container, Titulo } from './styled.main'
import Provinciales from '../Provinciales/index'
import Locales from '../Locales'
import Principal from './../Principal/index';
import New from './../New/index';
import Navbar from './../Navbar/index';
import Footer from '../Footer';

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
                            <Route path="/locales" exact>
                                <Locales/>
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
                                <Titulo color='coral'>Locales</Titulo>
                                <Locales/>
                           

                                <Titulo color='violet'>Provinciales</Titulo>
                                <Provinciales/>
    
                            </Route>
                        </Switch>
                    </>
            </Container>
            <Footer/>
        </Router>
    )
}

export default Main