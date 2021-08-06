import React from 'react'
import { Card, Wrapper, Grid} from './styled.locales';

const Locales = (props) => {
   const { locales } = props;
    return (
        <Wrapper>
            <Grid>
                { locales.map(item =>
                    (<Card key={item.id}>
                        <img src={item.imagen_destacada} alt="" />
                        <h2>{item.titulo}</h2>
                    </Card>)
                )}

            </Grid>
           
        </Wrapper>
    )
}

export default Locales
