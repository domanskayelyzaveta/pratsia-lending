import styled from "styled-components";

export const SectionAboutUs = styled.section`
  padding-top: 32px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 56px;
  }
`;

export const AboutUsTitle = styled.h2`
  padding: 0px 20px 16px 20px;

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

  color: var(--blue-dark);
  background: var(--beige-200);

  @media screen and (min-width: 1440px) {
    padding: 56px 84px;

    font-size: 24px;
  }
`;

export const TextAndPhotoDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const TextAboutUs = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 624px;
  }
`;

export const ImgAboutUs = styled.img`
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 348px;
    height: 270px;

    border-radius: 16px;
    margin-bottom: 0px;
  }
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
  text-align: left;
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AboutUsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const ListItem = styled.li`
  //   display: flex;
`;

export const AboutUsText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-200);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const AboutUsDescText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  color: var(--black-200);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 348px;
  }
`;

export const AboutSubTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-dark);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const HighlightedText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: var(--blue-300);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    color: var(--blue-dark);
  }
`;

export const AboutUsDescriptionPartDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    align-items: center;
  }
`;

export const WerdenSieDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
