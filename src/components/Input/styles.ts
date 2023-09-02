import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    margin-top: 1rem;
  }
`;

export const LabelSC = styled.label`
  color: ${defaultTheme.colors.grey[400]};
  margin-bottom: 0.2rem;
`;

export const InputSC = styled.input<{ hasError?: boolean }>`
  color: ${defaultTheme.colors.grey[400]};
  padding: 0.5rem;
  border: solid ${defaultTheme.colors.grey[100]} ${defaultTheme.border.width.regular};

  border-radius: ${defaultTheme.border.radius.regular};

  &:focus {
    border-color: ${defaultTheme.colors.primary[500]};
  }

  &::placeholder {
    color: ${defaultTheme.colors.grey[100]};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      color: ${defaultTheme.colors.red[500]};
      border-color: ${defaultTheme.colors.red[500]};
    `}
`;

export const HelperTextSC = styled.p`
  color: ${defaultTheme.colors.red[500]};
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
