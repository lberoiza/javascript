import LinkWithTransition from "@/components/LinkWithTransition";

const Menu = (): JSX.Element => {
  return (
    < nav id="menu">
      <ul>
        <li><LinkWithTransition href="/">Inicio</LinkWithTransition></li>
        <li><LinkWithTransition href="/blog">Blog</LinkWithTransition></li>
        <li><LinkWithTransition href="/formulario">Formulario</LinkWithTransition></li>
        <li><LinkWithTransition href="/pagina1/funcional/receta">Pagina 1</LinkWithTransition></li>
        <li><LinkWithTransition href="/pagina2">Pagina 2</LinkWithTransition></li>
      </ul>
    </nav>
  );
}

export default Menu;