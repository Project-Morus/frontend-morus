import styled from "styled-components";

export const ContainerSC = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.white[50]};
  box-shadow: 0px 4px 16px 0px rgba(0, 74, 173, 0.15);

  padding: ${({ theme }) => theme.spacing[4]};

  border-radius: ${({ theme }) => theme.border.radius.large};
`

export const CardSC = styled.div``

export const ContentParagraphSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`

export const TitleSC = styled.h3`
font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h3};
color: ${({ theme }) => theme.colors.grey[400]};

margin-top: ${({ theme }) => theme.spacing[3]} ;
`

export const ParagraphSC = styled.p``