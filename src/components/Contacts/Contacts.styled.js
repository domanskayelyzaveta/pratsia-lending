import styled from "@emotion/styled";
import InputMask from "react-input-mask";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 40px;
`;

export const StyledForm = styled.form`
  width: 628px;
  padding: 20px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  row-gap: 32px;
  align-self: stretch;
`;

export const StarWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const StyledMainInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;

  padding: 20px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledInput = styled.input`
  width: 284px;

  border: none;
  border-bottom: 1px solid var(--typography-blue);

  ::placeholder {
    color: var(--light-grey);
  }
`;
export const StyledPhoneInput = styled(InputMask)`
  width: 284px;

  border: none;
  border-bottom: 1px solid var(--typography-blue);

  color: var(--light-grey);

  ::placeholder {
    color: var(--light-grey);
  }
`;

export const StyledLabel = styled.label`
  position: relative;

  display: inline-grid;
  gap: 8px;

  width: 100%;
  font-size: 18px;
  font-weight: 600;

  color: var(--light-blue);
`;

export const StyledTextArea = styled.textarea`
  height: 160px;
  padding: 6px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledListItem = styled.li`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Title = styled.h2`
  position: relative;
  font-size: 34px;
  color: var(--blue);

  ::after {
    width: 200px;
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 473px;
    height: 1px;
    background-color: var(--blue);
  }
`;

export const Subtitle = styled.h3`
  color: var(--light-blue);
`;

export const StyledLink = styled.a`
  color: var(--light-blue-4);
`;

export const Svg = styled.svg`
  margin-right: 6px;

  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--orange);
`;

export const SubmitBtn = styled.button`
  padding: 10px;
  width: 200px;
  height: auto;
  border: none;
  border-radius: 14px;
  font-size: 14px;
  text-align: center;
  background-color: var(--blue);
  color: var(--white);
`;

export const TextError = styled.p`
  position: absolute;
  bottom: -18px;

  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--red);

  @media screen and (min-width: 1440px) {
    font-size: 12px;
  }
`;
