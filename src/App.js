import logo from './logo.svg';
import './App.css';
import Heros from './Componentes/hero/Heros';
import Testa from './service/testa';

function App() {
  return (
    <div className="App">
      {Heros()}

    </div>
  );
}

export default App;
