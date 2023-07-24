import logo from './logo.svg';
import './App.css';
import { Container } from './Header/headerStyle';
import NavegadorNav from './Navegador';
import NavegadorSecundarioNav from './NavegadorSec';
import { SobreAprendizagem } from './SobreAprendizagem';


function App() {
  return (
    <Container>
      <NavegadorNav></NavegadorNav>
      <SobreAprendizagem></SobreAprendizagem>
    </Container>
  );
};

export default App;