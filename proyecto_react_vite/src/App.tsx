import './assets/css/App.css';

// import MiComponente from './components/MiComponente';
// import MiComponenteFuncional from './components/MiComponenteFuncional';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import ClearFix from './components/ClearFix';
import Footer from './components/Footer';
import Router from './Router';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>

      <div className="center">
        <section id="content">
          <Router />
        </section>
        <Sidebar></Sidebar>
        <ClearFix></ClearFix>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
