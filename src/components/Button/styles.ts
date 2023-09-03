import { styled } from "styled-components";
import { BASE_STYLE } from "./stylesUtils";


export const ButtonPrimarySC = styled(BASE_STYLE)`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white[50]};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`

export const ButtonSecondarySC = styled(BASE_STYLE)`
  border: ${({ theme }) => theme.border.width.bold} solid ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.primary[500]};

  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.colors.primary[600]};
    background-color: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.white[50]};
  }

  &:disabled {
    opacity: 0.5; 
    cursor: not-allowed;
  }
`