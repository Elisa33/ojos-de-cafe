import React from 'react'
import { Wrapper} from './styled.principal'

const Principal = ({ principal}) => {

    const {titulo, bajada, fecha, imagen_destacada} = principal

    return (
        <div>
            <Wrapper>
                <img src={imagen_destacada} alt="" />
                <h2>{titulo}</h2>
                <h5>{bajada}</h5>
                <span>{fecha}</span>
            
            </Wrapper>

        </div>
    )
}

export default Principal
