import styled from "styled-components";
import { MAX_WIDTH_CARD } from "./stylesUtils";

export const CardSC = styled.div<{ $recurring: boolean }>`
  max-width: ${({ $recurring }) => $recurring ? '100px' : MAX_WIDTH_CARD};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $recurring }) => $recurring ? theme.colors.red[300] : theme.colors.primary[500]};

  border-radius: ${({ theme }) => theme.border.radius.regular};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
`

export const TextSC = styled.span`
  color: ${({ theme }) => theme.colors.white[50]}
`