import React from "react";
import { AboutSubTitle } from "../AboutUs/AboutUs.styled";
import {
  AgbWrapper,
  ItemsWrapper,
  ListAgb,
  ListItemAgb,
  TextAbg,
  TextAddress,
} from "./Abg.styled";
import { TitleImpress } from "../Impressum/Impressum.styled";
import { agbData } from "./dataAgb";

const AGB = () => {
  return (
    <AgbWrapper>
      <TitleImpress>{agbData.title}</TitleImpress>
      <TextAbg>{agbData.date}</TextAbg>
      <TextAddress>{agbData.text}</TextAddress>
      {agbData.sections.map((section, index) => (
        <ItemsWrapper key={index}>
          <AboutSubTitle>{section.title}</AboutSubTitle>
          {section.content
            ? section.content.map((contentBlock, idx) => (
                <ItemsWrapper key={idx}>
                  <TextAbg>{contentBlock.text}</TextAbg>
                  {contentBlock.list && (
                    <ListAgb>
                      {contentBlock.list.map((item, i) => (
                        <ListItemAgb key={i}>
                          <TextAbg>{item}</TextAbg>
                        </ListItemAgb>
                      ))}
                    </ListAgb>
                  )}
                </ItemsWrapper>
              ))
            : null}
          {section.footer && <TextAbg>{section.footer}</TextAbg>}
        </ItemsWrapper>
      ))}
    </AgbWrapper>
  );
};

export default AGB;
