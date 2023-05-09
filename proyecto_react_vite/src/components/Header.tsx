import React, { Component } from "react";
import Menu from "./Menu";
import HeaderLogo from "./HeaderLogo";

class Header extends Component {

  public render(): JSX.Element {
    return (
      <header id="header">
        {/* <!-- LOGO --> */}
        <HeaderLogo></HeaderLogo>
      </header>
    );
  }
}

export default Header;