import { SubTitle, TitleError, TitleSuccess } from "./MessageForm.styled";

const MessageForm = ({ status }) => {
  return (
    <>
      {status === "success" ? (
        <>
          <TitleSuccess>
            Ihre Bewerbung wurde erfolgreich abgeschickt!
          </TitleSuccess>
          <SubTitle>Wir werden Sie gleich kontaktieren!</SubTitle>
        </>
      ) : (
        <>
          <TitleError>Es ist etwas schief gelaufen!</TitleError>
          <SubTitle>Prüfen Sie Ihre Internetverbindung!</SubTitle>
        </>
      )}
    </>
  );
};

export default MessageForm;
