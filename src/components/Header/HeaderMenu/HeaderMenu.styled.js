import styled from "styled-components";

export const ModalMenuWrapper = styled.div`
  position: fixed;
  margin-top: 61px;

  padding: 8px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  width: 220px;

  border-radius: 0px 0px 8px 8px;
  background: var(--beige-200);
`;

export const SvgMenu = styled.svg`
  width: 24px;
  height: 24px;

  fill: var(--blue-300);
`;

export const StyledLinkA = styled.a`
  display: flex;
  gap: 12px;

  padding: 8px;
  width: 100%;

  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-200);

  border-bottom: 1px solid var(--blue-100);
`;

export const BntClose = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;

  align-self: end;
`;
