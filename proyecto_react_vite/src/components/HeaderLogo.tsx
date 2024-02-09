function HeaderLogo() : JSX.Element {
  return (
    <div id="logo">
    <img src="/src/assets/images/logo.svg" alt="Logotipo" className="app-logo" />
      <span id="brand">
        <strong>React</strong>JS
      </span>
  </div>
  );
}

export default HeaderLogo;