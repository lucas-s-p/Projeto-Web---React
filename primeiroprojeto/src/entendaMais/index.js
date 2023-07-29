import { ContainerEntenda, ImagemCopo, Container, BotaoAbre, ContainerBotao, ContainerBotaoFecha, BotaoFecha} from "./entendaStyle";
import copo from "../assets/copoComputacao.png";
import React, { useState } from "react";

export default function EntendaSobreMim() {
    const [isContainerVisible, setContainerVisible] = useState(false);

    const handleButtonClick = () => {
      setContainerVisible(!isContainerVisible);
    };

    return (
       <ContainerEntenda>
        <ContainerBotao style={{ display: !isContainerVisible ? "block" : "none" }} onClick={handleButtonClick}>
          <BotaoAbre>&#8964;</BotaoAbre>
        </ContainerBotao>
        <Container style={{ display: isContainerVisible ? "block" : "none" }}>
          <ContainerBotaoFecha onClick={handleButtonClick}>
            <BotaoFecha>&#8963;</BotaoFecha>
          </ContainerBotaoFecha>
        </Container>
       </ContainerEntenda>
    );
};