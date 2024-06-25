import logosprite from "../../images/logo/sprite.svg";
import sprite from "../../assets/sprite.svg";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { navItems } from "./HeaderMenu/DataNavMenu";
import SelectLang from "./SelectLang/SelectLang";
import {
  BtnBurgerMenu,
  HeaderDiv,
  Headers,
  StyledNav,
  StyledNavLinkA,
  Svg,
  Text,
} from "./Header.styled";
import { useTranslation } from "react-i18next";

const Header = ({
  handleSetActiveLink,
  setSelectedLanguage,
  selectedLanguage,
}) => {
  const { t } = useTranslation();
  const [shownModal, setShownModal] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState(null);
  // const localStorageRef = useRef(localStorage);

  const [activeLink, setActiveLink] = useState("starseite");
  // const [dropdownOpen, setDropdownOpen] = useState(null);

  const isMobileAndTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop1440 = useMediaQuery({ query: "(min-width: 1440px)" });

  // const isDesktop1440 = useMediaQuery({ query: "(min-width: 1440px)" });

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onModal = () => setShownModal(!shownModal);

  const handleScroll = () => {
    const sections = [
      "starseite",
      "überUns",
      "unternehemen",
      "bewerber",
      "industries",
      "interviewtermin",
      "kontakt",
    ];
    const currentSection = sections.find((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom >= 80;
      }
      return sectionElement;
    });
    if (currentSection) {
      setActiveLink(currentSection);
    } else setActiveLink("");
  };

  useEffect(() => {
    if (shownModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shownModal]);

  // const handleChangeLanguage = (selectedOption) => {
  //   setSelectedLanguage(selectedOption);
  //   i18n.changeLanguage(selectedOption.value);
  //   localStorageRef.current.setItem("i18next_lng", selectedOption.value);
  // };

  return (
    <Headers>
      <div>
        <HeaderDiv>
          <a href="/" onClick={(e) => handleNavClick("/", e)} aria-label="Logo">
            <svg width="52px" height="40px">
              <use href={`${logosprite}#icon-logo-remake`} />
            </svg>
          </a>

          {isTablet && <Text>{t("telefon")}: 0170 1481355</Text>}

          {isDesktop1440 && (
            <StyledNav>
              {navItems.map((item) => (
                <StyledNavLinkA
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleSetActiveLink(item.id, e)}
                  className={activeLink === item.id ? "active" : ""}
                >
                  {t(item.label)}
                </StyledNavLinkA>
              ))}
            </StyledNav>
          )}

          <SelectLang
            setSelectedLanguage={setSelectedLanguage}
            selectedLanguage={selectedLanguage}
          />

          {isMobileAndTablet && (
            <BtnBurgerMenu
              aria-label="Menu Button"
              onClick={onModal}
              type="button"
            >
              {!shownModal ? (
                <Svg
                  style={{
                    transition: "transform 0.2s ease-in-out",
                  }}
                >
                  <use href={`${sprite}#icon-Menu`} />
                </Svg>
              ) : (
                <Svg
                  style={{
                    transform: "rotate(90deg)",
                    transition: "transform 0.2s ease-in-out",
                  }}
                >
                  <use href={`${sprite}#icon-Menu`} />
                </Svg>
              )}
            </BtnBurgerMenu>
          )}
        </HeaderDiv>
      </div>
      {isMobileAndTablet && shownModal && (
        <HeaderMenu
          onClose={onModal}
          handleSetActiveLink={handleSetActiveLink}
        />
      )}
    </Headers>
  );
};

export default Header;
