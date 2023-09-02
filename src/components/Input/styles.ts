import styled, { css } from "styled-components";

export const ContainerSC = styled.div<{ maxWidth?: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    margin-top: ${({ theme }) => theme.spacing[5]};
  }

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
    `}
`;

export const LabelSC = styled.label<{ disabled?: boolean }>`
  color: ${({ theme }) => theme.colors.grey[400]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.grey[100]};
    `}
`;

export const InputSC = styled.input<{ hasError?: boolean; disabled?: boolean }>`
  color: ${({ theme }) => theme.colors.grey[400]};
  padding: 0.5rem;
  border: solid ${({ theme }) => theme.colors.grey[100]} ${({ theme }) => theme.border.width.regular};

  border-radius: ${({ theme }) => theme.border.radius.regular};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.primary[500]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey[100]};
  }

  &:placeholder && :disabled {
    color: ${({ theme }) => theme.colors.grey[50]};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      color: ${({ theme }) => theme.colors.red[500]};
      border-color: ${({ theme }) => theme.colors.red[500]};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.grey[50]};
      border-color: ${({ theme }) => theme.colors.grey[50]};
      background-color: ${({ theme }) => theme.colors.white};
      cursor: not-allowed;
    `}
`;

export const ErrorTextSC = styled.p`
  color: ${({ theme }) => theme.colors.red[500]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.xsmall};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;
