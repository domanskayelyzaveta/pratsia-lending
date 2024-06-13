import styled from "styled-components";

export const AboutUsTitle = styled.h2`
  padding: 32px 20px 16px 20px;

  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-300);

  @media screen and (min-width: 1440px) {
    padding: 0px 84px 24px 84px;

    font-size: 32px;
  }
`;

export const AboutUsSubTitle = styled.p`
  padding: 20px;

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 20px;

  color: var(--blue-dark);
  background: var(--beige-200);

  @media screen and (min-width: 1440px) {
    padding: 56px 84px;
    margin-bottom: 56px;

    font-size: 24px;
  }
`;

export const TextAndPhotoDiv = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
`;

export const TextAboutUs = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    width: 624px;

    font-size: 20px;
    margin-bottom: 0px;
  }
`;

export const ImgAboutUs = styled.img`
  @media screen and (min-width: 1440px) {
    width: 624px;
    height: 320px;

    object-fit: cover;

    border-radius: 20px;
  }
`;

export const BtnListAboutUs = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
`;

export const ListWrapper = styled.div`
  display: flex;
`;

export const ListItem = styled.li`
  //   display: flex;
`;
