import { useState } from "react";
import {
  HeaderAddress,
  HeaderDiv,
  HeaderNav,
  HeaderNavMenu,
  Headers,
  LogoImg,
} from "./Header.styled";
import logo from "../../images/logo/logo1.png";
// import sprite from "../../images/logo/sprite.svg";

import { navItems } from "./HeaderNavdata";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <Headers>
      <div className="container">
        <HeaderDiv>
          <a
            href="#home"
            // onClick={(e) => handleSetActiveLink("home", e)}
            aria-label="Logo"
          >
            {/* <svg width="40" height="40">
              <use href={`${sprite}#icon-logo1`} />
            </svg> */}

            <LogoImg src={logo} alt="Logo" />
          </a>

          <HeaderNav>
            {navItems.map((item) => (
              <HeaderNavMenu
                key={item.id}
                href={`#${item.id}`}
                className={activeLink === item.id ? "active" : ""}
                // onClick={(e) => handleSetActiveLink(item.id, e)}
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
