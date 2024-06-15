import { BtnListAboutUs, ImgAboutUs } from "../AboutUs/AboutUs.styled";
import {
  ForCompaniesTitle,
  ListItemDiv,
  ListItemsSecond,
  SecondList,
  SectionCompanies,
  SubTitleSecondListComp,
} from "../ForCompanies/ForCompanies.styled";
import { Svg } from "../Header/Header.styled";
import sprite from "../../assets/sprite.svg";
import { useState } from "react";
import { toggleContent } from "../../helpers/toggleContent";
import photo from "../../images/works/handshake.jpg";

const ForApplicants = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <SectionCompanies className="container">
      <ForCompaniesTitle>Für Bewerber</ForCompaniesTitle>

      <div>
        <p>Traumjob? Wir helfen!</p>
        <ImgAboutUs src={photo} alt="Team" />
      </div>
      <SecondList>
        <ListItemsSecond>
          <BtnListAboutUs onClick={toggleContent(0, isOpen, setIsOpen)}>
            <ListItemDiv>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <SubTitleSecondListComp>
                Ein integrierter Ansatz
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 0 && (
            <div>
              <p>
                Das Unternehmen bietet einen umfassenden Ansatz, der nicht nur
                die Suche nach dem perfekten Job umfasst, sondern auch
                zusätzliche Dienstleistungen wie Deutschkurse und Unterstützung
                bei der Anerkennung, damit die Integration erfolgreich verläuft.
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
                Breites Branchenwissen
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 1 && (
            <div>
              <p>
                Prästra verfügt über umfangreiche Branchenkenntnisse in
                Bereichen wie Medizin, Pflege, Sozialarbeit, Facility
                Management, Sanitär, Elektrotechnik und Kfz - Mechanik /
                Mechatronik. Dies ermöglicht es ihr, individuelle Lösungen für
                die Bewerber zu finden. Grundlage ist die individuelle Beratung
                über Karrieremöglichkeiten und Entwicklungsperspektiven sowie
                die anschließende Identifizierung geeigneter Stellenangebote,
                die den Qualifikationen und Neigungen der Bewerber entsprechen.
              </p>
            </div>
          )}
        </ListItemsSecond>
        <ListItemsSecond>
          <BtnListAboutUs onClick={toggleContent(2, isOpen, setIsOpen)}>
            <ListItemDiv>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <SubTitleSecondListComp>
                Unterstützung für Unternehmen und Mitarbeiter
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 2 && (
            <div>
              <p>
                Um den Bedürfnissen und Anforderungen beider Seiten optimal
                gerecht zu werden, legt die Agentur für Arbeit großen Wert auf
                eine individuelle Betreuung sowohl der Unternehmen als auch der
                Arbeitnehmer. Dazu gehört die Beratung und Unterstützung bei
                Visa- und Einwanderungsverfahren, einschließlich der Erlangung
                von Arbeits - und Aufenthaltsgenehmigungen, sowie die
                Unterstützung bei Umzugsvorbereitungen, Wohnungssuche und
                anderen praktischen Aspekten des Umzugs nach Deutschland.
              </p>
            </div>
          )}
        </ListItemsSecond>
      </SecondList>
    </SectionCompanies>
  );
};

export default ForApplicants;
