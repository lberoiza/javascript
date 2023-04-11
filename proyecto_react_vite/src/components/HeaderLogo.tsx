import reactLogo from '../assets/images/logo.svg';

function HeaderLogo() : JSX.Element {
  return (
    <div id="logo">
    <img src={reactLogo} alt="Logotipo" className="app-logo" />
      <span id="brand">
        <strong>React</strong>JS
      </span>
  </div>
  );
}

export default HeaderLogo;