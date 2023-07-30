import { styled } from "styled-components";
import fundo from "../assets/fundo2.webp"
import fundox from "../assets/fundo3.jpeg"
export const ContainerEntenda = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    align-items: center;
    position: relative;
    padding: 40px 0px 0px 0px;
    justify-content: center;
    background-image: url(${fundox});
    border: solid 8px red;
`

export const ImagemAvatar = styled.img`
    width: 90%;
    height: 90%;
    object-fit: contain;
`

export const ContainerBotaoAbre = styled.div`
  position: absolute;
  top: 10px;
  width: 200px;
  height:40px;
  background-color: black;
  border-radius: 30%;
  cursor: pointer;
`;

export const SobreMimText = styled.text`
    font-size: 1.4rem;
    font-family: Arial;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3px;
`

export const ImagemIlustrativa = styled.img`
    width: 80%;
    height: 80%;
    object-fit: contain;
`

export const ContainerBotaoFecha = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
`;

export const TextBotaoFecha = styled.text`
  font-size: 2rem;
  color: black;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  position: absolute;
  width: 60vw;
  height: 60vh;
  background-image: url(${fundo});
  display: flex;
  padding-left: 5px;
  flex-direction: row;
  text-align: center;
`;