import { styled } from "styled-components";
import backGroundImage from "../assets/imagem01.avif";

export const ContainerNav = styled.div`
  width: 100vw;
  height: 30vh;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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