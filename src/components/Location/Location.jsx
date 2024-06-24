import {
  MapWrapper,
  SectionLocation,
  SvgGeo,
  SvgTextWrapper,
  TitleLocation,
} from "./Location.styled";
import sprite from "../../assets/sprite.svg";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();
  return (
    <SectionLocation className="container">
      <SvgTextWrapper>
        <SvgGeo>
          <use href={`${sprite}#icon-geo-alt-Max`} />
        </SvgGeo>
        <TitleLocation>{t("location")}</TitleLocation>
      </SvgTextWrapper>

      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2978972306685!2d6.572326616007741!3d51.33326297960765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b6b4b688b8b3%3A0x4219c3da1e9af58b!2sGarnstra%C3%9Fe%2012%2C%2047798%20Krefeld%2C%20Germany!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </MapWrapper>
    </SectionLocation>
  );
};

export default Location;
