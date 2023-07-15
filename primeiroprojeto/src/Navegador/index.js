import NavegadorSecundarioNav from "../NavegadorSec";
import { ContainerNav, TextNav } from "./navegadorStyle";

export default function NavegadorNav() {
    return (
       <ContainerNav>
        <TextNav>Testando Propriedades</TextNav>
        <NavegadorSecundarioNav></NavegadorSecundarioNav>
       </ContainerNav>
    );
};