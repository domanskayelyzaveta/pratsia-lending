import sprite from "../../assets/sprite.svg";
import {
  ContactInfoFooterDiv,
  FooterSection,
  FooterText,
  HolderDiv,
  ImgIcon,
  LinkFooterText,
  ListFooter,
  PhoneEmailDiv,
  StyledA,
  SvgFooter,
  SvgLogo,
  SvgTitleFooterWrapper,
  TitleFooter,
} from "./Footer.styled";
import logosprite from "../../images/logo/sprite.svg";

import whatsapp from "../../images/social-icons/icon-whatsApp.svg";
import instagram from "../../images/social-icons/Icon-Instagram.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterSection className="container">
      <SvgTitleFooterWrapper>
        <SvgLogo>
          <use href={`${logosprite}#icon-logo-remake`} />
        </SvgLogo>
        <TitleFooter>{t("timeToChange")}</TitleFooter>
      </SvgTitleFooterWrapper>
      <ListFooter>
        <li>
          <StyledA
            href="mailto:info@pratsia.de"
            rel="noopener noreferrer"
            aria-label="Link to open mail"
          >
            <SvgFooter width="24" height="24">
              <use href={`${sprite}#icon-GadgetTablet`} />
            </SvgFooter>
          </StyledA>
        </li>

        <li>
          <StyledA
            href="https://wa.me/+491701481355"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open Whats App"
          >
            <ImgIcon src={whatsapp} alt="Icon Whats App"></ImgIcon>
          </StyledA>
        </li>

        <li>
          <StyledA
            href="https://www.facebook.com/profile.php?id=61560061553623"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open Facebook"
          >
            <SvgFooter>
              <use href={`${sprite}#icon-GadgetTablet-2`} />
            </SvgFooter>
          </StyledA>
        </li>
        <li>
          <StyledA
            href="https://www.instagram.com/pratsia_recruiting/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open Instagram"
          >
            <ImgIcon src={instagram} alt="Icon Instagram"></ImgIcon>
          </StyledA>
        </li>
      </ListFooter>

      <ContactInfoFooterDiv>
        <HolderDiv>
          <FooterText>{t("inhaber")}</FooterText>
          <FooterText>
            {t("street")}
            <br />
            {t("city")}
          </FooterText>
        </HolderDiv>

        <PhoneEmailDiv>
          <LinkFooterText href="tel:+491701481355">
            {t("telefon")}: 0170 1481355
          </LinkFooterText>
          <LinkFooterText href="mailto:info@pratsia.de">
            E-Mail: info@pratsia.de
          </LinkFooterText>
        </PhoneEmailDiv>
      </ContactInfoFooterDiv>
    </FooterSection>
  );
};

export default Footer;
