import { useState } from "react";
import team from "../../images/works/team.png";
import { Svg } from "../Header/Header.styled";
import sprite from "../../assets/sprite.svg";
import { toggleContent } from "../../helpers/toggleContent";
import {
  CompaniesPhotoAndTextDiv,
  ForCompaniesTitle,
  ImgCompanies,
  ListItemDiv,
  ListItemsSecond,
  SecondList,
  SectionCompanies,
  StyledFirstListItem,
  StyledFistList,
  SubTitleSecondListComp,
  TextListCompanies,
  TextSecondListComp,
} from "./ForCompanies.styled";
import { useTranslation } from "react-i18next";
import { BtnListAboutUs } from "../AboutUs/AboutUs.styled";

const ForCompanies = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(null);

  return (
    <SectionCompanies className="container" id="unternehemen">
      <ForCompaniesTitle>{t("forUnternehmentTitle")}</ForCompaniesTitle>

      <CompaniesPhotoAndTextDiv>
        <StyledFistList>
          <StyledFirstListItem>
            <TextListCompanies>{t("unternehmentText1")}</TextListCompanies>
          </StyledFirstListItem>
          <StyledFirstListItem>
            <TextListCompanies>{t("unternehmentText2")}</TextListCompanies>
          </StyledFirstListItem>
          <StyledFirstListItem>
            <TextListCompanies>{t("unternehmentText3")}</TextListCompanies>
          </StyledFirstListItem>
        </StyledFistList>
        <ImgCompanies src={team} alt="Team" $isOpen={isOpen} />
      </CompaniesPhotoAndTextDiv>
      <SecondList>
        <ListItemsSecond>
          <BtnListAboutUs
            type="button"
            aria-label="list open"
            onClick={toggleContent(0, isOpen, setIsOpen)}
          >
            <ListItemDiv>
              <Svg
                style={{
                  width: "26px",
                  height: "26px",
                  transform: isOpen === 0 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>

              <SubTitleSecondListComp>
                {t("unternehmentListItem1")}
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 0 && (
            <div>
              <TextSecondListComp>{t("fahigkeitenText")}</TextSecondListComp>
            </div>
          )}
        </ListItemsSecond>
        <ListItemsSecond>
          <BtnListAboutUs
            type="button"
            aria-label="list open"
            onClick={toggleContent(1, isOpen, setIsOpen)}
          >
            <ListItemDiv>
              <Svg
                style={{
                  width: "26px",
                  height: "26px",
                  transform: isOpen === 1 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <SubTitleSecondListComp>
                {t("unternehmentListItem2")}
              </SubTitleSecondListComp>
            </ListItemDiv>
          </BtnListAboutUs>
          {isOpen === 1 && (
            <div>
              <TextSecondListComp>{t("dienstText")}</TextSecondListComp>
            </div>
          )}
        </ListItemsSecond>
      </SecondList>
    </SectionCompanies>
  );
};

export default ForCompanies;
