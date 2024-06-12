import styled from "styled-components";

import HeroImg from "../../images/hero/guys.jpg";

export const HeroSection = styled.section`
  margin-top: 61px;
  padding-top: 20px;
`;

export const TitleHero = styled.h1`
  font-size: 28px;
  font-weight: 400;
  line-height: 130%;

  margin-bottom: 4px;

  color: var(--blue-dark);
`;

export const SubText = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 12px;

  color: var(--Blue-200, #1f75ff);
`;

export const ImgDiv = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 172px;
  margin: 0 auto;
  background-image: url(${HeroImg});

  margin-bottom: 12px;
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
