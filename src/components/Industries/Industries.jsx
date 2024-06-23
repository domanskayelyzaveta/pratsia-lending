import React, { useEffect, useRef, useState } from "react";
import {
  BtnIndustries,
  ImgIndustries,
  IndustriesList,
  IndustryContent,
  IndustryItem,
  IndustryListItems,
  SectionIndustries,
  SlideWrapper,
  SubTextSlider,
  TextIndustries,
  TextShowMore,
  TextSlider,
  TextSliderTablet,
  TitleIndustries,
} from "./Industries.styled";
import sprite from "../../assets/sprite.svg";
import { Svg } from "../Header/Header.styled";
import { industriesData } from "./industriesData";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

const Industries = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState([]);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  // const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletOrDesctop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsVisible(Array(industriesData.length).fill(false));
    setHeights(Array(industriesData.length).fill(0));
  }, []);

  const toggleVisibility = (index) => {
    setIsVisible((prev) =>
      prev.map((item, idx) => (idx === index ? !item : item))
    );
  };

  useEffect(() => {
    const updatedHeights = contentRefs.current.map((ref, index) =>
      isVisible[index] ? ref.scrollHeight : 0
    );
    setHeights(updatedHeights);
  }, [isVisible]);

  return (
    <SectionIndustries>
      <TitleIndustries>{t("branchenTitle")}</TitleIndustries>
      <IndustriesList>
        {industriesData.map((industry, index) => (
          <li key={index}>
            <IndustryItem>
              <ImgIndustries
                src={industry.image}
                alt={industry.alt}
                loading="lazy"
              />
              <IndustryContent>
                <TextIndustries>{industry.title}</TextIndustries>

                {isTabletOrDesctop && (
                  <TextSliderTablet>{industry.tabletText}</TextSliderTablet>
                )}

                <div style={{ position: "relative", marginBottom: "12px" }}>
                  <BtnIndustries
                    style={{
                      top: isVisible[index] ? "101%" : "auto",
                    }}
                    onClick={() => toggleVisibility(index)}
                  >
                    <Svg
                      style={{
                        fill: "var(--blue-200)",
                        transform: isVisible[index]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <use href={`${sprite}#icon-arrow-down`}></use>
                    </Svg>
                    <TextShowMore>
                      {isVisible[index] ? "Einstürzen" : "Weiterlesen"}
                    </TextShowMore>
                  </BtnIndustries>
                  <SlideWrapper
                    ref={(ref) => (contentRefs.current[index] = ref)}
                    height={heights[index]}
                  >
                    {isMobile && (
                      <TextSlider>{industry.description}</TextSlider>
                    )}
                    {isTabletOrDesctop && (
                      <TextSlider>{industry.tabletSubText}</TextSlider>
                    )}

                    <ul>
                      {Array.isArray(industry.list) &&
                        industry.list.map((item, idx) => (
                          <IndustryListItems key={idx}>
                            {item}
                          </IndustryListItems>
                        ))}
                    </ul>
                    <SubTextSlider>{industry.text}</SubTextSlider>
                  </SlideWrapper>
                </div>
              </IndustryContent>
            </IndustryItem>
          </li>
        ))}
      </IndustriesList>
    </SectionIndustries>
  );
};

export default Industries;
