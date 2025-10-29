import styled from "styled-components";

export const AgbWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TextAbg = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

export const TextAddress = styled.a`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  width: 180px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 240px;
  }
`;

export const ListAgb = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ListItemAgb = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  position: relative;
  padding-left: 12px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 12px;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
    background-color: var(--blue-300);
    border-radius: 50%;
  }
`;
