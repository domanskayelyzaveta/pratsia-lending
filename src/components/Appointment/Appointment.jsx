import { useTranslation } from "react-i18next";
import sprite from "../../assets/sprite.svg";
import {
  Bg,
  ListAppointment,
  ListItemsAppointment,
  SectionAppointment,
  TextAppointment,
  TitleAppointment,
  Svg,
} from "./Appointment.styled";
import { dataAppointment } from "./dataAppointment";

const Appointment = () => {
  const { t } = useTranslation();
  return (
    <SectionAppointment id="interviewtermin">
      <TitleAppointment>{t("btn")}</TitleAppointment>
      <Bg>
        <ListAppointment>
          {dataAppointment.map(({ icon, text1, text2 }) => (
            <ListItemsAppointment key={icon}>
              <Svg>
                <use href={`${sprite}#${icon}`} />
              </Svg>
              <div>
                <TextAppointment>{text1}</TextAppointment>
                <TextAppointment>{text2}</TextAppointment>
              </div>
            </ListItemsAppointment>
          ))}
        </ListAppointment>
      </Bg>
    </SectionAppointment>
  );
};

export default Appointment;
