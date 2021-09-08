import React from 'react';
import styled from 'styled-components'


const CardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const CardImagem =  styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const CardTexto = styled.div `
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <CardContainer >
            <CardImagem src={ props.imagem } />
            <CardTexto>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </CardTexto>
        </CardContainer>
    )
}

export default CardGrande;



