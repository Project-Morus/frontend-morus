import { styled } from "styled-components";
import { BASE_STYLE } from "./stylesUtils";

export const ButtonPrimarySC = styled(BASE_STYLE)`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white[50]};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const ButtonSecondarySC = styled(BASE_STYLE)`
  border: ${({ theme }) => theme.border.width.bold} solid ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.primary[500]};

  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.colors.primary[600]};
    background-color: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.white[50]};
  }
`;

export const ButtonRedSC = styled(BASE_STYLE)`
  border: ${({ theme }) => theme.border.width.bold} solid ${({ theme }) => theme.colors.red[500]};
  background-color: ${({ theme }) => theme.colors.red[500]};
  color: ${({ theme }) => theme.colors.white[50]};

  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.colors.red[600]};
    background-color: ${({ theme }) => theme.colors.red[600]};
    color: ${({ theme }) => theme.colors.white[50]};
  }
`;

export const ButtonGreenSC = styled(BASE_STYLE)`
  border: ${({ theme }) => theme.border.width.bold} solid ${({ theme }) => theme.colors.green[500]};
  background-color: ${({ theme }) => theme.colors.green[500]};
  color: ${({ theme }) => theme.colors.white[50]};

  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.colors.green[600]};
    background-color: ${({ theme }) => theme.colors.green[600]};
    color: ${({ theme }) => theme.colors.white[50]};
  }
`;