import React from 'react'
import { Card, Wrapper, Grid} from './styled.locales';

const Locales = ({locales}) => {
    //no me toma el componetne locales con las props...
    const { titulo, imagen_destacada } = locales[0];
    return (
        <Wrapper>
            <h3>Locales</h3>
            <Grid>
                { locales.map(item =>
                    <Card>
                        <img src={item.imagen_destacada} alt="" />
                        <h2>{item.titulo}</h2>
                    </Card>
                )}

            </Grid>
           
        </Wrapper>
    )
}

export default Locales
