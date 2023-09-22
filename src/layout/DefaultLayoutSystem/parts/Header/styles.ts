import styled from "styled-components";

export const HeaderSC = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`

export const ContentResidentSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`

export const WrapperResidentSC = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
`

export const WrapperActionsSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[7]};
`

export const TagSC = styled.p`
  background-color: ${({ theme }) => theme.colors.purple[50]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};

  color: ${({ theme }) => theme.colors.white[50]};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
  border-radius: ${({ theme }) => theme.border.radius.regular};
`

export const DateNowSC = styled.p`
  color: ${({ theme }) => theme.colors.grey[400]};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
`

export const NameResidentSC = styled.span`
  color: ${({ theme }) => theme.colors.primary[400]};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
`

export const InfoResidentSC = styled.span`
  color: ${({ theme }) => theme.colors.grey[400]};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
`