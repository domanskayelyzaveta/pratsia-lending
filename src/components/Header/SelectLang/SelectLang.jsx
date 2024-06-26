import React from "react";
import Select, { components } from "react-select";
import { SvgDEU, SvgUA } from "../SvgFlags";
import {
  CustomDropdownIndicator,
  CustomStyles,
} from "../CustomDropdownIndicator/CustomDropdownIndicator";
import i18n from "../../../i18n";

const SelectLang = ({ selectedLanguage, setSelectedLanguage }) => {
  const options = [
    { value: "de", label: "DE" },
    { value: "ua", label: "UA" },
    { value: "ru", label: "RU" },
  ];

  const getFlagIcon = (value) => {
    switch (value) {
      case "de":
        return <SvgDEU />;
      case "ua":
        return <SvgUA />;
      case "ru":
        return null;
      // return <p>&#128169;</p>;
      default:
        return null;
    }
  };

  const handleChangeLanguage = (selectedOption) => {
    setSelectedLanguage(selectedOption.value);
    i18n.changeLanguage(selectedOption.value);
  };

  const CustomOption = (props) => (
    <components.Option {...props}>
      <span style={{ fontSize: "12px", color: "var(--black-200)" }}>
        {props.data.label}
      </span>
      <div style={{ height: "29px", overflow: "hidden" }}>
        {getFlagIcon(props.data.value)}
      </div>
    </components.Option>
  );

  const CustomSingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      {children}
      {getFlagIcon(props.data.value)}
    </components.SingleValue>
  );

  return (
    <Select
      components={{
        DropdownIndicator: CustomDropdownIndicator,
        Option: CustomOption,
        SingleValue: CustomSingleValue,
      }}
      options={options}
      styles={CustomStyles}
      value={options.find((option) => option.value === selectedLanguage)}
      onChange={handleChangeLanguage}
    />
  );
};

export default SelectLang;
