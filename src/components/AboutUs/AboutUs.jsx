import photo from "../../images/hero/people2.jpg";
import {
  AboutUsSubTitle,
  AboutUsTitle,
  BtnListAboutUs,
  ImgAboutUs,
  ListItem,
  ListWrapper,
  TextAboutUs,
  TextAndPhotoDiv,
} from "./AboutUs.styled";

import sprite from "../../assets/sprite.svg";
import { Svg } from "../Header/Header.styled";
import { useState } from "react";
import List from "./List";

const AboutUs = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <div>
        <AboutUsTitle> Über uns</AboutUsTitle>
        <AboutUsSubTitle>
          Wir bauen langfristige und erfolgreiche Partnerschaften auf, die auf
          Vertrauen und Respekt basieren
        </AboutUsSubTitle>
      </div>
      <div className="container">
        <TextAndPhotoDiv>
          <TextAboutUs>
            Unsere langjährige Erfahrung, unser umfassendes Branchenwissen und
            unser internationales Netzwerk ermöglichen es uns, maßgeschneiderte
            Rekrutierungslösungen anzubieten, die den Bedürfnissen unserer
            Kunden entsprechen
          </TextAboutUs>
          <ImgAboutUs src={photo}></ImgAboutUs>
        </TextAndPhotoDiv>

        <div>
          <ul>
            <ListItem>
              <BtnListAboutUs onClick={toggleContent}>
                <ListWrapper>
                  <Svg>
                    <use href={`${sprite}#icon-chevron-bar`}></use>
                  </Svg>
                  <p>{title}</p>
                </ListWrapper>
              </BtnListAboutUs>
              {isOpen && (
                <div className="content">
                  <p>{content}</p>
                </div>
              )}
            </ListItem>
            <ListItem>
              <BtnListAboutUs onClick={toggleContent}>
                <ListWrapper>
                  <Svg>
                    <use href={`${sprite}#icon-chevron-bar`}></use>
                  </Svg>
                  <p> Ein integrierter Ansatz </p>
                </ListWrapper>
              </BtnListAboutUs>
            </ListItem>
            <ListItem>
              <BtnListAboutUs onClick={toggleContent}>
                <ListWrapper>
                  <Svg>
                    <use href={`${sprite}#icon-chevron-bar`}></use>
                  </Svg>
                  <p> Fundierte Arbeit </p>
                </ListWrapper>
              </BtnListAboutUs>
            </ListItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
