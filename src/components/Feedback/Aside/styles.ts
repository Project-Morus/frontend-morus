import styled from 'styled-components'
import { PositionsAsideTypes } from './types'

export const ContainerSC = styled.section<{ $position: PositionsAsideTypes }>`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: ${({ $position }) => $position === 'right' ? 'row-reverse' : 'row'};
`

export const ContentSC = styled.aside<{ $position: PositionsAsideTypes }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary[500]};
  border-radius: ${({ theme }) => theme.border.radius.regular};

  margin: ${({ theme, $position }) => $position === 'right'
    ? `${theme.spacing[4]} ${theme.spacing[4]} ${theme.spacing[4]} 0`
    : `${theme.spacing[4]} 0 ${theme.spacing[4]} ${theme.spacing[4]}`};
`