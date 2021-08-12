import React, {useState,useEffect}from 'react'
import { Card, Wrapper, Grid} from '../styled.common';
import {Link} from 'react-router-dom'
import useFetch from './../Main/useFetch';

const Provinciales = () => {


    const { isLoading,  apiData, serverError } = useFetch(
    'https://wp.ojosdecafe.com/?rest_route=/gs/v1/etiqueta/provinciales'
    );
    
    
    const [provinciales, setProvinciales] = useState([]);
    
    useEffect(() => {

        if(apiData && provinciales.length === 0){
            setProvinciales(apiData.listado)
        }
    }, [provinciales, setProvinciales, apiData]);
  

   //const tresprovinciales = provinciales.slice(0,3)

    return (
        <Wrapper>
            <Grid col='10rem'>
                {isLoading && <p>Loading...</p>}
                {serverError && <p>{serverError}</p>}
                {!isLoading && (
                    provinciales.map(item =>
                        (<Card key={item.id}>
                            <Link to={`/provinciales/${item.slug}`}>
                                <img src={item.imagen_destacada} alt="" />
                                <h2>{item.titulo}</h2>
                            </Link>
                        </Card>))
                )} 
            </Grid>
           
        </Wrapper>
    )
}

export default Provinciales
