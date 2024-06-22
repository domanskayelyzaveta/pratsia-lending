import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

export const Content = styled.div`
  width: fit-content;
  padding: 20px 40px 40px 40px;
  border-radius: 24px;
  background: var(--background);
`;

export const Button = styled.button`
  display: flex;
  padding: 0;
  margin-bottom: 12px;
  margin-left: auto;
  border: none;
  background: transparent;
  transition: all 0.3s;

  & svg {
    fill: var(--blue-200);
  }

  &:hover {
    transform: rotate(90deg);
  }
`;
