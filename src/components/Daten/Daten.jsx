import React, { useState } from "react";
import {
  BtnListDaten,
  DatenList,
  DatenText,
  DatenWrapper,
  ListWrapper,
  TextDaten,
} from "./Daten.styled";
import { ListItem } from "@mui/material";
import { Svg } from "../Header/Header.styled";
import sprite from "../../assets/sprite.svg";
import { BtnImpress, BtnTextImpress } from "../Impressum/Impressum.styled";

const Daten = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <DatenWrapper>
      <BtnImpress>
        <Svg>
          <use href={`${sprite}#icon-arrow-left-short`}></use>
        </Svg>
        <BtnTextImpress>Weiterlesen</BtnTextImpress>
      </BtnImpress>

      <h2>Datenschutzerklärung</h2>
      <DatenList>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(0)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Präambel </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 0 && (
            <div>
              <TextDaten>
                Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
                aufklären, welche Arten Ihrer personenbezogenen Daten
                (nachfolgend auch kurz als `Daten` bezeichnet) wir zu welchen
                Zwecken und in welchem Umfang verarbeiten. Die
                Datenschutzerklärung gilt für alle von uns durchgeführten
                Verarbeitungen personenbezogener Daten, sowohl im Rahmen der
                Erbringung unserer Leistungen als auch insbesondere auf unseren
                Webseiten, in mobilen Applikationen sowie innerhalb externer
                Onlinepräsenzen, wie z. B. unserer Social-Media-Profile
                (nachfolgend zusammenfassend bezeichnet als `Onlineangebot`).
                Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(1)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Inhaltsübersicht </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 1 && (
            <div>
              <TextDaten>
                Präambel Verantwortlicher Übersicht der Verarbeitungen
                Maßgebliche Rechtsgrundlagen Sicherheitsmaßnahmen Aufbewahrung
                und Löschung von Daten Rechte der betroffenen Personen
                Geschäftliche Leistungen Einsatz von Cookies Kontakt- und
                Anfrageverwaltung Werbliche Kommunikation via E-Mail, Post, Fax
                oder Telefon Präsenzen in sozialen Netzwerken (Social Media)
                Plug-ins und eingebettete Funktionen sowie Inhalte Änderung und
                Aktualisierung der Datenschutzerklärung Begriffsdefinitionen
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(2)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Verantwortlicher </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 2 && (
            <div>
              <TextDaten>
                Pratsia UG (haftungsbeschränkt) Garnstraße 12 47798 Krefeld
                E-Mail-Adresse: info@pratsia.de mechatronik
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(3)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Übersicht der Verarbeitungen</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 3 && (
            <div>
              <TextDaten>
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten
                Daten und die Zwecke ihrer Verarbeitung zusammen und verweist
                auf die betroffenen Personen.
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(4)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Arten der verarbeiteten Daten</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>
                Bestandsdaten Zahlungsdaten Kontaktdaten Inhaltsdaten
                Vertragsdaten Nutzungsdaten Meta-, Kommunikations- und
                Verfahrensdaten Event-Daten (Facebook)
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(5)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Kategorien betroffener Personen </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 5 && (
            <div>
              <TextDaten>
                Kunden Interessenten Kommunikationspartner Nutzer Geschäfts- und
                Vertragspartner
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(6)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Zwecke der Verarbeitung </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 6 && (
            <div>
              <TextDaten>
                Erbringung vertraglicher Leistungen und Erfüllung vertraglicher
                Pflichten Kontaktanfragen und Kommunikation Direktmarketing
                Büro- und Organisationsverfahren Konversionsmessung Verwaltung
                und Beantwortung von Anfragen Feedback Marketing Profile mit
                nutzerbezogenen Informationen Bereitstellung unseres
                Onlineangebotes und Nutzerfreundlichkeit
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(7)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Maßgebliche Rechtsgrundlagen </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 7 && (
            <div>
              <TextDaten>
                Maßgebliche Rechtsgrundlagen nach der DSGVO: Im Folgenden
                erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf
                deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen
                Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
                Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland
                gelten können. Sollten ferner im Einzelfall speziellere
                Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
                Datenschutzerklärung mit.
              </TextDaten>
              <ul>
                <li>
                  <p>
                    Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO) - Die
                    betroffene Person hat ihre Einwilligung in die Verarbeitung
                    der sie betreffenden personenbezogenen Daten für einen
                    spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                  </p>
                </li>
                <li>
                  <p>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs.
                    1 S. 1 lit. b) DSGVO) - Die Verarbeitung ist für die
                    Erfüllung eines Vertrags, dessen Vertragspartei die
                    betroffene Person ist, oder zur Durchführung
                    vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
                    betroffenen Person erfolgen.
                  </p>
                </li>
                <li>
                  <p>
                    Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)
                    - Die Verarbeitung ist zur Erfüllung einer rechtlichen
                    Verpflichtung erforderlich, der der Verantwortliche
                    unterliegt.
                  </p>
                </li>
                <li>
                  <p>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) -
                    die Verarbeitung ist zur Wahrung der berechtigten Interessen
                    des Verantwortlichen oder eines Dritten notwendig,
                    vorausgesetzt, dass die Interessen, Grundrechte und
                    Grundfreiheiten der betroffenen Person, die den Schutz
                    personenbezogener Daten verlangen, nicht überwiegen.
                  </p>
                </li>
              </ul>

              <p>
                Nationale Datenschutzregelungen in Deutschland: Zusätzlich zu
                den Datenschutzregelungen der DSGVO gelten nationale Regelungen
                zum Datenschutz in Deutschland. Hierzu gehört insbesondere das
                Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der
                Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG
                enthält insbesondere Spezialregelungen zum Recht auf Auskunft,
                zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung
                besonderer Kategorien personenbezogener Daten, zur Verarbeitung
                für andere Zwecke und zur Übermittlung sowie automatisierten
                Entscheidungsfindung im Einzelfall einschließlich Profiling.
                Ferner können Landesdatenschutzgesetze der einzelnen
                Bundesländer zur Anwendung gelangen.
              </p>
              <p>
                Hinweis auf Geltung DSGVO und Schweizer DSG: Diese
                Datenschutzhinweise dienen sowohl der Informationserteilung nach
                dem schweizerischen Bundesgesetz über den Datenschutz (Schweizer
                DSG) als auch nach der Datenschutzgrundverordnung (DSGVO). Aus
                diesem Grund bitten wir Sie zu beachten, dass aufgrund der
                breiteren räumlichen Anwendung und Verständlichkeit die Begriffe
                der DSGVO verwendet werden. Insbesondere statt der im Schweizer
                DSG verwendeten Begriffe `Bearbeitung` von `Personendaten`,
                `überwiegendes Interesse` und `besonders schützenswerte
                Personendaten` werden die in der DSGVO verwendeten Begriffe
                `Verarbeitung` von `personenbezogenen Daten` sowie `berechtigtes
                Interesse` und `besondere Kategorien von Daten`` verwendet. Die
                gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der
                Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG
                bestimmt.
              </p>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(8)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Sicherheitsmaßnahmen</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 8 && (
            <div>
              <TextDaten>
                Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
                Berücksichtigung des Stands der Technik, der
                Implementierungskosten und der Art, des Umfangs, der Umstände
                und der Zwecke der Verarbeitung sowie der unterschiedlichen
                Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
                Rechte und Freiheiten natürlicher Personen geeignete technische
                und organisatorische Maßnahmen, um ein dem Risiko angemessenes
                Schutzniveau zu gewährleisten.
              </TextDaten>
              <TextDaten>
                Zu den Maßnahmen gehören insbesondere die Sicherung der
                Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
                Kontrolle des physischen und elektronischen Zugangs zu den Daten
                als auch des sie betreffenden Zugriffs, der Eingabe, der
                Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
                Des Weiteren haben wir Verfahren eingerichtet, die eine
                Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
                Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
                berücksichtigen wir den Schutz personenbezogener Daten bereits
                bei der Entwicklung bzw. Auswahl von Hardware, Software sowie
                Verfahren entsprechend dem Prinzip des Datenschutzes, durch
                Technikgestaltung und durch datenschutzfreundliche
                Voreinstellungen.
              </TextDaten>
              <TextDaten>
                Kürzung der IP-Adresse: Sofern IP-Adressen von uns oder von den
                eingesetzten Dienstleistern und Technologien verarbeitet werden
                und die Verarbeitung einer vollständigen IP-Adresse nicht
                erforderlich ist, wird die IP-Adresse gekürzt (auch als
                `IP-Masking` bezeichnet). Hierbei werden die letzten beiden
                Ziffern, bzw. der letzte Teil der IP-Adresse nach einem Punkt
                entfernt, bzw. durch Platzhalter ersetzt. Mit der Kürzung der
                IP-Adresse soll die Identifizierung einer Person anhand ihrer
                IP-Adresse verhindert oder wesentlich erschwert werden.
              </TextDaten>
              <TextDaten>
                Sicherung von Online-Verbindungen durch
                TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der
                Nutzer, die über unsere Online-Dienste übertragen werden, vor
                unerlaubten Zugriffen zu schützen, setzen wir auf die
                TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL)
                und Transport Layer Security (TLS) sind die Eckpfeiler der
                sicheren Datenübertragung im Internet. Diese Technologien
                verschlüsseln die Informationen, die zwischen der Website oder
                App und dem Browser des Nutzers (oder zwischen zwei Servern)
                übertragen werden, wodurch die Daten vor unbefugtem Zugriff
                geschützt sind. TLS, als die weiterentwickelte und sicherere
                Version von SSL, gewährleistet, dass alle Datenübertragungen den
                höchsten Sicherheitsstandards entsprechen. Wenn eine Website
                durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die
                Anzeige von HTTPS in der URL signalisiert. Dies dient als ein
                Indikator für die Nutzer, dass ihre Daten sicher und
                verschlüsselt übertragen werden.
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(9)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Aufbewahrung und Löschung von Daten</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 9 && (
            <div>
              <TextDaten>Aufbewahrung und Löschung von Daten</TextDaten>
              <TextDaten>
                Zu den Maßnahmen gehören insbesondere die Sicherung der
                Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
                Kontrolle des physischen und elektronischen Zugangs zu den Daten
                als auch des sie betreffenden Zugriffs, der Eingabe, der
                Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
                Des Weiteren haben wir Verfahren eingerichtet, die eine
                Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
                Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
                berücksichtigen wir den Schutz personenbezogener Daten bereits
                bei der Entwicklung bzw. Auswahl von Hardware, Software sowie
                Verfahren entsprechend dem Prinzip des Datenschutzes, durch
                Technikgestaltung und durch datenschutzfreundliche
                Voreinstellungen.
              </TextDaten>
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
              <TextDaten>
                Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als
                Betroffene nach der DSGVO verschiedene Rechte zu, die sich
                insbesondere aus Art. 15 bis 21 DSGVO ergeben:
              </TextDaten>
              <ul>
                <li>
                  <p>
                    Widerspruchsrecht: Sie haben das Recht, aus Gründen, die
                    sich aus Ihrer besonderen Situation ergeben, jederzeit gegen
                    die Verarbeitung der Sie betreffenden personenbezogenen
                    Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO
                    erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf
                    diese Bestimmungen gestütztes Profiling. Werden die Sie
                    betreffenden personenbezogenen Daten verarbeitet, um
                    Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
                    Widerspruch gegen die Verarbeitung der Sie betreffenden
                    personenbezogenen Daten zum Zwecke derartiger Werbung
                    einzulegen; dies gilt auch für das Profiling, soweit es mit
                    solcher Direktwerbung in Verbindung steht.
                  </p>
                </li>
                <li>
                  <p>
                    Widerrufsrecht bei Einwilligungen: Sie haben das Recht,
                    erteilte Einwilligungen jederzeit zu widerrufen.
                  </p>
                </li>
                <li>
                  <p>
                    Auskunftsrecht: Sie haben das Recht, eine Bestätigung
                    darüber zu verlangen, ob betreffende Daten verarbeitet
                    werden und auf Auskunft über diese Daten sowie auf weitere
                    Informationen und Kopie der Daten entsprechend den
                    gesetzlichen Vorgaben.
                  </p>
                </li>
                <li>
                  <p>
                    Recht auf Berichtigung: Sie haben entsprechend den
                    gesetzlichen Vorgaben das Recht, die Vervollständigung der
                    Sie betreffenden Daten oder die Berichtigung der Sie
                    betreffenden unrichtigen Daten zu verlangen.
                  </p>
                </li>
                <li>
                  <p>
                    Recht auf Löschung und Einschränkung der Verarbeitung: Sie
                    haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
                    verlangen, dass Sie betreffende Daten unverzüglich gelöscht
                    werden, bzw. alternativ nach Maßgabe der gesetzlichen
                    Vorgaben eine Einschränkung der Verarbeitung der Daten zu
                    verlangen.
                  </p>
                </li>
                <li>
                  <p>
                    Recht auf Datenübertragbarkeit: Sie haben das Recht, Sie
                    betreffende Daten, die Sie uns bereitgestellt haben, nach
                    Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
                    gängigen und maschinenlesbaren Format zu erhalten oder deren
                    Übermittlung an einen anderen Verantwortlichen zu fordern.
                  </p>
                </li>
                <li>
                  <p>
                    Beschwerde bei Aufsichtsbehörde: Sie haben unbeschadet eines
                    anderweitigen verwaltungsrechtlichen oder gerichtlichen
                    Rechtsbehelfs das Recht auf Beschwerde bei einer
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                    gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des
                    Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind,
                    dass die Verarbeitung der Sie betreffenden personenbezogenen
                    Daten gegen die Vorgaben der DSGVO verstößt.
                  </p>
                </li>
              </ul>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(11)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>Rechte der betroffenen Personen</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 11 && (
            <div>
              <TextDaten>
                Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als
                Betroffene nach der DSGVO verschiedene Rechte zu, die sich
                insbesondere aus Art. 15 bis 21 DSGVO ergeben:
              </TextDaten>
              <ul>
                <li>
                  <p>
                    Widerspruchsrecht: Sie haben das Recht, aus Gründen, die
                    sich aus Ihrer besonderen Situation ergeben, jederzeit gegen
                    die Verarbeitung der Sie betreffenden personenbezogenen
                    Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO
                    erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf
                    diese Bestimmungen gestütztes Profiling. Werden die Sie
                    betreffenden personenbezogenen Daten verarbeitet, um
                    Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
                    Widerspruch gegen die Verarbeitung der Sie betreffenden
                    personenbezogenen Daten zum Zwecke derartiger Werbung
                    einzulegen; dies gilt auch für das Profiling, soweit es mit
                    solcher Direktwerbung in Verbindung steht.
                  </p>
                </li>
                <li>
                  <p>
                    Widerrufsrecht bei Einwilligungen: Sie haben das Recht,
                    erteilte Einwilligungen jederzeit zu widerrufen.
                  </p>
                </li>
                <li>
                  <p>
                    Auskunftsrecht: Sie haben das Recht, eine Bestätigung
                    darüber zu verlangen, ob betreffende Daten verarbeitet
                    werden und auf Auskunft über diese Daten sowie auf weitere
                    Informationen und Kopie der Daten entsprechend den
                    gesetzlichen Vorgaben.
                  </p>
                </li>
                <li>
                  <p>
                    Recht auf Berichtigung: Sie haben entsprechend den
                    gesetzlichen Vorgaben das Recht, die Vervollständigung der
                    Sie betreffenden Daten oder die Berichtigung der Sie
                    betreffenden unrichtigen Daten zu verlangen.
                  </p>
                </li>
                <li>
                  <p>
                    Recht auf Löschung und Einschränkung der Verarbeitung: Sie
                    haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
                    verlangen, dass Sie betreffende Daten unverzüglich gelöscht
                    werden, bzw. alternativ nach Maßgabe der gesetzlichen
                    Vorgaben eine Einschränkung der Verarbeitung der Daten zu
                    verlangen.
                  </p>
                </li>
                <li>
                  <p>
                    Recht auf Datenübertragbarkeit: Sie haben das Recht, Sie
                    betreffende Daten, die Sie uns bereitgestellt haben, nach
                    Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
                    gängigen und maschinenlesbaren Format zu erhalten oder deren
                    Übermittlung an einen anderen Verantwortlichen zu fordern.
                  </p>
                </li>
                <li>
                  <p>
                    Beschwerde bei Aufsichtsbehörde: Sie haben unbeschadet eines
                    anderweitigen verwaltungsrechtlichen oder gerichtlichen
                    Rechtsbehelfs das Recht auf Beschwerde bei einer
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                    gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des
                    Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind,
                    dass die Verarbeitung der Sie betreffenden personenbezogenen
                    Daten gegen die Vorgaben der DSGVO verstößt.
                  </p>
                </li>
              </ul>
            </div>
          )}
        </ListItem>
      </DatenList>
    </DatenWrapper>
  );
};

export default Daten;
