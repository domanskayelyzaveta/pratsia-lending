import sprite from "../../assets/sprite.svg";
import { Svg } from "../Header/Header.styled";
import {
  ListAppointment,
  ListItemsAppointment,
  SectionAppointment,
  TextAppointment,
  TitleAppointment,
} from "./Appointment.styled";

const Appointment = () => {
  return (
    <SectionAppointment id="interviewtermin" className="container">
      <TitleAppointment>Interviewtermin</TitleAppointment>
      <ListAppointment>
        <ListItemsAppointment>
          <Svg>
            <use href={`${sprite}#icon-info-square-Max`}></use>
          </Svg>
          <div>
            <TextAppointment>Haben Sie Fragen? </TextAppointment>
            <TextAppointment>Wir geben Antworten</TextAppointment>
          </div>
        </ListItemsAppointment>
        <ListItemsAppointment>
          <Svg>
            <use href={`${sprite}#icon-clipboard-check-Max`}></use>
          </Svg>
          <div>
            <TextAppointment>Haben Sie ein Problem?</TextAppointment>
            <TextAppointment>Wir finden Lösungen</TextAppointment>
          </div>
        </ListItemsAppointment>
        <ListItemsAppointment>
          <Svg>
            <use href={`${sprite}#icon-journal-Max`}></use>
          </Svg>
          <div>
            <TextAppointment>Brauchen Sie Urkunde?</TextAppointment>
            <TextAppointment>Wir organisieren das</TextAppointment>
          </div>
        </ListItemsAppointment>
      </ListAppointment>
    </SectionAppointment>
  );
};

export default Appointment;
