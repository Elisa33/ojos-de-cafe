import React from 'react'
import {Container, Logo, Contact, Wrap, Copy} from './styled.footer';
import logo from '../../assets/img/logo.png'
import { IoChatboxOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { SiInstagram, SiYoutube, SiTwitter, SiFacebook } from "react-icons/si";

const Footer = () => {
    return (
        <Container>
            <Logo src={logo}></Logo>
            <Contact>
                <Wrap>
                    <IoChatboxOutline/>
                    <p>ojosdecafeweb@gmail.com</p>
                </Wrap>
                <Wrap>
                    <HiOutlinePhone/>
                    <p>+54 9 260 4235624</p>
                </Wrap>
                <Wrap>
                    <SiInstagram />
                    <SiTwitter />
                    <SiFacebook />
                    <SiYoutube />
                </Wrap>
            </Contact>
            <Copy>Desarrollado por Gorillasite</Copy>
        </Container>
    )
}

export default Footer
