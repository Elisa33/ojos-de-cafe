import React,{useState, useEffect} from 'react'
import { Card, Wrapper, Grid} from './styled.locales';
import {Link} from 'react-router-dom'
import useFetch from './../Main/useFetch';


const Locales = (props) => {

        const { isLoading,  apiData, serverError } = useFetch(
        'https://wp.ojosdecafe.com/?rest_route=/gs/v1/etiqueta/locales'
        );
        
        
        const [locales, setLocales] = useState([]);
        
        useEffect(() => {

            if(apiData && locales.length === 0){
                setLocales(apiData.listado)
            }
        }, [locales, setLocales, apiData]);

   //const seislocales = locales && locales.slice(0,6)
   
    return (
        <Wrapper>
            <Grid>
                {isLoading && <p>Loading...</p>}
                    {serverError && <p>{serverError}</p>}
                    {!isLoading && (
                        locales.map(item =>
                            (<Card key={item.id}>
                                <Link to={`/locales/${item.slug}`}>
                                    <img src={item.imagen_destacada} alt="" />
                                    <h2>{item.titulo}</h2>
                                </Link>
                            </Card>))
                    )} 
            </Grid>
           
        </Wrapper>
    )
}

export default Locales
