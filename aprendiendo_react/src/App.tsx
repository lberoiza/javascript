import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// import MiComponente from './components/MiComponente';
// import MiComponenteFuncional from './components/MiComponenteFuncional';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <section className="componentes">
          <MiComponente />
          <MiComponenteFuncional />
        </section>

      </header> */}
    </div>
  );
}

export default App;
