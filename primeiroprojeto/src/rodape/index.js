import { ContainerRodape, LinhaPrinipal, LinhaRodape, LinhaSecundaria, TextLinhaPrincipal, TextLinhaSecundaria } from "./rodapeStyle";

export default function Rodape() {
    return (
        <ContainerRodape>
            <LinhaRodape></LinhaRodape>
            <LinhaPrinipal>
                <TextLinhaPrincipal>Email
                <TextLinhaSecundaria>lucas.pereira@ccc.ufcg.edu.br</TextLinhaSecundaria>
                </TextLinhaPrincipal>
                <TextLinhaPrincipal>Contato
                <TextLinhaSecundaria>(75) 9 8863-6884</TextLinhaSecundaria>
                </TextLinhaPrincipal>
                <TextLinhaPrincipal>Cidade
                <TextLinhaSecundaria>Campina Grande - PB</TextLinhaSecundaria>
                </TextLinhaPrincipal>
                <TextLinhaPrincipal>CEP
                <TextLinhaSecundaria>44028-610</TextLinhaSecundaria>
                </TextLinhaPrincipal>
                
            </LinhaPrinipal>
        </ContainerRodape>
    );
}