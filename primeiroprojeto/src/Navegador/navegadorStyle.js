import { styled } from "styled-components";
import backGroundImage from "../assets/imagem01.avif";

export const ContainerNav = styled.div`
  width: 100vw;
  height: 25vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backGroundImage});
`;

export const TextNav = styled.text`
  margin-left: 20px;
  font-size: 2rem;
  font-family: serif;
  color: white;
`
export const DescricaoPrimaria = styled.text`
  margin-top: -40px;
  margin-left: 20px;
  font-size: 1.2rem;
  font-family: Arial;
  color: white;
`

export const ImageTopo = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
`