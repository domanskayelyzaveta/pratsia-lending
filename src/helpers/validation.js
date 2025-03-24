import * as yup from "yup";

const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
// const telefonRegexp = /^(\+380\d{9}|0\d{9})$|^(\+49\d{10}|0\d{10})$/;
const telefonRegexp = /^(\+380\d{9}|0\d{9})$|^(\+49\d{10,11}|0\d{10,11})$/;

export const formaSchema = (t) =>
  yup.object().shape({
    firma: yup.string().max(64, t("max64")),
    anrede: yup.string(),
    vorname: yup
      .string()
      .required(t("requiredField"))
      .min(3, t("vornameMinLength"))
      .max(64, t("vornameMaxLength")),
    nachname: yup
      .string()
      .required(t("requiredField"))
      .min(3, t("nachnameMinLength"))
      .max(64, t("nachnameMaxLength")),
    email: yup
      .string()
      .required(t("requiredField"))
      .matches(emailRegexp, t("notValidEmail")),
    telefon: yup
      .string()
      .required(t("requiredField"))
      .matches(telefonRegexp, t("phoneValid")),
    wunschtermin: yup
      .date()
      .required(t("requiredField"))
      .min(Date(), t("timeInThePast")),
    zeit: yup.string(),
    nachricht: yup.string().max(500, t("message")),
  });

export default formaSchema;
