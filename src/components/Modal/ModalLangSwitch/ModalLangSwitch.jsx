import React from "react";
import i18n from "../../../i18n";
import { SvgDEU, SvgEN, SvgUA } from "../../Header/SvgFlags";
import { Title, Block } from "./ModalLangSwitch.styled";
import LangButton from "./LangButton";
import { useTranslation } from "react-i18next";

const ModalLangSwitch = ({ selectedLanguage, setSelectedLanguage }) => {
  const { t } = useTranslation();
  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Title>{t("choiceLanguage")}</Title>
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
          language="en"
          checked={selectedLanguage === "en"}
          onChange={() => handleChangeLanguage("en")}
          Flag={SvgEN}
        >
          English
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
