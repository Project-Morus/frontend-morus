import { styled } from "styled-components";
import { DIAMENTER_CARD } from "./stylesUtils";

export const WhiteCard = styled.div`
  height: ${DIAMENTER_CARD};
  width: ${DIAMENTER_CARD};

  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  padding: ${({ theme }) => theme.spacing[15]};

  border-radius: ${({ theme }) => theme.border.radius.regular};
  
  box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.15);
`;

export const TitleSC = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.grey[500]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

export const LabelSC = styled.label`
  color: ${({ theme }) => theme.colors.grey[300]};
`;
