import logo from './logo.svg';
import './App.css';
import { Container } from './Header/headerStyle';
import NavegadorNav from './Navegador';
import { SobreAprendizagem } from './SobreAprendizagem';
import NavegadorSecundarioNav from './NavegadorSec';
import EntendaSobreMim from './entendaMais';

function App() {
  return (
    <Container>
      <NavegadorNav></NavegadorNav>
      <NavegadorSecundarioNav></NavegadorSecundarioNav>
      <SobreAprendizagem></SobreAprendizagem>
      <EntendaSobreMim></EntendaSobreMim>
    </Container>
  );
};

export default App;