import React, { useState } from "react";
import styled from "styled-components";
import imageGit from "../assets/imageGit.png";
import imageHobbie from "../assets/hobbies.png"
import imageLinguagens from "../assets/nomesLinguagens.jpg";
import {
  ContainerSobre,
  Sobre1,
  Sobre2,
  Sobre3,
  ContainerBotao,
  TextBotao,
  Container,
  ImageGit,
  ImageHobbies,
  ImageLinguagens,
} from "./sobreStyle";

export function SobreAprendizagem() {
  const [isContainerVisible, setContainerVisible] = useState(false);

  const handleButtonClick = () => {
    setContainerVisible(!isContainerVisible);
  };

  return (
    <ContainerSobre>
      <Sobre1>
        <ImageLinguagens src={imageLinguagens}></ImageLinguagens>
      </Sobre1>
      <Sobre2>
        <ImageGit src={imageGit} alt="Imagem do git"></ImageGit>
      </Sobre2>
      <Sobre3>
        <ImageHobbies src={imageHobbie} alt="Imagem do git"></ImageHobbies>
      </Sobre3>
    </ContainerSobre>
  );
}
