import sprite from "../../../assets/sprite.svg";
import { Svg } from "../Header.styled";

export const CustomDropdownIndicator = (props) => {
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

export const CustomStyles = {
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
    marginBottom: "4px",
  }),
  control: (provided, state) => ({
    ...provided,
    padding: "0px",
    width: "100px",
    fontSize: "12px",
    cursor: "pointer",
    marginRight: "-60px",

    boxShadow: state.isFocused ? null : "none",
    backgroundColor: "var(--beige-200)",
    borderColor: "transparent",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  option: (provided, state) => {
    return {
      ...provided,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "14px",
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
    gap: "14px",
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
