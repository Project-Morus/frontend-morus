import styled, { css } from "styled-components";
import { BORDER_WIDTH_CUSTOM, CIRCLE_DIMENSIONS } from "./stylesUtils";

export const RadioSC = styled.input`
  width: ${CIRCLE_DIMENSIONS};
  height: ${CIRCLE_DIMENSIONS};

  appearance: none;

  border-radius: ${({ theme }) => theme.border.radius.circle};
  border: ${({ theme }) => theme.border.width.bold} solid ${({ theme }) => theme.colors.primary[700]};

  cursor: pointer;
  
  transition: border-color 0.2s;

  &:checked {
    border-width: ${BORDER_WIDTH_CUSTOM};
  }

  &:not(:checked):hover {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export const WrapperSC = styled.div<{ $disabled: boolean }>`
  width: 100%;

  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};

  border: ${({ theme }) => theme.border.width.regular} solid ${({ theme }) => theme.colors.grey[100]};
  border-radius: ${({ theme }) => theme.border.radius.regular};

  background-color: ${({ theme }) => theme.colors.white[50]};

  padding: ${({ theme }) => theme.spacing[5]};
  
  ${({ $disabled }) => $disabled && css`
    opacity: 0.5;
  `}
`

export const LabelSC = styled.label<{ $disabled: boolean }>`
  color: ${({ theme }) => theme.colors.grey[400]};

  ${({ $disabled }) => $disabled && css`
    opacity: 0.5;
  `}
`