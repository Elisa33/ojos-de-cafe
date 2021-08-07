import React from 'react'
import { Card, Wrapper, Grid} from './styled.locales';
import {Link} from 'react-router-dom'

const Locales = (props) => {
   const { locales } = props;
    return (
        <Wrapper>
            <Grid>
                { locales.map(item =>
                    (<Card key={item.id}>
                        <Link to={`/locales/${item.slug}`}>
                            <img src={item.imagen_destacada} alt="" />
                            <h2>{item.titulo}</h2>
                        </Link>
                    </Card>)
                )}

            </Grid>
           
        </Wrapper>
    )
}

export default Locales
