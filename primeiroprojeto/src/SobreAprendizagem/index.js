import React, { useState } from "react";
import styled from "styled-components";
import {
  ContainerSobre,
  Sobre1,
  Sobre2,
  Sobre3,
  ContainerBotao,
  TextBotao,
  Container,
} from "./sobreStyle";

export function SobreAprendizagem() {
  const [isContainerVisible, setContainerVisible] = useState(false);

  const handleButtonClick = () => {
    setContainerVisible(!isContainerVisible);
  };

  const navigateTo = (link) => {
    window.open(link);
  };

  return (
    <ContainerSobre>
      <Sobre1>
        <ContainerBotao onClick={() => navigateTo("https://www.google.com")}>
          <TextBotao>Clique</TextBotao>
        </ContainerBotao>
      </Sobre1>
      <Sobre2>ola</Sobre2>
      <Sobre3>
        <ContainerBotao style={{ display: !isContainerVisible ? "block" : "none" }} onClick={handleButtonClick}>
          <TextBotao>...</TextBotao>
        </ContainerBotao>
        <Container style={{ display: isContainerVisible ? "block" : "none" }}>
          <ContainerBotao onClick={handleButtonClick}>X</ContainerBotao>
        </Container>
      </Sobre3>
    </ContainerSobre>
  );
}
