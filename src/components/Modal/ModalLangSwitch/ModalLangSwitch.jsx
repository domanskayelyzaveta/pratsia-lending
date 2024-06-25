import React from "react";
import i18n from "../../../i18n";
import { SvgDEU, SvgUA } from "../../Header/SvgFlags";
import { Title, Block } from "./ModalLangSwitch.styled";
import LangButton from "./LangButton";

const ModalLangSwitch = ({ selectedLanguage, setSelectedLanguage }) => {
  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Title>Wählen Sie bitte die Sprache der Website</Title>
      <Block>
        <LangButton
          language="de"
          checked={selectedLanguage === "de"}
          onChange={() => handleChangeLanguage("de")}
          Flag={SvgDEU}
        >
          Deutsch
        </LangButton>
        <LangButton
          language="ua"
          checked={selectedLanguage === "ua"}
          onChange={() => handleChangeLanguage("ua")}
          Flag={SvgUA}
        >
          Українська
        </LangButton>
        <LangButton
          language="ru"
          checked={selectedLanguage === "ru"}
          onChange={() => handleChangeLanguage("ru")}
        >
          Русский
        </LangButton>
      </Block>
    </>
  );
};

export default ModalLangSwitch;
