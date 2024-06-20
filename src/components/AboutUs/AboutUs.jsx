import {
  AboutSubTitle,
  AboutUsDescText,
  AboutUsDescriptionPartDiv,
  AboutUsList,
  AboutUsSubTitle,
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
  TitleWrapper,
  WerdenSieDiv,
} from "./AboutUs.styled";

import photo from "../../images/hero/people2.jpg";
import meeting from "../../images/works/meeting.png";

import sprite from "../../assets/sprite.svg";
import { Svg } from "../Header/Header.styled";
import { useState } from "react";
import { BtnHero } from "../Hero/Hero.styled";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <SectionAboutUs>
      <TitleWrapper>
        <AboutUsTitle>Über uns</AboutUsTitle>
        <AboutUsSubTitle>
          Wir bauen langfristige und erfolgreiche Partnerschaften auf, die auf
          Vertrauen und Respekt basieren
        </AboutUsSubTitle>
      </TitleWrapper>
      <div className="container">
        <TextAndPhotoDiv>
          <TextAboutUs>
            Unsere langjährige Erfahrung, unser umfassendes Branchenwissen und
            unser internationales Netzwerk ermöglichen es uns, maßgeschneiderte
            Rekrutierungslösungen anzubieten, die den Bedürfnissen unserer
            Kunden entsprechen
          </TextAboutUs>
          <ImgAboutUs src={photo} alt="photo of business meeting"></ImgAboutUs>
        </TextAndPhotoDiv>

        <div>
          <AboutUsList>
            <ListItem>
              <BtnListAboutUs onClick={() => toggleContent(0)}>
                <ListWrapper>
                  <Svg>
                    <use href={`${sprite}#icon-chevron-bar`}></use>
                  </Svg>
                  <AboutUsText> Spezialisierung </AboutUsText>
                </ListWrapper>
              </BtnListAboutUs>
              {isOpen === 0 && (
                <div>
                  <AboutUsDescText>
                    Wir sind spezialisiert auf die Vermittlung von talentierten
                    Fachkräften in Branchen wie Medizin, Pflege, Sozialarbeit,
                    Facility Management, Sanitär, Elektro und Automechanik / -
                    mechatronik
                  </AboutUsDescText>
                </div>
              )}
            </ListItem>
            <ListItem>
              <BtnListAboutUs onClick={() => toggleContent(1)}>
                <ListWrapper>
                  <Svg>
                    <use href={`${sprite}#icon-chevron-bar`}></use>
                  </Svg>
                  <AboutUsText>Ein integrierter Ansatz</AboutUsText>
                </ListWrapper>
              </BtnListAboutUs>
              {isOpen === 1 && (
                <div>
                  <AboutUsDescText>
                    Unser ganzheitlicher Ansatz umfasst nicht nur die
                    Personalvermittlung, sondern auch zusätzliche
                    Dienstleistungen wie vorbereitende und vertiefende
                    Deutschkurse und Unterstützung bei der Anerkennung von
                    Qualifikationen der jeweiligen Branchen
                  </AboutUsDescText>
                </div>
              )}
            </ListItem>
            <ListItem>
              <BtnListAboutUs onClick={() => toggleContent(2)}>
                <ListWrapper>
                  <Svg>
                    <use href={`${sprite}#icon-chevron-bar`}></use>
                  </Svg>
                  <AboutUsText>Fundierte Arbeit</AboutUsText>
                </ListWrapper>
              </BtnListAboutUs>
              {isOpen === 2 && (
                <div>
                  <AboutUsDescText>
                    Fundierte Arbeit Unsere Arbeit basiert auf ethischen
                    Geschäftspraktiken und Transparenz in der Kommunikation.
                    Pratsia kann Ihnen helfen, die besten Talente für Ihr
                    Unternehmen zu gewinnen und Ihre Einstellungsziele zu
                    erreichen. Wir helfen Ihnen, eine reibungslose Integration
                    in den deutschen Arbeitsmarkt zu gewährleisten
                  </AboutUsDescText>
                </div>
              )}
            </ListItem>
          </AboutUsList>
        </div>

        <AboutUsDescriptionPartDiv>
          <TextAndPhotoDiv>
            <ImgAboutUs src={meeting}></ImgAboutUs>
            <WerdenSieDiv>
              <AboutSubTitle>Werden Sie Teil des Teams!</AboutSubTitle>
              <AboutUsDescText>
                Auf der Suche nach neuen beruflichen Herausforderungen? Unser
                Personalvermittlungsunternehmen bietet spannende
                Karrieremöglichkeiten in verschiedenen Branchen.
              </AboutUsDescText>
            </WerdenSieDiv>
          </TextAndPhotoDiv>

          <HighlightedText>
            Bewerben Sie sich jetzt und entdecken Sie Ihre Zukunft mit uns!
          </HighlightedText>
          <BtnHero>Interviewtermin</BtnHero>
        </AboutUsDescriptionPartDiv>
      </div>
    </SectionAboutUs>
  );
};

export default AboutUs;
