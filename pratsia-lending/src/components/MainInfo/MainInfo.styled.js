import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SectionAboutUs = styled.section`
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const SectionAboutUsTitle = styled.h2`
  text-wrap: balance;
  margin-bottom: 24px;
  color: var(--typography-blue);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 32px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const MainInfoTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 580px;
  border-radius: 18px;
  padding: 20px;
  background-color: var(--light-blue-1);
`;

export const MainInfoText = styled.p`
  color: var(--typography-blue);
`;

export const MainInfoTitleH2 = styled.h2`
  color: var(--typography-blue);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 1.2;
  }
`;

export const MainInfoImg = styled.img`
  border-radius: 18px;
  width: 650px;
  height: 450px;
`;

export const BtnAboutUs = styled(NavLink)`
  padding: 10px;
  width: 200px;
  height: auto;

  border: none;
  border-radius: 100px;

  font-size: 14px;
  text-align: center;

  background-color: var(--blue);
  color: var(--white);
`;
