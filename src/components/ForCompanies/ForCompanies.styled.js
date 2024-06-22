import styled from "styled-components";

export const SectionCompanies = styled.section`
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 48px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 48px;
    position: relative;
  }
`;

export const ForCompaniesTitle = styled.h2`
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
    font-size: 32px;
  }
`;

export const StyledFistList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > li:last-child {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`;

export const StyledFirstListItem = styled.li`
  @media screen and (min-width: 768px) {
    width: 254px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const CompaniesPhotoAndTextDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    // justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

export const TextListCompanies = styled.p`
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
    padding-left: 20px;

    &::before {
      width: 8px;
      height: 8px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 624px;
  }
`;

export const SecondList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 254px;
    right: 12px;

    width: 700px;
  }
`;

export const ListItemsSecond = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding-bottom: 4px;

  border-bottom: 1px solid var(--blue-100);

  @media screen and (min-width: 768px) {
    padding-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ListItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1440px) {
  }
`;

export const SubTitleSecondListComp = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-200);
  text-align: left;

  width: 248px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 100%;
  }
`;

export const TextSecondListComp = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ImgCompanies = styled.img`
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    height: 200px;

    border-radius: 16px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 624px;
    height: ${({ $isOpen }) => ($isOpen !== null ? "420px" : "320px")};
    transition: height 0.3s ease;

    object-fit: cover;

    border-radius: 20px;
  }
`;
