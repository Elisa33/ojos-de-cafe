import React, {useState,useEffect}from 'react'
import { Card, Wrapper, Grid} from '../styled.common';
import {Link} from 'react-router-dom'
import useFetch from './../Main/useFetch';

const Internacionales = () => {


    const { isLoading,  apiData, serverError } = useFetch(
    'https://wp.ojosdecafe.com/?rest_route=/gs/v1/etiqueta/internacionales'
    );
    
    
    const [internacionales, setInternacionales] = useState([]);
    
    useEffect(() => {

        if(apiData && internacionales.length === 0){
            setInternacionales(apiData.listado)
        }
    }, [internacionales, setInternacionales, apiData]);
  

   //const tresinternacionales = internacionales.slice(0,3)

    return (
        <Wrapper>
            <Grid col='20rem'>
                {isLoading && <p>Loading...</p>}
                {serverError && <p>{serverError}</p>}
                {!isLoading && (
                    internacionales.map(item =>
                        (<Card key={item.id}>
                            <Link to={`/internacionales/${item.slug}`}>
                                <img src={item.imagen_destacada} alt="" />
                                <h2>{item.titulo}</h2>
                            </Link>
                        </Card>))
                )} 
            </Grid>
           
        </Wrapper>
    )
}

export default Internacionales
