import logo from './logo.svg';
import Reloj from './Componentes/Reloj';
import './App.css';
import Navegacion from './Componentes/Navegacion'

function App() {
  return (
    <div className="App">
      <Navegacion />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Reloj />
      </header>
    </div>
  );
}

export default App;
