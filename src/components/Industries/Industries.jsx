import pflege from "../../images/works/pflege.png";
import medizin from "../../images/works/medizin.png";
import sozialarbeit from "../../images/works/kids.jpg";
import logistik from "../../images/works/logistic.jpg";
import facility from "../../images/works/uni.jpg";
import sanitär from "../../images/works/plumber.jpg";
import automechanik from "../../images/works/auto-rep.jpg";
import { ImgAboutUs } from "../AboutUs/AboutUs.styled";
import {
  BtnIndustries,
  SlideWrapper,
  TextIndustries,
} from "./Industries.styled";
import sprite from "../../assets/sprite.svg";
import { Svg } from "../Header/Header.styled";
import { useEffect, useRef, useState } from "react";

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    if (isVisible) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isVisible]);

  return (
    <section className="container">
      <h2>Branchen</h2>
      <div>
        <TextIndustries>Pflege</TextIndustries>
        <ImgAboutUs src={pflege} alt="care photo" loading="lazy"></ImgAboutUs>
      </div>

      <div style={{ position: "relative", marginBottom: "20px" }}>
        <BtnIndustries
          style={{
            bottom: isVisible ? "-676px" : "auto",
          }}
          onClick={toggleVisibility}
        >
          <Svg>
            <use href={`${sprite}#icon-arrow-down`}></use>
          </Svg>
          {/* <p>Weiterlesen</p> */}
          <p> {isVisible ? "Einstürzen" : "Weiterlesen"}</p>
        </BtnIndustries>
        <SlideWrapper ref={contentRef} height={height}>
          <p>
            Als Pflegefachkraft in Deutschland… Du möchtest in deinem Beruf
            stets eine angemessene Versorgung der Patienten sicherstellen? Du
            wünschst dir mehr Anerkennung für deine tägliche Arbeit? Du suchst
            einen Job, in dem dein Arbeitgeber aktiv deine Entwicklung fördert
            und "Work - Life - Balance" mehr als nur ein Schlagwort ist? Dabei
            bist du sicherlich auf folgende Herausforderungen gestoßen: -
            Personalmangel - Hoher bürokratischer Aufwand - Mangelnde
            Wertschätzung - Niedrige Vergütung - Fehlende
            Weiterbildungsmöglichkeiten - Schlechte Arbeitsbedingungen - Keine
            Perspektive auf eine Führungsposition Du suchst eine Veränderung
            oder einen guten Start in Deutschland? Dann ist ein Umzug oder
            Wechsel vielleicht genau das Richtige für dich! Mit Pratsia
            Recruiting wirst du bei den Top - Arbeitgebern des Landes
            vorgeschlagen. Wir finden für dich den idealen Arbeitgeber, der
            deinen Erwartungen entspricht.
          </p>
        </SlideWrapper>
      </div>

      <div>
        <TextIndustries>Medizin</TextIndustries>
        <ImgAboutUs src={medizin} alt="medicine" loading="lazy"></ImgAboutUs>
      </div>

      <div>
        <BtnIndustries>
          <Svg>
            <use href={`${sprite}#icon-arrow-down`}></use>
          </Svg>
          <p>Weiterlesen</p>
        </BtnIndustries>
      </div>

      <div>
        <TextIndustries>Sozialarbeit</TextIndustries>
        <ImgAboutUs
          src={sozialarbeit}
          alt="kids photo"
          loading="lazy"
        ></ImgAboutUs>
      </div>
      <div>
        <BtnIndustries>
          <Svg>
            <use href={`${sprite}#icon-arrow-down`}></use>
          </Svg>
          <p>Weiterlesen</p>
        </BtnIndustries>
      </div>

      <div>
        <TextIndustries>Technik und Logistik</TextIndustries>
        <ImgAboutUs src={logistik} alt="logistic" loading="lazy"></ImgAboutUs>
      </div>
      <div>
        <BtnIndustries>
          <Svg>
            <use href={`${sprite}#icon-arrow-down`}></use>
          </Svg>
          <p>Weiterlesen</p>
        </BtnIndustries>
      </div>

      <div>
        <TextIndustries>Facility</TextIndustries>
        <ImgAboutUs src={facility} alt="facility" loading="lazy"></ImgAboutUs>
      </div>
      <div>
        <BtnIndustries>
          <Svg>
            <use href={`${sprite}#icon-arrow-down`}></use>
          </Svg>
          <p>Weiterlesen</p>
        </BtnIndustries>
      </div>

      <div>
        <TextIndustries>Sanitär</TextIndustries>
        <ImgAboutUs src={sanitär} alt="plumber" loading="lazy"></ImgAboutUs>
      </div>
      <div>
        <BtnIndustries>
          <Svg>
            <use href={`${sprite}#icon-arrow-down`}></use>
          </Svg>
          <p>Weiterlesen</p>
        </BtnIndustries>
      </div>

      <div>
        <TextIndustries>Automechanik / mechatronik</TextIndustries>
        <ImgAboutUs
          src={automechanik}
          alt="auto mechanics"
          loading="lazy"
        ></ImgAboutUs>
      </div>
      <div>
        <BtnIndustries>
          <Svg>
            <use href={`${sprite}#icon-arrow-down`}></use>
          </Svg>
          <p>Weiterlesen</p>
        </BtnIndustries>
      </div>
    </section>
  );
};

export default Industries;
