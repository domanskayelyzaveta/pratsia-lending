import React, { useState, useRef } from "react";
import { HeaderDiv, Headers, SvgDropDown } from "./Header.styled";
import logosprite from "../../images/logo/sprite.svg";
import sprite from "../../assets/sprite.svg";
import { SvgDE, SvgUA } from "./SvgFlags";
import Select, { components } from "react-select";
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
      <SvgDropDown>
        <use href={`${sprite}#icon-chevron-bar`}></use>
      </SvgDropDown>
    </div>
  );
};

const customStyles = {
  menu: (provided) => ({
    ...provided,
    width: "72px",
    border: "transparent",
    backgroundColor: "var(--beige-200)",
  }),
  control: (provided, state) => ({
    ...provided,
    padding: "0px",
    width: "50px",
    border: "none",
    boxShadow: state.isFocused ? null : "none",
    cursor: "pointer",
    backgroundColor: "var(--beige-200)",
    ":hover": {
      border: "1px solid transparent",
    },
    borderColor: "transparent",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  option: (provided) => ({
    ...provided,
    width: "72px",
    border: "transparent",
    backgroundColor: "var(--beige-200)",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    transition: "transform 0.3s ease-in-out",
    padding: "0px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--black-200)",
    width: "40px",
    backgroundColor: "var(--beige-200)",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0px",
    backgroundColor: "var(--beige-200)",
  }),
};

const Header = () => {
  // const { i18n } = useTranslation();
  // const [selectedLanguage, setSelectedLanguage] = useState(null);
  // const localStorageRef = useRef(localStorage);

  // const [activeLink, setActiveLink] = useState("");
  // const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const toggleDropdown = (id) => {
  //   setDropdownOpen(dropdownOpen === id ? null : id);
  // };

  // const handleChangeLanguage = (selectedOption) => {
  //   setSelectedLanguage(selectedOption);
  //   i18n.changeLanguage(selectedOption.value);
  //   localStorageRef.current.setItem("i18next_lng", selectedOption.value);
  // };

  const options = [
    { value: "ua", label: "UA" },
    { value: "de", label: "DE" },
    { value: "ru", label: "RU" },
  ];

  const getFlagIcon = (value) => {
    switch (value) {
      case "ua":
        return <SvgUA />;
      case "de":
        return <SvgDE />;
      case "ru":
        return null;
      default:
        return null;
    }
  };

  const CustomOption = (props) => {
    return (
      <components.Option {...props}>
        {getFlagIcon(props.data.value)}
        <span style={{ marginLeft: "8px" }}>{props.data.label}</span>
      </components.Option>
    );
  };

  return (
    <Headers className="container">
      <div>
        <HeaderDiv>
          <a href="/" onClick={(e) => handleNavClick("/", e)} aria-label="Logo">
            <svg width="52px" height="40px">
              <use href={`${logosprite}#icon-logo-remake`} />
            </svg>
          </a>

          <p>DEU</p>
          <svg width="32px" height="29px">
            <use href={`${sprite}#icon-Flag-Germany`} />
          </svg>

          <Select
            components={{
              DropdownIndicator: CustomDropdownIndicator,
              Option: CustomOption,
            }}
            options={options}
            styles={customStyles}

            // onChange={handleChangeLanguage}
            // value={selectedLanguage}
          />

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
    </Headers>
  );
};

export default Header;
