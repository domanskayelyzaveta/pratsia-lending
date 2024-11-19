import React, { useEffect, useRef, useState } from "react";
import {
  BtnIndustries,
  ImgIndustries,
  IndustriesList,
  IndustryContent,
  IndustryItemDiv,
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

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

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
            <IndustryItemDiv>
              {isMobile && <TextIndustries>{t(industry.title)}</TextIndustries>}
              <ImgIndustries
                src={industry.image}
                alt={industry.alt}
                loading="lazy"
              />
              <IndustryContent>
                {isTabletOrDesktop && (
                  <TextIndustries>{t(industry.title)}</TextIndustries>
                )}

                {isTabletOrDesktop && (
                  <TextSliderTablet>{t(industry.tabletText)}</TextSliderTablet>
                )}

                {isMobile && (
                  <div
                    style={{
                      position: "relative",
                      marginBottom: "12px",
                    }}
                  >
                    <BtnIndustries
                      type="button"
                      aria-label="Open text"
                      style={{
                        top: isVisible[index] ? "100%" : "auto",
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
                        {isVisible[index] ? t("einstürzen") : t("weiterlesen")}
                      </TextShowMore>
                    </BtnIndustries>
                    <SlideWrapper
                      ref={(ref) => (contentRefs.current[index] = ref)}
                      height={heights[index]}
                    >
                      {isMobile && (
                        <>
                          <TextSlider>{t(industry.description)}</TextSlider>
                          <TextSlider>{t(industry.tabletSubText)}</TextSlider>
                        </>
                      )}
                      {isTabletOrDesktop && (
                        <TextSlider>{industry.tabletSubText}</TextSlider>
                      )}
                      <ul>
                        {Array.isArray(industry.list) &&
                          industry.list.map((item, idx) => (
                            <IndustryListItems key={idx}>
                              {t(item)}
                            </IndustryListItems>
                          ))}
                      </ul>

                      {/* // ADDED NEW CODE  */}

                      {industry.subcategories?.map((subcategory, subIndex) => (
                        <div key={subIndex}>
                          <TextSlider>{t(subcategory.title)}</TextSlider>
                          <ul>
                            {subcategory.list?.map((item, idx) => (
                              <IndustryListItems key={idx}>
                                {t(item)}
                              </IndustryListItems>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* /////////////////// */}
                      <SubTextSlider>{t(industry.text)}</SubTextSlider>
                    </SlideWrapper>
                  </div>
                )}
              </IndustryContent>
            </IndustryItemDiv>

            {isTabletOrDesktop && (
              <div
                style={{
                  position: "relative",
                  marginBottom: "12px",
                }}
              >
                <BtnIndustries
                  type="button"
                  aria-label="open text"
                  $isVisible={isVisible[index]}
                  onClick={() => toggleVisibility(index)}
                  $isOpened={isVisible[index]}
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
                    {isVisible[index] ? t("einstürzen") : t("weiterlesen")}
                  </TextShowMore>
                </BtnIndustries>
                <SlideWrapper
                  ref={(ref) => (contentRefs.current[index] = ref)}
                  height={heights[index]}
                >
                  {isMobile && (
                    <TextSlider>{t(industry.description)}</TextSlider>
                  )}
                  {isTabletOrDesktop && (
                    <TextSlider>{t(industry.tabletSubText)}</TextSlider>
                  )}

                  <ul>
                    {Array.isArray(industry.list) &&
                      industry.list.map((item, idx) => (
                        <IndustryListItems key={idx}>
                          {t(item)}
                        </IndustryListItems>
                      ))}
                  </ul>

                  {/* // ADDED NEW CODE  */}

                  {industry.subcategories?.map((subcategory, subIndex) => (
                    <div key={subIndex}>
                      <TextSlider>{t(subcategory.title)}</TextSlider>
                      <ul>
                        {subcategory.list?.map((item, idx) => (
                          <IndustryListItems key={idx}>
                            {t(item)}
                          </IndustryListItems>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* /////////////////// */}

                  <SubTextSlider>{t(industry.text)}</SubTextSlider>
                </SlideWrapper>
              </div>
            )}
          </li>
        ))}
      </IndustriesList>
    </SectionIndustries>
  );
};

export default Industries;
