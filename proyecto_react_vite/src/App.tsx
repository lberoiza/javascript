import './assets/css/App.css';

// import MiComponente from './components/MiComponente';
// import MiComponenteFuncional from './components/MiComponenteFuncional';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import ClearFix from './components/ClearFix';
import Footer from './components/Footer';
import UltimosArticulos from './components/UltimosArticulos';
import Router from './Router';


function App() {
  return (
    <div className="App">
        <Router></Router>
    </div>
  );
}

export default App;
