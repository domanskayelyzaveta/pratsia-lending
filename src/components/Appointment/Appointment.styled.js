import styled from "styled-components";

export const SectionAppointment = styled.section`
  padding-top: 32px;
`;

export const TitleAppointment = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;

  color: var(--blue-300);
`;

export const ListAppointment = styled.ul`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-left: -20px;
  margin-right: -20px;
  padding: 20px;

  background-color: var(--beige-200);
`;

export const ListItemsAppointment = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const TextAppointment = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;
