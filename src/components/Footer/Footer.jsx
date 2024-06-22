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
  SvgFooter,
  SvgLogo,
  SvgTitleFooterWrapper,
  TitleFooter,
} from "./Footer.styled";
import logosprite from "../../images/logo/sprite.svg";

import whatsapp from "../../images/social-icons/icon-whatsApp.svg";
import instagram from "../../images/social-icons/Icon-Instagram.svg";

const Footer = () => {
  return (
    <FooterSection className="container">
      <SvgTitleFooterWrapper>
        <SvgLogo>
          <use href={`${logosprite}#icon-logo-remake`} />
        </SvgLogo>
        <TitleFooter>Zeit Für Veränderung</TitleFooter>
      </SvgTitleFooterWrapper>
      <ListFooter>
        <li>
          <a
            href="mailto:info@pratsia.de"
            // target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open mail"
          >
            <SvgFooter width="24" height="24">
              <use href={`${sprite}#icon-GadgetTablet`} />
            </SvgFooter>
          </a>
        </li>

        <li>
          <a
            href="https://wa.me/+491701481355"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open Whats App"
          >
            <ImgIcon src={whatsapp} alt="Icon Whats App"></ImgIcon>
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61560061553623"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open Facebook"
          >
            <SvgFooter>
              <use href={`${sprite}#icon-GadgetTablet-2`} />
            </SvgFooter>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/pratsia_recruiting/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open Instagram"
          >
            <ImgIcon src={instagram} alt="Icon Instagram"></ImgIcon>
          </a>
        </li>
      </ListFooter>

      <ContactInfoFooterDiv>
        <HolderDiv>
          <FooterText>Inhaber: Mykola Sytnyk</FooterText>
          <FooterText>
            Garnstraße 12 <br />
            47798 Krefeld
          </FooterText>
        </HolderDiv>

        <PhoneEmailDiv>
          <LinkFooterText href="tel:+491701481355">
            Telefon: 0170 1481355
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
