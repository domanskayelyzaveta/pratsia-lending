import { useState } from "react";
import team from "../../images/works/team.png";
import { Svg } from "../Header/Header.styled";
import sprite from "../../assets/sprite.svg";
import { BtnListAboutUs, ImgAboutUs } from "../AboutUs/AboutUs.styled";
import { toggleContent } from "../../helpers/toggleContent";
import {
  ForCompaniesTitle,
  ListItemDiv,
  ListItemsSecond,
  SecondList,
  SectionCompanies,
  StyledFistList,
  SubTitleSecondListComp,
  TextListCompanies,
} from "./ForCompanies.styled";

const ForCompanies = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <SectionCompanies className="container">
      <ForCompaniesTitle>Für Unternehmen</ForCompaniesTitle>

      <div>
        <StyledFistList>
          <li>
            <TextListCompanies>Ethische Standards</TextListCompanies>
          </li>
          <li>
            <TextListCompanies>
              Transparenz in allen Geschäftsbeziehungen
            </TextListCompanies>
          </li>
          <li>
            <TextListCompanies>
              Hochwertiger Einstellungsprozess
            </TextListCompanies>
          </li>
        </StyledFistList>
        <ImgAboutUs src={team} alt="Team" />
      </div>
      <SecondList>
        <ListItemsSecond>
          <BtnListAboutUs onClick={toggleContent(0, isOpen, setIsOpen)}>
            <ListItemDiv>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <SubTitleSecondListComp>
                Unsere Fähigkeiten
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 0 && (
            <div>
              <p>
                Pratsia bietet seine Dienstleistungen Unternehmen in ganz
                Deutschland an. Unser umfangreiches Netzwerk und effektive
                Rekrutierungsstrategien ermöglichen es uns, hochqualifizierte
                ukrainische Fachkräfte an Unternehmen in verschiedenen Städten
                und Regionen Deutschlands zu vermitteln. Mit einem starken
                Netzwerk in der Ukraine und in Deutschland hat Pratsia Zugang zu
                einem breiten Spektrum hochqualifizierter Fachkräfte und bringt
                diese effektiv mit Unternehmen in Deutschland zusammen.
              </p>
            </div>
          )}
        </ListItemsSecond>
        <ListItemsSecond>
          <BtnListAboutUs onClick={toggleContent(1, isOpen, setIsOpen)}>
            <ListItemDiv>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <SubTitleSecondListComp>
                Unsere Dienstleistungen
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 1 && (
            <div>
              <p>
                Unser Engagement für exzellenten Service kennt keine Grenzen und
                wir sind stolz darauf, unseren Kunden in ganz Deutschland
                erstklassige Unterstützung zu bieten. Unsere Dienstleistungen
                umfassen Rekrutierung, Beratung und Bedarfsanalyse,
                Stellenausschreibung und -marketing, Kandidatenauswahl und
                -vorauswahl, Unterstützung bei Visum und Arbeitserlaubnis,
                Onboarding, Dienstleistungen nach der Pensionierung,
                Deutschkurse und Unterstützung bei der Anerkennung von
                Qualifikationen.
              </p>
            </div>
          )}
        </ListItemsSecond>
      </SecondList>
    </SectionCompanies>
  );
};

export default ForCompanies;
