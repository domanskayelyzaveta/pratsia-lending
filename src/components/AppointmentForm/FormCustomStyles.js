const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "280px",

    "@media screen and (min-width: 768px)": {
      width: "534px",
    },

    "@media screen and (min-width: 1440px)": {
      width: "516px",
    },
  }),

  control: (provided, state) => {
    const isError = state.selectProps.$errors;
    const isFocused = state.isFocused;

    return {
      ...provided,
      display: "flex",
      height: "44px",
      padding: "8px 16px",
      alignItems: "center",
      flexShrink: "0",
      gap: "8px",
      alignSelf: "stretch",
      alignContent: "center",
      borderRadius: "8px",
      outline: "none",
      boxShadow: "none",
      border: `1px solid ${
        isError
          ? "var(--red)"
          : isFocused
          ? "var(--blue-300)"
          : "var(--blue-dark)"
      }`,
      backgroundColor: "var(--white)",

      "&:hover": {
        border: "1px solid var(--blue-300)",
      },
      "&:focus-within": {
        border: "1px solid var(--blue-300)",
      },

      "@media screen and (min-width: 768px)": {
        borderRadius: "12px",
        padding: "8px 16px",
        height: "52px",
      },

      "@media screen and (min-width: 1440px)": {
        height: "56px",
      },
    };
  },

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "var(--blue-200)",
    padding: "0",
    transition: "transform 0.3s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  option: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "flex-start",
    fontSize: "12px",
    lineHeight: "1.8",
    fontWeight: "400",
    backgroundColor: "var(--white)",
    color: "var(--black-100)",
    borderBottom: "1px solid var(--blue-100)",

    "&:hover": {
      borderRadius: "8px",
      backgroundColor: "rgba(27, 54, 65, 0.2)",
    },

    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.47",

      "&:hover": {
        borderRadius: "12px",
      },
    },

    "@media screen and (min-width: 1920px)": {
      fontSize: "16px",
      lineHeight: "1.5",
    },
  }),

  menu: (provided) => ({
    ...provided,
    height: "auto",
    marginTop: "2px",
    padding: "20px",
    border: "none",
    borderRadius: "8px",
    color: "var(--black-100)",
    backgroundColor: "var(--white)",

    "@media screen and (min-width: 768px)": {
      marginTop: "4px",
    },
  }),

  singleValue: (provided) => ({
    ...provided,
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "1.8",
    textAlign: "start",
    fontFamily: "Montserrat",
    flex: "1 0 0",
    color: "var(--black-200)",
    backgroundColor: "var(--white)",

    "@media screen and (min-width: 768px)": {
      fontSize: "18px",
    },
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    padding: "0",
    fontSize: state.isFocused ? "14px" : "12px",
  }),

  placeholder: (provided, state) => {
    const isError = state.selectProps.$errors;
    return {
      ...provided,
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "1.8",
      color: isError ? "var(--red)" : "var(--black-100)",

      "@media screen and (min-width: 768px)": {
        fontSize: "18px",
      },
    };
  },
};

export default customStyles;
