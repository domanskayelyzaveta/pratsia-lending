import styled from "styled-components";

export const ForAppTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-300);

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
    font-size: 32px;
  }
`;

export const SubText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const PhotoAndTitleDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const TitleWrapper = styled.div`
  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

export const ApplicantImg = styled.img`
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 441px;
    height: 248px;

    border-radius: 16px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 516px;
    height: ${({ $isOpen }) => ($isOpen !== null ? "570px" : "320px")};
    transition: height 0.3s ease;

    object-fit: cover;

    border-radius: 20px;
  }
`;

export const ApplicantsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0px;

    position: absolute;
    top: 180px;

    width: 732px;
    margin-bottom: 64px;
  }
`;

export const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding-bottom: 4px;

  border-bottom: 1px solid var(--blue-100);

  @media screen and (min-width: 768px) {
    padding-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 12px;
  }
`;

export const BtnAppDiv = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    margin-top: 64px;
    justify-content: center;
  }
`;

export const TextSecondListApp = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
