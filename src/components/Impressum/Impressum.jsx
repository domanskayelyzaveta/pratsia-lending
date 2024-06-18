import React from "react";
import sprite from "../../assets/sprite.svg";
import { Svg } from "../Header/Header.styled";
import {
  BtnImpress,
  BtnTextImpress,
  TextImpress,
  TextImpressWrapper,
  TitleImpress,
} from "./Impressum.styled";

const Impressum = () => {
  return (
    <div className="container">
      <BtnImpress>
        <Svg>
          <use href={`${sprite}#icon-arrow-left-short`}></use>
        </Svg>
        <BtnTextImpress>Weiterlesen</BtnTextImpress>
      </BtnImpress>
      <TitleImpress>Impressum</TitleImpress>

      <TextImpressWrapper>
        <TextImpress>
          Pratsia UG (haftungsbeschränkt) Garnstraße 12 47798 Krefeld
        </TextImpress>

        <TextImpress>
          Handelsregister: HRB Registergericht: Amtsgericht Krefeld
        </TextImpress>
        <TextImpress>
          Vertreten durch: Mykola Sytnyk Kontakt Telefon: 0170 1481355 E-Mail:
          info@pratsia.de EU-Streitschlichtung Die Europäische Kommission stellt
          eine Plattform zur Online-Streitbeilegung (OS) bereit:
          https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie
          oben im Impressum. Quelle: eRecht24
        </TextImpress>
      </TextImpressWrapper>
    </div>
  );
};

export default Impressum;
