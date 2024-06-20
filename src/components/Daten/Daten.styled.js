import styled from "styled-components";

export const DatenWrapper = styled.div`
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const BtnTextDaten = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  color: var(--blue-200);
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

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 12px;
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
  width: 244px;

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-200);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 720px;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const TextDaten = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 1272px;
  }
`;

export const ListDaten = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItemDaten = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  position: relative;
  padding-left: 12px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 12px;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
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
