import styled from "styled-components"
import { DIAMETER_CIRCLE } from "./stylesUtils"

export const ContentResidentSC = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
`

export const WrapperIconSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${DIAMETER_CIRCLE};
  height: ${DIAMETER_CIRCLE};
  background-color: ${({ theme }) => theme.colors.orange[50]};
  border-radius: ${({ theme }) => theme.border.radius.circle};
`

export const WrapperInfResidentSC = styled.div``

export const NameResidentSC = styled.p`
  color: ${({ theme }) => theme.colors.grey[400]};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
`

export const RoleResidentSC = styled.span`
  color: ${({ theme }) => theme.colors.grey[200]};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.xsmall};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
  `