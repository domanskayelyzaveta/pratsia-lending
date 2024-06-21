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

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection id="starseite">
      <HeroAndTitleDiv>
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
        <ImgDiv />
      </HeroAndTitleDiv>

      <HeroText>
        {t("textHero")}
        {/* Willkommen bei der führenden Personalagentur Pratsia - Ihrem
        zuverlässigen Partner bei der Vermittlung von hochqualifizierten
        Fachkräften aus der Ukraine nach Deutschland */}
      </HeroText>

      <BtnHeroDiv className="container">
        <BtnHero>{t("btn")}</BtnHero>
      </BtnHeroDiv>
    </HeroSection>
  );
};

export default Hero;
