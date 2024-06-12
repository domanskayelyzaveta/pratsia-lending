import {
  BtnHero,
  HeroSection,
  HeroText,
  ImgDiv,
  SubText,
  TitleHero,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection>
      <div className="container">
        <TitleHero>Deine karriere - Unsere mission</TitleHero>
        <SubText>Entdecken Sie Pratsia</SubText>
      </div>
      <ImgDiv />
      <HeroText>
        Willkommen bei der führenden Personalagentur Pratsia - Ihrem
        zuverlässigen Partner bei der Vermittlung von hochqualifizierten
        Fachkräften aus der Ukraine nach Deutschland
      </HeroText>
      <div className="container">
        <BtnHero>Interviewtermin</BtnHero>
      </div>
    </HeroSection>
  );
};

export default Hero;
