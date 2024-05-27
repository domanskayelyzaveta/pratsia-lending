import { useState } from "react";
import {
  HeaderDiv,
  HeaderNav,
  Headers,
  TextHeader,
  HeaderNavMenu as StyledHeaderNavMenu,
} from "./Header.styled";
import sprite from "../../images/logo/sprite.svg";
import { navItems } from "./HeaderNavdata";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");

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
          <a href="/" onClick={(e) => handleNavClick("/", e)} aria-label="Logo">
            <svg width="100" height="100">
              <use href={`${sprite}#icon-logo1`} />
            </svg>
            <TextHeader>Deine karriere, unsere mission</TextHeader>
          </a>

          <HeaderNav>
            {navItems.map((item) => (
              <StyledHeaderNavMenu
                key={item.id}
                to={`${item.id}`}
                className={activeLink === item.id ? "active" : ""}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </StyledHeaderNavMenu>
            ))}
          </HeaderNav>
        </HeaderDiv>
      </div>
    </Headers>
  );
};

export default Header;