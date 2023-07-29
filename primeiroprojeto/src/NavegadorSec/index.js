import { ContainerNavegadorSec, TextCurso, TextNavSec, TextUf } from "./navSecStyle";

export default function NavegadorSecundarioNav() {
    const navigateTo = (link) => {
        window.open(link);
    };

    return (
        <ContainerNavegadorSec>
            <TextCurso onClick={() => navigateTo("https://www.computacao.ufcg.edu.br/")}>Ciência da Computação</TextCurso>
            <TextNavSec onClick={() => navigateTo("https://www.linkedin.com/in/lucas-pereira-53210824a/")}>Linkedin</TextNavSec>
            <TextNavSec onClick={() => navigateTo("https://github.com/lucas-s-p")}>Git Hub</TextNavSec>
            <TextNavSec onClick={() => navigateTo("https://www.google.com")}>Instagram</TextNavSec>
            <TextNavSec onClick={() => navigateTo("https://discord.com/channels/@lucas.pereira#1251")}>Discord</TextNavSec>
            <TextUf onClick={() => navigateTo("https://portal.ufcg.edu.br/")}>UFCG</TextUf>
        </ContainerNavegadorSec>
    );
};