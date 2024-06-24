import styled from "styled-components";

export const SectionLocation = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const SvgTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  width: 280px;
  gap: 12px;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const TitleLocation = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  width: 312px;

  color: var(--blue-dark);

  @media screen and (min-width: 768px) {
    font-size: 20px;

    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const MapWrapper = styled.div`
  width: 280px;
  height: 200px;
  margin: 20px auto 0;

  & iframe {
    border: 0;
    border-radius: 8px;
    filter: grayscale(30%);
  }

  @media screen and (min-width: 768px) {
    width: 720px;
    height: 280px;

    & iframe {
      border-radius: 16px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1272px;
    height: 480px;
    margin: 24px auto 0;

    & iframe {
      border-radius: 24px;
    }
  }
`;

export const SvgGeo = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--blue-200);

  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;
  }
`;
