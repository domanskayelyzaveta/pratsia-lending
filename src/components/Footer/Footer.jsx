import sprite from "../../assets/sprite.svg";
import {
  FooterSection,
  FooterText,
  LinkFooterText,
  ListFooter,
  PhoneEmailDiv,
  SvgTitleFooterWrapper,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterSection className="container">
      <SvgTitleFooterWrapper>
        {/* <svg>
          <use href></use>
        </svg> */}
        <p>Zeit Für Veränderung</p>
      </SvgTitleFooterWrapper>
      <ListFooter>
        <li>
          <a
            // href="info@pratsia.de"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open mail"
          >
            <svg width="24" height="24">
              <use href={`${sprite}#icon-GadgetTablet`} />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open Whats App"
          >
            <svg width="24" height="24">
              <use href={`${sprite}#icon-GadgetTablet-1`} />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open Facebook"
          >
            <svg width="24" height="24">
              <use href={`${sprite}#icon-GadgetTablet-2`} />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to open Instagram"
          >
            <svg width="24" height="24">
              <use href={`${sprite}#icon-GadgetTablet-3`} />
            </svg>
          </a>
        </li>
      </ListFooter>

      <FooterText>
        Inhaber: Mykola Sytnyk Garnstraße 12 47798 Krefeld
      </FooterText>

      <PhoneEmailDiv>
        <LinkFooterText href="tel:+491701481355">
          Telefon: 0170 1481355
        </LinkFooterText>
        <LinkFooterText href="mailto:info@pratsia.de">
          E-Mail: info@pratsia.de
        </LinkFooterText>
      </PhoneEmailDiv>
    </FooterSection>
  );
};

export default Footer;
