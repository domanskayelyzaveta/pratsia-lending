import { useState } from "react";
import {
  HeaderDiv,
  HeaderNav,
  HeaderNavMenu,
  Headers,
  TextHeader,
} from "./Header.styled";
import sprite from "../../images/logo/sprite.svg";

import { navItems } from "./HeaderNavdata";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
    }
  };

  return (
    <Headers>
      <div className="container">
        <HeaderDiv>
          <a
            href="#home"
            onClick={(e) => handleNavClick("home", e)}
            aria-label="Logo"
          >
            <svg width="100" height="100">
              <use href={`${sprite}#icon-logo1`} />
            </svg>
            <TextHeader>Deine karriere, unsere mission</TextHeader>

            {/* <LogoImg src={logo} alt="Logo" /> */}
          </a>

          <HeaderNav>
            {navItems.map((item) => (
              <HeaderNavMenu
                key={item.id}
                href={`#${item.id}`}
                className={activeLink === item.id ? "active" : ""}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </HeaderNavMenu>
            ))}
          </HeaderNav>
        </HeaderDiv>
      </div>
    </Headers>
  );
};

export default Header;
