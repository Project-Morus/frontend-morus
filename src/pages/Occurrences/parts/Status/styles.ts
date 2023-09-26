import styled from "styled-components";
import { StatusTypes } from "./types";

export const CardSC = styled.div<{$type: StatusTypes }>`
  max-width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme, $type}) => $type === 'solved' 
  ? theme.colors.green[300] 
  : theme.colors.red[300]};

  border-radius: ${({theme}) => theme.border.radius.regular};
  padding: ${({theme}) => theme.spacing[1]} 0;
`

export const TextSC = styled.span`
  color: ${({theme}) => theme.colors.white[50]}
`