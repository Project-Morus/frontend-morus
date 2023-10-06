import styled from "styled-components";

export const ContainerSC = styled.main`
  width: 600px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  gap: ${({ theme }) => theme.spacing[7]};

  border: 2px dashed ${({ theme }) => theme.colors.primary[300]};

  padding: ${({ theme }) => theme.spacing[10]};
`

export const WrapperTextsSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`


export const TitleSC = styled.h3`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h3};
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey[200]};
`


export const TextSC = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey[200]};
`
export const SizeTextSC = styled.strong`
  color: ${({ theme }) => theme.colors.orange[500]};
`

export const ArchiveTextSC = styled.strong`
  color: ${({ theme }) => theme.colors.primary[700]};
`