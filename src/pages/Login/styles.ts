import styled from 'styled-components'

export const WrapperSC = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 ${({ theme }) => theme.spacing[3]};
`

export const ContentSC = styled.div`
  max-width: 450px;
`

export const FormSC = styled.form`
  margin: ${({ theme }) => theme.spacing[10]} 0;
`

export const TitleSC = styled.h1`
  font-size: ${({ theme }) => theme.typography.HEADERS_SIZES.h1};
  color: ${({ theme }) => theme.colors.primary[800]};

  text-align: center;

  margin-bottom: ${({ theme }) => theme.spacing[7]};
`

export const TextSC = styled.p`
  color: ${({ theme }) => theme.colors.grey[300]};
`

export const ForgotPasswordSC = styled.span`
  display: block;

  text-align: right;
  text-decoration: underline;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.primary[500]};

  font-size: ${({ theme }) => theme.typography.TEXT_SIZES.small};
  font-weight: ${({ theme }) => theme.typography.FONT_WEIGHTS.bold};

  margin-top: ${({ theme }) => theme.spacing[10]};
`

export const WrapperButtonSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${({ theme }) => theme.spacing[7]};
`

export const WithoutAccountSC = styled.p`
  text-align: center;

  margin-top: ${({ theme }) => theme.spacing[15]};
`