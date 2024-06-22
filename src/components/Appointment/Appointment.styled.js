import styled from "styled-components";

export const SectionAppointment = styled.section`
  width: 100%;
  margin: 0;
  padding: 32px 0 0 0;

  @media screen and (min-width: 768px) {
    padding: 48px 0 0 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 80px 0 0 0;
  }
`;

export const TitleAppointment = styled.h2`
  width: 280px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-300);

  @media screen and (min-width: 768px) {
    width: 720px;
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    width: 1272px;
    font-size: 32px;
  }
`;

export const Bg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  background-color: var(--beige-200);

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    padding: 24px;
  }
`;

export const ListAppointment = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 720px;
    flex-direction: row;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: fit-content;
    gap: 100px;
  }
`;

export const ListItemsAppointment = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 224px;
    gap: 12px;
    flex-direction: column;

    & div {
      & :nth-child(1) {
        margin-bottom: 4px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: fit-content;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const TextAppointment = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  @media screen and (min-width: 768px) {
    text-align: center;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
