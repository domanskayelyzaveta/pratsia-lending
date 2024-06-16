import styled from "styled-components";

export const SectionAppointmentForm = styled.section`
  padding-top: 32px;
`;

export const TitlesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleAppointmentForm = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  color: var(--blue-dark);
`;

export const SubTitleAppointmentForm = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;

  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  width: 280px;
  height: 44px;
  padding: 8px 16px;
  align-items: center;

  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: var(--black-100);

  border-radius: 8px;
  border: 1px solid var(--blue-dark);
  background: var(--white);

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    color: var(--black-100);
  }

  &:focus {
  }

  &:focus {
  }
`;
