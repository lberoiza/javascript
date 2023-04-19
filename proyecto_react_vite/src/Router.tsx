import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


import Header from './components/Header';
import Home from './Pages/Home';
import Blog from './Pages/Blog'
import ClearFix from './components/ClearFix';
import Footer from './components/Footer';

// Paginas
import NotFound from './Pages/NotFound';
import Formulario from './Pages/Formulario';
import ArticlePage from './Pages/ArticlePage';
import Search from './Pages/Search';

// Componente de Ejemplo
import MiComponente from './components/ejemplos/MiComponente';
import MiComponenteFuncional from './components/ejemplos/MiComponenteFuncional';




class Router extends Component {

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blog" Component={Blog} />
          <Route path="/blog/article/:id" element={<ArticlePage></ArticlePage>} />
          <Route path="/search/:search" element={<Search></Search>} />
          <Route path="/formulario" Component={Formulario} />
          <Route path="/pagina1/funcional/:receta_title?" element={<MiComponenteFuncional />} />
          <Route path="/pagina1/clase/:receta_title?" element={<MiComponente />} />
          <Route path="/pagina2" element={
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