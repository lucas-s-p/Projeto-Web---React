import styled, { keyframes } from "styled-components";

export const ContainerSobre = styled.nav`
  height: 60vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "sobre1 sobre2 sobre3";
`;

export const Sobre1 = styled.header`
  grid-area: sobre1;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Sobre2 = styled.header`
  grid-area: sobre2;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Sobre3 = styled.header`
  grid-area: sobre3;
  display: flex;
  width: 96%;
  height: 100%;
  align-items: center;
  cursor: pointer;
`;

export const ImageGit = styled.img`
  width: 95%;
  height: 90%;
  border: solid 8px red;

  animation: ${keyframes`
    0% {
      border-color: #ca1101;
    }
    50% {
      border-color: #141157;
    }
    100% {
      border-color: red;
    }
  `} 4s infinite;
`

export const ImageHobbies = styled.img`
  width: 95%;
  height: 90%;
  object-fit: cover;
  border: solid 8px red;

`
export const ImageLinguagens = styled.img`
  width: 95%;
  height: 90%;
  object-fit: cover;
  border: solid 8px red;
`




export const ContainerBotao = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
`;
export const Container = styled.div`
  width: calc(100vh - 300px);
  height: 330px;
  background-color: lightgray;
  padding: 20px;
  margin-top: 20px;
`;
export const TextBotao = styled.text`
  position: absolute;
  font-size: 2rem;
  color: black;
  font-family: Arial;
  display: flex;
  justify-content: center;
`;