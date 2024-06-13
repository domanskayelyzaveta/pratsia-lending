import React from "react";
import { ListItem } from "./AboutUs.styled";

const List = () => {
  const items = [
    {
      title: " Spezialisierung ",
      content:
        "Wir sind spezialisiert auf die Vermittlung von talentierten Fachkräften in Branchen wie Medizin, Pflege, Sozialarbeit, Facility Management, Sanitär, Elektro und Automechanik / - mechatronik.",
    },
    {
      title: "Ein integrierter Ansatz",
      content:
        "Unser ganzheitlicher Ansatz umfasst nicht nur die Personalvermittlung, sondern auch zusätzliche Dienstleistungen wie vorbereitende und vertiefende Deutschkurse und Unterstützung bei der Anerkennung von Qualifikationen der jeweiligen Branchen",
    },
    {
      title: "Fundierte Arbeit",
      content:
        "Unsere Arbeit basiert auf ethischen Geschäftspraktiken und Transparenz in der Kommunikation. Pratsia kann Ihnen helfen, die besten Talente für Ihr Unternehmen zu gewinnen und Ihre Einstellungsziele zu erreichen. Wir helfen Ihnen, eine reibungslose Integration in den deutschen Arbeitsmarkt zu gewährleisten",
    },
  ];

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} title={item.title} content={item.content} />
      ))}
    </ul>
  );
};

export default List;
