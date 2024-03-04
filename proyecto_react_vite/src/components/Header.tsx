import HeaderLogo from "./HeaderLogo";
import LinkWithTransition from "@/components/LinkWithTransition";

const Header = (): JSX.Element => {
  return (
    <header id="header" className="header"
            style={{viewTransitionName: `header`}}
    >
      <LinkWithTransition href="/">
        {/* <!-- LOGO --> */}
        <HeaderLogo></HeaderLogo>
      </LinkWithTransition>
    </header>
  );
}

export default Header;