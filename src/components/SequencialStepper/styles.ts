import styled from "styled-components";
import { CIRCLE_DIMENSIONS, getBackgroundDot } from "./stylesUtils";
import { DotStatusTypes } from "./types";

export const ContainerSC = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing[10]};
`

export const DotSC = styled.div<{ $status: DotStatusTypes }>`
  width: ${CIRCLE_DIMENSIONS};
  height: ${CIRCLE_DIMENSIONS};

  border-radius: ${({ theme }) => theme.border.radius.circle};

  background: ${({ $status }) => getBackgroundDot($status)};
`