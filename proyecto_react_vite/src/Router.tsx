import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UltimosArticulos from './components/UltimosArticulos';
import MiComponente from './components/ejemplos/MiComponente';
import NotFound from './components/NotFound';

class Router extends Component {

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={UltimosArticulos} />
          <Route path="/MiComponente" Component={MiComponente} />
          <Route path="/UsaElement" element={(
            <React.Fragment>
              <h2>Poniendo texto desde un render en una ruta</h2>
              <MiComponente></MiComponente>
            </React.Fragment>
          )} />
          <Route path='*' Component={NotFound}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;