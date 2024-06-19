const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "280px",
  }),

  control: (provided, state) => {
    const isError = state.selectProps.$errors;
    const isFocused = state.isFocused;
    //    const hasValue = state.hasValue; //hover

    return {
      ...provided,
      display: "flex",
      height: "48px",
      padding: "12px 16px",
      alignItems: "center",
      flexShrink: "0",
      gap: "8px",
      alignSelf: "stretch",
      alignContent: "flex-start",
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
        padding: "17px 16px",
        height: "56px",
      },

      "@media screen and (min-width: 1440px)": {
        padding: "19px 16px",
      },

      "@media screen and (min-width: 1920px)": {
        padding: "16px 16px",
      },
    };
  },

  dropdownIndicator: (provided) => ({
    ...provided,
    color: "var(--blue-200)",
    padding: "0",
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

    "&:hover": {
      backgroundColor: "rgba(27, 54, 65, 0.2)",
    },

    "@media screen and (min-width: 768px)": {
      fontSize: "15px",
      lineHeight: "1.47",
    },

    "@media screen and (min-width: 1920px)": {
      fontSize: "16px",
      lineHeight: "1.5",
    },
  }),

  menu: (provided) => ({
    ...provided,
    height: "auto",
    marginTop: "0",
    border: "none",
    borderRadius: "2px 2px 8px 8px",
    color: "var(--black-100)",
    backgroundColor: "var(--white)",
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
      fontSize: state.isFocused ? "14px" : "12px",
      fontWeight: "400",
      lineHeight: "1.8",
      color: isError ? "var(--red)" : "var(--black-100)",
    };
  },
};

export default customStyles;
