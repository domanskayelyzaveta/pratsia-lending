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
// import JobOffers from "../JobOffers/JobOffers";
import { useTranslation } from "react-i18next";

const ForApplicants = ({ handleSetActiveLink }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(null);

  return (
    <SectionCompanies id="bewerber" className="container">
      <PhotoAndTitleDiv>
        <TitleWrapper>
          <ForAppTitle>{t("forBewerberitle")}</ForAppTitle>
          <SubText>{t("forBewerberSubitle")}</SubText>
        </TitleWrapper>

        <ApplicantImg src={photo} alt="Team" $isOpen={isOpen} />
      </PhotoAndTitleDiv>

      <ApplicantsList>
        <ListItems>
          <BtnListAboutUs
            type="button"
            aria-label="list open"
            onClick={toggleContent(0, isOpen, setIsOpen)}
          >
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
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 0 && (
            <div>
              <TextSecondListApp>{t("integrierter")}</TextSecondListApp>
            </div>
          )}
        </ListItems>
        <ListItems>
          <BtnListAboutUs
            type="button"
            aria-label="list open"
            onClick={toggleContent(1, isOpen, setIsOpen)}
          >
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
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 1 && (
            <div>
              <TextSecondListApp>{t("branchenwissen")}</TextSecondListApp>
            </div>
          )}
        </ListItems>
        <ListItems>
          <BtnListAboutUs
            type="button"
            aria-label="list open"
            onClick={toggleContent(2, isOpen, setIsOpen)}
          >
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
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 2 && (
            <div>
              <TextSecondListApp>{t("unterstutzung")}</TextSecondListApp>
            </div>
          )}
        </ListItems>
      </ApplicantsList>
      <BtnAppDiv>
        <BtnHero
          type="button"
          aria-label="list open"
          onClick={(e) => {
            handleSetActiveLink("kontakt", e);
          }}
        >
          {t("btn")}
        </BtnHero>
      </BtnAppDiv>
      <Industries />
      {/* <JobOffers /> */}
    </SectionCompanies>
  );
};

export default ForApplicants;
