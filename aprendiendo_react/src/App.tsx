import './assets/css/App.css';

// import MiComponente from './components/MiComponente';
// import MiComponenteFuncional from './components/MiComponenteFuncional';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <div className="center">
        <section id="content">
        </section>
        <Sidebar></Sidebar>
      </div>

    </div>
  );
}

export default App;
