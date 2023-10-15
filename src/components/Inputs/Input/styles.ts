import styled, { css } from "styled-components";

export const ContainerSC = styled.div<{ $maxWidth?: number }>`
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  align-items: flex-start;
=======
  width: 100%;
>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")

  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth}px;
    `}
`;

<<<<<<< HEAD
export const LabelSC = styled.label<{ $hasError?: boolean; $disabled?: boolean }>`
  color: ${({ theme, $hasError }) => ($hasError ? theme.colors.red[500] : theme.colors.grey[400])};
=======
export const LabelSC = styled.label<{ $disabled?: boolean }>`
  color: ${({ theme }) => theme.colors.grey[400]};
>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${({ theme }) => theme.colors.grey[100]};
    `}
`;

<<<<<<< HEAD
export const ContentSC = styled.div`
  position: relative;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const InputSC = styled.input<{ $hasError?: boolean; $iconName?: boolean }>`
  width: 100%;
=======
export const InputSC = styled.input<{ $hasError?: boolean }>`
>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")
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

<<<<<<< HEAD
export const CustomIconSC = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

=======
>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")
export const ErrorTextSC = styled.p`
  color: ${({ theme }) => theme.colors.red[500]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.xsmall};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;
