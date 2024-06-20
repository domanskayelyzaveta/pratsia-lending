import styled from "styled-components";

export const ImpressWrapper = styled.div`
  // margin-top: 24px;

  // @media screen and (min-width: 768px) {
  //   margin-top: 82px;
  // }

  // @media screen and (min-width: 1440px) {
  //   margin-top: 118px;
  }
`;

export const BtnImpress = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-bottom: 20px;

  border: none;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
  text-align: left;
`;

export const BtnTextImpress = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  color: var(--blue-200);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleImpress = styled.h2`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 400;
  line-height: 150%;

  color: var(--blue-300);

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const TextImpressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TextImpress = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  color: var(--black-200);
`;
