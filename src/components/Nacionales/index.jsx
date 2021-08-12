import React, {useState,useEffect}from 'react'
import { Card, Wrapper, Grid} from '../styled.common';
import {Link} from 'react-router-dom'
import useFetch from './../Main/useFetch';

const Nacionales = () => {


    const { isLoading,  apiData, serverError } = useFetch(
    'https://wp.ojosdecafe.com/?rest_route=/gs/v1/etiqueta/nacionales'
    );
    
    
    const [nacionales, setNacionales] = useState([]);
    
    useEffect(() => {

        if(apiData && nacionales.length === 0){
            setNacionales(apiData.listado)
        }
    }, [nacionales, setNacionales, apiData]);
  

   //const tresnacionales = nacionales.slice(0,3)

    return (
        <Wrapper>
            <Grid col='20rem'>
                {isLoading && <p>Loading...</p>}
                {serverError && <p>{serverError}</p>}
                {!isLoading && (
                    nacionales.map(item =>
                        (<Card key={item.id}>
                            <Link to={`/nacionales/${item.slug}`}>
                                <img src={item.imagen_destacada} alt="" />
                                <h2>{item.titulo}</h2>
                            </Link>
                        </Card>))
                )} 
            </Grid>
           
        </Wrapper>
    )
}

export default Nacionales
