import DatePicker from "react-datepicker";
import styled from "styled-components";

export const SectionAppointmentForm = styled.section`
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`;

export const TitlesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const TitleAppointmentForm = styled.h2`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  color: var(--blue-dark);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SubTitleAppointmentForm = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 280px;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 534px;
    gap: 20px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  gap: 2px;
  margin-bottom: 4px;

  font-size: 11px;
  font-weight: 400;
  line-height: 150%;

  & :nth-child(1) {
    margin-top: 2px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;

    & :nth-child(1) {
      margin-top: 4px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  width: 280px;
  height: 44px;
  padding: 8px 16px;
  align-items: center;

  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: ${(props) => (props.$errors ? "var(--red)" : "var(--black-100)")};

  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.$errors ? "var(--red)" : "var(--blue-dark)")};
  background: var(--white);

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    color: ${(props) => (props.$errors ? "var(--red)" : "var(--black-100)")};
  }

  &:focus {
    border: 1px solid
      ${(props) => (props.$errors ? "var(--red)" : "var(--blue-dark)")};
    outline: none;
  }

  &:hover {
    border: 1px solid
      ${(props) => (props.$errors ? "var(--red)" : "var(--blue-300)")};
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 534px;
    height: 52px;
    font-size: 18px;
    border-radius: 12px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const TextArea = styled.textarea`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;

  width: 280px;
  height: 80px;
  padding: 8px 16px;

  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.$errors ? "var(--red)" : "var(--blue-dark)")};
  background: var(--white);
  color: ${(props) => (props.$errors ? "var(--red)" : "var(--black-100)")};
  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    color: ${(props) => (props.$errors ? "var(--red)" : "var(--black-100)")};
  }

  &:focus {
    border: 1px solid
      ${(props) => (props.$errors ? "var(--red)" : "var(--blue-dark)")};
    outline: none;
  }

  &:hover {
    border: 1px solid
      ${(props) => (props.$errors ? "var(--red)" : "var(--blue-300)")};
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 534px;
    height: 80px;
    font-size: 18px;
    border-radius: 12px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const TextError = styled.p`
  position: absolute;
  bottom: -14px;
  left: 0;
  text-align: center;

  font-size: 10px;
  font-weight: 400;
  line-height: 150%;
  color: var(--red);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    bottom: -18px;
  }
`;

export const BtnForm = styled.button`
  margin-top: 17px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  color: var(--blue-200);

  width: 100%;
  height: 40px;
  padding: 8px;

  border-radius: 8px;
  border: 1px solid var(--blue-200);
  background: var(--beige-100);

  &:hover {
    border: 3px solid var(--blue-200);
    padding: 6px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    font-size: 20px;
    height: 52px;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 280px;
  border: none;
  outline: none;
  padding: 8px 16px;
  font-size: 12px;
  height: 44px;

  border: 1px solid
    ${(props) => (props.$errors ? "var(--red)" : "var(--blue-dark)")};
  border-radius: 8px;
  background-color: var(--white);

  &::placeholder {
    color: ${(props) => (props.$errors ? "var(--red)" : "var(--black-100)")};
  }

  .react-datepicker__header {
    background-color: transparent;
  }

  .react-datepicker__day--selected {
    background-color: var(--blue-dark);
    color: var(--white);
  }

  .react-datepicker__day--keyboard-selected {
    background-color: var(--blue-dark);
    color: var(--white);
  }

  @media screen and (min-width: 768px) {
    width: 534px;
    font-size: 18px;
    height: 52px;
    border-radius: 12px;
  }
`;
