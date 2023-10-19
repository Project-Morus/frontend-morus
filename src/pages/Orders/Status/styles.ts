import styled from "styled-components";
import { MAX_WIDTH_CARD } from "./stylesUtils";

export const CardSC = styled.div<{ $collected: boolean }>`
  max-width: ${MAX_WIDTH_CARD};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $collected }) => $collected ? theme.colors.primary[500] : theme.colors.orange[500]};

  border-radius: ${({ theme }) => theme.border.radius.regular};
  padding: ${({ theme }) => theme.spacing[1]};
`

export const TextSC = styled.span`
  color: ${({ theme }) => theme.colors.white[50]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.small}
`