import styled from "styled-components";

export const DatenWrapper = styled.div`
  margin-top: 80px;
`;

export const DatenList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const ListItemImp = styled.li`
  //   display: flex;
`;

export const AboutUsText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-200);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const BtnListDaten = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
  text-align: left;
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DatenText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-200);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const TextDaten = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 624px;
  }
`;
