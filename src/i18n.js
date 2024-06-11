import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";

const resources = {
  ua: {
    translation: {
      feels_like: "Feels like",
    },
  },
  de: {
    translation: {
      feels_like: "Відчувається як",
    },
  },
  ru: {
    translation: {
      feels_like: "נראה כמו",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(LocalStorageBackend)
  .init({
    resources,
    lng: localStorage.getItem("i18next_lng") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      keySeparator: false,
      prefix: "i18next_",
    },
  });

export default i18n;
