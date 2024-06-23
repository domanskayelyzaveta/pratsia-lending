import { BtnListAboutUs } from "../AboutUs/AboutUs.styled";
import {
  ListItemDiv,
  SectionCompanies,
  SubTitleSecondListComp,
} from "../ForCompanies/ForCompanies.styled";
import { Svg } from "../Header/Header.styled";
import sprite from "../../assets/sprite.svg";
import { useState } from "react";
import { toggleContent } from "../../helpers/toggleContent";
import photo from "../../images/works/handshake.jpg";
import {
  ApplicantImg,
  ApplicantsList,
  BtnAppDiv,
  ForAppTitle,
  ListItems,
  PhotoAndTitleDiv,
  SubText,
  TextSecondListApp,
  TitleWrapper,
} from "./ForApplicants.styled";
import { BtnHero } from "../Hero/Hero.styled";
import Industries from "../Industries/Industries";
import JobOffers from "../JobOffers/JobOffers";
import { useTranslation } from "react-i18next";

const ForApplicants = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(null);

  return (
    <SectionCompanies id="bewerber" className="container">
      <PhotoAndTitleDiv>
        <TitleWrapper>
          <ForAppTitle>
            {t("forBewerberitle")}
            {/* Für Bewerber */}
          </ForAppTitle>
          <SubText>
            {t("forBewerberSubitle")}
            {/* Traumjob? Wir helfen! */}
          </SubText>
        </TitleWrapper>

        <ApplicantImg src={photo} alt="Team" $isOpen={isOpen} />
      </PhotoAndTitleDiv>

      <ApplicantsList>
        <ListItems>
          <BtnListAboutUs onClick={toggleContent(0, isOpen, setIsOpen)}>
            <ListItemDiv>
              <Svg
                style={{
                  transform: isOpen === 0 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <SubTitleSecondListComp>
                {t("bewerberListItem1")}
                {/* Ein integrierter Ansatz */}
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 0 && (
            <div>
              <TextSecondListApp>
                {t("integrierter")}
                {/* Das Unternehmen bietet einen umfassenden Ansatz, der nicht nur
                die Suche nach dem perfekten Job umfasst, sondern auch
                zusätzliche Dienstleistungen wie Deutschkurse und Unterstützung
                bei der Anerkennung, damit die Integration erfolgreich verläuft. */}
              </TextSecondListApp>
            </div>
          )}
        </ListItems>
        <ListItems>
          <BtnListAboutUs onClick={toggleContent(1, isOpen, setIsOpen)}>
            <ListItemDiv>
              <Svg
                style={{
                  transform: isOpen === 1 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <SubTitleSecondListComp>
                {t("bewerberListItem2")}
                {/* Breites Branchenwissen */}
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 1 && (
            <div>
              <TextSecondListApp>
                {t("branchenwissen")}
                {/* Pratsia verfügt über umfangreiche Branchenkenntnisse in
                Bereichen wie Medizin, Pflege, Sozialarbeit, Facility
                Management, Sanitär, Elektrotechnik und Kfz - Mechanik /
                Mechatronik. Dies ermöglicht es ihr, individuelle Lösungen für
                die Bewerber zu finden. Grundlage ist die individuelle Beratung
                über Karrieremöglichkeiten und Entwicklungsperspektiven sowie
                die anschließende Identifizierung geeigneter Stellenangebote,
                die den Qualifikationen und Neigungen der Bewerber entsprechen. */}
              </TextSecondListApp>
            </div>
          )}
        </ListItems>
        <ListItems>
          <BtnListAboutUs onClick={toggleContent(2, isOpen, setIsOpen)}>
            <ListItemDiv>
              <Svg
                style={{
                  transform: isOpen === 2 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <SubTitleSecondListComp>
                {t("bewerberListItem3")}
                {/* Unterstützung für Unternehmen und Mitarbeiter */}
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 2 && (
            <div>
              <TextSecondListApp>
                {t("unterstutzung")}
                {/* Um den Bedürfnissen und Anforderungen beider Seiten optimal
                gerecht zu werden, legt die Agentur für Arbeit großen Wert auf
                eine individuelle Betreuung sowohl der Unternehmen als auch der
                Arbeitnehmer. Dazu gehört die Beratung und Unterstützung bei
                Visa- und Einwanderungsverfahren, einschließlich der Erlangung
                von Arbeits - und Aufenthaltsgenehmigungen, sowie die
                Unterstützung bei Umzugsvorbereitungen, Wohnungssuche und
                anderen praktischen Aspekten des Umzugs nach Deutschland. */}
              </TextSecondListApp>
            </div>
          )}
        </ListItems>
      </ApplicantsList>
      <BtnAppDiv>
        <BtnHero> {t("btn")}</BtnHero>
      </BtnAppDiv>
      <Industries />
      <JobOffers />
    </SectionCompanies>
  );
};

export default ForApplicants;
