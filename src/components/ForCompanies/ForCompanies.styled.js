import styled from "styled-components";

export const SectionCompanies = styled.section`
  padding-top: 32px;
`;

export const ForCompaniesTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-300);

  @media screen and (min-width: 1440px) {
    padding: 0px 84px 24px 84px;

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
  }

  @media screen and (min-width: 1440px) {
    width: 624px;
  }
`;

export const SecondList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const ListItemsSecond = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
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
