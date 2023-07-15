import logo from './logo.svg';
import './App.css';
import { Container } from './Header/headerStyle';
import NavegadorNav from './Navegador';
import NavegadorSecundarioNav from './NavegadorSec';


function App() {
  return (
    <Container>
      <NavegadorNav></NavegadorNav>
    </Container>
  );
};

export default App;