import { css } from "styled-components";
import { DotStatusTypes } from "./types";

export const CIRCLE_DIMENSIONS = '10px';

const DEFAULT_DOT = css`
  ${({ theme }) => theme.colors.primary[100]}
`

const ACTIVE_DOT = css`
  ${({ theme }) => theme.colors.primary[400]}
`

export const getBackgroundDot = (status: DotStatusTypes) => {
  if (status === 'active') return ACTIVE_DOT

  return DEFAULT_DOT
}


