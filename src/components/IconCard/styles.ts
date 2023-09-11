import styled from "styled-components";
import { SQUARE_DIMENSIONS } from "./stylesUtils";
import { VariantsCardTypes } from "./types";

export const CardSC = styled.div<{ $variant: VariantsCardTypes }>`
  width: ${SQUARE_DIMENSIONS};
  height: ${SQUARE_DIMENSIONS};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $variant }) => $variant === 'primary' ? theme.colors.primary[50] : theme.colors.white[50]};

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  border-radius: ${({ theme }) => theme.border.radius.regular};
`