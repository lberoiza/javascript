import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog'
import Footer from './components/Footer';

// Componente de Ejemplo
import MiComponente from './components/ejemplos/MiComponente';
import MiComponenteFuncional from './components/ejemplos/MiComponenteFuncional';

// Paginas
import NotFound from './pages/NotFound';
import Formulario from './pages/Formulario';
import ArticlePage from './pages/ArticlePage';
import Search from './pages/Search';
import PageCreateArticle from './pages/PageCreateArticle';
import PageEditArticle from './pages/PageEditArticle';
import Menu from './components/Menu';



class Router extends Component {

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Header></Header>
        <Menu></Menu>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blog" Component={Blog} />
          <Route path="/blog/article/:id" element={<ArticlePage></ArticlePage>} />
          <Route path="/blog/nuevo" element={<PageCreateArticle></PageCreateArticle>} />
          <Route path="/blog/edita/:id" element={<PageEditArticle></PageEditArticle>} />
          <Route path="/search/:search" element={<Search></Search>} />
          <Route path="/formulario" Component={Formulario} />
          <Route path="/pagina1/funcional/:receta_title?" element={<MiComponenteFuncional />} />
          <Route path="/pagina1/clase/:receta_title?" element={<MiComponente />} />
          <Route path="/pagina2" element={
            <section id="content">
              <h2>Poniendo texto desde un render en una ruta</h2>
              <p>Este es otro elemento JSX</p>
            </section>
          } />
          <Route path='*' Component={NotFound}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default Router;