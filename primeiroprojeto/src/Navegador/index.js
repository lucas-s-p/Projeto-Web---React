import NavegadorSecundarioNav from "../NavegadorSec";
import { ContainerNav, DescricaoPrimaria, TextNav, Image, ImageTopo } from "./navegadorStyle";
import imagemComputacao from "../assets/computacao.png";
export default function NavegadorNav() {
    return (
       <ContainerNav>
        <ImageTopo src ={imagemComputacao}></ImageTopo>
       </ContainerNav>
    );
};