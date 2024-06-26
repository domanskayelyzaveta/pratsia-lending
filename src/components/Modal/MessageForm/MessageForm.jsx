import { useTranslation } from "react-i18next";
import { SubTitle, TitleError, TitleSuccess } from "./MessageForm.styled";

const MessageForm = ({ status }) => {
  const { t } = useTranslation();

  return (
    <>
      {status === "success" ? (
        <>
          <TitleSuccess>{t("formSent")}</TitleSuccess>
          <SubTitle>{t("weWillReply")}</SubTitle>
        </>
      ) : (
        <>
          <TitleError>{t("wrong")}</TitleError>
          <SubTitle>{t("checkConnection")}</SubTitle>
        </>
      )}
    </>
  );
};

export default MessageForm;
