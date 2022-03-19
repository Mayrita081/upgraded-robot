import logo from './logo.svg';
import Reloj from './Componentes/Reloj';
import './App.css';
import Navegacion from './Componentes/Navegacion'
import Footer from './Componentes/Footer';
import Producto from './Componentes/Producto'



function App() {
  return (
    <div className="App">
      <Navegacion />
      <header>
      <Producto titulo="Teléfonos Celulares" />
      <hr></hr>
      <Reloj />
      </header>
      <Footer />
    </div>
  );
}

export default App;
