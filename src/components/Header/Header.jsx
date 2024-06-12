import { BtnBurgerMenu, HeaderDiv, Headers, Svg } from "./Header.styled";
import logosprite from "../../images/logo/sprite.svg";
import sprite from "../../assets/sprite.svg";
import { SvgDEU, SvgUA } from "./SvgFlags";
import Select, { components } from "react-select";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
// import { useTranslation } from "react-i18next";

// const navItems = [
//   { id: "/", label: "STARTSEITE" },
//   { id: "/about-us", label: "ÜBER UNS" },
//   { id: "unternehemen", label: "FÜR UNTERNEHMEN" },
//   {
//     id: "/bewerber",
//     label: "FÜR BEWERBER",
//     dropdown: [
//       { id: "/bewerber/branchen", label: "Branchen" },
//       { id: "/bewerber/jobangebote", label: "Jobangebote" },
//     ],
//   },
//   { id: "INTERVIEWTERMIN", label: "INTERVIEWTERMIN" },
//   { id: "/contacts", label: "KONTAKT" },
// ];

const CustomDropdownIndicator = (props) => {
  const { selectProps, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        padding: "0px",
        transition: "transform 0.5s ease-in-out",
        transform: selectProps.menuIsOpen ? "rotate(180deg)" : null,
      }}
    >
      <Svg>
        <use href={`${sprite}#icon-chevron-bar`}></use>
      </Svg>
    </div>
  );
};

const customStyles = {
  menu: (provided) => ({
    ...provided,
    width: "108px",
    height: "auto",
    border: "transparent",
    borderRadius: "0px 0px 8px 8px",
    backgroundColor: "var(--beige-200)",
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    // gap: "4px",
    marginBottom: "4px",
  }),
  control: (provided, state) => ({
    ...provided,
    padding: "0px",
    width: "100px",
    fontSize: "12px",
    cursor: "pointer",

    boxShadow: state.isFocused ? null : "none",
    backgroundColor: "var(--beige-200)",
    borderColor: "transparent",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  option: (provided, state) => {
    const gap = state.data.value === "ua" ? "13.4px" : "4px";
    return {
      ...provided,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: gap,
      width: "100px",
      height: "29px",
      padding: "4px",
      paddingLeft: "3px",
      backgroundColor: state.isFocused
        ? "var(--beige-300)"
        : "var(--beige-200)",
      ":hover": {
        backgroundColor: "var(--beige-100)",
        borderBottom: "1px solid var(--blue-100)",
      },
    };
  },
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    transition: "transform 0.3s ease-in-out",
    padding: "0px",
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    gap: "4px",
    margin: "0px",

    width: "62px",

    color: "var(--black-200)",
    backgroundColor: "var(--beige-200)",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0px",
    justifyContent: "center",
    backgroundColor: "var(--beige-200)",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0",
    padding: "0",
  }),
};

const Header = ({ handleSetActiveLink }) => {
  const [shownModal, setShownModal] = useState(false);
  // const { i18n } = useTranslation();
  // const [selectedLanguage, setSelectedLanguage] = useState(null);
  // const localStorageRef = useRef(localStorage);

  // const [activeLink, setActiveLink] = useState("");
  // const [dropdownOpen, setDropdownOpen] = useState(null);

  const isMobileAndTablet = useMediaQuery({ query: "(max-width: 1439px)" });

  // const isDesktop1440 = useMediaQuery({ query: "(min-width: 1440px)" });

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onModal = () => setShownModal(!shownModal);

  // const toggleDropdown = (id) => {
  //   setDropdownOpen(dropdownOpen === id ? null : id);
  // };

  // const handleChangeLanguage = (selectedOption) => {
  //   setSelectedLanguage(selectedOption);
  //   i18n.changeLanguage(selectedOption.value);
  //   localStorageRef.current.setItem("i18next_lng", selectedOption.value);
  // };

  const options = [
    { value: "deu", label: "DEU" },
    { value: "ua", label: "UA" },
    { value: "ru", label: "RU" },
  ];

  const getFlagIcon = (value) => {
    switch (value) {
      case "deu":
        return <SvgDEU />;
      case "ua":
        return <SvgUA />;
      case "ru":
        return null;
      default:
        return null;
    }
  };

  const CustomOption = (props) => {
    return (
      <components.Option {...props}>
        <span style={{ fontSize: "12px", color: "var(--black-200)" }}>
          {props.data.label}
        </span>
        <div style={{ height: "29px", overflow: "hidden" }}>
          {getFlagIcon(props.data.value)}
        </div>
      </components.Option>
    );
  };

  const CustomSingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      {children}
      {getFlagIcon(props.data.value)}
    </components.SingleValue>
  );

  return (
    <Headers className="container">
      <div>
        <HeaderDiv>
          <a href="/" onClick={(e) => handleNavClick("/", e)} aria-label="Logo">
            <svg width="52px" height="40px">
              <use href={`${logosprite}#icon-logo-remake`} />
            </svg>
          </a>

          <Select
            components={{
              DropdownIndicator: CustomDropdownIndicator,
              Option: CustomOption,
              SingleValue: CustomSingleValue,
            }}
            options={options}
            styles={customStyles}
            defaultValue={options.find((option) => option.value === "deu")}
            // menuIsOpen={true}

            // onChange={handleChangeLanguage}
            // value={selectedLanguage}
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

          {/* <HeaderNav>
            {navItems.map((item) => (
              <div key={item.id} style={{ position: "relative" }}>
                <StyledHeaderNavMenu
                  to={item.id}
                  className={activeLink === item.id ? "active" : null}
                  onClick={() =>
                    item.dropdown
                      ? toggleDropdown(item.id)
                      : handleNavClick(item.id)
                  }
                >
                  {item.label}
                </StyledHeaderNavMenu>
                {item.dropdown && dropdownOpen === item.id && (
                  <DropdownMenu>
                    {item.dropdown.map((subItem) => (
                      <DropdownItem
                        key={subItem.id}
                        to={subItem.id}
                        className={activeLink === subItem.id ? "active" : null}
                        onClick={() => handleNavClick(subItem.id)}
                      >
                        {subItem.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </div>
            ))}
          </HeaderNav> */}
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
