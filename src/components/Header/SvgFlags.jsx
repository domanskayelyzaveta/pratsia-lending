import React from "react";
import sprite from "../../assets/sprite.svg";

export const SvgUA = () => (
  <svg width="32" height="29" viewBox="0 0 64 64">
    <use href={`${sprite}#icon-Flag-Ukraine`}></use>
  </svg>
);

export const SvgDEU = () => (
  <svg width="32" height="29" viewBox="0 0 64 64">
    <use href={`${sprite}#icon-Flag-Germany`}></use>
  </svg>
);

export const SvgEN = () => (
  <svg width="32" height="29" viewBox="0 0 64 64">
    <use href={`${sprite}#flag-en`}></use>
  </svg>
);
