import styled from "styled-components";

export const ModalMenuWrapper = styled.div`
  position: fixed;
  margin-top: 61px;

  padding: 8px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

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

  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-200);

  border-bottom: 1px solid var(--blue-100);
`;
