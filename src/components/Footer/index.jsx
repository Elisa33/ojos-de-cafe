import React from 'react'
import {Container, Logo, Contact, Wrap, Icon, Copy} from './styled.footer';
import logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
        <Container>
            <Logo src={logo}></Logo>
            <Contact>
                <Wrap>
                    <Icon>icon </Icon>
                    <p>ojosdecafeweb@gmail.com</p>
                </Wrap>
                <Wrap>
                    <Icon>icon </Icon>
                    <p>+54 9 260 4235624</p>
                </Wrap>
                <Wrap>
                    <Icon>ic</Icon>
                    <Icon>ic</Icon>
                    <Icon>ic</Icon>
                    <Icon>ic</Icon>
                </Wrap>
            </Contact>
            <Copy>Desarrollado por Gorilla</Copy>
        </Container>
    )
}

export default Footer
