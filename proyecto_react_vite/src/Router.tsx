import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


import Header from './components/Header';
import Home from './Pages/Home';
import Blog from './Pages/Blog'
import ClearFix from './components/ClearFix';
import Footer from './components/Footer';

import MiComponente from './components/ejemplos/MiComponente';
import NotFound from './components/NotFound';



class Router extends Component {

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blog" Component={Blog} />
          <Route path="/formulario" element={
            <>
              <h2>Poniendo texto desde un render en una ruta</h2>
              <p>Este es otro elemento JSX</p>
            </>
          } />
          <Route path='*' Component={NotFound}></Route>
        </Routes>
        <ClearFix></ClearFix>

        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default Router;