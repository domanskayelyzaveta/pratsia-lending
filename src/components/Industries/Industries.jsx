import React, { useEffect, useRef, useState } from "react";
import { ImgAboutUs } from "../AboutUs/AboutUs.styled";
import {
  BtnIndustries,
  IndustriesList,
  SectionIndustries,
  SlideWrapper,
  TextIndustries,
  TextShowMore,
  TextSlider,
  TitleIndustries,
} from "./Industries.styled";
import sprite from "../../assets/sprite.svg";
import { Svg } from "../Header/Header.styled";
import { industriesData } from "./industriesData";

const Industries = () => {
  const [isVisible, setIsVisible] = useState([]);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

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
      <TitleIndustries>Branchen</TitleIndustries>
      <IndustriesList>
        {industriesData.map((industry, index) => (
          <li key={index}>
            <TextIndustries>{industry.title}</TextIndustries>
            <ImgAboutUs
              style={{ marginBottom: "8px" }}
              src={industry.image}
              alt={industry.alt}
              loading="lazy"
            />
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
                <TextSlider>{industry.description}</TextSlider>
              </SlideWrapper>
            </div>
          </li>
        ))}
      </IndustriesList>
    </SectionIndustries>
  );
};

export default Industries;
