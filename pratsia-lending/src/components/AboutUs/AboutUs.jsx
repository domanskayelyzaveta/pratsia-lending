import aboutUsImg from "../../images/hero/people2.jpg";
import {
  MainInfoImg,
  MainInfoTextDiv,
  MainInfoWrapper,
  SectionAboutUsTitle,
  SectionAboutUs,
  MainInfoTitleH2,
  MainInfoText,
} from "./AboutUs.styled";

const AboutUs = () => {
  return (
    <SectionAboutUs className="container">
      <SectionAboutUsTitle>
        Entdecken Sie Pratsia: Experten für Personalbeschaffung und Integration
        in Deutschland.
      </SectionAboutUsTitle>
      <MainInfoWrapper>
        <div>
          <MainInfoImg src={aboutUsImg} alt="co-workers" loading="lazy" />
        </div>
        <MainInfoTextDiv>
          <MainInfoTitleH2>Startseite</MainInfoTitleH2>
          <MainInfoText>
            Willkommen bei Pratsia – Ihrem zuverlässigen Partner für die
            Rekrutierung hochqualifizierter Fachkräfte aus der Ukraine für
            Deutschland. Wir sind spezialisiert auf die Vermittlung von
            talentierten Fachkräften in Branchen wie Medizin, Pflege,
            Sozialarbeit, Facility Management, Sanitär, Elektro und
            Automechanik/-mechatronik. Unser ganzheitlicher Ansatz umfasst nicht
            nur die Personalvermittlung, sondern auch zusätzliche
            Dienstleistungen wie vorbereitende und vertiefende Deutschkurse und
            Unterstützung bei der Anerkennung von Qualifikationen der jeweiligen
            Branchen. Bei Pratsia stehen ethische Geschäftspraktiken und eine
            transparente Kommunikation im Mittelpunkt unserer Arbeit. Entdecken
            Sie, wie Pratsia Ihnen helfen kann, die besten Talente für Ihr
            Unternehmen zu gewinnen und Ihre Personalziele zu erreichen. Wir
            helfen Ihnen / Euch, eine reibungslose Integration in den deutschen
            Arbeitsmarkt zu gewährleisten
          </MainInfoText>
        </MainInfoTextDiv>
      </MainInfoWrapper>
    </SectionAboutUs>
  );
};

export default AboutUs;
