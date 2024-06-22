import styled from "styled-components";

export const SectionJobOffers = styled.div`
  padding-top: 32px;
`;

export const TitleJobOffers = styled.h2`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 400;
  line-height: 150%;

  color: var(--blue-dark);
`;

export const ListLobOffers = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ListItemsLobOffers = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const BtnJobOffers = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 13px;

  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
  text-align: left;
`;

export const SubTitleJobOffers = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  width: 248px;
`;
