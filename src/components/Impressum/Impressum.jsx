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
import impressumData from "./impressumdata.json";

import { useNavigate } from "react-router-dom";

const Impressum = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <ImpressWrapper className="container">
      <BtnImpress type="button" aria-label="Go back" onClick={handleBackClick}>
        <Svg>
          <use href={`${sprite}#icon-arrow-left-short`}></use>
        </Svg>
        <BtnTextImpress>Weiterlesen</BtnTextImpress>
      </BtnImpress>
      <TitleImpress>Impressum</TitleImpress>

      <TextImpressWrapper>
        <div>
          <TextImpress>{impressumData.companyInfo.name}</TextImpress>
          <TextImpress>{impressumData.companyInfo.address}</TextImpress>
          <TextImpress>{impressumData.companyInfo.city}</TextImpress>
        </div>

        <div>
          <TextImpress>{impressumData.registryInfo.register}</TextImpress>
          <TextImpress>{impressumData.registryInfo.court}</TextImpress>
          <TextImpress>{impressumData.registryInfo.tax}</TextImpress>
        </div>

        <div>
          <TextImpress>Vertreten durch:</TextImpress>
          <TextImpress>{impressumData.representative.name}</TextImpress>
          <TextImpress>Kontakt</TextImpress>
          <TextImpress>
            Telefon: {impressumData.representative.contact.phone}
          </TextImpress>
          <TextImpress>
            E-Mail: {impressumData.representative.contact.email}
          </TextImpress>
          <TextImpress>
            {impressumData.euDisputeResolution.description}
          </TextImpress>
          <TextImpress>
            <a
              href={impressumData.euDisputeResolution.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {impressumData.euDisputeResolution.link}
            </a>
          </TextImpress>
          <TextImpress>{impressumData.source}</TextImpress>
        </div>
      </TextImpressWrapper>
    </ImpressWrapper>
  );
};

export default Impressum;
