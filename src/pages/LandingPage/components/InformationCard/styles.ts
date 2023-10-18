import { styled } from "styled-components";

export const WhiteCard = styled.div`
  height: 380px;
  width: 380px;
  padding: 55px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.15);
`;

export const TitleSC = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.grey[500]};
  margin-bottom: 1rem;
`;

export const LabelSC = styled.label`
  color: ${({ theme }) => theme.colors.grey[300]};
`;
