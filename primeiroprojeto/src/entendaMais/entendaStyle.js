import { styled } from "styled-components";

export const ContainerEntenda = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    background-color: red;
    align-items: center;
    cursor: pointer;
    position: relative;
`

export const ImagemCopo = styled.img`
    width: 80%;
    height: 80%;
    object-fit: contain;
`

export const ContainerBotao = styled.div`
  position: absolute;
  top: 5px;
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
`;

export const BotaoAbre = styled.text`
  font-size: 2rem;
  color: white;
  display: flex;
  justify-content: center;
`;

export const ContainerBotaoFecha = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
`;

export const BotaoFecha = styled.text`
  font-size: 2rem;
  color: black;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 80vw;
  height: 55vh;
  background-color: lightgray;
`;