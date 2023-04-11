import { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UltimosArticulos from './components/UltimosArticulos';
import MiComponente from './components/ejemplos/MiComponente';

class Router extends Component {

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" Component={UltimosArticulos} />
          <Route path="/MiComponente" Component={MiComponente} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;