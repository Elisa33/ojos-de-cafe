import React from 'react'
import { Wrapper, Wrap} from './styled.principal'

const Principal = ( props ) => {

    const { principal: { titulo, bajada, fecha, imagen_destacada } } = props;

    return (
        <div>
            <Wrapper>
                <img src={imagen_destacada} alt="" />
                <Wrap>
                    <h2>{titulo}</h2>
                    <span>{fecha}</span>
                    <h5>{bajada}</h5>
                </Wrap>
            </Wrapper>

        </div>
    )
}

export default Principal
