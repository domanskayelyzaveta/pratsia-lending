import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";

const resources = {
  de: {
    translation: {
      telefon: "Telefon",
      menuStart: "Starseite",
      menuAboutUs: "Über uns",
      menuForCompanies: "Für Unternehmen",
      menuForApp: "Für Bewerber",
      menuAppointment: "Interviewtermin",
      menuContact: "Kontakt",
      heroTitle: "Entdecken Sie Pratsia",
      textHero:
        "Willkommen bei der führenden Personalagentur Pratsia - Ihrem zuverlässigen Partner bei der Vermittlung von hochqualifizierten Fachkräften aus der Ukraine nach Deutschland",
      btn: "Interviewtermin",
      aboutUsSect: "Über uns",
      aboutUsSubTitle:
        "Wir bauen langfristige und erfolgreiche Partnerschaften auf, die auf Vertrauen und Respekt basieren",
      aboutUsText:
        "Unsere langjährige Erfahrung, unser umfassendes Branchenwissen und unser internationales Netzwerk ermöglichen es uns, maßgeschneiderte Rekrutierungslösungen anzubieten, die den Bedürfnissen unserer Kunden entsprechen",
      aboutUsItemList1: "Spezialisierung",
      aboutUsItemList2: "Ein integrierter Ansatz",
      aboutUsItemList3: "Fundierte Arbeit",
    },
  },

  ua: {
    translation: {
      telefon: "Телефон",
      menuStart: "Головна сторінка",
      menuAboutUs: "Про нас",
      menuForCompanies: "Для компаній",
      menuForApp: "Для кандидатів",
      menuAppointment: "Запис на співбесіду",
      menuContact: "Контакти",
      heroTitle: "Відкрийте Працю",
      textHero:
        "Ласкаво просимо до провідного кадрового агентства Pratsia - вашого надійного партнера у пошуку висококваліфікованих фахівців з України для роботодавців у Німеччині",
    },
  },
  ru: {
    translation: {
      telefon: "Phone number",
      menuStart: "Homepage",
      menuAboutUs: "About us",
      menuForCompanies: "For companies",
      menuForApp: "For applicants",
      menuAppointment: "Interview appointment",
      menuContact: "Contact",
      heroTitle: "Discover Pratsia",
      textHero:
        "Добро пожаловать в ведущее кадровое агентство Pratsia - вашего надежного партнера по подбору высококвалифицированных специалистов из Украины для работодателей в Германии",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(LocalStorageBackend)
  .init({
    resources,
    lng: localStorage.getItem("i18next_lng") || "de",
    fallbackLng: "de",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      keySeparator: false,
      prefix: "i18next_",
    },
  });

export default i18n;
