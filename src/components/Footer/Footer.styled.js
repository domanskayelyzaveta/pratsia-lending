import styled from "styled-components";

export const FooterSection = styled.footer`
  padding-top: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  border-bottom: 1px solid var(--Blue-Dark, #301678);
  background-color: var(--beige-200);
`;

export const SvgTitleFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ListFooter = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  line-height: 150%;

  width: 150px;
`;

export const PhoneEmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  margin-bottom: 20px;
`;

export const LinkFooterText = styled.a`
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  line-height: 150%;
`;
