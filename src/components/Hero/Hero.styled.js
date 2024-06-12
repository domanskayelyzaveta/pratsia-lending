import styled from "styled-components";

import HeroImg from "../../images/hero/guys.jpg";

export const HeroSection = styled.section`
  margin-top: 61px;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 0px;
  }
`;

export const TitleHero = styled.h1`
  font-size: 28px;
  font-weight: 400;
  line-height: 130%;

  margin-bottom: 4px;

  color: var(--blue-dark);

  @media screen and (min-width: 768px) {
    font-size: 40px;
    width: 319px;
  }
`;

export const SubText = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 12px;

  color: var(--blue-200);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ImgDiv = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 172px;
  margin: 0 auto;
  background-image: url(${HeroImg});

  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 372px;

    border-radius: 0px 0px 0px 24px;
  }
`;

export const HeroText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-dark);

  padding: 0px 20px 24px 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const HeroAndTitleDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export const TitleSubTextDiv = styled.div`
  @media screen and (min-width: 768px) {
    width: 372px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const BtnHero = styled.button`
  border: none;
  padding: 8px;
  width: 100%;

  text-align: center;
  color: var(--white);

  font-size: 14px;
  font-weight: 500;
  line-height: 150%;

  border-radius: 8px;
  background: var(--blue-200);
`;
