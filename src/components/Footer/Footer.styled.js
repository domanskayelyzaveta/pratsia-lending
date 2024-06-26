import styled from "styled-components";

export const FooterSection = styled.footer`
  padding-top: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  border-bottom: 1px solid var(--Blue-Dark, #301678);
  background-color: var(--beige-200);

  @media screen and (min-width: 768px) {
    position: relative;

    padding-bottom: 24px;
  }
`;

export const SvgLogo = styled.svg`
  width: 52px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 64px;
    height: 50px;
  }

  @media screen and (min-width: 1440px) {
    width: 72px;
    height: 50px;
  }
`;

export const SvgTitleFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const ListFooter = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    position: absolute;
    bottom: 40px;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  line-height: 150%;

  width: 150px;

  @media screen and (min-width: 768px) {
    width: 213px;
    font-size: 16px;

    text-align: start;
  }
`;

export const PhoneEmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const LinkFooterText = styled.a`
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  line-height: 150%;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SvgFooter = styled.svg`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const ImgIcon = styled.img`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const TitleFooter = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  color: var(--blue-dark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const HolderDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactInfoFooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 120px;
  }

  @media screen and (min-width: 1440px) {
    gap: 636px;
  }
`;

export const StyledA = styled.a`
  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
`;
