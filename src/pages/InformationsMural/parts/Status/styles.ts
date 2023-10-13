import styled from "styled-components";
import { StatusTypes } from "./types";

export const CardSC = styled.div<{ $type: StatusTypes }>`
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $type }) => $type === 'paid'
    ? theme.colors.green[300]
    : theme.colors.red[300]};

  border-radius: ${({ theme }) => theme.border.radius.regular};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
`

export const TextSC = styled.span`
  color: ${({ theme }) => theme.colors.white[50]}
`