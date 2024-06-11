import React from "react";
import sprite from "../../assets/sprite.svg";

export const SvgUA = () => (
  <svg width="20" height="20" viewBox="0 0 64 64">
    <use href={`${sprite}#icon-Flag-Ukraine`}></use>
  </svg>
);

export const SvgDE = () => (
  <svg width="20" height="20" viewBox="0 0 64 64">
    <use href={`${sprite}#icon-Flag-Germany`}></use>
  </svg>
);
