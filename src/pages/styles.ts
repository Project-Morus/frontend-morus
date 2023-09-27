import styled from "styled-components";

const MAX_WIDTH_MESSAGE = '430px'

export const MessageSC = styled.p`
  max-width: ${MAX_WIDTH_MESSAGE};
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.small};
  color: ${({ theme }) => theme.colors.grey[200]};
`

export const TitleSC = styled.h3`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h3};
  color: ${({ theme }) => theme.colors.grey[400]};
`

export const QuantityTotalSC = styled.strong`
  color: ${({ theme }) => theme.colors.grey[200]};
`