import { useTranslation } from "react-i18next";
import {
  BtnHero,
  BtnHeroDiv,
  HeroAndTitleDiv,
  HeroSection,
  HeroText,
  ImgDiv,
  SubText,
  TitleHero,
  TitleSubTextDiv,
} from "./Hero.styled";
import { useMediaQuery } from "react-responsive";

const Hero = ({ handleSetActiveLink }) => {
  const { t } = useTranslation();

  const isMobileAndTablet = useMediaQuery({ maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <HeroSection id="starseite">
      <HeroAndTitleDiv>
        <div>
          <TitleSubTextDiv className="container">
            <TitleHero>
              {t("slogan")}
              {/* Deine Karriere - &nbsp;Unsere Mission */}
            </TitleHero>
            <SubText>
              {t("heroTitle")}
              {/* Entdecken Sie Pratsia */}
            </SubText>
          </TitleSubTextDiv>

          {isDesktop && (
            <HeroText>
              {t("textHero")}
              {/* Willkommen bei der führenden Personalagentur Pratsia - Ihrem
        zuverlässigen Partner bei der Vermittlung von hochqualifizierten
        Fachkräften aus der Ukraine nach Deutschland */}
            </HeroText>
          )}
        </div>
        <ImgDiv />
      </HeroAndTitleDiv>

      {isMobileAndTablet && (
        <HeroText>
          {t("textHero")}
          {/* Willkommen bei der führenden Personalagentur Pratsia - Ihrem
        zuverlässigen Partner bei der Vermittlung von hochqualifizierten
        Fachkräften aus der Ukraine nach Deutschland */}
        </HeroText>
      )}

      <BtnHeroDiv className="container">
        <BtnHero
          onClick={(e) => {
            handleSetActiveLink("kontakt", e);
          }}
        >
          {t("btn")}
        </BtnHero>
      </BtnHeroDiv>
    </HeroSection>
  );
};

export default Hero;
