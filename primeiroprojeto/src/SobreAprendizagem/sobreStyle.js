import styled, { keyframes } from "styled-components";

export const ContainerSobre = styled.nav`
  height: 60vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "sobre1 sobre2 sobre3";
  background-color: yellow;
`;

export const Sobre1 = styled.header`
  grid-area: sobre1;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const Sobre2 = styled.header`
  grid-area: sobre2;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: green;
`;
export const Sobre3 = styled.header`
  grid-area: sobre3;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: red;
`;
export const ContainerBotao = styled.div`
  width: 120px;
  height: 50px;
  background-color: green;
  border: 4px solid yellow;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TextBotao = styled.text`
  font-size: 2rem;
  color: white;
  font-family: Arial;
`;

export const Container = styled.div`
  width: calc(100vh - 300px);
  height: 330px;
  background-color: lightgray;
  padding: 20px;
  margin-top: 20px;
`;
