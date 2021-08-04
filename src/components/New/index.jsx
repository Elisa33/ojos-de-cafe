import React from 'react'
import { Markup } from 'interweave';
import {Markupi, Wrapper} from './styled.new'

const New = ({ noticias}) => {

    const {titulo, bajada, fecha, contenido} = noticias
   

    return (
        <div>
            <Wrapper>
                <h2>{titulo}</h2>
                <h4>{bajada}</h4>
                <span>{fecha}</span>
                <Markupi content={contenido} />
            </Wrapper>

        </div>
    )
}

export default New
