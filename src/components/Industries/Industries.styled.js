import styled from "styled-components";

export const SectionIndustries = styled.div`
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`;

export const TitleIndustries = styled.h2`
  margin-bottom: 12px;

  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-dark);

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
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

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
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
  margin-top: 18px;

  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  color: var(--black-200);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TextSliderTablet = styled.p`
  margin-top: 18px;

  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  color: var(--black-200);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 0px;
  }
`;

export const SubTextSlider = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  color: var(--black-200);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 0px;
  }
`;

export const TextShowMore = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  color: var(--blue-200);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 0px;
  }
`;

export const IndustryItem = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
`;

export const IndustryContent = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 420px;
  }
`;

export const IndustryListItems = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  position: relative;
  padding-left: 12px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background-color: var(--blue-300);
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ImgIndustries = styled.img`
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 280px;
    height: 200px;

    border-radius: 20px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 624px;
    height: 320px;

    object-fit: cover;

    border-radius: 20px;
  }
`;
