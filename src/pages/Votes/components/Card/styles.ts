import styled from "styled-components";
import { Icon, IconCard } from "../../../../components";

export const ContainerSC = styled.main`
  background-color: ${({ theme }) => theme.colors.white[100]};
  padding: ${({ theme }) => theme.spacing[7]};

  border-radius: ${({ theme }) => theme.border.radius.regular};

  box-shadow: 0px 4px 4px 0px rgba(0, 74, 173, 0.15);
`

export const HeaderSC = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MainTextsSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`

export const BoxHeaderSC = styled.div`
  width: 95%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: ${({ theme }) => theme.spacing[4]};
`

export const TitleSC = styled.h3`
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.regular}; 
  color: ${({ theme }) => theme.colors.grey[500]};
`

export const ContentSC = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white[50]};

  padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};

  border-radius: ${({ theme }) => theme.border.radius.regular};
`

export const DateSC = styled.span`
  position: absolute;
  top: 16px;
  right: 24px;
  

  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold}; 
  color: ${({ theme }) => theme.colors.grey[400]};
`

export const DescriptionSC = styled.p`
  margin-top: ${({ theme }) => theme.spacing[4]};
`

export const CustomIconCard = styled(IconCard)`
  width: 50px;
  height: 50px;

  svg {
    width: 24px;
    height: 24px;
  }
`

export const CustomIconTrash = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;

  color: ${({ theme }) => theme.colors.red[500]};
`


export const AmountVotesSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: ${({ theme }) => theme.spacing[7]};
`

export const VoteTextSC = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
  
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.medium};
`




