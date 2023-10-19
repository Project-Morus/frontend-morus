import styled from "styled-components";
import { MAX_WIDTH_CARD } from "./stylesUtils";

export const CardSC = styled.div<{ $openedVote: boolean }>`
  max-width: ${MAX_WIDTH_CARD};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $openedVote }) => $openedVote ? theme.colors.orange[500] : theme.colors.green[500]};

  border-radius: ${({ theme }) => theme.border.radius.regular};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
`

export const TextSC = styled.span`
  color: ${({ theme }) => theme.colors.white[50]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.small};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold}
`