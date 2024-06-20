import React from "react";
import sprite from "../../assets/sprite.svg";
import { Svg } from "../Header/Header.styled";

import {
  BtnImpress,
  BtnTextImpress,
  ImpressWrapper,
  TextImpress,
  TextImpressWrapper,
  TitleImpress,
} from "./Impressum.styled";
import { useNavigate } from "react-router-dom";

const Impressum = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <ImpressWrapper className="container">
      <BtnImpress onClick={handleBackClick}>
        <Svg>
          <use href={`${sprite}#icon-arrow-left-short`}></use>
        </Svg>
        <BtnTextImpress>Weiterlesen</BtnTextImpress>
      </BtnImpress>
      <TitleImpress>Impressum</TitleImpress>

      <TextImpressWrapper>
        <div>
          <TextImpress>Pratsia UG (haftungsbeschränkt)</TextImpress>
          <TextImpress>Garnstraße 12</TextImpress>
          <TextImpress>47798 Krefeld</TextImpress>
        </div>

        <div>
          <TextImpress>Handelsregister: HRB</TextImpress>
          <TextImpress>Registergericht: Amtsgericht Krefeld</TextImpress>
        </div>

        <div>
          <TextImpress>Vertreten durch:</TextImpress>
          <TextImpress>Mykola Sytnyk</TextImpress>
          <TextImpress>Kontakt</TextImpress>
          <TextImpress>Telefon: 0170 1481355</TextImpress>
          <TextImpress>E-Mail: info@pratsia.de</TextImpress>
          <TextImpress>EU-Streitschlichtung</TextImpress>
          <TextImpress>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
          </TextImpress>
          <TextImpress>https://ec.europa.eu/consumers/odr/.</TextImpress>
          <TextImpress>Quelle: eRecht24</TextImpress>
        </div>
      </TextImpressWrapper>
    </ImpressWrapper>
  );
};

export default Impressum;
