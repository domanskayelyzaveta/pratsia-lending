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
  return (
    <HeroSection id="home">
      <HeroAndTitleDiv>
        <TitleSubTextDiv className="container">
          <TitleHero>Deine karriere - &nbsp;Unsere mission</TitleHero>
          <SubText>Entdecken Sie Pratsia</SubText>
        </TitleSubTextDiv>
        <ImgDiv />
      </HeroAndTitleDiv>

      <HeroText>
        Willkommen bei der führenden Personalagentur Pratsia - Ihrem
        zuverlässigen Partner bei der Vermittlung von hochqualifizierten
        Fachkräften aus der Ukraine nach Deutschland
      </HeroText>

      <BtnHeroDiv className="container">
        <BtnHero>Interviewtermin</BtnHero>
      </BtnHeroDiv>
    </HeroSection>
  );
};

export default Hero;
