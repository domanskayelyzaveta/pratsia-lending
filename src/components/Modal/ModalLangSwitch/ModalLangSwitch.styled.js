import styled from "styled-components";

export const Title = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-dark);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: fit-content;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const Button = styled.label`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  width: 161px;
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-200);
  border-bottom: 1px solid var(--blue-100);

  @media screen and (min-width: 768px) {
    width: fit-content;
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const FlagWrapper = styled.div`
  display: flex;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-left: 8px;
  }
`;

export const RadioCustom = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 4px;
  border: 1px solid var(--blue-200);
  background: var(--white);
  margin-right: 12px;
  position: relative;
  transition: background-color 0.3s, border-color 0.3s;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 20px;
    height: 20px;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
  }
`;

export const Input = styled.input.attrs({ type: "radio" })`
  display: none;

  &:checked + ${RadioCustom} {
    border-color: var(--blue-200);
    background-color: var(--blue-200);

    svg {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;
