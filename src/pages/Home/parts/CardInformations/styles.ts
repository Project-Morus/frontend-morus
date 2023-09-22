import styled from "styled-components";

export const ContainerSC = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
`

export const InformationSC = styled.div`
`


export const CardSC = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};

  background-color: ${({ theme }) => theme.colors.white[50]};
  box-shadow: 0px 4px 16px 0px rgba(0, 74, 173, 0.15);
  border-radius: ${({ theme }) => theme.border.radius.large};

  padding: ${({ theme }) => theme.spacing[4]};
`

export const TitleSC = styled.h3`
  color: ${({ theme }) => theme.colors.grey[400]};

  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};
`

export const ParagraphSC = styled.p`
  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.small};
  margin-top: ${({ theme }) => theme.spacing[4]};
`