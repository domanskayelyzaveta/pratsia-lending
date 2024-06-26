import React, { useState } from "react";
import {
  BtnListDaten,
  DatenList,
  DatenText,
  DatenWrapper,
  ListDaten,
  ListItem,
  ListItemDaten,
  ListWrapper,
  TextDaten,
} from "./Daten.styled";
import texts from "./texts.json";

import { Svg } from "../Header/Header.styled";
import sprite from "../../assets/sprite.svg";
import {
  BtnImpress,
  BtnTextImpress,
  TitleImpress,
} from "../Impressum/Impressum.styled";
import { useNavigate } from "react-router-dom";

const Daten = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const toggleContent = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <DatenWrapper className="container">
      <BtnImpress type="button" aria-label="Go back" onClick={handleBackClick}>
        <Svg>
          <use href={`${sprite}#icon-arrow-left-short`}></use>
        </Svg>
        <BtnTextImpress>{texts.weiterlesen}</BtnTextImpress>
      </BtnImpress>

      <TitleImpress>{texts.datenschutzerklarung}</TitleImpress>
      <DatenList>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(0)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> {texts.prambel_title} </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 0 && (
            <div>
              <TextDaten>{texts.prambel_text}</TextDaten>
              <TextDaten>{texts.stand}</TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten
            type="button"
            aria-label="list open"
            onClick={() => toggleContent(1)}
          >
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> {texts.inhaltsbersicht_title} </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 1 && (
            <div>
              <TextDaten>{texts.inhaltsbersicht_text}</TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten
            onClick={() => toggleContent(2)}
            type="button"
            aria-label="list open"
          >
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> {texts.verantwortlicher_title} </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 2 && (
            <div>
              <TextDaten>{texts.verantwortlicher_text}</TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten
            type="button"
            aria-label="list open"
            onClick={() => toggleContent(3)}
          >
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> {texts.ubersicht_verarbeitungen_title} </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 3 && (
            <div>
              <TextDaten>{texts.ubersicht_verarbeitungen_text}</TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten
            type="button"
            aria-label="list open"
            onClick={() => toggleContent(4)}
          >
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> {texts.arten_verarbeiteten_daten_title} </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>{texts.arten_verarbeiteten_daten_text}</TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten
            type="button"
            aria-label="list open"
            onClick={() => toggleContent(5)}
          >
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                {texts.kategorien_betroffener_personen_title}
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 5 && (
            <div>
              <TextDaten>
                {texts.kategorien_betroffener_personen_text}
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten
            type="button"
            aria-label="list open"
            onClick={() => toggleContent(6)}
          >
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> {texts.zwecke_verarbeitung_title} </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 6 && (
            <div>
              <TextDaten>{texts.zwecke_verarbeitung_text}</TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten
            type="button"
            aria-label="list open"
            onClick={() => toggleContent(7)}
          >
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.massgebliche_rechtsgrundlagen_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 7 && (
            <div>
              <TextDaten>{texts.massgebliche_rechtsgrundlagen_text}</TextDaten>
              <ListDaten>
                {texts.massgebliche_rechtsgrundlagen_list.map((item, index) => (
                  <ListItemDaten key={index}>
                    <TextDaten>{item}</TextDaten>
                  </ListItemDaten>
                ))}
              </ListDaten>
              <TextDaten>{texts.massgebliche_text}</TextDaten>
              {texts.massgebliche_text.map((paragraph, index) => (
                <TextDaten key={index}>{paragraph}</TextDaten>
              ))}
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(8)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.sicherheitsmaßnahmen_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 8 && (
            <div>
              <TextDaten>{texts.sicherheitsmaßnahmen_text}</TextDaten>
              {texts.sicherheitsmaßnahmen_detail_text.map(
                (paragraph, index) => (
                  <TextDaten key={index}>{paragraph}</TextDaten>
                )
              )}
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(9)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.aufbewahrung_loschung_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 9 && (
            <div>
              <TextDaten>{texts.aufbewahrung_loschung_text}</TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(10)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>Rechte der betroffenen Personen</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 10 && (
            <div>
              <TextDaten>{texts.rechte_betroffener_text}</TextDaten>
              <ListDaten>
                {texts.rechte_betroffener_list.map((item, index) => (
                  <ListItemDaten key={index}>
                    <TextDaten>{item}</TextDaten>
                  </ListItemDaten>
                ))}
              </ListDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(11)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> {texts.geschaftliche_leistungen_title} </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 11 && (
            <div>
              {texts.geschaftliche_leistungen_text.map((paragraph, index) => (
                <TextDaten key={index}>{paragraph}</TextDaten>
              ))}
              <ListDaten>
                {texts.geschaftliche_leistungen_detail_list.map(
                  (item, index) => (
                    <ListItemDaten key={index}>
                      <TextDaten>{item}</TextDaten>
                    </ListItemDaten>
                  )
                )}
              </ListDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(12)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.weit_hin_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 12 && (
            <div>
              <TextDaten>{texts.weit_hin_title}</TextDaten>
              {texts.weit_hin_content_text.map((text, index) => (
                <TextDaten key={index}>{text}</TextDaten>
              ))}
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(13)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.einsts_cookie_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 13 && (
            <div>
              {texts.content_list.map((text, index) => (
                <TextDaten key={index}>{text}</TextDaten>
              ))}
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(14)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.speicherdauer_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 14 && (
            <div>
              <ListDaten>
                {texts.speicherdauer_content.map((item) => (
                  <ListItemDaten key={item.id}>
                    <TextDaten>{item.text}</TextDaten>
                  </ListItemDaten>
                ))}
              </ListDaten>
              <TextDaten>{texts.speicherdauer_content[2].text}</TextDaten>
              <TextDaten>{texts.speicherdauer_content[3].text}</TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(15)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.hinweise_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 15 && (
            <div>
              {texts.hinweise_content.map((item) => (
                <TextDaten key={item.id}>{item.text}</TextDaten>
              ))}
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(16)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.kontakt_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 16 && (
            <div>
              <TextDaten>{texts.kontakt_content.text}</TextDaten>
              <ListDaten>
                {texts.kontakt_content.list_items.map((item) => (
                  <ListItemDaten key={item.id}>
                    <TextDaten>{item.text}</TextDaten>
                  </ListItemDaten>
                ))}
              </ListDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(17)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.hinweise_title_three}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 17 && (
            <div>
              <TextDaten>{texts.hinweise_content_three.text}</TextDaten>
              <TextDaten>{texts.hinweise_content_three.legal_basis}</TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(18)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.werbliche_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 18 && (
            <div>
              {texts.werbliche_content.map((content, index) => (
                <div key={index}>
                  {content.type === "text" && (
                    <TextDaten>{content.content}</TextDaten>
                  )}
                  {content.type === "list" && (
                    <>
                      <ListDaten>
                        {content.items.map((item, idx) => (
                          <ListItemDaten key={idx}>
                            <TextDaten> {item}</TextDaten>
                          </ListItemDaten>
                        ))}
                      </ListDaten>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(19)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.prasenzen_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 19 && (
            <div>
              {texts.prasenzen_content.map((item, index) => (
                <TextDaten key={index}>{item.text}</TextDaten>
              ))}

              <ListDaten>
                {texts.list.map((item, index) => (
                  <ListItemDaten key={index}>
                    <TextDaten>{item.text}</TextDaten>
                  </ListItemDaten>
                ))}
              </ListDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(20)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.hinweise_zu_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 20 && (
            <div>
              {texts.hinweise_zu_title_content.texts.map((item, index) => (
                <TextDaten key={index}>{item.text}</TextDaten>
              ))}
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(21)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.plugins_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 21 && (
            <div>
              {texts.plug_ins__content.texts.map((item, index) => (
                <TextDaten key={index}>{item.text}</TextDaten>
              ))}
              <ListDaten>
                {texts.plug_ins__content.list.map((item, index) => (
                  <ListItemDaten key={index}>
                    <TextDaten>{item.text}</TextDaten>
                  </ListItemDaten>
                ))}
              </ListDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(22)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.weitere_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 22 && (
            <div>
              {texts.weitere_content.texts.map((item, index) => (
                <TextDaten key={index}>{item.text}</TextDaten>
              ))}
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(23)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.aktualisierung_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 23 && (
            <div>
              <TextDaten>{texts.aktualisierung_content.text}</TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(24)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>{texts.plug_ins_title}</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 24 && (
            <div>
              <TextDaten>{texts.plug_ins_text}</TextDaten>
              <ListDaten>
                {texts.plugins_content.map((item, index) => (
                  <ListItemDaten key={index}>
                    <TextDaten>{item.description}</TextDaten>
                  </ListItemDaten>
                ))}
              </ListDaten>
            </div>
          )}
        </ListItem>
      </DatenList>
    </DatenWrapper>
  );
};

export default Daten;
