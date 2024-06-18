import styled from "styled-components";

export const BtnImpress = styled.button`
  display: flex;
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
`;

export const TitleImpress = styled.h2`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 400;
  line-height: 150%;

  color: var(--blue-300);
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
