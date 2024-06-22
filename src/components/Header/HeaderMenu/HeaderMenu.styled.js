import styled from "styled-components";

export const ModalMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 60px;

  padding: 8px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  width: 222px;

  border-radius: 0px 0px 8px 8px;
  background: var(--beige-200);
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  width: 100%;
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
