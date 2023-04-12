import React from "react";

const NotFound = function () : JSX.Element {
  return (
    <React.Fragment>
      <h2 className="subheader">Pagina no encontrada</h2>
      <p>La pagina a la que intentas acceder no existe.</p>
    </React.Fragment>
  );
}

export default NotFound;