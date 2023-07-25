import NavegadorSecundarioNav from "../NavegadorSec";
import { ContainerNav, DescricaoPrimaria, TextNav, Image } from "./navegadorStyle";

export default function NavegadorNav() {
    return (
       <ContainerNav>
        <TextNav>Bem Vindo!</TextNav>
        <DescricaoPrimaria>Meu nome é Lucas Pereira, e sou estudante de ciência da computação.</DescricaoPrimaria>
        <DescricaoPrimaria>Este é um site com finalidades pessoais para apresentação profissional e acadêmica.</DescricaoPrimaria>
        <NavegadorSecundarioNav></NavegadorSecundarioNav>
       </ContainerNav>
    );
};