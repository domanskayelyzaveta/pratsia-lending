import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import LocalStorageBackend from "i18next-localstorage-backend";

const resources = {
  de: {
    translation: {
      telefon: "Telefon",
      menuStart: "Starseite",
      menuAboutUs: "Über uns",
      menuForCompanies: "Für Unternehmen",
      menuForApp: "Für Bewerber",
      menuAppointment: "Interviewtermin",
      menuContact: "Kontakt",
      heroTitle: "Entdecken Sie Pratsia",
      slogan: "Deine Karriere - Unsere Mission",
      textHero:
        "Willkommen bei der führenden Personalagentur Pratsia - Ihrem zuverlässigen Partner bei der Vermittlung von hochqualifizierten Fachkräften aus der Ukraine nach Deutschland",
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

      // Für Unternehment

      forUnternehmentTitle: "Für Unternehment",
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

      branchenTitle: "Branchen",
      pflege: "Pflege",
      pflegeText:
        "Als Pflegefachkraft in Deutschland…Du möchtest in deinem Beruf stets eine angemessene Versorgung der Patienten sicherstellen?",
      pflegeJobText:
        "Du wünschst dir mehr Anerkennung für deine tägliche Arbeit? Du suchst einen Job, in dem dein Arbeitgeber aktiv deine Entwicklung fördert und 'Work-Life-Balance' mehr als nur ein Schlagwort ist? Dabei bist du sicherlich auf folgende Herausforderungen gestoßen:",
      pflegeJobList1: "Personalmangel",
      pflegeJobList2: "Hoher bürokratischer Aufwand",
      pflegeJobList3: "Mangelnde Wertschätzung",
      pflegeJobList4: "Niedrige Vergütung",
      pflegeJobList5: "Fehlende Weiterbildungsmöglichkeiten",
      pflegeJobList6: "Schlechte Arbeitsbedingungen",
      pflegeJobList7: "Keine Perspektive auf eine Führungsposition",
      duSuchstInDE:
        "Du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich! Mit Pratsia Recruiting wirst du bei den Top-Arbeitgebern des Landes vorgeschlagen. Wir finden für dich den idealen Arbeitgeber, der deinen Erwartungen entspricht.",
    },

    medizin: "Medizin",
    medizinText:
      "Möchtest du sicherstellen, dass deine Patienten stets angemessen medizinisch versorgt werden?",
    pflegeJobText:
      "Möchtest du aktiv Menschen helfen und keine Zeit mit Verwaltungsaufgaben verschwenden? Wünschst du dir, dass 'Work-Life-Balance' mehr als nur eine Floskel deines Arbeitgebers ist?Dabei bist du sicherlich auf folgende Herausforderungen gestoßen:",
    medizinJobList1: "Fachkräftemangel in den Einrichtungen",
    medizinJobList2: "Bürokratie und administrative Belastung",
    medizinJobList3: "Mangel an Zeit für Patienten",
    medizinJobList4: "Vereinbarkeit von Familie und Beruf",
    medizinJobList5: "Unzureichende Digitalisierung",
    medizinJobList6: "Fehlende Weiterbildungsmöglichkeiten",
    medizinJobList7: "Unterfinanzierung des Gesundheitswesens",

    sozialarbeit: "Sozialarbeit",
    sozialarbeitText:
      "Im Bereich Soziales & Pädagogik steht der Mensch stets im Zentrum des Handelns. Weiterlesen",
    sozialarbeitJobText:
      "Egal, ob in der Kindererziehung oder der Erwachsenenbildung – die Arbeit mit Menschen benötigt ein ganz besonderes Feingefühl. Um Erwachsene, Jugendliche oder Kinder richtig zu begleiten, braucht es die richtige Mischung aus Empathie und Fachwissen. Wir wissen genau, worauf es bei sozialen und pädagogischen Berufen ankommt und bieten Ihnen qualifiziertes Personal, das immer das richtige Händchen hat und auch in stressigen Situationen die Ruhe bewahrt.Bist Du Erzieher / in, Sozialpädagoge /in, Heilerziehungspfleger / in, Kinderpfleger / in und suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich! ",

    technik: "Technik und Logistik",
    technikText:
      "Du träumst von spannenden Projekten in führenden High-Tech-Unternehmen? ",
    technikJobText:
      "Die wünscht Dir neue Herausforderungen z.B. in Maschinenbau, Fahrzeugtechnik oder Alternativen Energien? Du entwickelst im Team weltweit anerkannte Made in Germany Lösungen, die die Innovationen von morgen prägen. Bist du Experte in der Solartechnik, dem Automotive, der Industriemontage, des Stahlbaus, der Produktion und der Logistik, der Schweißtechnik oder der Elektrotechnik und du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich!",

    facility: "Facility",
    facilityText:
      "Pratsia bringt qualifiziertes Fachpersonal mit innovativen Unternehmen aus dem Bereich des Gebäudemanagement in ganz Deutschland zusammen.",
    facilityJobText:
      " Die Vermittlung von technischen Fachkräften – egal ob zur Planung, Wartung, Instandhaltung, Energiemanagement oder Betrieb der kompletten technischen Infrastruktur von Immobilien – gehört zu unsere Domäne.Du bist Facility Manager/in oder Objektleiter / in? Oder Du bist direkt beim Kunden vor Ort als Anlagenmechaniker/in HKLS, Servicetechniker / in HKLS, Elektriker / in oder Kälteanlagenmechaniker / in im Einsatz? Du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich!",

    sanitar: "Sanitär",
    sanitarText:
      "Pratsia unterstützt Dich bei der Suche nach Top Stellen in der Sanitär, Heizungs und Klimabranche (SHK). Unser Tätigkeitsbereich erstreckt sich von Deutschland. ",
    sanitarJobText:
      "Wir kennen die SHK -Branche in allen Bereichen und Facetten, von der Industrie, über den Großhandel bis hin zum Anlagenbauer und Installationsbetrieb. Denn jeder Bereich hat seine spezifischen Anforderungen und Gegebenheiten, die es zu erfüllen gilt. Fachkompetenz und Branchenkenntnisse sowie langjährige Erfahrung im Markt – das ist unsere Kernkompetenz, für die wir tagtäglich einstehen und unser Bestes geben. Du suchst eine Veränderung oder einen guten Start in Deutschland? Dann ist ein Umzug oder Wechsel vielleicht genau das Richtige für dich!Einstürzen",

    mechanik: "Automechanik / mechatronik",
    mechanikText:
      "Zünde jetzt deinen Karriere-Booster, mit uns erhältst du Zugang zum exklusiven Jobmarkt – kostenlos und für dich maßgeschneidert.",
    mechanikJobText:
      "Benzin im Blut und technisches Verständnis? Eine hervorragende Kombination! Und genau eine solche suchen wir! Wenn Dich zudem neue Technologien der Automobilbranche faszinieren, bist Du bei uns als gelernter Mechaniker oder Mechatroniker genau richtig!",

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
      "Stundenlohn 21 €. Pratsia findet einen Ort, an dem Ihr Diplom anerkannt wird, und unterstützt Sie bei Sprachkursen, während Sie während des Anerkennungszeitraums Vollzeit arbeiten. Oft wird auch eine Unterkunft zur Verfügung gestellt.",

    aktuelleJobItem4:
      "Pflegehilfskraft in Zeitarbeitfirma (Einsatzort - Seniorenzentrum / Altenheim /Klinikum)",
    aktuelleJobItem4T:
      "Stundenlohn 17 €. Möglichkeit, einen Firmenwagen zu bekommen, wenn Sie Ihr eigenes Auto benutzen - Erstattung von 30 Cent pro Kilometer. Zuschläge: Samstag 25%, Sonntag 50%, Nacht 25%, Feiertage 100%, 30 Tage Urlaub, Arbeitszeitkonto, Verpflegung + Unterkunft.",

    aktuelleJobItem5:
      "Arzthelferin in Gynäkologie (41061 Mönchengladbach) ab 1.07.2024",
    aktuelleJobItem5T: "Stundenlohn 25€. Midivertrag / 2 Vormittage pro Woche",

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

    // FORMA

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
    placeholder8: "",
    select3N: "Nachmittag",
    select3V: "Vormittag",

    label9: "Nachricht",
    placeholder9: "Thema des Termins",

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
  },

  // UKRAINIAN

  ua: {
    translation: {
      telefon: "Телефон",
      menuStart: "Головна сторінка",
      menuAboutUs: "Про нас",
      menuForCompanies: "Для компаній",
      menuForApp: "Для кандидатів",
      menuAppointment: "Запис на співбесіду",
      menuContact: "Контакти",
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
      bewerberListItem2: "Глибокі знання в галуз",
      bewerberListItem3: "Підтримка для компаній та співробітників",
      integrierter:
        "Наша компанія пропонує комплексний підхід, який охоплює не лише пошук ідеальної роботи, а й додаткові послуги, такі як курси німецької мови та допомога у визнанні дипломів, щоб забезпечити успішну інтеграцію.",
      branchenwissen:
        "'Pratsia' має широкі галузеві знання в таких сферах, як медицина, догляд, соціальна робота, управління обʼєктами, сантехніка, електрика та автомеханіка. Це дозволяє нам знаходити індивідуальні рішення для кандидатів. Основою є індивідуальна консультація з питань кар'єрних можливостей і перспектив розвитку, а також подальший підбір вакансій, що відповідають кваліфікаціям і інтересам кандидатів.",
      unterstutzung:
        "Для оптимального вирішення потреб і вимог обох сторін, агентство з працевлаштування надає велике значення індивідуальному супроводу як підприємств, так і працівників. Це включає консультації та підтримку з питань візових та імміграційних процедур, зокрема отримання дозволу на роботу і проживання, а також допомогу в підготовці до переїзду, пошуку житла та інших практичних аспектів переїзду до Німеччини.",
      branchenTitle: "Галузі",

      pflege: "Догляд",
      pflegeText:
        "Як медичний фахівець в Німеччині ти бажаєш завжди забезпечувати відповідний догляд за пацієнтами у своїй професії? Ти прагнеш отримати більше визнання за свою щоденну роботу?",
      pflegeJobText:
        "Ти прагнеш отримати більше визнання за свою щоденну роботу? Ти шукаєш роботу, де твій роботодавець активно сприяє твоєму розвитку, і 'Work - Life - Balance' для тебе більше, ніж просто фраза? Тоді безумовно ти стикаєшся з такими викликами:",
      pflegeJobList1: "Кадровий дефіцит",
      pflegeJobList2: "Бюрократичні складності",
      pflegeJobList3: "Відсутність визнання",
      pflegeJobList4: "Низька оплата",
      pflegeJobList5: "Відсутність можливостей для професійного зростання",
      pflegeJobList6: "Погані умови праці",
      pflegeJobList7: "Відсутність перспективи на керівну посаду",
      duSuchstInDE:
        "Ти шукаєш зміну або вдалий старт в Німеччині? Тоді, можливо, переїзд або зміна місця роботи саме те, що тобі потрібно! Ми знайдемо для вас ідеального роботодавця, який відповідає вашим очікуванням.",

      medizin: "Медицина",
      medizinText:
        "Хочеш бути впевненим, що твої пацієнти завжди отримують відповідну медичну допомогу?",
      medizinJobText:
        "Хочеш активно допомагати людям і не витрачати час на бюрократію? Мрієш, щоб 'Work-Life-Balance' був більше, ніж просто фраза від твого роботодавця?Ти, безсумнівно, зіткнувся з такими проблемами:",
      medizinJobList1: "Недостатній кадровий потенціал у галузі",
      medizinJobList2: "Бюрократія та адміністративні навантаження",
      medizinJobList3: "Недостатність часу для пацієнтів",
      medizinJobList4: "Поєднання сімейного життя і професійної кар'єри",
      medizinJobList5: "Недостатня діджиталізація",
      medizinJobList6: "Відсутність можливостей для професійного зростання",
      medizinJobList7: "Недофінансування системи охорони здоров'я",

      sozialarbeit: "Соціальна робота",
      sozialarbeitText:
        "В галузі соціальної роботи та педагогіки людина завжди знаходиться в центрі уваги.",
      sozialarbeitJobText:
        "Для належного супроводу дорослих, підлітків або дітей потрібне правильне поєднання співчуття і професійних знань. Ми розуміємо, що важливо в соціальних і педагогічних професіях і пропонуємо кваліфікований персонал, який завжди має відчуття відповідальності і зберігає спокій у стресових ситуаціях.Ти вихователь / -ка, соціальний педагог / -иня, педагог-дефектолог , або доглядальник / -иця за дітьми і шукаєш зміни або успішний старт в Німеччині? Тоді, можливо, переїзд або зміна робочого місця саме те, що тобі потрібно!",

      technik: "Техніка та логістика",
      technikText:
        "Ти мрієш про захоплюючі проекти в провідних високотехнологічних компаніях?",
      technikJobText:
        "Ти мрієш про цікаві проєкти у провідних високотехнологічних компаніях і шукаєте нові виклики в таких галузях, як машинобудування, автомобілебудування або альтернативна енергетика? Якщо ви є експертом у галузі сонячної енергетики, автомобілебудування, промислової збірки, металоконструкцій, виробництва, логістики, зварювальних технологій або електротехніки і прагнете змін або гарного старту в Німеччині, переїзд або переведення може бути саме тим, що вам потрібно!",

      facility: "Керування обʼєктами",
      facilityText:
        "Pratsia об'єднує кваліфікований фаховий персонал з інноваційними компаніями у сфері управління обʼєктами по всій Німеччині.",
      facilityJobText:
        "Ми спеціалізуємося на посередництві технічних фахівців, незалежно від того, чи йдеться про проектування, технічне обслуговування, зберігання, енергоменеджмент або управління технічною інфраструктурою нерухомості.Ти фахівець з управління об'єктами чи об'єктний менеджер? Або ти працюєш безпосередньо з клієнтом як механік-монтажник HKLS, технік з обслуговування HKLS, електрик або механік-монтажник холодильних систем? Ти шукаєш зміни або успішний початок у Німеччині? Тоді переїзд або зміна робочого місця може бути саме тим, що тобі потрібно!",

      sanitar: "Сантехніка",
      sanitarText:
        "Pratsia підтримує тебе у пошуку топових вакансій в галузі сантехніки, опалення та кондиціонування повітря (SHK). Наша діяльність охоплює всю Німеччину.",
      sanitarJobText:
        "Ми знаємо галузь SHK у всіх її аспектах: від промисловості та оптової торгівлі - до виробників устаткування та монтажних підприємств. Кожен з цих сегментів має свої специфічні вимоги і умови, які необхідно виконувати. Наша основна компетенція - це фаховість і знання галузі, а також багаторічний досвід на ринку. Ми щоденно віддано працюємо для того, щоб надавати найкращі послуги. Ти шукаєш зміни або успішний старт в Німеччині? Тоді переїзд або зміна місця роботи може бути тим, що тобі потрібно!",
      mechanik: "Автомеханік / мехатронік",
      mechanikText:
        "Запали свій кар'єрний бустер прямо зараз - з нами ти отримаєш доступ до ексклюзивного ринку праці, безкоштовно і налаштовано під тебе.",
      mechanikJobText:
        "В країні світових лідерів автомобільної промисловості. Бензин у крові і технічне розуміння? Відмінна комбінація! І саме такого ми шукаємо! Якщо тебе також цікавлять нові технології автомобільної галузі, то ти на правильному шляху, як досвідчений механік або мехатронікер! Ти шукаєш змін або успішний старт в Німеччині? Тоді переїзд або зміна місця роботи може бути саме тим, що потрібно для тебе! З Pratsia Recruiting ми запропонуємо тобі вакансії в провідних компаніях країни. Ми знайдемо для тебе ідеального роботодавця, який відповідає твоїм очікуванням.",

      aktuelleJob: "Поточні вакансії ",
      aktuelleJobItem1:
        "Фахівець у компанії тимчасової зайнятості (місце роботи - центр для людей похилого віку / будинок престарілих)",
      aktuelleJobItem1T:
        "Погодинна оплата 24-28 € в залежності від досвіду роботи, незалежно від того, працюєте ви по всій Німеччині чи тільки у своєму регіоні. Можливість отримати службовий автомобіль, якщо користуєтеся власним — відшкодування 30 центів за кілометр. Доплати: субота 25%, неділя 50%, ніч 25%, святкові дні 100%, 30 днів відпустки, робочий час на рахунок, харчування + проживання.",

      aktuelleJobItem2:
        "Фахівець у компанії тимчасової зайнятості (місце роботи - лікарня / клініка)",
      aktuelleJobItem2T:
        "Погодинна оплата 30-34 € залежно від досвіду роботи, незалежно від того, працюєте ви по всій Німеччині чи тільки у своєму регіоні. Можливість отримати службовий автомобіль, а при користуванні власним — відшкодування 30 центів за кілометр. Доплати: субота 25%, неділя 50%, ніч 25%, святкові дні 100%. 30 днів відпустки, облік робочого часу, харчування + проживання.",

      aktuelleJobItem3:
        "Фахівець зі визнання кваліфікації (центр для людей похилого віку або лікарня)",
      aktuelleJobItem3T:
        "Погодинна оплата 21 €. Pratsia знайде місце, де буде визнано ваш диплом, і підтримає вас у проходженні мовних курсів, поки ви працюєте на повну ставку протягом періоду визнання. Зазвичай також надається проживання.",

      aktuelleJobItem4:
        "Допоміжний медичний персонал у компанії тимчасової зайнятості (місце роботи - центр для людей похилого віку / будинок престарілих / лікарня)",
      aktuelleJobItem4T:
        "Погодинна оплата 17 €. Можливість отримати службовий автомобіль, а при користуванні власним — відшкодування 30 центів за кілометр. Доплати: субота 25%, неділя 50%, ніч 25%, святкові дні 100%. 30 днів відпустки, облік робочого часу, харчування + проживання.",

      aktuelleJobItem5:
        "Медична асистентка в гінекології (41061 Мюнхенгладбах) з 1.07.2024",
      aktuelleJobItem5T:
        "Погодинна оплата 25 євро. Часткова зайнятість / 2 передполудні на тиждень.",

      // Appointment

      appointment: {
        questions: "Маєте питання?",
        answers: "Ми надамо відповіді",
        problem: "У вас є проблема??",
        solutions: "Ми знаходимо рішення",
        certificate: "Потрібен сертифікат?",
        organize: "Ми це організуємо.",
      },

      beraten: "Ми з радістю проконсультуємо особисто!",
      vereinbaren: "Запишіться на зустріч з нами",

      // FORMA

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
      select2: "",

      label8: "Бажаний час",
      placeholder8: "",
      select3N: "Після обіду",
      select3V: "До обіду",

      label9: "Коментар",
      placeholder9: "Тема зустрічі",

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

      location: "Ми знаходимося у Крефельді, але працюємо повсюди",
    },
  },

  // RU ============================================================

  ru: {
    translation: {
      telefon: "Телефон",
      menuStart: "Главная страница",
      menuAboutUs: "О нас",
      menuForCompanies: "Для компаний",
      menuForApp: "Для кандидатов",
      menuAppointment: "Запись на собеседование",
      menuContact: "Контакты",
      heroTitle: "Откройте 'Pratsia'",
      slogan: "Ваша карьера - Наша миссия",
      textHero:
        "Добро пожаловать в ведущую кадровую агенцию Pratsia - вашего надежного партнера в поиске высококвалифицированных специалистов из Украины для работодателей в Германии",
      btn: "Записаться на собеседование",
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
      branchenTitle: "Отрасли",
      pflege: "Уход",
      pflegeText:
        "Как медицинский специалист в Германии вы хотите всегда обеспечивать надлежащий уход за пациентами в своей профессии? Вы стремитесь к большему признанию за свою повседневную работу?",
      pflegeJobText:
        "Вы стремитесь к большему признанию за свою повседневную работу? Ищете работу, где ваш работодатель активно способствует вашему развитию, и 'Work - Life - Balance' для вас больше, чем просто фраза? Тогда, безусловно, вы сталкиваетесь с такими вызовами:",
      pflegeJobList1: "Кадровый дефицит",
      pflegeJobList2: "Бюрократические сложности",
      pflegeJobList3: "Отсутствие признания",
      pflegeJobList4: "Низкая оплата",
      pflegeJobList5: "Отсутствие возможностей для профессионального роста",
      pflegeJobList6: "Плохие условия труда",
      pflegeJobList7: "Отсутствие перспективы на руководящую должность",
      duSuchstInDE:
        "Ищете смену или удачный старт в Германии? Тогда, возможно, переезд или смена места работы именно то, что вам нужно! Мы найдем для вас идеального работодателя, который соответствует вашим ожиданиям.",
      medizin: "Медицина",
      medizinText:
        "Хотите быть уверены, что ваши пациенты всегда получают соответствующую медицинскую помощь?",
      medizinJobText:
        "Хотите активно помогать людям и не тратить время на бюрократию? Мечтаете, чтобы 'Work-Life-Balance' было больше, чем просто фраза от вашего работодателя? Несомненно, вы столкнулись с такими проблемами:",
      medizinJobList1: "Недостаточный кадровый потенциал в отрасли",
      medizinJobList2: "Бюрократия и административные нагрузки",
      medizinJobList3: "Недостаток времени для пациентов",
      medizinJobList4: "Сочетание семейной жизни и профессиональной карьеры",
      medizinJobList5: "Недостаточная дигитализация",
      medizinJobList6: "Отсутствие возможностей для профессионального роста",
      medizinJobList7: "Недофинансирование системы здравоохранения",
      sozialarbeit: "Социальная работа",
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
      mechanik: "Автомеханик / мехатроник",
      mechanikText:
        "Запусти свою карьеру прямо сейчас - с нами ты получишь доступ к эксклюзивному рынку труда, бесплатно и настроено под тебя.",
      mechanikJobText:
        "В стране мировых лидеров автомобильной промышленности. Бензин в крови и техническое понимание? Отличная комбинация! И именно такого мы ищем! Если тебя также интересуют новые технологии автомобильной отрасли, то ты на правильном пути, как опытный механик или мехатроник! Ты ищешь изменений или успешный старт в Германии? Тогда переезд или смена места работы может быть именно тем, что тебе нужно! С Pratsia Recruiting мы предложим тебе вакансии в ведущих компаниях страны. Мы найдем для тебя идеального работодателя, который соответствует твоим ожиданиям.",
      aktuelleJob: "Текущие вакансии",
      aktuelleJobItem1:
        "Специалист в компании временной занятости (место работы - центр для пожилых людей / дом престарелых)",
      aktuelleJobItem1T:
        "Почасовая оплата 24-28 € в зависимости от опыта работы, независимо от того, работаете ли вы по всей Германии или только в своем регионе. Возможность получить служебный автомобиль, если пользуетесь своим - компенсация 30 центов за километр. Доплаты: суббота 25%, воскресенье 50%, ночь 25%, праздничные дни 100%, 30 дней отпуска, учет рабочего времени, питание + проживание.",
      aktuelleJobItem2:
        "Специалист в компании временной занятости (место работы - больница / клиника)",
      aktuelleJobItem2T:
        "Почасовая оплата 30-34 € в зависимости от опыта работы, независимо от того, работаете ли вы по всей Германии или только в своем регионе. Возможность получить служебный автомобиль, а при использовании своего - компенсация 30 центов за километр. Доплаты: суббота 25%, воскресенье 50%, ночь 25%, праздничные дни 100%. 30 дней отпуска, учет рабочего времени, питание + проживание.",
      aktuelleJobItem3:
        "Специалист по признанию квалификации (центр для пожилых людей или больница)",
      aktuelleJobItem3T:
        "Почасовая оплата 21 €. Pratsia найдет место, где будет признан ваш диплом, и поддержит вас в прохождении языковых курсов, пока вы работаете на полную ставку в течение периода признания. Обычно также предоставляется проживание.",
      aktuelleJobItem4:
        "Вспомогательный медицинский персонал в компании временной занятости (место работы - центр для пожилых людей / дом престарелых / больница)",
      aktuelleJobItem4T:
        "Почасовая оплата 17 €. Возможность получить служебный автомобиль, а при использовании своего - компенсация 30 центов за километр. Доплаты: суббота 25%, воскресенье 50%, ночь 25%, праздничные дни 100%. 30 дней отпуска, учет рабочего времени, питание + проживание.",
      aktuelleJobItem5:
        "Медицинская ассистентка в гинекологии (41061 Мёнхенгладбах) с 1.07.2024",
      aktuelleJobItem5T:
        "Почасовая оплата 25 евро. Частичная занятость / 2 дополуденных смены в неделю.",
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

      // FORMA
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
      select2: "",
      label8: "Желаемое время",
      placeholder8: "",
      select3N: "После обеда",
      select3V: "До обеда",
      label9: "Комментарий",
      placeholder9: "Тема встречи",

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
      location: "Мы находимся в Крефельде, но работаем повсюду",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  // .use(LocalStorageBackend)
  .init({
    resources,
    lng: localStorage.getItem("i18next_lng") || "de",
    fallbackLng: "de",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      keySeparator: false,
      prefix: "i18next_",
    },
  });

export default i18n;
