import {
  AboutSubTitle,
  AboutUsDescText,
  AboutUsDescriptionPartDiv,
  AboutUsList,
  AboutUsSubTitle,
  AboutUsTeamText,
  AboutUsText,
  AboutUsTitle,
  BtnListAboutUs,
  HighlightedText,
  ImgAboutUs,
  ListItem,
  ListWrapper,
  SectionAboutUs,
  TextAboutUs,
  TextAndPhotoDiv,
  TextAndPhotoSecondDiv,
  TitleWrapper,
  TransitionDiv,
  WerdenSieDiv,
} from "./AboutUs.styled";

import photo from "../../images/hero/people2.jpg";
import meeting from "../../images/works/meeting.png";

import sprite from "../../assets/sprite.svg";
import { Svg } from "../Header/Header.styled";
import { useState } from "react";
import { BtnHero } from "../Hero/Hero.styled";
import { useTranslation } from "react-i18next";

const AboutUs = ({ handleSetActiveLink }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <SectionAboutUs id="überUns">
      <TitleWrapper>
        <AboutUsTitle>
          {t("aboutUsSect")}
          {/* Über uns */}
        </AboutUsTitle>
        <AboutUsSubTitle>
          {t("aboutUsSubTitle")}
          {/* Wir bauen langfristige und erfolgreiche Partnerschaften auf, die auf
          Vertrauen und Respekt basieren */}
        </AboutUsSubTitle>
      </TitleWrapper>
      <div className="container">
        <TextAndPhotoSecondDiv>
          <TextAboutUs>
            {t("aboutUsText")}
            {/* Unsere langjährige Erfahrung, unser umfassendes Branchenwissen und
            unser internationales Netzwerk ermöglichen es uns, maßgeschneiderte
            Rekrutierungslösungen anzubieten, die den Bedürfnissen unserer
            Kunden entsprechen */}
          </TextAboutUs>
          <ImgAboutUs src={photo} alt="photo of business meeting"></ImgAboutUs>
        </TextAndPhotoSecondDiv>

        <div>
          <AboutUsList>
            <ListItem>
              <BtnListAboutUs onClick={() => toggleContent(0)}>
                <ListWrapper>
                  <Svg
                    style={{
                      width: "26px",
                      height: "26px",
                      transform:
                        isOpen === 0 ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <use href={`${sprite}#icon-chevron-bar`}></use>
                  </Svg>

                  <AboutUsText>
                    {t("aboutUsItemList1")}
                    {/* Spezialisierung */}
                  </AboutUsText>
                </ListWrapper>
              </BtnListAboutUs>
              {isOpen === 0 && (
                <TransitionDiv>
                  <AboutUsTeamText>
                    {t("spezial_text")}
                    {/* Wir sind spezialisiert auf die Vermittlung von talentierten
                    Fachkräften in Branchen wie Medizin, Pflege, Sozialarbeit,
                    Facility Management, Sanitär, Elektro und Automechanik / -
                    mechatronik */}
                  </AboutUsTeamText>
                </TransitionDiv>
              )}
            </ListItem>
            <ListItem>
              <BtnListAboutUs onClick={() => toggleContent(1)}>
                <ListWrapper>
                  <Svg
                    style={{
                      width: "26px",
                      height: "26px",
                      transform:
                        isOpen === 1 ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <use href={`${sprite}#icon-chevron-bar`}></use>
                  </Svg>
                  <AboutUsText>
                    {t("aboutUsItemList2")}
                    {/* Ein integrierter Ansatz */}
                  </AboutUsText>
                </ListWrapper>
              </BtnListAboutUs>
              {isOpen === 1 && (
                <TransitionDiv>
                  <AboutUsTeamText>
                    {t("ein_text")}
                    {/* Unser ganzheitlicher Ansatz umfasst nicht nur die
                    Personalvermittlung, sondern auch zusätzliche
                    Dienstleistungen wie vorbereitende und vertiefende
                    Deutschkurse und Unterstützung bei der Anerkennung von
                    Qualifikationen der jeweiligen Branchen */}
                  </AboutUsTeamText>
                </TransitionDiv>
              )}
            </ListItem>
            <ListItem>
              <BtnListAboutUs onClick={() => toggleContent(2)}>
                <ListWrapper>
                  <Svg
                    style={{
                      width: "26px",
                      height: "26px",
                      transform:
                        isOpen === 2 ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <use href={`${sprite}#icon-chevron-bar`}></use>
                  </Svg>
                  <AboutUsText>
                    {t("aboutUsItemList3")}
                    {/* Fundierte Arbeit */}
                  </AboutUsText>
                </ListWrapper>
              </BtnListAboutUs>
              {isOpen === 2 && (
                <TransitionDiv>
                  <AboutUsTeamText>
                    {t("fundierte_text")}
                    {/* Fundierte Arbeit Unsere Arbeit basiert auf ethischen
                    Geschäftspraktiken und Transparenz in der Kommunikation.
                    Pratsia kann Ihnen helfen, die besten Talente für Ihr
                    Unternehmen zu gewinnen und Ihre Einstellungsziele zu
                    erreichen. Wir helfen Ihnen, eine reibungslose Integration
                    in den deutschen Arbeitsmarkt zu gewährleisten */}
                  </AboutUsTeamText>
                </TransitionDiv>
              )}
            </ListItem>
          </AboutUsList>
        </div>

        <AboutUsDescriptionPartDiv>
          <TextAndPhotoDiv>
            <ImgAboutUs src={meeting} alt="Team meeting"></ImgAboutUs>
            <WerdenSieDiv>
              <AboutSubTitle>
                {t("teilTeam")}
                {/* Werden Sie Teil des Teams! */}
              </AboutSubTitle>
              <AboutUsDescText>
                {t("teilTeamText")}
                {/* Auf der Suche nach neuen beruflichen Herausforderungen? Unser
                Personalvermittlungsunternehmen bietet spannende
                Karrieremöglichkeiten in verschiedenen Branchen. */}
              </AboutUsDescText>
            </WerdenSieDiv>
          </TextAndPhotoDiv>

          <HighlightedText>
            {t("teilTeamSubText")}
            {/* Bewerben Sie sich jetzt und entdecken Sie Ihre Zukunft mit uns! */}
          </HighlightedText>
          <BtnHero
            onClick={(e) => {
              handleSetActiveLink("kontakt", e);
            }}
          >
            {t("btn")}
          </BtnHero>
        </AboutUsDescriptionPartDiv>
      </div>
    </SectionAboutUs>
  );
};

export default AboutUs;
