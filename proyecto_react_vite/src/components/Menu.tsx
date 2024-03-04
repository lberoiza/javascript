import LinkWithTransition from "@/components/LinkWithTransition";

const Menu = (): JSX.Element => {
  return (
    < nav id="menu"
          style={{viewTransitionName: `menu`}}
    >
      <ul>
        <li><LinkWithTransition href="/">Home</LinkWithTransition></li>
        <li><LinkWithTransition href="/blog">Blog</LinkWithTransition></li>
        <li><LinkWithTransition href="/formulario">Form</LinkWithTransition></li>
        <li><LinkWithTransition href="/pagina1/funcional/receta">Example1</LinkWithTransition></li>
        <li><LinkWithTransition href="/pagina2">Example2</LinkWithTransition></li>
      </ul>
    </nav>
  );
}

export default Menu;