import styled from "styled-components";

export const TitleSuccess = styled.h3`
  margin-bottom: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-dark);

  @media screen and (min-width: 768px) {
    margin-bottom: 4px;
    font-size: 24px;
  }
`;

export const TitleError = styled.h3`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-dark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-200);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
