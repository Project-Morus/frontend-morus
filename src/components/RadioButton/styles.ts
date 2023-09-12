import styled from "styled-components";
import { BORDER_WIDTH_CUSTOM, CIRCLE_DIMENSIONS } from "./stylesUtils";


export const WrapperSC = styled.div`
  width: 100%;

  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
`

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
`