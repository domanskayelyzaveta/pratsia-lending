import { useState } from "react";

import { Svg } from "../Header/Header.styled";
import sprite from "../../assets/sprite.svg";
import {
  BtnJobOffers,
  ListItemsLobOffers,
  ListLobOffers,
  SectionJobOffers,
  SubTitleJobOffers,
  TitleJobOffers,
} from "./JobOffers.styled";

const JobOffers = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleContent = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <SectionJobOffers>
      <TitleJobOffers>Aktuelle Jobangebote</TitleJobOffers>
      <ListLobOffers>
        <ListItemsLobOffers>
          <BtnJobOffers onClick={() => toggleContent(0)}>
            <Svg
              style={{
                transform: isOpen === 0 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <use href={`${sprite}#icon-chevron-bar`}></use>
            </Svg>
            <SubTitleJobOffers>
              Fachkraft in Zeitarbeitfirma (Einsatzort - Seniorenzentrum/
              Altenheim)
            </SubTitleJobOffers>
          </BtnJobOffers>

          {isOpen === 0 && (
            <p>
              Stundenlohn 24-28 € je nach Berufserfahrung, ob Sie in ganz
              Deutschland oder nur in Ihrer Region arbeiten. Möglichkeit, einen
              Firmenwagen zu bekommen, wenn Sie Ihr eigenes Auto benutzen -
              Erstattung von 30 Cent pro Kilometer. Zuschläge: Samstag 25%,
              Sonntag 50%, Nacht 25%, Feiertage 100%, 30 Tage Urlaub,
              Arbeitszeitkonto, Verpflegung +Unterkunft.
            </p>
          )}
        </ListItemsLobOffers>
        <ListItemsLobOffers>
          <BtnJobOffers onClick={() => toggleContent(1)}>
            <Svg
              style={{
                transform: isOpen === 1 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <use href={`${sprite}#icon-chevron-bar`}></use>
            </Svg>
            <SubTitleJobOffers onClick={() => toggleContent(1)}>
              Fachkraft in Zeitarbeitfirma (Einsatzort - Krankenhaus/Klinikum)
            </SubTitleJobOffers>
          </BtnJobOffers>
          {isOpen === 1 && (
            <p>
              Stundenlohn 30-34 € je nach Berufserfahrung, ob Sie in ganz
              Deutschland oder nur in Ihrer Region arbeiten. Möglichkeit, einen
              Firmenwagen zu bekommen, wenn Sie Ihr eigenes Auto benutzen -
              Erstattung von 30 Cent pro Kilometer. Zuschläge: Samstag 25%,
              Sonntag 50%, Nacht 25%, Feiertage 100%, 30 Tage Urlaub,
              Arbeitszeitkonto, Verpflegung +Unterkunft.
            </p>
          )}
        </ListItemsLobOffers>
        <ListItemsLobOffers>
          <BtnJobOffers onClick={() => toggleContent(2)}>
            <Svg
              style={{
                transform: isOpen === 2 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <use href={`${sprite}#icon-chevron-bar`}></use>
            </Svg>
            <SubTitleJobOffers onClick={() => toggleContent(2)}>
              Fachkraft in Anerkennung (Seniorenzentrum oder Krankenhaus)
            </SubTitleJobOffers>
          </BtnJobOffers>
          {isOpen === 2 && (
            <p>
              Stundenlohn 21 €. Pratsia findet einen Ort, an dem Ihr Diplom
              anerkannt wird, und unterstützt Sie bei Sprachkursen, während Sie
              während des Anerkennungszeitraums Vollzeit arbeiten. Oft wird auch
              eine Unterkunft zur Verfügung gestellt.
            </p>
          )}
        </ListItemsLobOffers>

        <ListItemsLobOffers>
          <BtnJobOffers onClick={() => toggleContent(3)}>
            <Svg
              style={{
                transform: isOpen === 3 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <use href={`${sprite}#icon-chevron-bar`}></use>
            </Svg>
            <SubTitleJobOffers onClick={() => toggleContent(3)}>
              Pflegehilfskraft in Zeitarbeitfirma (Einsatzort - Seniorenzentrum/
              Altenheim/ Klinikum)
            </SubTitleJobOffers>
          </BtnJobOffers>
          {isOpen === 3 && (
            <p>
              Stundenlohn 17 €. Möglichkeit, einen Firmenwagen zu bekommen, wenn
              Sie Ihr eigenes Auto benutzen - Erstattung von 30 Cent pro
              Kilometer. Zuschläge: Samstag 25%, Sonntag 50%, Nacht 25%,
              Feiertage 100%, 30 Tage Urlaub, Arbeitszeitkonto, Verpflegung +
              Unterkunft.
            </p>
          )}
        </ListItemsLobOffers>

        <ListItemsLobOffers>
          <BtnJobOffers onClick={() => toggleContent(4)}>
            <Svg
              style={{
                transform: isOpen === 4 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <use href={`${sprite}#icon-chevron-bar`}></use>
            </Svg>
            <SubTitleJobOffers onClick={() => toggleContent(4)}>
              Arzthelferin in Gynäkologie (41061 Mönchengladbach) ab 1.07.2024
            </SubTitleJobOffers>
          </BtnJobOffers>
          {isOpen === 4 && (
            <p>Stundenlohn 25€. Midivertrag / 2 Vormittage pro Woche</p>
          )}
        </ListItemsLobOffers>
      </ListLobOffers>
    </SectionJobOffers>
  );
};

export default JobOffers;
