import styled from "styled-components";

export const SectionIndustries = styled.div`
  padding-top: 32px;
`;

export const TitleIndustries = styled.h2`
  margin-bottom: 12px;

  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-dark);
`;

export const IndustriesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextIndustries = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 8px;
`;

export const BtnIndustries = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
  text-align: left;

  position: absolute;
  top: -14px;
  z-index: 1;
`;

export const SlideWrapper = styled.div`
  overflow: hidden;
  transition: height 0.3s linear;

  height: ${({ height }) => height}px;
`;

export const TextSlider = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  color: var(--black-200);
`;

export const TextShowMore = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  color: var(--blue-200);
`;
