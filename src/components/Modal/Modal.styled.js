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
  width: 280px;
  padding: 8px 20px 20px 20px;
  border-radius: 8px;
  background: var(--background);

  @media screen and (min-width: 768px) {
    width: fit-content;
    border-radius: 24px;
    padding: 20px 40px 40px 40px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 0;
  margin-bottom: 4px;
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

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`;
