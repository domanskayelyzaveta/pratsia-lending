import Select, { components } from "react-select";
import { SvgDEU, SvgUA } from "../SvgFlags";
import {
  CustomDropdownIndicator,
  customStyles,
} from "../CustomDropdownIndicator/CustomDropdownIndicator";

const SelectLang = () => {
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
    <Select
      components={{
        DropdownIndicator: CustomDropdownIndicator,
        Option: CustomOption,
        SingleValue: CustomSingleValue,
      }}
      options={options}
      styles={customStyles}
      defaultValue={options.find((option) => option.value === "de")}
      // menuIsOpen={true}

      // onChange={handleChangeLanguage}
      // value={selectedLanguage}
    />
  );
};

export default SelectLang;
