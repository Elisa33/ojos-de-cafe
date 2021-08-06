import React,{useEffect, useState} from 'react'
import { Container, Titulo } from './styled.main'
import Locales from '../Locales/Locales'
import Principal from './../Principal/index';
import New from './../New/index';

const Main = () => {

    const [all, setAll] = useState([]) 
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

       
    useEffect(()=>{
        console.log('entro al useefect')
        const getDataAll = async ()=>{
            setIsFetching(true)
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
                    setIsFetching(false);
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
    const locales = all ? all.locales : undefined;
    //console.log(principal.titulo)
    //console.log(locales[1].titulo)

    return (
        <Container>
            {isFetching && <p>Loading...</p>} 
            {error && <p>{error}</p>} 
            {!isFetching && (
                <>
                    <Principal principal={principal}/>
                    <Titulo>Locales</Titulo>
                    <Locales locales={locales}/>
                    <New/>
                </>)}
        </Container>
    )
}

export default Main