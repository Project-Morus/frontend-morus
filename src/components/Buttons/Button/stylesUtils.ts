import { styled } from "styled-components";

export const HEIGHT_BUTTON = '50px'

export const BASE_STYLE = styled.button<{ $maxWidth?: number }>`
  width: 100%;
  height: ${HEIGHT_BUTTON};

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight:  ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};

  border: none;
  border-radius: ${({ theme }) => theme.border.radius.regular};

  background: none;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  transition: all 0.2s;
  
  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth}px`};
`
