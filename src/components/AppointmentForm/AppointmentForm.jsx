import {
  SectionAppointmentForm,
  SubTitleAppointmentForm,
  TitleAppointmentForm,
  TitlesWrapper,
} from "./AppointmentForm.styled";

const AppointmentForm = () => {
  return (
    <SectionAppointmentForm className="container">
      <TitlesWrapper>
        <TitleAppointmentForm>
          Wir beraten Sie gerne persönlich!
        </TitleAppointmentForm>
        <SubTitleAppointmentForm>
          Vereinbaren Sie einen Termin mit uns
        </SubTitleAppointmentForm>
      </TitlesWrapper>

      <form>
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
        <label></label>
        <input />
      </form>
    </SectionAppointmentForm>
  );
};

export default AppointmentForm;
