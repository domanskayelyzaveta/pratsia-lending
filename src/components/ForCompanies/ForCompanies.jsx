// import { useState } from "react";
// import team from "../../images/works/team.png";
// import { Svg } from "../Header/Header.styled";
// import sprite from "../../assets/sprite.svg";

// import { toggleContent } from "../../helpers/toggleContent";
// import {
//   CompaniesPhotoAndTextDiv,
//   ForCompaniesTitle,
//   ImgCompanies,
//   ListItemDiv,
//   ListItemsSecond,
//   SecondList,
//   SectionCompanies,
//   StyledFirstListItem,
//   StyledFistList,
//   SubTitleSecondListComp,
//   TextListCompanies,
// } from "./ForCompanies.styled";
// import { useTranslation } from "react-i18next";
// import { BtnListAboutUs } from "../AboutUs/AboutUs.styled";

// const ForCompanies = () => {
//   const { t } = useTranslation();
//   const [isOpen, setIsOpen] = useState(null);
//   // height: 420px;

//   return (
//     <SectionCompanies className="container" id="unternehemen">
//       <ForCompaniesTitle>
//         {t("forUnternehmentTitle")}
//         {/* Für Unternehmen */}
//       </ForCompaniesTitle>

//       <CompaniesPhotoAndTextDiv>
//         <StyledFistList>
//           <StyledFirstListItem>
//             <TextListCompanies>
//               {t("unternehmentText1")} {/* Ethische Standards */}
//             </TextListCompanies>
//           </StyledFirstListItem>
//           <StyledFirstListItem>
//             <TextListCompanies>
//               {t("unternehmentText2")}
//               {/* Transparenz in allen Geschäftsbeziehungen */}
//             </TextListCompanies>
//           </StyledFirstListItem>
//           <StyledFirstListItem>
//             <TextListCompanies>
//               {t("unternehmentText3")}
//               {/* Hochwertiger Einstellungsprozess */}
//             </TextListCompanies>
//           </StyledFirstListItem>
//         </StyledFistList>
//         <ImgCompanies src={team} alt="Team" />
//       </CompaniesPhotoAndTextDiv>
//       <SecondList>
//         <ListItemsSecond>
//           <BtnListAboutUs onClick={toggleContent(0, isOpen, setIsOpen)}>
//             <ListItemDiv>
//               <Svg
//                 style={{
//                   width: "26px",
//                   height: "26px",
//                   transform: isOpen === 0 ? "rotate(180deg)" : "rotate(0deg)",
//                   transition: "transform 0.3s ease",
//                 }}
//               >
//                 <use href={`${sprite}#icon-chevron-bar`}></use>
//               </Svg>

//               <SubTitleSecondListComp>
//                 {t("unternehmentListItem1")}
//                 {/* Unsere Fähigkeiten */}
//               </SubTitleSecondListComp>
//             </ListItemDiv>
//           </BtnListAboutUs>
//           {isOpen === 0 && (
//             <div>
//               <p>
//                 {t("fahigkeitenText")}
//                 {/* Pratsia bietet seine Dienstleistungen Unternehmen in ganz
//                 Deutschland an. Unser umfangreiches Netzwerk und effektive
//                 Rekrutierungsstrategien ermöglichen es uns, hochqualifizierte
//                 ukrainische Fachkräfte an Unternehmen in verschiedenen Städten
//                 und Regionen Deutschlands zu vermitteln. Mit einem starken
//                 Netzwerk in der Ukraine und in Deutschland hat Pratsia Zugang zu
//                 einem breiten Spektrum hochqualifizierter Fachkräfte und bringt
//                 diese effektiv mit Unternehmen in Deutschland zusammen. */}
//               </p>
//             </div>
//           )}
//         </ListItemsSecond>
//         <ListItemsSecond>
//           <BtnListAboutUs onClick={toggleContent(1, isOpen, setIsOpen)}>
//             <ListItemDiv>
//               <Svg
//                 style={{
//                   width: "26px",
//                   height: "26px",
//                   transform: isOpen === 1 ? "rotate(180deg)" : "rotate(0deg)",
//                   transition: "transform 0.3s ease",
//                 }}
//               >
//                 <use href={`${sprite}#icon-chevron-bar`}></use>
//               </Svg>
//               <SubTitleSecondListComp>
//                 {t("unternehmentListItem2")}
//                 {/* Unsere Dienstleistungen */}
//               </SubTitleSecondListComp>
//             </ListItemDiv>
//           </BtnListAboutUs>
//           {isOpen === 1 && (
//             <div>
//               <p>
//                 {t("dienstText")}
//                 {/* Unser Engagement für exzellenten Service kennt keine Grenzen und
//                 wir sind stolz darauf, unseren Kunden in ganz Deutschland
//                 erstklassige Unterstützung zu bieten. Unsere Dienstleistungen
//                 umfassen Rekrutierung, Beratung und Bedarfsanalyse,
//                 Stellenausschreibung und -marketing, Kandidatenauswahl und
//                 -vorauswahl, Unterstützung bei Visum und Arbeitserlaubnis,
//                 Onboarding, Dienstleistungen nach der Pensionierung,
//                 Deutschkurse und Unterstützung bei der Anerkennung von
//                 Qualifikationen. */}
//               </p>
//             </div>
//           )}
//         </ListItemsSecond>
//       </SecondList>
//     </SectionCompanies>
//   );
// };

// export default ForCompanies;

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
          <BtnListAboutUs onClick={toggleContent(0, isOpen, setIsOpen)}>
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
              <p>{t("fahigkeitenText")}</p>
            </div>
          )}
        </ListItemsSecond>
        <ListItemsSecond>
          <BtnListAboutUs onClick={toggleContent(1, isOpen, setIsOpen)}>
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
              <p>{t("dienstText")}</p>
            </div>
          )}
        </ListItemsSecond>
      </SecondList>
    </SectionCompanies>
  );
};

export default ForCompanies;
