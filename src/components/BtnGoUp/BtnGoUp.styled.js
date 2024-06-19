import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 0;
  border: 1px solid var(--blue-200);
  backdrop-filter: blur(10px);
  transition: transform 0.2s linear;
  z-index: 999;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
    right: 12px;
  }
`;
