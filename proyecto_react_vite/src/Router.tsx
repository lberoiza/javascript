import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import ClearFix from './components/ClearFix';
import Footer from './components/Footer';

import UltimosArticulos from './components/UltimosArticulos';
import MiComponente from './components/ejemplos/MiComponente';
import NotFound from './components/NotFound';



class Router extends Component {

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Header></Header>
        <Slider></Slider>
        <div className="center">
          <section id="content">
            <Routes>
              <Route path="/" Component={UltimosArticulos} />
              <Route path="/blog" Component={MiComponente} />
              <Route path="/formulario" element={
                <>
                  <h2>Poniendo texto desde un render en una ruta</h2>
                  <p>Este es otro elemento JSX</p>
                </>
              } />
              <Route path='*' Component={NotFound}></Route>
            </Routes>
          </section>
          <Sidebar></Sidebar>
          <ClearFix></ClearFix>
        </div>

        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default Router;