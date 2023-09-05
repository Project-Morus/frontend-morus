import styled from 'styled-components'
import { PositionsAsideTypes } from './types'
import { ABSOLUTE_BOTTOM, ABSOLUTE_X, VIEWPORT_HEIGHT } from './stylesUtils'

export const ContainerSC = styled.section<{ $position: PositionsAsideTypes }>`
  width: 100%;
  height: ${VIEWPORT_HEIGHT};
  
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

export const FooterSC = styled.footer<{ $position: PositionsAsideTypes }>`
  position: absolute;
  bottom: ${ABSOLUTE_BOTTOM};
 
  color: ${({ theme }) => theme.colors.grey[100]};

  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.xsmall};

  ${({ $position }) => $position === 'right' ? `left: ${ABSOLUTE_X}` : `right: ${ABSOLUTE_X}`}
`