import * as yup from "yup";

const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const telefonRegexp = /^(\+380\d{9}|0\d{9})$|^(\+49\d{10}|0\d{10})$/;

export const formaSchema = yup.object().shape({
  firma: yup.string().max(64, "Firma must be at most 64 characters"),
  anrede: yup.string(),
  vorname: yup
    .string()
    .required("This field is required")
    .min(3, "Vorname must be at least 3 characters")
    .max(64, "Vorname must be at most 64 characters"),
  nachname: yup
    .string()
    .required("Nachname is required")
    .min(3, "Nachname must be at least 3 characters")
    .max(64, "Nachname must be at most 64 characters"),
  email: yup
    .string()
    .required("This field is required")
    .matches(emailRegexp, "Email is not valid"),
  telefon: yup
    .string()
    .required("This field is required")
    .matches(telefonRegexp, "Telefon must be a valid phone number"),
  wunschtermin: yup
    .date()
    .required("Wunschtermin is required")
    .min(Date(), "Wunschtermin cannot be in the past"),
  zeit: yup.string(),
  nachricht: yup.string().max(500, "Nachricht must be at most 500 characters"),
});