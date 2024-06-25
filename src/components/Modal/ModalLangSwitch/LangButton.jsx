import React from "react";
import sprite from "../../../assets/sprite.svg";
import {
  Button,
  Input,
  RadioCustom,
  Wrapper,
  FlagWrapper,
} from "./ModalLangSwitch.styled";

const LangButton = ({ language, checked, onChange, children, Flag }) => (
  <Button>
    <Wrapper>
      <Input
        type="radio"
        value={language}
        checked={checked}
        onChange={onChange}
      />
      <RadioCustom>
        <svg width={24} height={24}>
          <use href={`${sprite}#tick`} />
        </svg>
      </RadioCustom>
      <span>{children}</span>
    </Wrapper>
    {Flag && (
      <FlagWrapper>
        <Flag />
      </FlagWrapper>
    )}
  </Button>
);

export default LangButton;
