import React from 'react'
import { Wrapper, Wrap} from './styled.principal'

const Principal = ( props ) => {

    const { principal: { titulo, bajada, fecha, imagen_destacada, slug } } = props;

    return (
        <div>
            <Wrapper to={`/${slug}`}>
                <img src={imagen_destacada} alt="" />
                <Wrap>
                    <h2>{titulo}</h2>
                    <h5>{bajada}</h5>
                    <span>{fecha}</span>
                </Wrap>
            </Wrapper>

        </div>
    )
}

export default Principal
