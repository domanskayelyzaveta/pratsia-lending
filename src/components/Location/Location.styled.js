import styled from "styled-components";

export const SectionLocation = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const SvgTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 12px;
`;

export const TitleLocation = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  color: var(--blue-dark);
`;

export const MapWrapper = styled.div`
  width: 280px;
  height: 200px;

  border-radius: 8px;
`;

export const SvgGeo = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--blue-200);
`;
