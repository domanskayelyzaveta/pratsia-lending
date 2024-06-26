import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Headers = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  padding: 8px 20px;

  background-color: var(--beige-200);

  @media screen and (min-width: 768px) {
    padding: 8px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 100vw;
    padding: 8px 84px;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    height: 80px;
  }
`;

export const HeaderNav = styled.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const BtnBurgerMenu = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
  transition: transform 0.3s linear;

  svg {
    transition: transform 0.3s linear;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  color: var(--black-200);
`;

export const StyledNav = styled.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`;

export const StyledNavLinkA = styled.a`
  @media screen and (min-width: 1440px) {
    position: relative;
    color: var(--black-200);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    &:hover::after,
    &.active::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: var(--blue-200);
    }

    &:hover,
    &.active {
      color: var(--blue-200);
    }
  }
`;
////////////////////////////////////

export const HeaderNavMenu = styled(NavLink)`
  @media screen and (min-width: 1440px) {
    position: relative;
    color: var(--blue);
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;

    &:hover::after,
    &:focus::after,
    &.active::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: var(--blue, #1b3641);
    }
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const HeaderAddress = styled.a`
  display: flex;
  min-width: 156px;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  background: var(--background-white);
  border-radius: 16px;
  border: 1px solid var(--primary-bluedark, #1b3641);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  transition: background 0.5s ease, color 0.5s ease;

  &:hover,
  &:focus {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    background: var(--background-white, #fcfcfc);
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  @media screen and (min-width: 768px) {
    min-width: 161px;
    font-size: 15px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    min-width: 193px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    min-width: 260px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SvgMobileHeader = styled.svg`
  stroke: black;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`;

export const ButtonMobileHeader = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;
export const LogoImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const TextHeader = styled.p`
  width: 120px;
  font-size: 10px;
  font-weight: 600;
  font-family: "Montserrat";
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: -28px;
  color: var(--blue);
`;

export const ColorSpan = styled.span`
  color: var(--yellow);
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled(NavLink)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #f0f0f0;
  }
  &.active {
    font-weight: bold;
  }
`;
