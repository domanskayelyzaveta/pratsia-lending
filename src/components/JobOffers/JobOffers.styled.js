import styled from "styled-components";

export const SectionJobOffers = styled.div`
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 48px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 56px;
  }
`;

export const TitleJobOffers = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-dark);

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const ListLobOffers = styled.ul`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 720px;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 1272px;
  }
`;

export const ListItemsLobOffers = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-bottom: ${(props) => (props.$isOpen ? "0" : "4px")};
  border-bottom: ${(props) =>
    props.$isOpen ? "none" : "1px solid var(--blue-100)"};

  @media screen and (min-width: 768px) {
    padding-bottom: ${(props) => (props.$isOpen ? "0" : "8px")};
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: ${(props) => (props.$isOpen ? "0" : "16px")};
    gap: 16px;
  }
`;

export const BtnJobOffers = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;

  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
  text-align: left;

  @media screen and (min-width: 768px) {
    align-items: center;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const SubTitleJobOffers = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  width: 248px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 100%;
  }
`;

export const DescriptionJobOffers = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-200);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
