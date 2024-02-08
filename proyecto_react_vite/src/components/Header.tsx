import React, { Component } from "react";
import HeaderLogo from "./HeaderLogo";

class Header extends Component {

  public render(): JSX.Element {
    return (
      <header id="header" className="header">
        {/* <!-- LOGO --> */}
        <HeaderLogo></HeaderLogo>
      </header>
    );
  }
}

export default Header;