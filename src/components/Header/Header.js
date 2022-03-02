import "./Header.scss";
import logoImg from "../../image/Header/logo.png";
import menuIcon from "../../image/Header/menuIcon.svg";
import Container from "../Container/Container";
import HeaderLayout from "../../layout/HeaderLayout/HeaderLayout";
import abrirFecharMenu from "./funcoes/AbrirFecharMenu";



function Header() {

  return (
    <HeaderLayout>
      <Container>
          <div className="header">
            <div className="header-container-menu-icon-e-logo">
              <div className="header-container-menu-icon">
                <img
                  className="header__menu-icon"
                  onClick={abrirFecharMenu}
                  src={menuIcon}
                  alt="menu icon"
                />
              </div>
              <a className="header__link-logo" href="./index.html">
                <img className="header__img-logo" src={logoImg} alt="logo" />
              </a>
            </div>

            <nav className="header__nav">
              <div className="header-nav-container-menu-icon">
                <img
                  className="header__nav__menu-icon"
                  onClick={abrirFecharMenu}
                  src={menuIcon}
                  alt="menu icon"
                />
              </div>

              <a className="header__nav__link" href="#1">
                Home
              </a>
              <a className="header__nav__link" href="#2">
                Service
              </a>
              <a className="header__nav__link" href="#3">
                About
              </a>
              <a className="header__nav__link" href="#4">
                Contact
              </a>
              <a className="header__nav__link" href="#5">
                Register
              </a>
            </nav>
          </div>
        </Container>
    </HeaderLayout>
  );
}

export default Header;
