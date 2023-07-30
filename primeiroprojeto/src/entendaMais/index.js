import { ContainerEntenda, Container, ContainerBotaoAbre, ContainerBotaoFecha, SobreMimText, ImagemIlustrativa, ImagemAvatar, TextBotaoFecha} from "./entendaStyle";
import copo from "../assets/copoComputacao.png";
import imagemFundo from "../assets/imagemFundo2.png"
import avatar from "../assets/avatar.png"
import React, { useState } from "react";

export default function EntendaSobreMim() {
    const [isContainerVisible, setContainerVisible] = useState(false);

    const handleButtonClick = () => {
      setContainerVisible(!isContainerVisible);
    };

    return (
       <ContainerEntenda>
        <ImagemAvatar src={avatar}></ImagemAvatar>
        <ContainerBotaoAbre style={{ display: !isContainerVisible ? "block" : "none" }} onClick={handleButtonClick}>
          <SobreMimText>Aboute me &#8964;</SobreMimText>
        </ContainerBotaoAbre>
        <Container style={{ display: isContainerVisible ? "block" : "none" }}>
          <ContainerBotaoFecha onClick={handleButtonClick}>
            <TextBotaoFecha>&#8963;</TextBotaoFecha>
          </ContainerBotaoFecha>
          <SobreMimText>My name is Lucas de Sousa Pereira, I'm a computer science student at the Universidade Federal de Campina Grande (UFCG), throughout the course I've been looking for knowledge and I've learned as much about hardware as software, the emphasis of the course is on the back-end, but I've been looking to learn front-end externally, practical in my free time, I already have experience with Java, C, Python, CSS, Html, Java Script, among others.</SobreMimText>
          <ImagemIlustrativa src={imagemFundo}></ImagemIlustrativa>
        </Container>
       </ContainerEntenda>
    );
};