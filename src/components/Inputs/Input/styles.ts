import styled, { css } from "styled-components";
import Icon from "../../DataDisplay/Icon";

export const ContainerSC = styled.div<{ $maxWidth?: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth}px;
    `}
`;

export const LabelSC = styled.label<{ $hasError?: boolean; $disabled?: boolean }>`
  color: ${({ theme, $hasError }) => ($hasError ? theme.colors.red[500] : theme.colors.grey[400])};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${({ theme }) => theme.colors.grey[100]};
    `}
`;

export const ContentSC = styled.div`
position: relative;
width: 100%;
gap: ${({ theme }) => theme.spacing[4]};
`;

export const InputSC = styled.input<{ $hasError?: boolean; $iconName?: boolean }>`
width: 100%;
color: ${({ theme }) => theme.colors.grey[400]};
padding: ${({ theme }) => theme.spacing[3]};
border: ${({ theme }) => theme.border.width.regular} solid ${({ theme }) => theme.colors.grey[100]};

border-radius: ${({ theme }) => theme.border.radius.regular};

  &:focus {
  border-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.primary[500]};
}

  &::placeholder {
  color: ${({ theme }) => theme.colors.grey[50]};
}

  &:disabled {
  color: ${({ theme }) => theme.colors.grey[50]};
  border-color: ${({ theme }) => theme.colors.grey[50]};
  background: ${({ theme }) => theme.colors.white[50]};
  cursor: not-allowed;
  opacity: 0.5;
}

  ${({ $hasError }) =>
    $hasError &&
    css`
      color: ${({ theme }) => theme.colors.red[500]};
      border-color: ${({ theme }) => theme.colors.red[500]};
    `}
`;

export const CustomIconSC = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ErrorTextSC = styled.p`
  color: ${({ theme }) => theme.colors.red[500]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.xsmall};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;
