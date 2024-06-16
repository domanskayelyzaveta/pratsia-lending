import styled from "styled-components";

export const TextIndustries = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 8px;
`;

export const BtnIndustries = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
  text-align: left;

  position: absolute;
  top: -14px;
  z-index: 1;
`;

export const SlideWrapper = styled.div`
  overflow: hidden;
  transition: height 0.3s linear;

  height: ${({ height }) => height}px;
`;
