import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  de: {
    translation: {
      // Header
      telefon: "Telefon",

      nav: {
        menuStart: "Starseite",
        menuAboutUs: "Über uns",
        menuForCompanies: "Für Unternehmen",
        menuForApp: "Für Bewerber",
        menuAppointment: "Interviewtermin",
        menuContact: "Kontakt",
      },

      // Hero

      heroTitle: "Entdecken Sie Pratsia",
      slogan: "Ihre Karriere – Unsere Mission",
      textHero:
        "Willkommen bei Pratsia, der führenden Personalagentur. Wir sind Ihr zuverlässiger. Partner bei der Vermittlung von hochqualifizierten Fachkräften nach Deutschland.",
      btn: "Interviewtermin",

      // About us

      aboutUsSect: "Über uns",
      aboutUsSubTitle:
        "Wir bauen langfristige und erfolgreiche Partnerschaften auf, die auf Vertrauen und Respekt basieren",
      aboutUsText:
        "Unsere langjährige Erfahrung, unser umfassendes Branchenwissen und unser internationales Netzwerk ermöglichen es uns, maßgeschneiderte Rekrutierungslösungen anzubieten, die den Bedürfnissen unserer Kunden entsprechen",
      aboutUsItemList1: "Spezialisierung",
      aboutUsItemList2: "Ein integrierter Ansatz",
      aboutUsItemList3: "Fundierte Arbeit",
      spezial_text:
        "Wir sind spezialisiert auf die Vermittlung von talentierten Fachkräften in Branchen wie Medizin, Pflege, Sozialarbeit, Facility Management, Sanitär, Elektro und Automechanik / - mechatronik ",
      ein_text:
        "Unser ganzheitlicher Ansatz umfasst nicht nur die Personalvermittlung, sondern auch zusätzliche Dienstleistungen wie vorbereitende und vertiefende Deutschkurse und Unterstützung bei der Anerkennung von Qualifikationen der jeweiligen Branchen",
      fundierte_text:
        "Unsere Arbeit basiert auf ethischen Geschäftspraktiken und Transparenz in der Kommunikation. Pratsia kann Ihnen helfen, die besten Talente für Ihr Unternehmen zu gewinnen und Ihre Einstellungsziele zu erreichen. Wir helfen Ihnen, eine reibungslose Integration in den deutschen Arbeitsmarkt zu gewährleisten",

      teilTeam: "Werden Sie Teil des Teams!",
      teilTeamText:
        "Auf der Suche nach neuen beruflichen Herausforderungen? Unser Personalvermittlungsunternehmen bietet spannende Karrieremöglichkeiten in verschiedenen Branchen.",
      teilTeamSubText:
        "Bewerben Sie sich jetzt und entdecken Sie Ihre Zukunft mit uns!",

      // Für Unternehmen

      forUnternehmentTitle: "Für Unternehmen",
      unternehmentText1: "Ethische Standards",
      unternehmentText2: "Transparenz in allen Geschäftsbeziehungen",
      unternehmentText3: "Hochwertiger Einstellungsprozess",
      unternehmentListItem1: "Unsere Fähigkeiten",
      unternehmentListItem2: "Unsere Dienstleistungen",
      fahigkeitenText:
        "Pratsia bietet seine Dienstleistungen Unternehmen in ganz Deutschland an. Unser umfangreiches Netzwerk und effektive Rekrutierungsstrategien ermöglichen es uns, hochqualifizierte ukrainische Fachkräfte an Unternehmen in verschiedenen Städten und Regionen Deutschlands zu vermitteln. Mit einem starken Netzwerk in der Ukraine und in Deutschland hat Pratsia Zugang zu einem breiten Spektrum hochqualifizierter Fachkräfte und bringt diese effektiv mit Unternehmen in Deutschland zusammen.",
      dienstText:
        "Unser Engagement für exzellenten Service kennt keine Grenzen und wir sind stolz darauf, unseren Kunden in ganz Deutschland erstklassige Unterstützung zu bieten. Unsere Dienstleistungen umfassen Rekrutierung, Beratung und Bedarfsanalyse, Stellenausschreibung und -marketing, Kandidatenauswahl und -vorauswahl, Unterstützung bei Visum und Arbeitserlaubnis, Onboarding, Dienstleistungen nach der Pensionierung, Deutschkurse und Unterstützung bei der Anerkennung von Qualifikationen.",

      forBewerberitle: "Für Bewerber",
      forBewerberSubitle: "Traumjob? Wir helfen!",
      bewerberListItem1: "Ein integrierter Ansatz",
      bewerberListItem2: "Breites Branchenwissen",
      bewerberListItem3: "Unterstützung für Unternehmen und Mitarbeiter",
      integrierter:
        "Das Unternehmen bietet einen umfassenden Ansatz, der nicht nur die Suche nach dem perfekten Job umfasst, sondern auch zusätzliche Dienstleistungen wie Deutschkurse und Unterstützung bei der Anerkennung, damit die Integration erfolgreich verläuft.",
      branchenwissen:
        "Pratsia verfügt über umfangreiche Branchenkenntnisse in Bereichen wie Medizin, Pflege, Sozialarbeit, Facility Management, Sanitär, Elektrotechnik und Kfz - Mechanik / Mechatronik. Dies ermöglicht es ihr, individuelle Lösungen für die Bewerber zu finden. Grundlage ist die individuelle Beratung über Karrieremöglichkeiten und Entwicklungsperspektiven sowie die anschließende Identifizierung geeigneter Stellenangebote, die den Qualifikationen und Neigungen der Bewerber entsprechen.",
      unterstutzung:
        "Um den Bedürfnissen und Anforderungen beider Seiten optimal gerecht zu werden, legt die Agentur für Arbeit großen Wert auf eine individuelle Betreuung sowohl der Unternehmen als auch der Arbeitnehmer. Dazu gehört die Beratung und Unterstützung bei Visa- und Einwanderungsverfahren, einschließlich der Erlangung von Arbeits - und Aufenthaltsgenehmigungen, sowie die Unterstützung bei Umzugsvorbereitungen, Wohnungssuche und anderen praktischen Aspekten des Umzugs nach Deutschland.",

      // * Branchen

      weiterlesen: "Weiterlesen",
      einstürzen: "Einstürzen",

      branchenTitle: "Branchen",

      //Main pflege

      pflege: "Pflege",
      // pflegeText:
      //   "Als Pflegefachkraft in Deutschland… Möchtest du  in deinem Beruf stets eine angemessene Versorgung der Patienten sicherstellen?",
      pflegeText:
        "In unserem Unternehmen sind Stellenangebote für Pflegefachkräfte und Pflegehelfer verfügbar. Sie sind verantwortlich für die Unterstützung der Patienten, Durchführung von Behandlungen und Gewährleistung eines angenehmen Aufenthalts in der Klinik oder im Altenheim.",
      // pflegeJobText:
      //   "Du wünschst dir mehr Anerkennung für deine tägliche Arbeit? Du suchst einen Job, in dem dein Arbeitgeber aktiv deine Entwicklung fördert und 'Work-Life-Balance' mehr als nur ein Schlagwort ist? Dabei bist du sicherlich auf folgende Herausforderungen gestoßen:",
      pflegeJobText: "Wir bieten:",
      pflegeMobileText: "Wir bieten:",
      // pflegeMobileText:
      //   "Du wünschst dir mehr Anerkennung für deine tägliche Arbeit? Du suchst einen Job, in dem dein Arbeitgeber aktiv deine Entwicklung fördert und 'Work-Life-Balance' mehr als nur ein Schlagwort ist? Dabei bist du sicherlich auf folgende Herausforderungen gestoßen:",
      // pflegeJobList1: "Personalmangel",
      // pflegeJobList2: "Hoher bürokratischer Aufwand",
      // pflegeJobList3: "Mangelnde Wertschätzung",
      // pflegeJobList4: "Niedrige Vergütung",
      // pflegeJobList5: "Fehlende Weiterbildungsmöglichkeiten",
      // pflegeJobList6: "Schlechte Arbeitsbedingungen",
      // pflegeJobList7: "Keine Perspektive auf eine Führungsposition",

      pflegeJobList1:
        "Ein wettbewerbsfähiges Gehalt ab 4000 Euro pro Monat, plus Zuschläge.",
      pflegeJobList2: "Kostenlose Unterkunft für unsere Mitarbeiter.",
      pflegeJobList3:
        "Individuelle Stellenvermittlung: Wir finden für Sie einen Job, der Ihren Wünschen entspricht – sei es ein Altenheim, eine Klinik oder ein Krankenhaus, und wir berücksichtigen auch den geografischen Standort (in einem bestimmten Bundesland oder einer Stadt).",
      pflegeJobList4:
        "Ständige Zusammenarbeit mit Krankenhäusern, Kliniken und Altenheimen, die regelmäßig Pflegekräfte mit anerkannten Diplomen benötigen und bereit sind, Ihr Diplom anzuerkennen.",

      //SubTitle 1

      subTitlePflege1: "Bedingungen für die Beschäftigung:",
      subTitlePflegeList1_1:
        "Wenn Sie bereits ein anerkanntes Diplom haben, können Sie ab 4000 Euro pro Monat verdienen, plus Zuschläge und kostenlose Unterkunft und Verpflegung.",
      subTitlePflegeList1_2:
        "Wenn Sie Ihr Diplom anerkennen lassen möchten, liegt Ihr Gehalt im Durchschnitt bei ab 3200 Euro pro Monat, plus Zuschläge und Unterkunft und Verpflegung.",

      // duSuchstInDE:
      //   "Du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich! Mit Pratsia Recruiting wirst du bei den Top-Arbeitgebern des Landes vorgeschlagen. Wir finden für dich den idealen Arbeitgeber, der deinen Erwartungen entspricht.",

      //SubTitle 2

      subTitlePflege2: "Anforderungen:",
      subTitleListPflege2_1:
        "Diplom als Krankenschwester oder der Wunsch, ein Diplom anerkennen zu lassen.",
      subTitleListPflege2_2:
        "Deutschkenntnisse auf mindestens B1-Niveau (bevorzugt B2- Niveau).",
      subTitleListPflege2_3: "Der Wunsch, zu arbeiten und Menschen zu helfen.",

      //SubTitle 3

      subTitlePflege3: "Anerkennung des Diploms:",
      // subTitlePflegeText3: "Wir unterstützen beide Anerkennungswege:",
      // Wir unterstützen beide Anerkennungswege:
      subTitlePflege3_1:
        "Wir bieten individuelle Unterstützung für Krankenschwestern, die ihren Abschluss anerkennen lassen möchten. Wir unterstützen beide Anerkennungswege:",
      subTitleListPflege3_1: "Praktikum",
      subTitleListPflege3_2: "Prüfung",
      subTitlePflegeSecondText3:
        "In Zusammenarbeit mit verschiedenen Organisationen, wie Übersetzungsbüros und medizinischen Akademien, bieten wir eine umfassende Begleitung im Anerkennungsprozess.",
      subTitleListPflege3_3:
        "Wir helfen bei der Einreichung aller erforderlichen Anträge.",
      subTitleListPflege3_4: "Wir finden eine Klinik für das Praktikum.",

      // medizin: "Medizin",
      medizin: "Ärzte",
      // medizinText:
      //   "Möchtest du sicherstellen, dass deine Patienten stets angemessen medizinisch versorgt werden?",
      medizinText:
        "Unser Unternehmen ist auf die Beschäftigung von Ärzten in Deutschland spezialisiert. Wir helfen Ärzten, Kliniken und Krankenhäuser zu finden, die bereit sind, sie nach Bestehen des FSP für einen Zeitraum von zwei Jahren zur Anerkennung als Arzt zu beschäftigen.",
      // medizinJobText:
      //   "Möchtest du aktiv Menschen helfen und keine Zeit mit Verwaltungsaufgaben verschwenden? Wünschst du dir, dass 'Work-Life-Balance' mehr als nur eine Floskel deines Arbeitgebers ist?Dabei bist du sicherlich auf folgende Herausforderungen gestoßen:",
      medizinJobText: "Wir bieten:",
      // medizinMobileText:
      //   "Möchtest du sicherstellen, dass deine Patienten stets angemessen medizinisch versorgt werden? Möchtest du aktiv Menschen helfen und keine Zeit mit Verwaltungsaufgaben verschwenden? Wünschst du dir, dass 'Work-Life-Balance' mehr als nur eine Floskel deines Arbeitgebers ist? Dabei bist du sicherlich auf folgende Herausforderungen gestoßen:",
      // medizinJobList1: "Fachkräftemangel in den Einrichtungen",
      // medizinJobList2: "Bürokratie und administrative Belastung",
      // medizinJobList3: "Mangel an Zeit für Patienten",
      // medizinJobList4: "Vereinbarkeit von Familie und Beruf",
      // medizinJobList5: "Unzureichende Digitalisierung",
      // medizinJobList6: "Fehlende Weiterbildungsmöglichkeiten",
      // medizinJobList7: "Unterfinanzierung des Gesundheitswesens",
      medizinJobList1:
        "Die Suche nach Stellenangeboten für Ärzte, die nach Bestehen des FSP in Deutschland arbeiten möchten.",
      medizinJobList2:
        "Ein wettbewerbsfähiges Gehalt, das je nach Bundesland und Fachrichtung variiert.",
      medizinJobList3:
        "Individuelle Stellenangebote, die Ihren Wünschen bezüglich Region oder Stadt sowie bestimmten Kliniken oder Krankenhäusern, sowohl privat als auch staatlich, entsprechen.",

      //SubTitle 1

      subTitle1: "Bedingungen für die Beschäftigung:",
      subTitleList1_1:
        "Nach Bestehen des FSP und Erhalt der Genehmigung zur Arbeit als Assistenzarzt finden wir eine Klinik oder ein Krankenhaus, das Ihnen die besten Arbeitsbedingungen, einschließlich eines wettbewerbsfähigen Gehalts, anbietet.",
      subTitleList1_2:
        "Für Ärzte, die bereits ein anerkanntes Diplom haben, bieten wir die Möglichkeit der Beschäftigung mit einem Gehalt von mindestens 7000 Euro pro Monat, plus Zulagen.",
      subTitleList1_3:
        "Für Ärzte, die eine Anerkennung des Diploms anstreben, beträgt das Gehalt im Durchschnitt mindestens 5000 Euro pro Monat, plus Zulagen.",

      //SubTitle 2

      subTitle2: "Anforderungen:",
      subTitleList2_1:
        "Diplom eines Arztes mit Möglichkeit der Anerkennung in Deutschland",
      subTitleList2_2:
        "Kenntnisse der deutschen Sprache auf mindestens C1- Niveau sind erforderlich.",
      subTitleList2_3: "Wunsch, im Team zu arbeiten und Patienten zu helfen.",

      deText:
        "Wir streben danach, Ihnen die besten Stellenangebote zu finden, die Ihren beruflichen Zielen und Wünschen entsprechen, und bieten Unterstützung in allen Phasen Ihrer Karriere in Deutschland.",

      /////////////

      sozialarbeit: "Sozialarbeit",
      sozialarbeitFullText:
        "Im Bereich Soziales & Pädagogik steht der Mensch stets im Zentrum des Handelns. Egal, ob in der Kindererziehung oder der Erwachsenenbildung – die Arbeit mit Menschen benötigt ein ganz besonderes Feingefühl. Um Erwachsene, Jugendliche oder Kinder richtig zu begleiten, braucht es die richtige Mischung aus Empathie und Fachwissen. Wir wissen genau, worauf es bei sozialen und pädagogischen Berufen ankommt und bieten Ihnen qualifiziertes Personal, das immer das richtige Händchen hat und auch in stressigen Situationen die Ruhe bewahrt.Bist Du Erzieher / in, Sozialpädagoge /in, Heilerziehungspfleger / in, Kinderpfleger / in und suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich! ",
      sozialarbeitText:
        "Im Bereich Soziales & Pädagogik steht der Mensch stets im Zentrum des Handelns.",
      sozialarbeitJobText:
        "Egal, ob in der Kindererziehung oder der Erwachsenenbildung – die Arbeit mit Menschen benötigt ein ganz besonderes Feingefühl. Um Erwachsene, Jugendliche oder Kinder richtig zu begleiten, braucht es die richtige Mischung aus Empathie und Fachwissen. Wir wissen genau, worauf es bei sozialen und pädagogischen Berufen ankommt und bieten Ihnen qualifiziertes Personal, das immer das richtige Händchen hat und auch in stressigen Situationen die Ruhe bewahrt.Bist Du Erzieher / in, Sozialpädagoge /in, Heilerziehungspfleger / in, Kinderpfleger / in und suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich! ",

      technik: "Technik und Logistik",
      technikText:
        "Du träumst von spannenden Projekten in führenden High-Tech-Unternehmen? ",
      technikJobText:
        "Du träumst von spannenden Projekten in führenden High-Tech-Unternehmen? Die wünscht Dir neue Herausforderungen z.B. in Maschinenbau, Fahrzeugtechnik oder Alternativen Energien? Du entwickelst im Team weltweit anerkannte Made in Germany Lösungen, die die Innovationen von morgen prägen.Bist Du Experte in der Solartechnik, dem Automotive, der Industriemontage, des Stahlbaus, der Produktion und der Logistik, der Schweißtechnik oder der Elektrotechnik und Du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich!",
      facility: "Facility",
      facilityText:
        "Pratsia bringt qualifiziertes Fachpersonal mit innovativen Unternehmen aus dem Bereich des Gebäudemanagement in ganz Deutschland zusammen.",
      facilityJobText:
        "Die Vermittlung von technischen Fachkräften – egal ob zur Planung, Wartung, Instandhaltung, Energiemanagement oder Betrieb der kompletten technischen Infrastruktur von Immobilien – gehört zu unsere Domäne.Du bist Facility Manager/in oder Objektleiter / in? Oder Du bist direkt beim Kunden vor Ort als Anlagenmechaniker/in HKLS, Servicetechniker / in HKLS, Elektriker / in oder Kälteanlagenmechaniker / in im Einsatz? Du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich!",

      sanitar: "Sanitär",
      sanitarText:
        "Pratsia unterstützt dich bei der Suche nach Top Stellen in der Sanitär, Heizungs und Klimabranche (SHK). Unser Tätigkeitsbereich erstreckt sich von Deutschland.",
      sanitarJobText:
        "Wir kennen die SHK -Branche in allen Bereichen und Facetten, von der Industrie, über den Großhandel bis hin zum Anlagenbauer und Installationsbetrieb. Denn jeder Bereich hat seine spezifischen Anforderungen und Gegebenheiten, die es zu erfüllen gilt. Fachkompetenz und Branchenkenntnisse sowie langjährige Erfahrung im Markt – das ist unsere Kernkompetenz, für die wir tagtäglich einstehen und unser Bestes geben. Du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich!",
      sanitarFullText:
        "Pratsia unterstützt Dich bei der Suche nach Top Stellen in der Sanitär, Heizungs und Klimabranche (SHK). Unser Tätigkeitsbereich erstreckt sich von Deutschland. Wir kennen die SHK -Branche in allen Bereichen und Facetten, von der Industrie, über den Großhandel bis hin zum Anlagenbauer und Installationsbetrieb. Denn jeder Bereich hat seine spezifischen Anforderungen und Gegebenheiten, die es zu erfüllen gilt. Fachkompetenz und Branchenkenntnisse sowie langjährige Erfahrung im Markt – das ist unsere Kernkompetenz, für die wir tagtäglich einstehen und unser Bestes geben. Du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich! ",

      mechanik: "Automechanik / Mechatronik",
      mechanikText:
        "Zünde jetzt deinen Karriere-Booster, mit uns erhältst du Zugang zum exklusiven Jobmarkt – kostenlos und für dich maßgeschneidert.",
      mechanikJobText:
        "Im Land der Weltmarktführer der Automobilindustrie. Benzin im Blut und technisches Verständnis? Eine hervorragende Kombination! Und genau eine solche suchen wir! Wenn Dich zudem neue Technologien der Automobilbranche faszinieren, bist Du bei uns als gelernter Mechaniker oder Mechatroniker genau richtig! Du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich! Mit Pratsia Recruiting wirst Du bei den Top - Arbeitgebern des Landes vorgeschlagen. Wir suchen Dir einen idealen Arbeitgeber, der Deinen Erwartungen gerecht wird.",
      mechanikFullText:
        "Zünde jetzt deinen Karriere-Booster, mit uns erhältst du Zugang zum exklusiven Jobmarkt – kostenlos und für dich maßgeschneidert. Im Land der Weltmarktführer der Automobilindustrie. Benzin im Blut und technisches Verständnis? Eine hervorragende Kombination! Und genau eine solche suchen wir! Wenn Dich zudem neue Technologien der Automobilbranche faszinieren, bist Du bei uns als gelernter Mechaniker oder Mechatroniker genau richtig! Du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich! Mit Pratsia Recruiting wirst Du bei den Top - Arbeitgebern des Landes vorgeschlagen. Wir suchen Dir einen idealen Arbeitgeber, der Deinen Erwartungen gerecht wird.",

      // * Aktuelle Jobangebote

      aktuelleJob: "Aktuelle Jobangebote",
      aktuelleJobItem1:
        "Fachkraft in Zeitarbeitfirma (Einsatzort - Seniorenzentrum /Altenheim)",
      aktuelleJobItem1T:
        "Stundenlohn 24-28 € je nach Berufserfahrung, ob Sie in ganz Deutschland oder nur in Ihrer Region arbeiten. Möglichkeit, einen Firmenwagen zu bekommen, wenn Sie Ihr eigenes Auto benutzen - Erstattung von 30 Cent pro Kilometer. Zuschläge: Samstag 25%, Sonntag 50%, Nacht 25%, Feiertage 100% , 30 Tage Urlaub, Arbeitszeitkonto, Verpflegung + Unterkunft.",

      aktuelleJobItem2:
        "Fachkraft in Zeitarbeitfirma (Einsatzort - Krankenhaus /Klinikum)",
      aktuelleJobItem2T:
        "Stundenlohn 30-34 € je nach Berufserfahrung, ob Sie in ganz Deutschland oder nur in Ihrer Region arbeiten. Möglichkeit, einen Firmenwagen zu bekommen, wenn Sie Ihr eigenes Auto benutzen - Erstattung von 30 Cent pro Kilometer. Zuschläge: Samstag 25%, Sonntag 50%, Nacht 25%, Feiertage 100%, 30 Tage Urlaub, Arbeitszeitkonto, Verpflegung + Unterkunft.",

      aktuelleJobItem3:
        "Fachkraft in Anerkennung (Seniorenzentrum oder Krankenhaus)",
      aktuelleJobItem3T:
        "Stundenlohn 17 €. Pratsia findet einen Ort, an dem Ihr Diplom anerkannt wird, und unterstützt Sie bei Sprachkursen, während Sie im Anerkennungszeitraum Vollzeit arbeiten. Oft wird auch eine Unterkunft zur Verfügung gestellt.",

      aktuelleJobItem4:
        "Pflegehilfskraft in Zeitarbeitfirma (Einsatzort - Seniorenzentrum / Altenheim /Klinikum)",
      aktuelleJobItem4T:
        "Stundenlohn 17 €. Möglichkeit, einen Firmenwagen zu bekommen, wenn Sie Ihr eigenes Auto benutzen - Erstattung von 30 Cent pro Kilometer. Zuschläge: Samstag 25%, Sonntag 50%, Nacht 25%, Feiertage 100%, 30 Tage Urlaub, Arbeitszeitkonto, Verpflegung + Unterkunft.",

      // aktuelleJobItem5:
      //   "Arzthelferin in Gynäkologie (41061 Mönchengladbach) ab 1.07.2024",
      // aktuelleJobItem5T:
      //   "Stundenlohn 25€. Midivertrag / 2 Vormittage pro Woche",

      appointment: {
        questions: "Haben Sie Fragen?",
        answers: "Wir geben Antworten",
        problem: "Haben Sie ein Problem?",
        solutions: "Wir finden Lösungen",
        certificate: "Brauchen Sie Urkunde?",
        organize: "Wir organisieren das",
      },

      beraten: "Wir beraten Sie gerne persönlich!",
      vereinbaren: "Vereinbaren Sie einen Termin mit uns",

      // FORM

      label1: "Firma",
      placeholder1: "Firma",

      label2: "Anrede",
      placeholder2: "Auswählen",
      select1H: "Herr",
      select1F: "Frau",

      label3: "Vorname",
      placeholder3: "Vorname",

      label4: "Nachname",
      placeholder4: "Nachname",

      label5: "E-Mail",
      placeholder5: "E-Mail",

      label6: "Telefon",
      placeholder6: "Telefon",

      label7: "Ihr Wunschtermin",
      placeholder7: "Datum wählen",

      label8: "Gewünschte Zeit",
      placeholder8: "Nachmittag",

      select3N: "Nachmittag",
      select3V: "Vormittag",

      label9: "Nachricht",
      placeholder9: "Thema des Termins",

      absenden: "Absenden",

      // Modal Form

      formSent: "Ihre Bewerbung wurde erfolgreich abgeschickt!",
      weWillReply: "Wir werden Sie gleich kontaktieren!",
      wrong: "Es ist etwas schief gelaufen!",
      checkConnection: "Prüfen Sie Ihre Internetverbindung!",

      // Errors

      max64: "Darf maximal 64 Zeichen lang sein",
      requiredField: "Dieses Feld ist erforderlich",
      vornameMinLength: "Vorname muss mindestens 3 Zeichen lang sein",
      vornameMaxLength: "Vorname darf maximal 64 Zeichen lang sein",
      nachnameMinLength: "Nachname muss mindestens 3 Zeichen lang sein",
      nachnameMaxLength: "Nachname darf maximal 64 Zeichen lang sein",
      notValidEmail: "E-Mail ist ungültig",
      phoneValid: "Telefonnummer muss gültig sein",
      timeInThePast: "Wunschtermin darf nicht in der Vergangenheit liegen",
      message: "Nachricht darf maximal 500 Zeichen lang sein",

      // Calendar

      sun: "Sonntag",
      mon: "Montag",
      tue: "Dienstag",
      wed: "Mittwoch",
      thu: "Donnerstag",
      fri: "Freitag",
      sat: "Samstag",

      jan: "Januar",
      feb: "Februar",
      mar: "März",
      apr: "April",
      may: "Mai",
      jun: "Juni",
      jul: "Juli",
      aug: "August",
      sep: "September",
      oct: "Oktober",
      nov: "November",
      dec: "Dezember",

      // Map

      location: "Wir sind in Krefeld, unsere Arbeit ist überall",
      timeToChange: "Zeit Für Veränderung",

      // Language Modal

      choiceLanguage: "Wählen Sie bitte die Sprache der Website",

      // Footer

      inhaber: "Inhaber: Mykola Sytnyk",
      street: "Garnstraße 12",
      city: "47798 Krefeld",
    },
  },

  // UKRAINIAN

  ua: {
    translation: {
      telefon: "Телефон",

      nav: {
        menuStart: "Головна сторінка",
        menuAboutUs: "Про нас",
        menuForCompanies: "Для компаній",
        menuForApp: "Для кандидатів",
        menuAppointment: "Запис на співбесіду",
        menuContact: "Контакти",
      },

      heroTitle: "Відкрийте 'Pratsia'",
      slogan: "Ваша кар'єра - Наша місія",
      textHero:
        "Ласкаво просимо до провідного кадрового агентства Pratsia - вашого надійного партнера у пошуку висококваліфікованих фахівців з України для роботодавців у Німеччині",
      btn: "Записатися на співбесіду",

      // About us

      aboutUsSect: "Про нас",
      aboutUsSubTitle:
        "Ми будуємо довгострокові та успішні партнерські відносини, засновані на довірі та повазі",
      aboutUsText:
        "Наш багаторічний досвід, глибокі галузеві знання та міжнародна мережа дозволяють нам пропонувати індивідуальні рішення для підбору персоналу, які відповідають потребам наших клієнтів.",
      aboutUsItemList1: "Спеціалізація",
      aboutUsItemList2: "Інтегрований підхід",
      aboutUsItemList3: "Фундаментальна робота",
      spezial_text:
        "Ми спеціалізуємося на підборі талановитих фахівців у таких галузях, як медицина, догляд, соціальна робота, управління обʼєктами, сантехніка, електротехніка та автомеханіка.",
      ein_text:
        "Наш комплексний підхід включає не лише посередництво в наймі персоналу, а також додаткові послуги, такі як підготовчі та поглиблені курси німецької мови та підтримку в процесі визнання дипломів у відповідних галузях.",
      fundierte_text:
        "Наша робота базується на етичних бізнес-практиках та прозорості в комунікації. 'Pratsia' може допомогти вам залучити найкращі таланти для вашої компанії та досягти ваших цілей щодо найму персоналу. Ми допоможемо забезпечити безпроблемну інтеграцію на німецький ринок праці.",

      teilTeam: "Станьте частиною команди!",
      teilTeamText:
        "Шукаєте нові професійні виклики? Наше кадрове агентство пропонує привабливі кар'єрні можливості в різних галузях.",
      teilTeamSubText:
        "Залиште заявку зараз і почніть будувати своє майбутнє разом з нами!",

      // Für Unternehment

      forUnternehmentTitle: "Для підприємств",
      unternehmentText1: "Етичні стандарти",
      unternehmentText2: "Прозорість у всіх бізнес-відносинах",
      unternehmentText3: "Високоякісний процес найму",
      unternehmentListItem1: "Наші навички",
      unternehmentListItem2: "Наші послуги",
      fahigkeitenText:
        "Pratsia надає свої послуги компаніям по всій Німеччині. Наша широка мережа та ефективні стратегії рекрутингу дозволяють нам сприяти працевлаштуванню висококваліфікованих українських фахівців до компаній у різних містах і регіонах Німеччини. Завдяки міцній мережі в Україні та Німеччині Pratsia має доступ до широкого спектру висококваліфікованих спеціалістів і успішно забезпечує їхню взаємодію з компаніями в Німеччині.",
      dienstText:
        "Наше зобов'язання до високоякісного обслуговування не має меж, і ми пишаємося наданням нашим клієнтам по всій Німеччині першокласної підтримки. Наші послуги включають рекрутинг, консультування і аналіз потреб, розміщення вакансій і маркетинг, відбір і попередній відбір кандидатів, підтримку у візових питаннях і отриманні робочих дозволів, введення на роботу, послуги після виходу на пенсію, курси німецької мови і підтримку у визнанні кваліфікацій.",

      forBewerberitle: "Для кандидатів",
      forBewerberSubitle: "Мрієте про ідеальну роботу? Ми допоможемо!",
      bewerberListItem1: "Інтегрований підхід",
      bewerberListItem2: "Глибокі знання в галузі",
      bewerberListItem3: "Підтримка для компаній та співробітників",
      integrierter:
        "Наша компанія пропонує комплексний підхід, який охоплює не лише пошук ідеальної роботи, а й додаткові послуги, такі як курси німецької мови та допомога у визнанні дипломів, щоб забезпечити успішну інтеграцію.",
      branchenwissen:
        "'Pratsia' має широкі галузеві знання в таких сферах, як медицина, догляд, соціальна робота, управління обʼєктами, сантехніка, електрика та автомеханіка. Це дозволяє нам знаходити індивідуальні рішення для кандидатів. Основою є індивідуальна консультація з питань кар'єрних можливостей і перспектив розвитку, а також подальший підбір вакансій, що відповідають кваліфікаціям і інтересам кандидатів.",
      unterstutzung:
        "Для оптимального вирішення потреб і вимог обох сторін, агентство з працевлаштування надає велике значення індивідуальному супроводу як підприємств, так і працівників. Це включає консультації та підтримку з питань візових та імміграційних процедур, зокрема отримання дозволу на роботу і проживання, а також допомогу в підготовці до переїзду, пошуку житла та інших практичних аспектів переїзду до Німеччини.",
      branchenTitle: "Галузі",

      // * Branchen

      weiterlesen: "Читати далі",
      einstürzen: "Згорнути",

      //Main pflege

      pflege: "Догляд",
      // pflegeText:
      //   "Як медичний фахівець в Німеччині ти бажаєш завжди забезпечувати відповідний догляд за пацієнтами у своїй професії?",
      pflegeText:
        "У нашій компанії відкриті вакансії для медичних сестер та санітарів. Ви будете відповідальні за надання допомоги пацієнтам, проведення процедур та забезпечення комфортного перебування в клініці або будинку престарілих.",
      // pflegeJobText:
      //   "Ти прагнеш отримати більше визнання за свою щоденну роботу? Ти шукаєш роботу, де твій роботодавець активно сприяє твоєму розвитку, і 'Work-Life-Balance' для тебе більше, ніж просто фраза? Тоді безумовно ти стикаєшся з такими викликами:",

      pflegeJobText: "Ми пропонуємо:",
      // pflegeMobileText:
      //   "Як медичний фахівець в Німеччині... Ти бажаєш завжди забезпечувати адекватний догляд за пацієнтами у своїй професії? Ти прагнеш отримати більше визнання за свою щоденну роботу? Ти шукаєш роботу, де твій роботодавець активно сприяє твоєму розвитку, і 'Work-Life-Balance' для тебе більше, ніж просто фраза? Тоді безумовно ти стикаєшся з такими викликами:",
      pflegeMobileText: "Ми пропонуємо:",
      // pflegeJobList1: "Кадровий дефіцит",
      // pflegeJobList2: "Бюрократичні складності",
      // pflegeJobList3: "Відсутність визнання",
      // pflegeJobList4: "Низька оплата",
      // pflegeJobList5: "Відсутність можливостей для професійного зростання",
      // pflegeJobList6: "Погані умови праці",
      // pflegeJobList7: "Відсутність перспективи на керівну посаду",
      // duSuchstInDE:
      //   "Ти шукаєш зміни або вдалий старт в Німеччині? Тоді, можливо, переїзд або зміна місця роботи саме те, що тобі потрібно! Ми знайдемо для тебе ідеального роботодавця, який відповідає твоїм очікуванням.",

      pflegeJobList1:
        "Конкурентну зарплату від 4000 євро на місяць, плюс надбавки.",
      pflegeJobList2: "Безкоштовне житло для наших співробітників.",
      pflegeJobList3:
        "Індивідуальний підбір вакансій: ми знайдемо для вас роботу, яка відповідає вашим побажанням – будь то будинок престарілих, клініка чи лікарня, а також враховуємо географічне розташування (в певній землі або місті).",
      pflegeJobList4:
        "Постійна співпраця з лікарнями, клініками та будинками престарілих, які регулярно потребують медсестер з визнаним дипломом та готові визнати ваш диплом.",

      //SubTitle 1

      subTitlePflege1: "Умови працевлаштування:",
      subTitlePflegeList1_1:
        "Якщо ви вже визнали диплом, ви можете заробляти від 4000 євро на місяць, плюс надбавки, а також отримати безкоштовне житло.",
      subTitlePflegeList1_2:
        "Якщо ви плануєте визнавати диплом, ваша зарплата становитиме в середньому від 3200 євро на місяць, плюс надбавки та житло.",

      //SubTitle 2

      subTitlePflege2: "Вимоги:",
      subTitleListPflege2_1:
        "Диплом медичної сестри або бажання визнати диплом.",
      subTitleListPflege2_2:
        "Знання німецької мови від рівня B1 (бажано рівень B2).",
      subTitleListPflege2_3: "Бажання працювати та допомагати людям.",

      //SubTitle 3

      subTitlePflege3: "Визнання диплому:",
      subTitlePflege3_1:
        "Ми пропонуємо індивідуальну підтримку медсестрам які прагнуть визнати свій диплом. Ми підтримуємо обидва варіанти визнання:",
      // subTitlePflegeText3: "Ми підтримуємо обидва варіанти визнання:",
      subTitleListPflege3_1: "Проходження практики",
      subTitleListPflege3_2: "Складання іспиту",
      subTitlePflegeSecondText3:
        "Співпрацюючи з різними організаціями, такими як бюро перекладів та медичні академії, ми забезпечуємо повний супровід у процесі підтвердження кваліфікації",
      subTitleListPflege3_3: "Допоможемо з подачею всіх необхідних заяв.",
      subTitleListPflege3_4: "Підберемо клініку для проходження практики.",

      //Main medizin

      // medizin: "Медицина",
      medizin: "Лікарі",
      medizinText:
        // "Хочеш бути впевненим, що твої пацієнти завжди отримують відповідну медичну допомогу?",
        "Наша компанія спеціалізується на працевлаштуванні лікарів у Німеччині. Ми допомагаємо лікарям знайти клініки та лікарні, готові прийняти їх на роботу після складання FSP, упродовж двох років для отримання визнання як лікаря.",
      // medizinJobText:
      // "Хочеш активно допомагати людям і не витрачати час на бюрократію? Мрієш, щоб 'Work-Life-Balance' був більше, ніж просто фраза від твого роботодавця?Ти, безсумнівно, зіткнувся з такими проблемами:",
      medizinJobText:
        // "Хочеш активно допомагати людям і не витрачати час на бюрократію? Мрієш, щоб 'Work-Life-Balance' був більше, ніж просто фраза від твого роботодавця?Ти, безсумнівно, зіткнувся з такими проблемами:",
        "Ми пропонуємо:",
      // medizinMobileText:
      //   "Ти шукаєш зміни або успішний старт в Німеччині? Тоді можливо, переїзд або зміна місця роботи саме те, що тобі потрібно! З Pratsia Recruiting ти будеш рекомендований до найкращих роботодавців країни. Ми знайдемо для тебе ідеального роботодавця, який відповідає твоїм очікуванням.",
      // medizinJobList1: "Недостатній кадровий потенціал у галузі",
      medizinJobList1:
        "Пошук вакансій для лікарів, які прагнуть працювати в Німеччині після складання FSP.",
      // medizinJobList2: "Бюрократія та адміністративні навантаження",
      medizinJobList2:
        "Конкурентну зарплату, що залежить від федеральної землі та спеціалізації лікаря",
      // medizinJobList3: "Недостатність часу для пацієнтів",
      medizinJobList3:
        "Індивідуальний підбір вакансій відповідно до ваших побажань щодо регіону або міста, а також конкретних лікарень чи клінік, незалежно від того, є вони приватними чи державними.",
      // medizinJobList4: "Поєднання сімейного життя і професійної кар'єри",
      // medizinJobList5: "Недостатня діджиталізація",
      // medizinJobList6: "Відсутність можливостей для професійного зростання",
      // medizinJobList7: "Недофінансування системи охорони здоров'я",

      //SubTitle 1

      subTitle1: "Умови працевлаштування:",
      subTitleList1_1:
        "Після складання FSP і отримання дозволу на роботу асистентом лікаря ми знайдемо клініку або лікарню, яка запропонує вам найкращі умови роботи, включно з конкурентною заробітною платою.",
      subTitleList1_2:
        "Для лікарів з визнаним дипломом ми пропонуємо можливість працевлаштування з зарплатою від 7000 євро на місяць (залежно від регіону) плюс надбавки.",
      subTitleList1_3:
        "Для лікарів, які планують визнання диплома, зарплата становитиме в середньому від 5000 євро на місяць (залежно від регіону) плюс надбавки.",

      //SubTitle 2

      subTitle2: "Вимоги:",
      subTitleList2_1: "Диплом лікаря з можливістю визнання в Німеччині.",
      subTitleList2_2:
        "Знання німецької мови на рівні не нижче C1 обов´язкове.",
      subTitleList2_3: "Бажання працювати в команді та допомагати пацієнтам.",

      deText:
        "Ми прагнемо допомогти вам знайти найкращі вакансії, які відповідають вашим професійним цілям і побажанням, забезпечуючи підтримку на всіх етапах вашої кар´єри в Німеччині.",

      //Main sozialarbeit
      sozialarbeit: "Соціальна робота",
      sozialarbeitFullText:
        "В галузі соціальної роботи та педагогіки людина завжди знаходиться в центрі уваги. Незалежно від того, чи йдеться про виховання дітей чи навчання дорослих, робота з людьми потребує особливого відчуття відповідальності і тонкої взаємодії. Для належного супроводу дорослих, підлітків або дітей потрібне правильне поєднання співчуття і професійних знань. Ми розуміємо, що важливо в соціальних і педагогічних професіях і пропонуємо кваліфікований персонал, який завжди має відчуття відповідальності і зберігає спокій у стресових ситуаціях.Ти вихователь / вихователька, соціальний педагог / педагогиня, педагог-дефектолог / дефектолог, або доглядальник / доглядальниця за дітьми і шукаєш зміну або успішний старт в Німеччині? Тоді, можливо, переїзд або зміна робочого місця саме те, що тобі потрібно!",
      sozialarbeitText:
        "В галузі соціальної роботи та педагогіки людина завжди знаходиться в центрі уваги.",
      sozialarbeitJobText:
        "Для належного супроводу дорослих, підлітків або дітей потрібне правильне поєднання співчуття і професійних знань. Ми розуміємо, що важливо в соціальних і педагогічних професіях і пропонуємо кваліфікований персонал, який завжди має відчуття відповідальності і зберігає спокій у стресових ситуаціях.Ти вихователь / -ка, соціальний педагог / -иня, педагог-дефектолог , або доглядальник / -иця за дітьми і шукаєш зміни або успішний старт в Німеччині? Тоді, можливо, переїзд або зміна робочого місця саме те, що тобі потрібно!",

      technik: "Техніка та логістика",
      technikText:
        "Ти мрієш про захоплюючі проекти в провідних високотехнологічних компаніях?",
      technikJobText:
        "Ти мрієш про захоплюючі проекти в провідних високотехнологічних компаніях? Ти бажаєш нових викликів у машинобудуванні, автомобільній техніці або альтернативних джерелах енергії? Ти разом з командою розробляєш світово визнані рішення, виготовлені в Німеччині, які формують інновації майбутнього. Якщо ти експерт у сонячній енергетиці, автомобільній промисловості, промисловому монтажі, стальному будівництві, виробництві та логістиці, зварюванні або електротехніці і шукаєш зміни або успішний старт у Німеччині, то переїзд або зміна робочого місця може бути саме тим, що тобі потрібно!",
      // technikFullText:
      //   "Ти мрієш про захоплюючі проекти в провідних високотехнологічних компаніях? Ти бажаєш нових викликів у машинобудуванні, автомобільній техніці або альтернативних джерелах енергії? Ти разом з командою розробляєш світово визнані рішення, виготовлені в Німеччині, які формують інновації майбутнього. Якщо ви експерт у сонячній енергетиці, автомобільній промисловості, промисловому монтажі, стальному будівництві, виробництві та логістиці, зварюванні або електротехніці і шукаєте зміни або успішний старт у Німеччині, то переїзд або зміна робочого місця може бути саме тим, що вам потрібно!",

      facility: "Керування обʼєктами",
      facilityText:
        "Pratsia об'єднує кваліфікований фаховий персонал з інноваційними компаніями у сфері управління спорудами по всій Німеччині.",
      // facilityText:
      //   "Pratsia об'єднує кваліфікований фаховий персонал з інноваційними компаніями у сфері управління будівлями по всій Німеччині. Ми спеціалізуємося на посередництві технічних фахівців, незалежно від того, чи йдеться про проектування, технічне обслуговування, зберігання, енергоменеджмент або управління технічною інфраструктурою нерухомості.Ти фахівець з управління об'єктами чи об'єктний менеджер? Або ти працюєш безпосередньо з клієнтом як механік-монтажник HKLS, технік з обслуговування HKLS, електрик або механік-монтажник холодильних систем? Ти шукаєш зміни або успішний початок у Німеччині? Тоді переїзд або зміна робочого місця може бути саме тим, що тобі потрібно!",
      facilityJobText:
        "Ми спеціалізуємося на посередництві технічних фахівців, незалежно від того, чи йдеться про проектування, технічне обслуговування, зберігання, енергоменеджмент або управління технічною інфраструктурою нерухомості. Ти фахівець з управління об'єктами чи об'єктний менеджер? Або ти працюєш безпосередньо з клієнтом як механік-монтажник HKLS, технік з обслуговування HKLS, електрик або механік-монтажник холодильних систем? Ти шукаєш зміни або успішний початок у Німеччині? Тоді переїзд або зміна робочого місця може бути саме тим, що тобі потрібно!",

      sanitar: "Сантехніка",
      sanitarText:
        "'Pratsia' підтримає тебе у пошуку топових вакансій в галузі сантехніки, опалення та кондиціонування повітря (SHK). Наша діяльність охоплює всю Німеччину.",
      sanitarJobText:
        "Ми знаємо галузь SHK у всіх її аспектах: від промисловості та оптової торгівлі - до виробників устаткування та монтажних підприємств. Кожен з цих сегментів має свої специфічні вимоги і умови, які необхідно виконувати. Наша основна компетенція - це фаховість і знання галузі, а також багаторічний досвід на ринку. Ми щоденно віддано працюємо для того, щоб надавати найкращі послуги. Ти шукаєш зміни або успішний старт в Німеччині? Тоді переїзд або зміна місця роботи може бути тим, що тобі потрібно!",
      sanitarFullText:
        "'Pratsia' підтримає тебе у пошуку топових вакансій в галузі сантехніки, опалення та кондиціонування повітря (SHK). Наша діяльність охоплює всю Німеччину. Ми знаємо галузь SHK у всіх її аспектах: від промисловості та оптової торгівлі до виробників устаткування та монтажних підприємств. Кожен з цих сегментів має свої специфічні вимоги і умови, які необхідно виконувати. Наша основна компетенція - це фаховість і знання галузі, а також багаторічний досвід на ринку. Ми щоденно відданий працюємо для цього, щоб надавати найкращі послуги. Ти шукаєш змін або успішний старт в Німеччині? Тоді переїзд або зміна місця роботи може бути тим, що тобі потрібно!",

      mechanik: "Автомеханік / мехатронік",
      mechanikText:
        "Запали свій кар'єрний бустер прямо зараз - з нами ти отримаєш доступ до ексклюзивного ринку праці, безкоштовно і налаштовано під тебе.",
      mechanikJobText:
        "В країні світових лідерів автомобільної промисловості. Бензин у крові і технічне розуміння? Відмінна комбінація! І саме такого ми шукаємо! Якщо тебе також цікавлять нові технології автомобільної галузі, то ти на правильному шляху, як досвідчений механік або мехатронікер! Ти шукаєш змін або успішний старт в Німеччині? Тоді переїзд або зміна місця роботи може бути саме тим, що потрібно для тебе! З Pratsia Recruiting ми запропонуємо тобі вакансії в провідних компаніях країни. Ми знайдемо для тебе ідеального роботодавця, який відповідає твоїм очікуванням.",
      mechanikFullText:
        "Запали свій кар'єрний бустер прямо зараз - з нами ти отримаєш доступ до ексклюзивного ринку праці підлаштованого під тебе. В країні світових лідерів автомобільної промисловості. Бензин у крові і технічне розуміння? Відмінна комбінація! І саме такого ми шукаємо! Якщо тебе також цікавлять нові технології автомобільної галузі, то ти на правильному шляху, як досвідчений механік або мехатронікер! Ти шукаєш змін або успішний старт в Німеччині? Тоді переїзд або зміна місця роботи може бути саме тим, що потрібно для тебе! З Pratsia Recruiting ми запропонуємо тобі вакансії в провідних компаніях країни. Ми знайдемо для тебе ідеального роботодавця, який відповідає твоїм очікуванням.",

      aktuelleJob: "Поточні вакансії ",
      aktuelleJobItem1:
        "Медсестра у компанії тимчасової зайнятості (місце роботи - центр для людей похилого віку / будинок престарілих)",
      aktuelleJobItem1T:
        "Погодинна оплата 24-28 € в залежності від досвіду роботи, незалежно від того, працюєте ви по всій Німеччині чи тільки у своєму регіоні. Можливість отримати службовий автомобіль, якщо користуєтеся власним — відшкодування 30 центів за кілометр. Доплати: субота 25%, неділя 50%, ніч 25%, святкові дні 100%, 30 днів відпустки, робочий час на рахунок, харчування + проживання.",

      aktuelleJobItem2:
        "Медсестра у компанії тимчасової зайнятості (місце роботи - лікарня / клініка)",
      aktuelleJobItem2T:
        "Погодинна оплата 30-34 € залежно від досвіду роботи, незалежно від того, працюєте ви по всій Німеччині чи тільки у своєму регіоні. Можливість отримати службовий автомобіль, а при користуванні власним — відшкодування 30 центів за кілометр. Доплати: субота 25%, неділя 50%, ніч 25%, святкові дні 100%. 30 днів відпустки, облік робочого часу, харчування + проживання.",

      aktuelleJobItem3:
        "Медсестра зі визнання кваліфікації (центр для людей похилого віку або лікарня)",
      aktuelleJobItem3T:
        "Погодинна оплата 17 €. Pratsia знайде місце, де буде визнано ваш диплом, і підтримає вас у проходженні мовних курсів, поки ви працюєте на повну ставку протягом періоду визнання. Зазвичай також надається проживання.",

      aktuelleJobItem4:
        "Помічник медичної сестри у компанії тимчасової зайнятості (місце роботи - центр для людей похилого віку / будинок престарілих / лікарня)",
      aktuelleJobItem4T:
        "Погодинна оплата 17 €. Можливість отримати службовий автомобіль, а при користуванні власним — відшкодування 30 центів за кілометр. Доплати: субота 25%, неділя 50%, ніч 25%, святкові дні 100%. 30 днів відпустки, облік робочого часу, харчування + проживання.",

      // aktuelleJobItem5:
      //   "Медична асистентка в гінекології (41061 Мюнхенгладбах) з 1.07.2024",
      // aktuelleJobItem5T:
      //   "Погодинна оплата 25 євро. Часткова зайнятість / 2 передполудні на тиждень.",

      // Appointment

      appointment: {
        questions: "Маєте питання?",
        answers: "Ми надамо відповіді",
        problem: "У вас є проблема?",
        solutions: "Ми знаходимо рішення",
        certificate: "Потрібен сертифікат?",
        organize: "Ми це організуємо.",
      },

      beraten: "Ми з радістю проконсультуємо!",
      vereinbaren: "Запишіться на зустріч з нами",

      // FORM

      label1: "Компанія",
      placeholder1: "Компанія",

      label2: "Звертання",
      placeholder2: "Звертання",
      select1H: "Пан",
      select1F: "Пані",

      label3: "Ім'я",
      placeholder3: "Ім'я",

      label4: "Прізвище",
      placeholder4: "Прізвище",

      label5: "E-Mail",
      placeholder5: "E-Mail",

      label6: "Телефон",
      placeholder6: "Телефон",

      label7: "Бажана дата",
      placeholder7: "Оберіть дату",

      label8: "Бажаний час",
      placeholder8: "Після обіду",

      select3N: "Після обіду",
      select3V: "До обіду",

      label9: "Коментар",
      placeholder9: "Тема зустрічі",

      absenden: "Відправити",

      // Modal Form

      formSent: "Ваша заявка успішно відправлена!",
      weWillReply: "Ми скоро з вами зв'яжемося!",
      wrong: "Щось пішло не так!",
      checkConnection: "Перевірте ваше інтернет-з'єднання!",

      // Errors

      max64: "Максимальна довжина поля - 64 символи",
      requiredField: "Це поле обов'язкове",
      vornameMinLength: "Ім'я повинно містити щонайменше 3 символи",
      vornameMaxLength: "Ім'я повинно містити не більше 64 символів",
      nachnameMinLength: "Прізвище повинно містити щонайменше 3 символи",
      nachnameMaxLength: "Прізвище повинно містити не більше 64 символів",
      notValidEmail: "Електронна адреса недійсна",
      phoneValid: "Номер телефону повинен бути коректним",
      timeInThePast: "Обраний термін не може бути у минулому",
      message: "Повідомлення повинно містити не більше 500 символів",

      // Calendar

      sun: "Неділя",
      mon: "Понеділок",
      tue: "Вівторок",
      wed: "Середа",
      thu: "Четвер",
      fri: "П'ятниця",
      sat: "Субота",

      jan: "Січень",
      feb: "Лютий",
      mar: "Березень",
      apr: "Квітень",
      may: "Травень",
      jun: "Червень",
      jul: "Липень",
      aug: "Серпень",
      sep: "Вересень",
      oct: "Жовтень",
      nov: "Листопад",
      dec: "Грудень",

      // Map

      location: "Ми знаходимося у Крефельді, але робота наша всюди",
      timeToChange: "Час для змін",

      // Language Modal

      choiceLanguage: "Будь ласка, оберіть мову сайту",

      // Footer

      inhaber: "Власник: Микола Ситник",
      street: "Вулиця Гарн, 12",
      city: "47798 Крефельд",
    },
  },

  // RU ============================================================

  ru: {
    translation: {
      telefon: "Телефон",

      nav: {
        menuStart: "Главная страница",
        menuAboutUs: "О нас",
        menuForCompanies: "Для компаний",
        menuForApp: "Для кандидатов",
        menuAppointment: "Запись на собеседование",
        menuContact: "Контакты",
      },

      heroTitle: "Откройте 'Pratsia'",
      slogan: "Ваша карьера - Наша миссия",
      textHero:
        "Добро пожаловать в ведущую кадровую агенцию Pratsia - вашего надежного партнера в поиске высококвалифицированных специалистов из Украины для работодателей в Германии",
      btn: "Записаться на собеседование",

      aboutUsSect: "Про нас",
      aboutUsSubTitle:
        "Мы строим долгосрочные и успешные партнерские отношения, основанные на доверии и уважении",
      aboutUsText:
        "Наш многолетний опыт, глубокие отраслевые знания и международная сеть позволяют нам предлагать индивидуальные решения по подбору персонала, которые соответствуют потребностям наших клиентов.",

      aboutUsItemList1: "Специализация",
      aboutUsItemList2: "Интегрированный подход",
      aboutUsItemList3: "Фундаментальная работа",
      spezial_text:
        "Мы специализируемся на подборе талантливых специалистов в таких областях, как медицина, уход, социальная работа, управление объектами, сантехника, электротехника и автомеханика.",
      ein_text:
        "Наш комплексный подход включает не только посредничество в найме персонала, но также дополнительные услуги, такие как подготовительные и углубленные курсы немецкого языка и поддержка в процессе признания дипломов в соответствующих областях.",
      fundierte_text:
        "Наша работа основана на этических бизнес-практиках и прозрачности в коммуникации. Pratsia поможет вам привлечь лучшие таланты для вашей компании и достичь ваших целей по найму персонала. Мы поможем обеспечить беспроблемную интеграцию на немецкий рынок труда.",
      teilTeam: "Станьте частью команды!",
      teilTeamText:
        "Ищете новые профессиональные вызовы? Наше кадровое агентство предлагает привлекательные карьерные возможности в различных областях.",
      teilTeamSubText:
        "Оставьте заявку сейчас и начните строить свое будущее вместе с нами!",
      forUnternehmentTitle: "Для предприятий",
      unternehmentText1: "Этические стандарты",
      unternehmentText2: "Прозрачность во всех бизнес-отношениях",
      unternehmentText3: "Высококачественный процесс найма",
      unternehmentListItem1: "Наши навыки",
      unternehmentListItem2: "Наши услуги",
      fahigkeitenText:
        "Pratsia предоставляет свои услуги компаниям по всей Германии. Наша широкая сеть и эффективные стратегии рекрутинга позволяют нам способствовать трудоустройству высококвалифицированных украинских специалистов в компании в различных городах и регионах Германии. Благодаря прочной сети в Украине и Германии, Pratsia имеет доступ к широкому спектру высококвалифицированных специалистов и успешно обеспечивает их взаимодействие с компаниями в Германии.",
      dienstText:
        "Наше обязательство к высококачественному обслуживанию не имеет границ, и мы гордимся предоставлением нашим клиентам по всей Германии первоклассной поддержки. Наши услуги включают рекрутинг, консультирование и анализ потребностей, размещение вакансий и маркетинг, отбор и предварительный отбор кандидатов, поддержку в визовых вопросах и получении разрешений на работу, введение в работу, услуги после выхода на пенсию, курсы немецкого языка и поддержку в признании квалификаций.",
      forBewerberitle: "Для кандидатов",
      forBewerberSubitle: "Мечтаете о идеальной работе? Мы поможем!",
      bewerberListItem1: "Интегрированный подход",
      bewerberListItem2: "Глубокие знания в отрасли",
      bewerberListItem3: "Поддержка для компаний и сотрудников",
      integrierter:
        "Наша компания предлагает комплексный подход, который охватывает не только поиск идеальной работы, но и дополнительные услуги, такие как курсы немецкого языка и помощь в признании дипломов, чтобы обеспечить успешную интеграцию.",
      branchenwissen:
        "Pratsia имеет широкие отраслевые знания в таких сферах, как медицина, уход, социальная работа, управление объектами, сантехника, электротехника и автомеханика. Это позволяет нам находить индивидуальные решения для кандидатов. Основой является индивидуальная консультация по вопросам карьерных возможностей и перспектив развития, а также дальнейший подбор вакансий, соответствующих квалификациям и интересам кандидатов.",
      unterstutzung:
        "Для оптимального решения потребностей и требований обеих сторон агентство по трудоустройству придает большое значение индивидуальному сопровождению как предприятий, так и работников. Это включает консультации и поддержку по вопросам визовых и иммиграционных процедур, включая получение разрешения на работу и проживание, а также помощь в подготовке к переезду, поиске жилья и другим практическим аспектам переезда в Германию.",

      // * Branchen

      weiterlesen: "Читать далее",
      einstürzen: "Свернуть",

      branchenTitle: "Отрасли",

      pflege: "Уход",
      // pflegeText:
      //   "Как медицинский специалист в Германии вы хотите всегда обеспечивать надлежащий уход за пациентами в своей профессии?",
      pflegeText:
        "В нашей компании открыты вакансии для медицинских сестер и санитаров. Вы будете отвечать за помощь пациентам, проведение процедур и обеспечение комфортного пребывания в клинике или доме престарелых.",
      // pflegeJobText:
      //   "Вы стремитесь к большему признанию за свою повседневную работу? Ищете работу, где ваш работодатель активно способствует вашему развитию, и 'Work - Life - Balance' для вас больше, чем просто фраза? Тогда, безусловно, вы сталкиваетесь с такими вызовами:",
      pflegeJobText: "Мы предлагаем:",
      pflegeMobileText: "Мы предлагаем:",

      // pflegeJobList1: "Кадровый дефицит",
      // pflegeJobList2: "Бюрократические сложности",
      // pflegeJobList3: "Отсутствие признания",
      // pflegeJobList4: "Низкая оплата",
      // pflegeJobList5: "Отсутствие возможностей для профессионального роста",
      // pflegeJobList6: "Плохие условия труда",
      // pflegeJobList7: "Отсутствие перспективы на руководящую должность",
      // duSuchstInDE:
      //   "Ищете смену или удачный старт в Германии? Тогда, возможно, переезд или смена места работы именно то, что вам нужно! Мы найдем для вас идеального работодателя, который соответствует вашим ожиданиям.",

      pflegeJobList1:
        "Конкурентную зарплату от 4000 евро в месяц, плюс надбавки.",
      pflegeJobList2: "Бесплатное жилье для наших сотрудников",
      pflegeJobList3:
        "Индивидуальный подбор вакансий: мы найдем для вас работу, которая соответствует вашим пожеланиям – будь то дом престарелых, клиника или больница, а также учитываем географическое расположение (в определенной земле или городе).",
      pflegeJobList4:
        "Постоянное сотрудничество с больницами, клиниками и домами престарелых, которые регулярно нуждаются в медсестрах с признанным дипломом и готовы признать ваш диплом.",

      //SubTitle 1

      subTitlePflege1: "Условия трудоустройства:",
      subTitlePflegeList1_1:
        "Если вы уже признали диплом, вы можете зарабатывать от 4000 евро в месяц, плюс надбавки, а также получить бесплатное жилье и питание.",
      subTitlePflegeList1_2:
        "Если вы планируете признавать диплом, ваша зарплата составит в среднем от 3200 евро в месяц, плюс надбавки, бесплатное жилье и питание",

      //SubTitle 2

      subTitlePflege2: "Требования:",
      subTitleListPflege2_1:
        "Диплом медицинской сестры или желание признать диплом.",
      subTitleListPflege2_2:
        "Знание немецкого языка от уровня B1 (желательно уровень B2).",
      subTitleListPflege2_3: "Желание работать и помогать людям.",

      //SubTitle 3

      subTitlePflege3: "Признание диплома:",
      subTitlePflege3_1:
        "Мы предлагаем индивидуальную поддержку медсестрам, которые стремятся признать свой диплом. Мы поддерживаем оба варианта признания:",
      subTitleListPflege3_1: "Прохождение практики",
      subTitleListPflege3_2: "Cдача экзамена",
      subTitlePflegeSecondText3:
        "Сотрудничая с различными организациями, такими как бюро переводов и медицинские академии, мы обеспечиваем полный сопровождение в процессе подтверждения квалификации.",
      subTitleListPflege3_3: "Поможем с подачей всех необходимых заявлений.",
      subTitleListPflege3_4: "Подберем клинику для прохождения практики.",

      //Main medizin

      // medizin: "Медицина",
      medizin: "Врачи",
      // medizinText:
      //   "Хотите быть уверены, что ваши пациенты всегда получают соответствующую медицинскую помощь?",
      medizinText:
        "Наша компания специализируется на трудоустройстве врачей в Германии. Мы помогаем врачам найти клиники и больницы, готовые принять их на работу после сдачи FSP, в течение двух лет для получения признания как врача.",
      // medizinJobText:
      //   "Хотите активно помогать людям и не тратить время на бюрократию? Мечтаете, чтобы 'Work-Life-Balance' было больше, чем просто фраза от вашего работодателя? Несомненно, вы столкнулись с такими проблемами:",
      medizinJobText: "Мы предлагаем:",
      // medizinJobList1: "Недостаточный кадровый потенциал в отрасли",
      // medizinJobList2: "Бюрократия и административные нагрузки",
      // medizinJobList3: "Недостаток времени для пациентов",
      medizinJobList1:
        "Найти вакансии для врачей, желающих работать в Германии после сдачи FSP.",
      medizinJobList2:
        "Конкурентную зарплату, которая варьируется в зависимости от земли и специализации врача.",
      medizinJobList3:
        "Индивидуальный подбор вакансий в соответствии с вашими пожеланиями по региону или городу, а также конкретным больницам или клиникам, будь то частные или государственные.",
      // medizinJobList4: "Сочетание семейной жизни и профессиональной карьеры",
      // medizinJobList5: "Недостаточная дигитализация",
      // medizinJobList6: "Отсутствие возможностей для профессионального роста",
      // medizinJobList7: "Недофинансирование системы здравоохранения",

      //SubTitle 1

      subTitle1: "Условия трудоустройства:",
      subTitleList1_1:
        "После сдачи FSP и получения разрешения на работу ассистентом врача мы найдем клинику или больницу, которая предложит вам лучшие условия работы, в том числе конкурентную зарплату.",
      subTitleList1_2:
        "Для врачей, уже имеющих признанный диплом, мы предлагаем возможность трудоустройства с зарплатой от 7000 евро в месяц (в зависимости от региона) плюс надбавки.",
      subTitleList1_3:
        "Для врачей, которые планируют признание диплома, зарплата будет составлять в среднем от 5000 евро в месяц (в зависимости от региона) плюс надбавки.",

      //SubTitle 2

      subTitle2: "Требования:",
      subTitleList2_1: "Диплом врача с возможностью признания в Германии",
      subTitleList2_2: "Знание немецкого языка от уровня C1 обязательно.",
      subTitleList2_3: "Желание работать в команде и помогать пациентам.",

      deText:
        "Мы стремимся помочь вам найти лучшие вакансии, которые соответствуют вашим профессиональным целям и пожеланиям, обеспечивая поддержку на всех этапах вашей карьеры в Германии.",

      //Main sozialarbeit

      sozialarbeit: "Социальная работа",
      sozialarbeitFullText:
        "В области социального и педагогического труда человек всегда находится в центре внимания. Независимо от того, идет ли речь о воспитании детей или образовании взрослых, работа с людьми требует особой чуткости. Чтобы правильно сопровождать взрослых, подростков или детей, необходим правильный баланс между эмпатией и профессиональными знаниями. Мы точно знаем, что важно в социальных и педагогических профессиях, и предлагаем вам квалифицированный персонал, который всегда находит правильный подход и сохраняет спокойствие даже в стрессовых ситуациях.Вы воспитатель, социальный педагог, специалист по уходу за людьми с ограниченными возможностями, помощник воспитателя и ищете изменения или хороший старт в Германии? Тогда переезд или смена работы может быть именно тем, что вам нужно!",
      sozialarbeitText:
        "В области социальной работы и педагогики человек всегда находится в центре внимания.",
      sozialarbeitJobText:
        "Для надлежащего сопровождения взрослых, подростков или детей необходимо правильное сочетание сочувствия и профессиональных знаний. Мы понимаем, что важно в социальных и педагогических профессиях, и предлагаем квалифицированный персонал, который всегда имеет чувство ответственности и сохраняет спокойствие в стрессовых ситуациях. Вы воспитатель, социальный педагог, педагог-дефектолог или няня и ищете смену или успешный старт в Германии? Тогда, возможно, переезд или смена рабочего места именно то, что вам нужно!",
      technik: "Техника и логистика",
      technikText:
        "Вы мечтаете о захватывающих проектах в ведущих высокотехнологичных компаниях?",
      technikJobText:
        "Вы мечтаете о интересных проектах в ведущих высокотехнологичных компаниях и ищете новые вызовы в таких областях, как машиностроение, автомобилестроение или альтернативная энергетика? Если вы являетесь экспертом в области солнечной энергетики, автомобилестроения, промышленной сборки, металлоконструкций, производства, логистики, сварочных технологий или электротехники и стремитесь к изменениям или хорошему старту в Германии, переезд или перевод может быть именно тем, что вам нужно!",

      facility: "Управление объектами",
      facilityText:
        "Pratsia объединяет квалифицированный профессиональный персонал с инновационными компаниями в сфере управления объектами по всей Германии.",
      facilityJobText:
        "Мы специализируемся на посредничестве технических специалистов, независимо от того, идет ли речь о проектировании, техническом обслуживании, хранении, энергоменеджменте или управлении технической инфраструктурой недвижимости. Вы специалист по управлению объектами или объектный менеджер? Или вы работаете напрямую с клиентом как механик-монтажник HKLS, техник по обслуживанию HKLS, электрик или механик-монтажник холодильных систем? Ищете смену или успешный старт в Германии? Тогда переезд или смена рабочего места может быть правильным решением!",

      sanitar: "Сантехник",
      sanitarText:
        "Pratsia поддерживает тебя в поиске топовых вакансий в области сантехники, отопления и кондиционирования воздуха (SHK). Наша деятельность охватывает всю Германию.",
      sanitarJobText:
        "Мы знаем отрасль SHK во всех её аспектах: от промышленности и оптовой торговли до производителей оборудования и монтажных предприятий. Каждый из этих сегментов имеет свои специфические требования и условия, которые необходимо выполнять. Наша основная компетенция - это профессионализм и знание отрасли, а также многолетний опыт на рынке. Мы ежедневно преданно работаем, чтобы предоставлять лучшие услуги. Ты ищешь изменения или успешный старт в Германии? Тогда переезд или смена места работы может быть тем, что тебе нужно!",
      sanitarFullText:
        "'Pratsia' поддерживает тебя в поиске лучших вакансий в сфере сантехники, отопления и кондиционирования воздуха (SHK). Наша деятельность охватывает Германию. Мы знаем отрасль SHK во всех её областях и аспектах, от промышленности и оптовой торговли до проектирования и установки систем. Ведь каждая область имеет свои специфические требования и условия, которым необходимо соответствовать. Профессиональная компетентность, знание отрасли и многолетний опыт на рынке – это наша основная компетенция, за которую мы ежедневно отвечаем и прикладываем все усилия. Ты ищешь перемен или хороший старт в Германии? Тогда переезд или смена работы могут быть именно тем, что тебе нужно!",

      mechanik: "Автомеханик / мехатроник",
      mechanikText:
        "Запусти свою карьеру прямо сейчас - с нами ты получишь доступ к эксклюзивному рынку труда, бесплатно и настроено под тебя.",
      mechanikJobText:
        "В стране мировых лидеров автомобильной промышленности. Бензин в крови и техническое понимание? Отличная комбинация! И именно такого мы ищем! Если тебя также интересуют новые технологии автомобильной отрасли, то ты на правильном пути, как опытный механик или мехатроник! Ты ищешь изменений или успешный старт в Германии? Тогда переезд или смена места работы может быть именно тем, что тебе нужно! С Pratsia Recruiting мы предложим тебе вакансии в ведущих компаниях страны. Мы найдем для тебя идеального работодателя, который соответствует твоим ожиданиям.",
      mechanikFullText:
        "Запусти свой карьерный бустер сейчас, с нами ты получишь доступ к эксклюзивному рынку вакансий – бесплатно и специально для тебя. В стране мировых лидеров автомобильной промышленности. Бензин в крови и техническое понимание? Отличное сочетание! И именно такое сочетание мы ищем! Если тебя также увлекают новые технологии в автомобильной отрасли, то у нас ты как раз на своем месте в качестве квалифицированного механика или мехатроника! Ты ищешь перемен или хороший старт в Германии? Тогда переезд или смена работы могут быть именно тем, что тебе нужно! С Pratsia Recruiting ты будешь предложен лучшим работодателям страны. Мы найдем тебе идеального работодателя, который соответствует твоим ожиданиям.",

      aktuelleJob: "Текущие вакансии",
      aktuelleJobItem1:
        "Медсестра в компании временной занятости (место работы - центр для пожилых людей / дом престарелых)",
      aktuelleJobItem1T:
        "Почасовая оплата 24-28 € в зависимости от опыта работы, независимо от того, работаете ли вы по всей Германии или только в своем регионе. Возможность получить служебный автомобиль, если пользуетесь своим - компенсация 30 центов за километр. Доплаты: суббота 25%, воскресенье 50%, ночь 25%, праздничные дни 100%, 30 дней отпуска, учет рабочего времени, питание + проживание.",
      aktuelleJobItem2:
        "Медсестра в компании временной занятости (место работы - больница / клиника)",
      aktuelleJobItem2T:
        "Почасовая оплата 30-34 € в зависимости от опыта работы, независимо от того, работаете ли вы по всей Германии или только в своем регионе. Возможность получить служебный автомобиль, а при использовании своего - компенсация 30 центов за километр. Доплаты: суббота 25%, воскресенье 50%, ночь 25%, праздничные дни 100%. 30 дней отпуска, учет рабочего времени, питание + проживание.",
      aktuelleJobItem3:
        "Медсестра по признанию квалификации (центр для пожилых людей или больница)",
      aktuelleJobItem3T:
        "Почасовая оплата 17 €. Pratsia найдет место, где будет признан ваш диплом, и поддержит вас в прохождении языковых курсов, пока вы работаете на полную ставку в течение периода признания. Обычно также предоставляется проживание.",
      aktuelleJobItem4:
        "Вспомогательный медицинский персонал в компании временной занятости (место работы - центр для пожилых людей / дом престарелых / больница)",
      aktuelleJobItem4T:
        "Почасовая оплата 17 €. Возможность получить служебный автомобиль, а при использовании своего - компенсация 30 центов за километр. Доплаты: суббота 25%, воскресенье 50%, ночь 25%, праздничные дни 100%. 30 дней отпуска, учет рабочего времени, питание + проживание.",
      // aktuelleJobItem5:
      //   "Медицинская ассистентка в гинекологии (41061 Мёнхенгладбах) с 1.07.2024",
      // aktuelleJobItem5T:
      //   "Почасовая оплата 25 евро. Частичная занятость / 2 дополуденных смены в неделю.",
      interviewtermin: "Записаться на собеседование",

      appointment: {
        questions: "Есть вопросы?",
        answers: "Мы предоставляем ответы",
        problem: "У вас есть проблема?",
        solutions: "Мы находим решения",
        certificate: "Нужен сертификат?",
        organize: "Мы это организуем.",
      },

      beraten: "Мы с радостью проконсультируем лично!",
      vereinbaren: "Запишитесь на встречу с нами",

      // FORM

      label1: "Компания",
      placeholder1: "Компания",
      label2: "Обращение",
      placeholder2: "Обращение",
      select1H: "Господин",
      select1F: "Госпожа",
      label3: "Имя",
      placeholder3: "Имя",
      label4: "Фамилия",
      placeholder4: "Фамилия",
      label5: "E-Mail",
      placeholder5: "E-Mail",
      label6: "Телефон",
      placeholder6: "Телефон",
      label7: "Желаемая дата",
      placeholder7: "Выберите дату",
      label8: "Желаемое время",
      placeholder8: "После обеда",
      select3N: "После обеда",
      select3V: "До обеда",
      label9: "Комментарий",
      placeholder9: "Тема встречи",

      absenden: "Отправить",

      // Modal Form

      formSent: "Ваша заявка успешно отправлена!",
      weWillReply: "Мы скоро с вами свяжемся!",
      wrong: "Что-то пошло не так!",
      checkConnection: "Проверьте ваше интернет-соединение!",

      // Errors

      max64: "Максимальная длина поля - 64 символа",
      requiredField: "Это поле обязательно для заполнения",
      vornameMinLength: "Имя должно содержать не менее 3 символов",
      vornameMaxLength: "Имя должно содержать не более 64 символов",
      nachnameMinLength: "Фамилия должна содержать не менее 3 символов",
      nachnameMaxLength: "Фамилия должна содержать не более 64 символов",
      notValidEmail: "Электронная почта указана неверно",
      phoneValid: "Номер телефона должен быть корректным",
      timeInThePast: "Выбранная дата не может быть в прошлом",
      message: "Сообщение должно содержать не более 500 символов",

      // Calendar
      sun: "Воскресенье",
      mon: "Понедельник",
      tue: "Вторник",
      wed: "Среда",
      thu: "Четверг",
      fri: "Пятница",
      sat: "Суббота",
      jan: "Январь",
      feb: "Февраль",
      mar: "Март",
      apr: "Апрель",
      may: "Май",
      jun: "Июнь",
      jul: "Июль",
      aug: "Август",
      sep: "Сентябрь",
      oct: "Октябрь",
      nov: "Ноябрь",
      dec: "Декабрь",

      // Map
      location: "Мы находимся в Крефельде, но наша работа повсюду",
      timeToChange: "Время перемен",

      // Language Modal

      choiceLanguage: "Пожалуйста, выберите язык сайта",

      // Footer

      inhaber: "Собственник: Николай Сытник",
      street: "Улица Гарн, 12",
      city: "47798 Крефельд",
    },
  },

  // EN ============================================================

  en: {
    translation: {
      telefon: "Phone number",

      nav: {
        menuStart: "Home Page",
        menuAboutUs: "About Us",
        menuForCompanies: "For Companies",
        menuForApp: "For Candidates",
        menuAppointment: "Interview Appointment",
        menuContact: "Contacts",
      },

      heroTitle: "Discover 'Pratsia'",
      slogan: "Your Career - Our Mission",
      textHero:
        "Welcome to Pratsia, the leading recruitment agency – your reliable partner in connecting highly skilled professionals with employers in Germany.",
      btn: "Book an Interview",

      aboutUsSect: "About us",
      aboutUsSubTitle:
        "We build long-term and successful partnerships based on trust and respect",
      aboutUsText:
        "Our years of experience, deep industry knowledge, and international network enable us to offer tailored recruitment solutions that meet the needs of our clients.",

      aboutUsItemList1: "Specialization",
      aboutUsItemList2: "Integrated Approach",
      aboutUsItemList3: "Fundamental Work",
      spezial_text:
        "We specialize in recruiting talented professionals in fields such as medicine, caregiving, social work, facility management, plumbing, electrical engineering, and auto mechanics.",
      ein_text:
        "Our comprehensive approach encompasses not only recruitment mediation but also additional services, such as preparatory and advanced German language courses and support in the process of diploma recognition in relevant fields.",
      fundierte_text:
        "Our work is grounded in ethical business practices and transparent communication. 'Pratsia' can help you attract top talent for your company and achieve your recruitment goals. We ensure a smooth integration into the German labor market.",
      teilTeam: "Join the Team!",
      teilTeamText:
        "Looking for new professional challenges? Our recruitment agency offers exciting career opportunities across various industries. Submit your application now and start building your future with us!",
      teilTeamSubText:
        "Submit your application now and start building your future with us!",
      forUnternehmentTitle: "For Businesses",
      unternehmentText1: "Ethical Standards",
      unternehmentText2: "Transparency in all business relationships",
      unternehmentText3: "High-quality hiring process",
      unternehmentListItem1: "Our Skills",
      unternehmentListItem2: "Our Services",
      fahigkeitenText:
        "Pratsia provides its services to companies across Germany. Our extensive network and effective recruitment strategies enable us to facilitate the employment of highly skilled professionals in various cities and regions of Germany.",
      dienstText:
        "Our commitment to high-quality service knows no bounds, and we take pride in providing our clients across Germany with top-notch support. Our services include recruiting, consulting and needs analysis, job placement and marketing, candidate selection and pre-screening, visa and work permit assistance, onboarding support, post-retirement services, German language courses, and assistance in qualifications recognition.",
      forBewerberitle: "For Candidates",
      forBewerberSubitle: "Dreaming of the perfect job? We can help!",
      bewerberListItem1: "Integrated Approach",
      bewerberListItem2: "Extensive Industry Knowledge",
      bewerberListItem3: "Support for Companies and Employees",
      integrierter:
        "Our company offers a comprehensive approach that not only covers finding the ideal job but also additional services such as German language courses and assistance in diploma recognition to ensure successful integration.",
      branchenwissen:
        "Pratsia has extensive industry knowledge in areas such as healthcare, caregiving, social work, facility management, plumbing, electrical engineering, and automotive mechanics. This enables us to find tailored solutions for candidates. The foundation lies in personalized career consultations, development opportunities, and further job matching that aligns with candidates' qualifications and interests.",
      unterstutzung:
        "To optimally address the needs and requirements of both parties, the employment agency places great importance on individualized support for both companies and workers. This includes consulting and assistance with visa and immigration procedures, obtaining work and residence permits, as well as help with relocation preparation, finding accommodation, and other practical aspects of moving to Germany.",

      // * Branchen
      weiterlesen: "Read more",
      einstürzen: "Read less",

      branchenTitle: "Industries",

      // pflege: "Care",

      // pflegeText:
      //   "Our company has job openings for nurses and caregivers. You will be responsible for assisting patients, performing procedures, and ensuring a comfortable stay in a clinic or nursing home.",
      // pflegeJobText: "We offer:",
      // pflegeMobileText: "We offer:",

      // pflegeJobList1:
      //   "A competitive salary starting from 4000 EUR per month, plus bonuses.",
      // pflegeJobList2: "Free accommodation for our employees.",
      // pflegeJobList3:
      //   "Personalized job selection: We will find a job for you that fits your preferences—whether it's a nursing home, clinic, or hospital, and we also consider geographic location (in a specific state or city).",
      // pflegeJobList4:
      //   "Ongoing collaboration with hospitals, clinics, and nursing homes that regularly need nurses with recognized diplomas and are ready to recognize your diploma.",

      // //SubTitle 1

      // subTitlePflege1: "Employment conditions:",
      // subTitlePflegeList1_1:
      //   "If your diploma is already recognized, you can earn from 4000 EUR per month, plus bonuses, as well as receive free accommodation and meals.",
      // subTitlePflegeList1_2:
      //   "If you plan to recognize your diploma, your salary will be on average from 3200 EUR per month, plus bonuses, with free accommodation and meals.",

      // //SubTitle 2

      // subTitlePflege2: "Requirements:",
      // subTitleListPflege2_1:
      //   "Nurse diploma or desire to recognize your diploma.",
      // subTitleListPflege2_2:
      //   "German language skills from B1 level (B2 level preferred).",
      // subTitleListPflege2_3: "Desire to work and help people.",

      // //SubTitle 3

      // subTitlePflege3: "Diploma recognition:",
      // subTitlePflege3_1:
      //   "We offer personalized support to nurses who wish to recognize their diploma. We support both recognition options:",
      // subTitleListPflege3_1: "Practical training",
      // subTitleListPflege3_2: "Taking an exam",
      // subTitlePflegeSecondText3:
      //   "By collaborating with various organizations such as translation offices and medical academies, we provide full support in the qualification recognition process.",
      // subTitleListPflege3_3:
      //   "We assist with submitting all necessary applications.",
      // subTitleListPflege3_4: "We help find a clinic for practical training.",
      pflege: "Care",

      pflegeText:
        "Our company has job openings for nurses and caregivers. You will be responsible for assisting patients, performing procedures, and ensuring a comfortable stay in a clinic or nursing home.",
      pflegeJobText: "We offer:",
      pflegeMobileText: "We offer:",

      pflegeJobList1:
        "A competitive salary starting from 4000 EUR per month, plus bonuses.",
      pflegeJobList2: "Free accommodation for our employees.",
      pflegeJobList3:
        "Personalized job selection: We will find a job for you that fits your preferences—whether it's a nursing home, clinic, or hospital, and we also consider geographic location (in a specific state or city).",
      pflegeJobList4:
        "Ongoing collaboration with hospitals, clinics, and nursing homes that regularly need nurses with recognized diplomas and are ready to recognize your diploma.",

      subTitlePflege1: "Employment conditions:",
      subTitlePflegeList1_1:
        "If your diploma is already recognized, you can earn from 4000 EUR per month, plus bonuses, as well as receive free accommodation and meals.",
      subTitlePflegeList1_2:
        "If you plan to recognize your diploma, your salary will be on average from 3200 EUR per month, plus bonuses, with free accommodation and meals.",

      subTitlePflege2: "Requirements:",
      subTitleListPflege2_1:
        "Nurse diploma or desire to recognize your diploma.",
      subTitleListPflege2_2:
        "German language skills from A2-B1 level (B2 level preferred).",
      subTitleListPflege2_3: "Desire to work and help people.",

      subTitlePflege3: "Diploma recognition:",
      subTitlePflege3_1:
        "We offer personalized support to nurses who wish to recognize their diploma. We support both recognition options:",
      subTitleListPflege3_1: "Practical training",
      subTitleListPflege3_2: "Taking an exam",
      subTitlePflegeSecondText3:
        "By collaborating with various organizations such as translation offices and medical academies, we provide full support in the qualification recognition process.",
      subTitleListPflege3_3:
        "We assist with submitting all necessary applications.",
      subTitleListPflege3_4: "We help find a clinic for practical training.",

      pflegeSupportText: "For EU Citizens:",
      pflegeSupportList1:
        "Simplified Process: No visa is required. You can relocate to Germany immediately and start the diploma recognition process.",
      pflegeSupportList2:
        "Fast Diploma Recognition: Your EU education significantly accelerates the recognition process, allowing you to start working as a certified nurse sooner.",

      pflegeSupportText2: "For Non-EU Citizens:",
      pflegeSupportList3:
        "Visa Assistance: We guide you through the visa application process and ensure all necessary documents are properly prepared.",
      pflegeSupportList4:
        "Diploma Recognition Support: We help you collect, translate, and submit all the required documents for diploma recognition in Germany.",

      pflegeSupportText3: "German Language Certification:",
      pflegeSupportList5:
        "You can begin with German language skills at the A2-B1 level, and we’ll assist you in achieving the B2 level required for full recognition.",

      pflegeSupportText4: "Relocation Assistance:",
      pflegeSupportList6:
        "We help with housing arrangements, paperwork, and integration into your new life in Germany.",

      pflegeSupportText5: "Job Placement:",
      pflegeSupportList7:
        "We secure a job for you during the diploma recognition process, allowing you to work as an assistant nurse with a starting salary of €2,800 per month.",
      pflegeSupportList8:
        "Once your diploma is fully recognized, you can work as a certified nurse, earning a salary starting from €4,000 per month.",

      pflegeSupportText6: "Ongoing Support:",
      pflegeSupportList9:
        "We will support you every step of the way – from paperwork to practical matters – to ensure a smooth and successful transition.",
      //Main medizin

      // medizin: "Медицина",
      medizin: "Doctors",
      // medizinText:

      medizinText:
        "Our company specializes in employing doctors in Germany. We help doctors find clinics and hospitals ready to hire them after passing the FSP, within two years to obtain recognition as a physician.",
      medizinJobText: "We offer:",
      medizinJobList1:
        "Find job opportunities for doctors who want to work in Germany after passing the FSP.",
      medizinJobList2:
        "Competitive salaries that vary depending on the region and the doctor's specialization.",
      medizinJobList3:
        "Personalized job selection according to your preferences regarding region or city, as well as specific hospitals or clinics, whether private or public.",

      //SubTitle 1

      subTitle1: "Employment conditions:",
      subTitleList1_1:
        "After passing the FSP and obtaining a work permit as a medical assistant, we will find a clinic or hospital that offers you the best working conditions, including a competitive salary.",
      subTitleList1_2:
        "For doctors with a recognized diploma, we offer employment opportunities with a salary starting at €7,000 per month (depending on the region) plus bonuses.",
      subTitleList1_3:
        "For doctors planning to have their diploma recognized, the salary will average €5,000 per month (depending on the region) plus bonuses.",

      //SubTitle 2

      subTitle2: "Requirements:",
      subTitleList2_1: "Medical degree eligible for recognition in Germany",
      subTitleList2_2: "German language proficiency at C1 level is mandatory.",
      subTitleList2_3: "Willingness to work in a team and help patients.",

      deText:
        "We strive to help you find the best job opportunities that align with your professional goals and preferences, providing support at every stage of your career in Germany.",

      //Main sozialarbeit

      sozialarbeit: "Social Work",
      sozialarbeitFullText:
        "In the field of social work and pedagogy, people are always at the center of attention. Properly supporting adults, teenagers, or children requires the right combination of compassion and professional expertise. We understand the critical aspects of socialand educational professions and provide qualified personnel who are responsible and remain calm in stressful situations. Are you a teacher, social educator, special education teacher, or childcare worker looking for a change or a successful start in Germany? A career move or relocation might be exactly what you need!",
      sozialarbeitText:
        "In the field of social work and pedagogy, the person is always at the center of attention.",
      sozialarbeitJobText:
        "Proper support for adults, teenagers, or children requires the right combination of empathy and professional knowledge. We understand what is important in social and pedagogical professions and offer qualified personnel who always have a sense of responsibility and remain calm in stressful situations. Are you an educator, social worker, special education teacher, or nanny looking for a change or a successful start in Germany? Then maybe relocating or changing your workplace is exactly what you need!",

      // Technik

      technik: "Technology and Logistics",
      technikText:
        "Do you dream of working on exciting projects at leading high-tech companies?",
      technikJobText:
        "Are you seeking new challenges in mechanical engineering, automotive technology, or renewable energy? Together with your team, you’ll create globally recognized 'Made inGermany' solutions that drive future innovations. If you’re an expert in solar energy, the automotive industry, industrial assembly, steel construction, manufacturing and logistics, welding, or electrical engineering, and you’re looking for a change or a successful start in Germany, a career move or relocation could be just what you need!",

      //Facility Management

      facility: "Facility Management",
      facilityText:
        "Pratsia connects skilled professionals with innovative companies in the field of facility management across Germany.",
      facilityJobText:
        "We specialize in mediating technical specialists, whether it involves design, maintenance, storage, energy management, or managing the technical infrastructure of real estate. Are you a facility manager or asset manager? Or do you work directly with clients as an HVAC mechanic, HVAC service technician, electrician, or refrigeration system mechanic? Looking for a change or a successful start in Germany? Then relocating or changing your job could be the right solution!",

      // Plumbing

      sanitar: "Plumbing",
      sanitarText:
        "Pratsia supports you in finding top-tier opportunities in the plumbing, heating, and air conditioning (HVAC) sector across Germany.",
      sanitarJobText:
        "We understand the HVAC industry in all its aspects: from industry and wholesale trade to equipment manufacturers and installation companies. Each of these segments has its own specific requirements and conditions that must be met. Our core competence is professionalism and industry knowledge, as well as years of experience in the market. We work diligently every day to provide the best services. Are you looking for a change or a successful start in Germany? Then relocating or changing jobs might be exactly what you need!",
      sanitarFullText:
        "''Pratsia' supports you in finding the best jobs in the field of plumbing, heating, and air conditioning (HVAC). Our core strengths are expertise, in-depth industry knowledge, and years of experience in the market. We work diligently every day to provide the best services possible. Are you looking for a change or a successful start in Germany? A career move or relocation might be just what you need!",

      //Mechanic

      mechanik: "Automotive Mechanic / Mechatronics Technician",
      mechanikText:
        "Start your career right now - with us, you will gain access to an exclusive job market, free and tailored to you.",
      mechanikJobText:
        "In a country of global leaders in the automotive industry. Gasoline in your veins and technical understanding? A great combination! And that's exactly what we are looking for! If you're also interested in new technologies in the automotive industry, then you're on the right track as an experienced mechanic or mechatronics specialist! Are you looking for a change or a successful start in Germany? Then relocation or a job change might be exactly what you need! With Pratsia Recruiting, we will offer you jobs in the leading companies in the country. We will find the ideal employer for you, one that meets your expectations.",
      mechanikFullText:
        "Boost your career now, with us you will gain access to an exclusive job market – free and specially tailored for you. In a country of global leaders in the automotive industry. Gasoline in your veins and technical understanding? A perfect combination! And that's exactly the combination we are looking for! If you are also passionate about new technologies in the automotive industry, then you are in the right place with us as a qualified mechanic or mechatronics specialist! Are you looking for a change or a great start in Germany? Then relocation or a job change might be exactly what you need! With Pratsia Recruiting, you will be offered positions with the best employers in the country. We will find the ideal employer for you, one that meets your expectations.",

      aktuelleJob: "Current Vacancies",
      aktuelleJobItem1:
        "Nurse in a temporary employment company (workplace - elderly care center / nursing home)",
      aktuelleJobItem1T:
        "Hourly pay 24-28 € depending on experience, whether you work throughout Germany or just in your region. Option to get a company car, or if you use your own, reimbursement of 30 cents per kilometer. Additional payments: Saturday 25%, Sunday 50%, night 25%, holidays 100%, 30 days of vacation, time tracking, meals + accommodation.",
      aktuelleJobItem2:
        "Nurse in a temporary employment company (workplace - hospital / clinic)",
      aktuelleJobItem2T:
        "Hourly pay 30-34 € depending on experience, whether you work throughout Germany or just in your region. Option to get a company car, or if you use your own, reimbursement of 30 cents per kilometer. Additional payments: Saturday 25%, Sunday 50%, night 25%, holidays 100%. 30 days of vacation, time tracking, meals + accommodation.",
      aktuelleJobItem3:
        "Nurse for qualification recognition (elderly care center or hospital)",
      aktuelleJobItem3T:
        "Hourly pay 17 €. Pratsia will find a place where your diploma will be recognized and support you in attending language courses while working full-time during the recognition period. Accommodation is usually also provided.",
      aktuelleJobItem4:
        "Auxiliary medical staff in a temporary employment company (workplace - elderly care center / nursing home / hospital)",
      aktuelleJobItem4T:
        "Hourly pay 17 €. Option to get a company car, or if you use your own, reimbursement of 30 cents per kilometer. Additional payments: Saturday 25%, Sunday 50%, night 25%, holidays 100%. 30 days of vacation, time tracking, meals + accommodation.",

      interviewtermin: "Sign up for an interview",

      appointment: {
        questions: "Have questions?",
        answers: "We provide answers",
        problem: "Do you have a problem?",
        solutions: "We find solutions",
        certificate: "Need a certificate?",
        organize: "We will organize it.",
      },

      beraten: "We are happy to advise you personally!",
      vereinbaren: "Make an appointment with us",

      // FORM

      label1: "Company",
      placeholder1: "Company",
      label2: "Salutation",
      placeholder2: "Salutation",
      select1H: "Mr.",
      select1F: "Ms.",
      label3: "First Name",
      placeholder3: "First Name",
      label4: "Last Name",
      placeholder4: "Last Name",
      label5: "E-Mail",
      placeholder5: "E-Mail",
      label6: "Phone",
      placeholder6: "Phone",
      label7: "Preferred Date",
      placeholder7: "Select a date",
      label8: "Preferred Time",
      placeholder8: "After noon",
      select3N: "After noon",
      select3V: "Before noon",
      label9: "Comment",
      placeholder9: "Meeting subject",

      absenden: "Send",

      // Modal Form

      formSent: "Your application has been successfully submitted!",
      weWillReply: "We will contact you soon!",
      wrong: "Something went wrong!",
      checkConnection: "Check your internet connection!",

      // Errors

      max64: "Maximum field length is 64 characters",
      requiredField: "This field is required",
      vornameMinLength: "First name must be at least 3 characters",
      vornameMaxLength: "First name must be no more than 64 characters",
      nachnameMinLength: "Last name must be at least 3 characters",
      nachnameMaxLength: "Last name must be no more than 64 characters",
      notValidEmail: "Email is incorrect",
      phoneValid: "Phone number must be valid",
      timeInThePast: "The selected date cannot be in the past",
      message: "Message must be no longer than 500 characters",

      // Calendar
      sun: "Sunday",
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      jan: "January",
      feb: "February",
      mar: "March",
      apr: "April",
      may: "May",
      jun: "June",
      jul: "July",
      aug: "August",
      sep: "September",
      oct: "October",
      nov: "November",
      dec: "December",

      // Map
      location: "We are located in Krefeld, but our work is everywhere",
      timeToChange: "Time for change",

      // Language Modal

      choiceLanguage: "Please select the website language",

      // Footer

      inhaber: "Inhaber: Mykola Sytnyk",
      street: "Garnstraße 12",
      city: "47798 Krefeld",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  // .use(LocalStorageBackend)
  .init({
    resources,
    // lng: localStorage.getItem("i18next_lng") || "de",
    fallbackLng: "de",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      keySeparator: false,
      prefix: "i18next_",
    },
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
  });

export default i18n;
