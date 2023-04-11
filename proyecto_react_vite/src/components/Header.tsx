import React, { Component } from "react";
import Menu from "./Menu";
import ClearFix from "./ClearFix";
import HeaderLogo from "./HeaderLogo";

class Header extends Component {

  public render(): JSX.Element {
    return (
      <header id="header">
        <div className="center">
          {/* <!-- LOGO --> */}
          <HeaderLogo></HeaderLogo>

          {/* <!-- MENU --> */}
          <Menu></Menu>

          {/* <!-- LIMPIAR FLOAT ELEMENTS --> */}
          <ClearFix></ClearFix>
        </div>

      </header>
    );
  }
}

export default Header;